import { ModelsSnowboards } from '../store/contracts';

export const serializeSVG = (svgRef: any, model: string): string => {
  let dataUrl = '';
  // Проверяем, что реф указывает на DOM-узел
  if (svgRef.current instanceof Node) {
    const originalSvg = svgRef.current;
    const clonedSvg = originalSvg.cloneNode(true) as SVGSVGElement;

    // Вносим изменения в клон (например, обрезка через viewBox)
    clonedSvg.setAttribute('viewBox', '0 0 600 500'); // Обрезаем до области 100x100
    clonedSvg.setAttribute('width', '100'); // Задаем ширину
    clonedSvg.setAttribute('height', '400'); // Задаем высоту

    const firstChild = clonedSvg.firstElementChild as SVGGraphicsElement | null;
    if (firstChild) {
      // Добавляем или изменяем transform
      // const currentTransform = firstChild.getAttribute('transform') || '';
      switch (model) {
        case ModelsSnowboards.AMFish: {
          firstChild.setAttribute('transform', `translate(0, -50)`);
          break;
        }
        case ModelsSnowboards.Underdog: {
          firstChild.setAttribute('transform', `translate(0, -40)`);
          break;
        }
        default: {
          firstChild.setAttribute('transform', `translate(0, -10)`);
        }
      }
    }

    const svgData = new XMLSerializer().serializeToString(clonedSvg);
    // Минификация SVG
    const minifiedSVG = svgData
      .replace(/\s+/g, ' ') // Убираем лишние пробелы
      .replace(/>\s+</g, '><') // Убираем пробелы между элементами
      .replace(/<!--.*?-->/g, ''); // Убираем комментарии

    // Кодируем через encodeURIComponent
    dataUrl = `data:image/svg+xml,${encodeURIComponent(minifiedSVG)}`;

    // dataUrl = `data:image/svg+xml;base64,${btoa(svgData)}`;
  } else {
    console.error('SVG элемент не найден или не является узлом DOM');
  }
  return dataUrl;
};
