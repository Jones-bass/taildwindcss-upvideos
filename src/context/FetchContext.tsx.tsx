'use client'

import { api } from '@/service/api'

import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

export interface ListProps {
  autor: string
  like: string
  percentage: string
  description: string
}

interface SessionContextType {
  sessionShow: ListProps[]
  loading: boolean
  fetchSession: (query: string) => Promise<void>
}

interface SessionProviderProps {
  children: ReactNode
}

export const FetchContext = createContext({} as SessionContextType)

export function FetchProvider({ children }: SessionProviderProps) {
  const [sessionShow, setSessionShow] = useState<ListProps[]>([])

  const [loading, setLoading] = useState(true)

  const fetchSession = useCallback(async (query?: string) => {
    setLoading(true)

    try {
      const response = await api.get('/listShowInfo')

      let filteredData = response.data

      // Realize a filtragem aqui com base no parâmetro 'query'
      if (query) {
        filteredData = filteredData.filter((item: ListProps) =>
          item.autor.toLowerCase().includes(query.toLowerCase()),
        )
      }

      setSessionShow(filteredData)
    } catch (error) {
      alert('Erro ao exibir a sessão de produtos, tente novamente mais tarde.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSession()
  }, [fetchSession])

  return (
    <FetchContext.Provider
      value={{
        sessionShow,
        fetchSession,
        loading,
      }}
    >
      {children}
    </FetchContext.Provider>
  )
}
