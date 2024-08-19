import './App.css';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

function App() {
  return (
    <div className="bg-#0b1318 min-w-[430px] flex flex-col ">
      <Header />
      <Main />
    </div>
  );
}

export default App;
