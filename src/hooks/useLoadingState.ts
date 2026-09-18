'use client'

import { useState, useCallback } from 'react'

interface UseLoadingStateReturn {
  isLoading: boolean
  error: string | null
  startLoading: () => void
  stopLoading: () => void
  setError: (error: string | null) => void
  executeAsync: <T>(asyncFn: () => Promise<T>) => Promise<T | null>
}

const useLoadingState = (initialLoading = false): UseLoadingStateReturn => {
  const [isLoading, setIsLoading] = useState(initialLoading)
  const [error, setError] = useState<string | null>(null)

  const startLoading = useCallback(() => {
    setIsLoading(true)
    setError(null)
  }, [])

  const stopLoading = useCallback(() => {
    setIsLoading(false)
  }, [])

  const executeAsync = useCallback(async <T>(asyncFn: () => Promise<T>): Promise<T | null> => {
    startLoading()
    try {
      const result = await asyncFn()
      stopLoading()
      return result
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      setError(errorMessage)
      stopLoading()
      return null
    }
  }, [startLoading, stopLoading])

  return {
    isLoading,
    error,
    startLoading,
    stopLoading,
    setError,
    executeAsync
  }
}

export default useLoadingState