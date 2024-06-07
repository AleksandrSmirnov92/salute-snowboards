import './App.css';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

function App() {
  return (
    <div className="bg-eerie-black grid grid-cols-1 grid-rows-[100px_1fr] h-screen">
      <Header />
      <Main />
    </div>
  );
}

export default App;
