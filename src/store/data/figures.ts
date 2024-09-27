import { IFigures } from '../contracts';
import { colorPalette } from './colorPalette';

export const hasStraightLines: IFigures = {
  figureTop: {
    nameFigure: 'Straight line top',
    colorLabel: 'Color line top',
    hasFigure: true,
    isActive: false,
    colorFigure: colorPalette[1],
  },
  figureBottom: {
    nameFigure: 'Straight line bottom',
    colorLabel: 'Color line bottom',
    hasFigure: true,
    isActive: false,
    colorFigure: colorPalette[1],
  },
};
export const hasStars: IFigures = {
  figureTop: {
    nameFigure: 'Stars top',
    colorLabel: 'Color stars top',
    hasFigure: true,
    isActive: false,
    colorFigure: colorPalette[11],
  },
  figureBottom: {
    nameFigure: 'Stars bottom',
    colorLabel: 'Color stars bottom',
    hasFigure: true,
    isActive: false,
    colorFigure: colorPalette[11],
  },
};
export const hasLightning: IFigures = {
  figureTop: {
    nameFigure: 'Lightning top',
    colorLabel: 'Color lightning top',
    hasFigure: true,
    isActive: false,
    colorFigure: colorPalette[9],
  },
  figureBottom: {
    nameFigure: 'Lightning bottom',
    colorLabel: 'Color lightning bottom',
    hasFigure: true,
    isActive: false,
    colorFigure: colorPalette[9],
  },
};
export const hasNotFigure: IFigures = {
  figureTop: {
    nameFigure: '',
    colorLabel: '',
    hasFigure: false,
    isActive: false,
    colorFigure: colorPalette[1],
  },
  figureBottom: {
    nameFigure: '',
    colorLabel: '',
    hasFigure: true,
    isActive: false,
    colorFigure: colorPalette[1],
  },
};
