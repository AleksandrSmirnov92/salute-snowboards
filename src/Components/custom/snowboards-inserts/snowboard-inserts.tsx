interface ICircleParams {
  color: string;
  translateCircleX: number;
  translateCircleY: number;
  translateCircle2Y: number;
  numberOfRows: number;
  numberOfColumns: number;
  viewBoxWidth: number;
  viewBoxHeight: number;
  bcfr: boolean;
}
export const SnowboardInserts = (data: ICircleParams) => {
  const {
    color,
    translateCircleX,
    translateCircleY,
    translateCircle2Y,
    numberOfRows,
    numberOfColumns,
    viewBoxWidth,
    viewBoxHeight,
    bcfr,
  } = data;

  const scaleCircle = 0.4;
  const strokeWidthCircle = 0.5;
  //Options Circle
  const circleRadius = 3;
  const distanceBetweenRowsX = circleRadius + 20; // радиус круга плюс расстояние между кругами
  const distanceBetweenRowsY = circleRadius + 12;
  // Начальные координаты для кругов
  const circleOneStartPositionX = (viewBoxWidth - (numberOfColumns - 1) * distanceBetweenRowsX) / 2;
  const circleOneStartPositionY = (viewBoxHeight - (numberOfRows - 1) * distanceBetweenRowsY) / 2;
  const circleTwoStartPositionX = (viewBoxWidth - (numberOfColumns - 1) * distanceBetweenRowsX) / 2;
  const circleTwoStartPositionY = (viewBoxHeight - (numberOfRows - 1) * distanceBetweenRowsY) / 2;
  const circles = [];
  const circles2 = [];
  // Генерация позиций кругов
  if (bcfr) {
    for (let row = 0; row <= numberOfRows; row++) {
      for (let col = 0; col < numberOfColumns; col++) {
        let circle1cx: number;
        let circle1cy: number;
        let circle2cx: number;
        let circle2cy: number;
        if (row === numberOfRows) {
          circle1cx = circleOneStartPositionX + col * distanceBetweenRowsX;
          circle1cy = circleOneStartPositionY + row * distanceBetweenRowsY + 10;
          circle2cx = circleTwoStartPositionX + col * distanceBetweenRowsX;
          circle2cy = circleTwoStartPositionY + row * distanceBetweenRowsY + 10;
        } else {
          circle1cx = circleOneStartPositionX + col * distanceBetweenRowsX;
          circle1cy = circleOneStartPositionY + row * distanceBetweenRowsY;
          circle2cx = circleTwoStartPositionX + col * distanceBetweenRowsX;
          circle2cy = circleTwoStartPositionY + row * distanceBetweenRowsY;
        }
        circles.push(
          <circle
            key={`circle-${row}-${col}-1`}
            cx={circle1cx}
            cy={circle1cy}
            r={circleRadius}
            transform={`translate(${translateCircleX}, ${translateCircleY}) scale(${scaleCircle})`}
            fill="none"
            stroke={color} // Белый цвет для кругов
            strokeWidth={strokeWidthCircle}
          />,
        );
        circles2.push(
          <circle
            key={`circle-${row}-${col}-2`}
            cx={circle2cx}
            cy={circle2cy}
            r={circleRadius}
            transform={`translate(${translateCircleX}, ${translateCircle2Y}) scale(${scaleCircle})`}
            fill={'none'}
            stroke={color} // Белый цвет для кругов
            strokeWidth={strokeWidthCircle}
          />,
        );
      }
    }
  } else {
    for (let row = 0; row < numberOfRows; row++) {
      for (let col = 0; col < numberOfColumns; col++) {
        const circle1cx = circleOneStartPositionX + col * distanceBetweenRowsX;
        const circle1cy = circleOneStartPositionY + row * distanceBetweenRowsY;
        const circle2cx = circleTwoStartPositionX + col * distanceBetweenRowsX;
        const circle2cy = circleTwoStartPositionY + row * distanceBetweenRowsY;
        circles.push(
          <circle
            key={`circle-${row}-${col}-1`}
            cx={circle1cx}
            cy={circle1cy}
            r={circleRadius}
            transform={`translate(${translateCircleX}, ${translateCircleY}) scale(${scaleCircle})`}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidthCircle}
          />,
        );
        circles2.push(
          <circle
            key={`circle-${row}-${col}-2`}
            cx={circle2cx}
            cy={circle2cy}
            r={circleRadius}
            transform={`translate(${translateCircleX}, ${translateCircle2Y}) scale(${scaleCircle})`}
            fill={'none'}
            stroke={color}
            strokeWidth={strokeWidthCircle}
          />,
        );
      }
    }
  }
  return (
    <>
      {circles}
      {circles2}
    </>
  );
};
