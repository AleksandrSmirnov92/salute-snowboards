import './App.css';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

function App() {
  return (
    <div className="bg-#0b1318 min-h-[600px] overflow-x-hidden h-screen min-w-[430px] md:min-w-[855px] flex flex-col ">
      <Header />
      <Main />
    </div>
  );
}

export default App;
