import Palindromo from './components/Palindromo';

export default function App() {
  return (
    <div>
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">Rafael Silva</h1>
          <h1 className="text-center font-semibold text-xl">
            Teste se uma palavra ou frase é um palíndromo
          </h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <Palindromo />
        </div>
      </main>
    </div>
  );
}
