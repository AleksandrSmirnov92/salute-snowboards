export const darkenColor = (hex: string, amount: number) => {
  let color = parseInt(hex.slice(1), 16);
  let r = Math.max((color >> 16) - amount, 0);
  let g = Math.max(((color >> 8) & 0x00ff) - amount, 0);
  let b = Math.max((color & 0x0000ff) - amount, 0);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
};
// Функция для осветления или затемнения цвета
export function adjustColorBrightness(color: string, factor: number) {
  let r = parseInt(color.substring(1, 3), 16);
  let g = parseInt(color.substring(3, 5), 16);
  let b = parseInt(color.substring(5, 7), 16);

  r = Math.min(255, Math.max(0, r * factor));
  g = Math.min(255, Math.max(0, g * factor));
  b = Math.min(255, Math.max(0, b * factor));

  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}
export function getLuminance(color: string) {
  let r = parseInt(color.substring(1, 3), 16);
  let g = parseInt(color.substring(3, 5), 16);
  let b = parseInt(color.substring(5, 7), 16);

  // Применяем формулу для расчета яркости
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
export const ff = (colorShapeBack: string, s: number, s2: number, s3: number) => {
  let luminance = getLuminance(colorShapeBack);
  if (luminance > 20 && luminance < 26) {
    return adjustColorBrightness(colorShapeBack, s3);
  }
  if (luminance < 60) {
    return adjustColorBrightness(colorShapeBack, s);
  }
  if (luminance > 80 && luminance < 84) {
    return adjustColorBrightness(colorShapeBack, s2);
  }

  return adjustColorBrightness(colorShapeBack, 0.8);
};
