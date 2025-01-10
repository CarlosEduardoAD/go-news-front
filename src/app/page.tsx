import Image from "next/image";
import SubscribeForm from "./SubscribeForm";
import Link from "next/link";

export default function Home() {
  const githubLink = "https://github.com/CarlosEduardoAD";
  const linkedinLink = "https://www.linkedin.com/in/carlos-eduardo-mariano-regis-990222219";
  const golangLink = "https://golang.org/";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  Sobre
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full space-y-8 p-8 bg-white rounded-lg shadow-lg text-center">
          <div className="mx-auto w-32 h-32 relative mb-4">
            <Image
              src="/images/gopher.png"
              alt="Gopher desenhando um tanquinho"
              fill
              className="object-contain"
            />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Mantenha-se Atualizado com Go News
          </h1>

          <p className="text-lg text-gray-600">
            Receba as últimas notícias, atualizações e insights do ecossistema
            Golang diretamente na sua caixa de entrada.
          </p>

          <SubscribeForm />

          <p className="text-sm text-gray-500">
            Toda segunda-feira, sem spam, cancele quando quiser.
          </p>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Sobre Go News
              </h3>
              <p className="text-sm text-gray-600">
                Trazendo o que há de mais recente e importante do mundo da
                programação Go.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Links Rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Saiba mais
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Conecte-se
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Go News. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
