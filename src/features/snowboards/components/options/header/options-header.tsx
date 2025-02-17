import { Button } from '@headlessui/react';
import { SnowboardIcon } from '../../../../../icons/snowboard-icon';
import { randomSnowboard } from '../../../../../store/feautures/formValues/form-values-slice';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks/hooks';
import { randomazer } from '../../../../../utils/random-snowboard';
import { RootState } from '../../../../../store/store';
import { generateHTMLForSave } from '../../../../../utils/generateHTMLForSave';
import html2canvas from 'html2canvas';

export const OptionsHeader = () => {
  const dispatch = useAppDispatch();
  const formValues = useAppSelector((state: RootState) => state.selectedValuesForm);

  const share = () => {
    // Генерация HTML-контента с использованием formValues
    const htmlContent = generateHTMLForSave(formValues);

    // Создаем временный элемент для захвата контента
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    document.body.appendChild(tempDiv);

    // Преобразование HTML-контента в изображение PNG
    htmlToPNG(tempDiv);

    // Удаляем временный элемент после обработки
    document.body.removeChild(tempDiv);
  };

  // Функция для конвертации HTML в PNG
  const htmlToPNG = (element: HTMLElement) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Получаем размеры HTML-элемента
      const width = element.offsetWidth;
      const height = element.offsetHeight;

      // Устанавливаем размеры канваса
      canvas.width = width;
      canvas.height = height;

      // Преобразуем HTML в изображение с помощью `html2canvas`
      // Эта библиотека позволяет рисовать DOM-элементы на холсте
      html2canvas(element).then((canvas) => {
        // Сохраняем результат как PNG
        const pngData = canvas.toDataURL('image/png');

        // Сохранение PNG-файла
        saveImage(pngData);
      });
    }
  };

  // Функция для сохранения изображения
  const saveImage = (pngData: string) => {
    const link = document.createElement('a');
    link.href = pngData;
    link.download = 'captured_image.png'; // Название файла для скачивания
    link.click(); // Имитируем клик для скачивания
  };

  return (
    <div className="flex flex-col mt-3  mb-7  ">
      <div className="flex justify-center md:justify-start">
        <div className="flex align-middle">
          <span className="text-warm-gray text-lg">Собрать рандомную доску ?</span>
          <Button onClick={() => dispatch(randomSnowboard(randomazer()))}>
            <SnowboardIcon />
          </Button>
        </div>
        <div>
          {/* <span className="text-warm-gray text-lg">Сохранить результат ?</span> */}
          <Button onClick={() => share()}>
            <span className="text-white">Нажать</span>
          </Button>
        </div>
      </div>
      <div className="bg-eerie-black h-12md:pl-4 flex justify-center md:justify-start items-center w-full">
        <span className="text-warm-gray text-lg">Детали доски</span>
      </div>
    </div>
  );
};
