/**
 * React hook for real-time blockchain data updates
 */

import { useState, useEffect, useCallback, useRef } from 'react';

interface UseRealtimeDataOptions {
  refreshInterval?: number; // in milliseconds
  enabled?: boolean;
  onError?: (error: Error) => void;
}

interface UseRealtimeDataReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  refresh: () => Promise<void>;
}

export function useRealtimeData<T>(
  fetchFn: () => Promise<T>,
  options: UseRealtimeDataOptions = {}
): UseRealtimeDataReturn<T> {
  const {
    refreshInterval = 30000, // 30 seconds default
    enabled = true,
    onError,
  } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const fetchFnRef = useRef(fetchFn);

  // Update fetchFn ref when it changes
  useEffect(() => {
    fetchFnRef.current = fetchFn;
  }, [fetchFn]);

  const refresh = useCallback(async () => {
    if (!enabled) return;

    setLoading(true);
    setError(null);

    try {
      const result = await fetchFnRef.current();
      setData(result);
      setLastUpdated(new Date());
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      onError?.(err instanceof Error ? err : new Error(errorMessage));
    } finally {
      setLoading(false);
    }
  }, [enabled, onError]);

  // Initial fetch and setup polling
  useEffect(() => {
    if (!enabled) {
      // Clear interval if disabled
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Initial fetch
    refresh();

    // Setup polling
    if (refreshInterval > 0) {
      intervalRef.current = setInterval(refresh, refreshInterval);
    }

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [enabled, refreshInterval, refresh]);

  return {
    data,
    loading,
    error,
    lastUpdated,
    refresh,
  };
}

/**
 * Hook for fetching network statistics with real-time updates
 */
export function useNetworkStats(options?: UseRealtimeDataOptions) {
  return useRealtimeData(
    async () => {
      const response = await fetch('/api/stats');
      if (!response.ok) {
        throw new Error('Failed to fetch network stats');
      }
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.error || 'API error');
      }
      return result.data;
    },
    { refreshInterval: 15000, ...options } // Update every 15 seconds
  );
}

/**
 * Hook for fetching latest blocks with real-time updates
 */
export function useLatestBlocks(limit = 10, options?: UseRealtimeDataOptions) {
  return useRealtimeData(
    async () => {
      const response = await fetch(`/api/blocks?limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch latest blocks');
      }
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.error || 'API error');
      }
      return result.data.blocks;
    },
    { refreshInterval: 20000, ...options } // Update every 20 seconds
  );
}

/**
 * Hook for fetching recent transactions with real-time updates
 */
export function useRecentTransactions(limit = 10, options?: UseRealtimeDataOptions) {
  return useRealtimeData(
    async () => {
      const response = await fetch(`/api/transactions?limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch recent transactions');
      }
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.error || 'API error');
      }
      return result.data.transactions;
    },
    { refreshInterval: 25000, ...options } // Update every 25 seconds
  );
}