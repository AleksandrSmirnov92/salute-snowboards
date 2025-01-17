import { ModelsSnowboards } from '../types/types';

export const serializeSVGG = (svgString: string, model: string): string => {
  if (!svgString) {
    console.error('Передана пустая строка SVG');
    return '';
  }

  try {
    // Создаем DOMParser для обработки строки SVG
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, 'image/svg+xml');
    const clonedSvg = doc.querySelector('svg');

    if (!clonedSvg) {
      console.error('SVG не найден в переданной строке');
      return '';
    }

    // Настраиваем клон SVG
    clonedSvg.setAttribute('viewBox', '0 0 600 500'); // Обрезка области
    clonedSvg.setAttribute('width', '100'); // Установка ширины
    clonedSvg.setAttribute('height', '400'); // Установка высоты

    // Работаем с первым дочерним элементом
    const firstChild = clonedSvg.firstElementChild as SVGGraphicsElement | null;
    if (firstChild) {
      // Выбор модели для трансформации
      const transformMap: Record<string, string> = {
        [ModelsSnowboards.AMFish]: 'translate(0, -50)',
        [ModelsSnowboards.Pixie]: 'translate(0, -15)',
        [ModelsSnowboards.Underdog]: 'translate(0, -40)',
      };

      const transformValue = transformMap[model] || 'translate(0, -10)';
      firstChild.setAttribute('transform', transformValue);
    }

    // Сериализация SVG
    const svgData = new XMLSerializer().serializeToString(clonedSvg);

    // Минификация SVG
    const minifiedSVG = svgData
      .replace(/\s+/g, ' ') // Убираем лишние пробелы
      .replace(/>\s+</g, '><') // Убираем пробелы между элементами
      .replace(/<!--.*?-->/g, ''); // Убираем комментарии

    // Возвращаем Data URL
    return `data:image/svg+xml,${encodeURIComponent(minifiedSVG)}`;
  } catch (error) {
    console.error('Ошибка обработки SVG:', error);
    return '';
  }
};
