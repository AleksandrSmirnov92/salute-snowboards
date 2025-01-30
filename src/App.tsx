import './App.css';
import { Main } from './features/snowboards/pages/snowboard-viewer';

const App = () => {
  return (
    <div className=" bg-eerie-black overflow-hidden  min-w-[320px] h-screen  flex flex-col scroll-fix">
      <Main />
    </div>
  );
};

export default App;
// bg-[#0b1318]
// bg-eerie-black
