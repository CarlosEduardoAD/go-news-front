import Image from "next/image";
import Link from "next/link";

export default function About() {
  const golangLink = "https://golang.org/";
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href={golangLink} target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/blue_logo.png"
                alt="Logo Go News"
                width={48}
                height={48}
                className="object-contain"
              />
            </Link>
            <span className="ml-2 text-xl font-bold text-gray-900">News</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Sobre
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mx-auto w-32 h-32 relative mb-8">
              <Image
                src="/images/gopher-gaming.png" // Adicione uma imagem ilustrativa aqui
                alt="Sobre Go News"
                fill
                className="object-contain"
              />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Sobre o Go News
            </h1>

            <div className="space-y-6 text-gray-600">
              <p>
                O Go News é um projeto independente que nasceu da paixão pela
                linguagem Go e da vontade de manter a comunidade brasileira
                informada sobre as últimas novidades, atualizações e melhores
                práticas do ecossistema Golang.
              </p>

              <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50">
                <p className="text-indigo-700 font-medium">
                  Minha missão é simplificar o acesso à informação de qualidade
                  sobre Go, conectando desenvolvedores e promovendo o
                  crescimento da comunidade no Brasil.
                </p>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 pt-4">
                O que eu vou receber no meu e-mail?
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Notícias atualizadas do mundo Go</li>
                <li>Análises de novas ferramentas e bibliotecas</li>
                <li>Dicas de melhores práticas e padrões</li>
                <li>Cobertura de eventos e conferências</li>
                <li>Entrevistas com desenvolvedores experientes</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 pt-4">
                Quem Sou Eu?
              </h2>
              <p>
                Sou Carlos Eduardo, desenvolvedor fullstack e entusiasta de Go.
                Eu criei o Go News para compartilhar conhecimento e ajudar a
                comunidade brasileira a se manter atualizada sobre a linguagem
                Go. Além de ser uma forma de eu aprofundar meus conhecimentos
                sobre a linguagem e a comunidade.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Comece a receber notícias já!
            </h2>
            <p className="text-gray-600 mb-6">
              Fique por dentro das últimas novidades e atualizações do mundo Go.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Inscreva-se na newsletter
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Go News. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
