import { useEffect, useState } from 'react';
import './App.css';
import { Main } from './features/snowboards/pages/snowboard-viewer';

const App = () => {
  const [accessAllowed, setAccessAllowed] = useState(false);

  useEffect(() => {
    if (document.referrer.indexOf('tilda.cc') !== -1) {
      setAccessAllowed(true); // Разрешаем доступ
    }
  }, []);

  if (!accessAllowed) {
    return <h1 className="text-center text-red-500 mt-20 text-2xl">Доступ запрещен</h1>;
  }
  return (
    <div className=" bg-eerie-black overflow-hidden  min-w-[320px] h-screen  flex flex-col scroll-fix">
      <Main />
    </div>
  );
};

export default App;
// bg-[#0b1318]
// bg-eerie-black
