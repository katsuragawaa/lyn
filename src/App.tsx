import { Calendar } from './components/Calendar';
import { GoogleLogin } from './components/GoogleLogin';
import { SaveDate } from './components/SaveDate';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center">
        <div>
          <h1 className="my-8 text-6xl font-black leading-normal">
            Aniversário da <span className="text-purple-600">Lyn</span>
          </h1>

          <GoogleLogin />

          <div className="my-12 flex flex-col">
            <SaveDate />
            <Calendar />
          </div>
        </div>

        <div>Gerador de sugestões de presentes</div>
      </div>
    </div>
  );
}

export default App;
