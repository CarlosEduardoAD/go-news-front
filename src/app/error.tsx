'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <div className="mx-auto w-32 h-32 relative mb-4">
            <Image
              src="/images/gopher_error.png"
              alt="Erro"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900">
            Ops! Algo deu errado
          </h2>

          <p className="mt-4 text-gray-600">
            Desculpe pelo inconveniente. Ocorreu um erro inesperado.
          </p>

          <div className="mt-8 space-y-4">
            <button
              onClick={reset}
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Tentar novamente
            </button>

            <Link
              href="/"
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 