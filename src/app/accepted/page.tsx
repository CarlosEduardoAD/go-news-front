import Image from 'next/image'
import Link from 'next/link'

export default function EmailConfirmed() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <div className="mx-auto w-48 h-48 relative mb-4">
              <Image
                src="/images/gopher-email.png"
                alt="Email confirmado"
                fill
                className="object-contain"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900">
              E-mail confirmado com sucesso!
            </h2>
            
            <p className="mt-4 text-gray-600">
              Parabéns! Seu endereço de e-mail foi verificado com sucesso.
              Você começará a receber nossas newsletters toda segunda-feira.
            </p>

            <div className="mt-8">
              <Link 
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Voltar para a página inicial
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Go News. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}