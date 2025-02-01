import { useCallback, useEffect, useRef, useState } from 'react';
import { Options } from '../components/options/options';
import { Button } from '@headlessui/react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { BoardDisplay } from '../components/board-display/board-display';

export const Main = () => {
  const transformRef = useRef<any>(null);
  const [firstZoomDone, setFirstZoomDone] = useState<Boolean>(false);
  const [currentScale, setCurrentScale] = useState(0);
  const [isBack, setIsBack] = useState(true);
  const [activeBack, setActiveBack] = useState(false);
  const [queue, setQueue] = useState(0); // Очередь анимаций

  const isAnimating = useRef(false); // Флаг активности анимации

  const startAnimation = () => {
    if (queue > 0 && !isAnimating.current) {
      isAnimating.current = true; // Блокируем запуск новой анимации
      setActiveBack(true);

      setTimeout(() => {
        setIsBack((prev) => !prev);
        setActiveBack(false);
        isAnimating.current = false; // Разблокируем для следующей анимации
        setQueue((prev) => prev - 1); // Уменьшаем очередь
      }, 565);
    }
  };
  useEffect(() => {
    if (queue > 0) {
      startAnimation(); // Запускаем анимацию, если в очереди что-то есть
    }
  }, [queue]);

  const handleRotate = () => {
    setQueue((prev) => prev + 1); // Добавляем в очередь
  };

  const handleZoomIn = useCallback(() => {
    if (transformRef.current) {
      transformRef.current.zoomIn();
      setFirstZoomDone(true);
    }
  }, []);

  const handleZoomOut = () => {
    if (transformRef.current) {
      transformRef.current.zoomOut();
      if (currentScale === 1) {
        setFirstZoomDone(false);
        transformRef.current.resetTransform(); // Сброс масштаба и положения
      }
    }
  };

  return (
    <div className="flex justify-between overflow-hidden">
      <div className="flex w-[66%] md:w-[50%]  h-screen justify-center mb-2 relative">
        <div className="w-full h-full  min-w-[180px] overflow-hidden flex align-center justify-center ">
          <TransformWrapper
            ref={transformRef}
            limitToBounds={true} // Отключить перемещение до первого зума
            disabled={!firstZoomDone}
            onTransformed={(t) => setCurrentScale(Math.floor(t.state.scale))}
            maxScale={4}
            minScale={1}
          >
            <TransformComponent wrapperStyle={{ height: '100%', overflow: 'hidden' }} contentStyle={{ height: '100%' }}>
              <BoardDisplay activeBack={activeBack} isBack={isBack} />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <div className="absolute flex flex-col transform -translate-y-1/2  text-warm-gray top-1/2 right-2">
          <Button
            className="border border-warm-gray mb-2"
            onClick={() => {
              handleZoomIn();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 transition"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </Button>
          <Button
            className="border border-warm-gray mb-2"
            onClick={() => {
              handleZoomOut();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </Button>

          <Button
            className="border border-warm-gray "
            onClick={() => {
              handleRotate();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M12 2a10 10 0 1 0 10 10h-2a8 8 0 1 1-8-8V0l4 4-4 4V4a8 8 0 1 1 8 8h2a10 10 0 1 0-10-10z" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="relative  w-full md:w-[50%] p-3 h-screen border-l-[1px] border-solid border-warm-gray overflow-hidden">
        <Options setIsBack={setIsBack} />
      </div>
    </div>
  );
};
