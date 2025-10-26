/**
 * React hook for blockchain search functionality
 */

import { useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface SearchState {
  query: string;
  loading: boolean;
  error: string | null;
  results: any | null;
  history: string[];
}

export function useSearch() {
  const router = useRouter();
  const [state, setState] = useState<SearchState>({
    query: '',
    loading: false,
    error: null,
    results: null,
    history: [],
  });

  const abortControllerRef = useRef<AbortController | null>(null);

  const setQuery = useCallback((query: string) => {
    setState(prev => ({ ...prev, query, error: null }));
  }, []);

  const addToHistory = useCallback((query: string) => {
    setState(prev => ({
      ...prev,
      history: [query, ...prev.history.filter(h => h !== query)].slice(0, 5),
    }));
  }, []);

  const clearHistory = useCallback(() => {
    setState(prev => ({ ...prev, history: [] }));
  }, []);

  const search = useCallback(async (query?: string) => {
    const searchQuery = query || state.query;

    if (!searchQuery.trim()) {
      setState(prev => ({ ...prev, error: 'Search query is required' }));
      return;
    }

    // Cancel previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller
    abortControllerRef.current = new AbortController();

    setState(prev => ({
      ...prev,
      loading: true,
      error: null,
      results: null,
      query: searchQuery
    }));

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`, {
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error('Search request failed');
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || 'Search failed');
      }

      const searchResult = result.data;

      // Add to search history
      addToHistory(searchQuery);

      // Navigate based on search result type
      if (searchResult.type === 'block' && searchResult.data) {
        router.push(`/block/${searchResult.data.height}`);
      } else if (searchResult.type === 'transaction' && searchResult.data) {
        router.push(`/tx/${searchResult.data.txid}`);
      } else if (searchResult.type === 'address' && searchResult.data) {
        router.push(`/address/${searchResult.data.address}`);
      } else {
        // Unknown or no results
        setState(prev => ({
          ...prev,
          loading: false,
          results: searchResult,
          error: searchResult.error || 'No results found'
        }));
        return;
      }

      setState(prev => ({
        ...prev,
        loading: false,
        results: searchResult
      }));

    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        // Request was aborted, don't update state
        return;
      }

      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Search failed'
      }));
    }
  }, [state.query, router, addToHistory]);

  const quickSearch = useCallback((query: string) => {
    setQuery(query);
    search(query);
  }, [setQuery, search]);

  return {
    query: state.query,
    loading: state.loading,
    error: state.error,
    results: state.results,
    history: state.history,
    setQuery,
    search,
    quickSearch,
    clearHistory,
  };
}

/**
 * Hook for getting search suggestions
 */
export function useSearchSuggestions() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const getSuggestions = useCallback(async (query: string) => {
    if (!query.trim() || query.length < 3) {
      setSuggestions([]);
      return;
    }

    setLoading(true);

    try {
      // For now, provide basic suggestions based on query pattern
      const suggestions: string[] = [];

      // Block height suggestions
      if (/^\d+$/.test(query)) {
        const num = parseInt(query);
        suggestions.push(`Block #${num}`);

        // Suggest nearby block heights
        if (num > 0) {
          suggestions.push(`Block #${num - 1}`);
        }
        suggestions.push(`Block #${num + 1}`);
      }

      // Hash suggestions (provide examples)
      if (/^[0-9a-fA-F]+$/.test(query) && query.length > 10) {
        if (query.length < 64) {
          suggestions.push('Complete transaction hash');
          suggestions.push('Complete block hash');
        }
      }

      // Address suggestions (provide examples)
      if (/^[A-Za-z0-9]+$/.test(query) && query.length > 20 && query.length < 40) {
        suggestions.push('AMMOcoin address');
      }

      setSuggestions(suggestions.slice(0, 5));
    } catch (error) {
      console.error('Failed to get search suggestions:', error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    suggestions,
    loading,
    getSuggestions,
  };
}