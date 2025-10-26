"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Loader2, Clock, X } from "lucide-react";
import { useSearch, useSearchSuggestions } from "@/hooks/useSearch";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
  showSuggestions?: boolean;
}

export function SearchBar({
  placeholder = "Search blocks, transactions, addresses...",
  className = "",
  onSearch,
  showSuggestions = true
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    query,
    loading,
    error,
    history,
    setQuery,
    search,
    quickSearch,
    clearHistory
  } = useSearch();

  const {
    suggestions,
    loading: suggestionsLoading,
    getSuggestions
  } = useSearchSuggestions();

  // Update suggestions when query changes
  useEffect(() => {
    if (showSuggestions && query && isFocused) {
      getSuggestions(query);
    }
  }, [query, showSuggestions, isFocused, getSuggestions]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    setShowDropdown(false);
    setIsFocused(false);

    await search();
    onSearch?.(query);
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (showSuggestions && (history.length > 0 || suggestions.length > 0)) {
      setShowDropdown(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (showSuggestions && value.trim()) {
      setShowDropdown(true);
    } else if (!value.trim()) {
      setShowDropdown(history.length > 0);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowDropdown(false);
    setIsFocused(false);
    quickSearch(suggestion);
    onSearch?.(suggestion);
  };

  const handleHistoryClick = (historyItem: string) => {
    setQuery(historyItem);
    setShowDropdown(false);
    setIsFocused(false);
    quickSearch(historyItem);
    onSearch?.(historyItem);
  };

  const clearInput = () => {
    setQuery("");
    setShowDropdown(false);
    inputRef.current?.focus();
  };

  const showHistorySection = history.length > 0 && (!query.trim() || isFocused);
  const showSuggestionsSection = suggestions.length > 0 && query.trim() && isFocused;

  return (
    <div className={`relative w-full ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {loading ? (
              <Loader2 className="h-5 w-5 text-ammocoin-gray-400 animate-spin" />
            ) : (
              <Search className="h-5 w-5 text-ammocoin-gray-400" />
            )}
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={handleFocus}
            placeholder={placeholder}
            className={`search-input w-full pl-12 ${query ? 'pr-12' : 'pr-4'} ${error ? 'border-red-500' : ''}`}
            disabled={loading}
          />
          {query && (
            <button
              type="button"
              onClick={clearInput}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-ammocoin-gray-400 hover:text-ammocoin-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>

      {/* Error Message */}
      {error && (
        <div className="absolute top-full left-0 right-0 mt-1 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-ammocoin text-red-400 text-sm z-50">
          {error}
        </div>
      )}

      {/* Search Dropdown */}
      {showDropdown && (showHistorySection || showSuggestionsSection) && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-2 glass-card border-ammocoin-border max-h-64 overflow-y-auto z-50"
        >
          {/* Search History */}
          {showHistorySection && (
            <div className="p-2">
              <div className="flex items-center justify-between px-2 py-1 mb-2">
                <span className="text-xs text-ammocoin-gray-400 font-semibold">RECENT SEARCHES</span>
                <button
                  onClick={clearHistory}
                  className="text-xs text-ammocoin-gray-400 hover:text-ammocoin-primary transition-colors"
                >
                  Clear
                </button>
              </div>
              {history.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleHistoryClick(item)}
                  className="w-full flex items-center px-2 py-2 text-left hover:bg-ammocoin-surface rounded-ammocoin transition-colors group"
                >
                  <Clock className="h-4 w-4 text-ammocoin-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-ammocoin-white group-hover:text-ammocoin-primary truncate">
                    {item}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Divider */}
          {showHistorySection && showSuggestionsSection && (
            <div className="border-t border-ammocoin-border" />
          )}

          {/* Search Suggestions */}
          {showSuggestionsSection && (
            <div className="p-2">
              <div className="px-2 py-1 mb-2">
                <span className="text-xs text-ammocoin-gray-400 font-semibold">SUGGESTIONS</span>
              </div>
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full flex items-center px-2 py-2 text-left hover:bg-ammocoin-surface rounded-ammocoin transition-colors group"
                >
                  <Search className="h-4 w-4 text-ammocoin-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-ammocoin-white group-hover:text-ammocoin-primary truncate">
                    {suggestion}
                  </span>
                </button>
              ))}
              {suggestionsLoading && (
                <div className="flex items-center px-2 py-2">
                  <Loader2 className="h-4 w-4 text-ammocoin-gray-400 mr-3 animate-spin" />
                  <span className="text-ammocoin-gray-400 text-sm">Loading suggestions...</span>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Search tips for new users */}
      {query.length > 0 && query.length < 3 && !showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-2 p-3 glass-card text-sm text-ammocoin-gray-400 z-40">
          <div className="space-y-1">
            <div>• Block height: <span className="text-ammocoin-primary">123456</span></div>
            <div>• Transaction ID: <span className="text-ammocoin-primary">abc123...</span></div>
            <div>• Address: <span className="text-ammocoin-primary">A1B2C3...</span></div>
          </div>
        </div>
      )}
    </div>
  );
}