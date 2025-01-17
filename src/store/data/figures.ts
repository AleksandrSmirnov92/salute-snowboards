import { IFigures } from '../../types/types';
import { colorPaletteFront as colorPalette } from './color-palette';

export const hasStraightLines: IFigures = {
  figureTop: {
    nameFigure: 'Верхний стрингер',
    colorLabel: 'Цвет верхнего стрингера',
    hasFigure: true,
    isActive: false,
    colorFigure: colorPalette[1],
  },
  figureMiddle: {
    nameFigure: '',
    colorLabel: '',
    hasFigure: false,
    isActive: false,
    colorFigure: colorPalette[5],
  },
  figureBottom: {
    nameFigure: 'Нижний стрингер',
    colorLabel: 'Цвет нижнего стрингера',
    hasFigure: true,
    isActive: false,
    colorFigure: colorPalette[1],
  },
};
export const hasStars: IFigures = {
  figureTop: {
    nameFigure: 'Звезды вверх',
    colorLabel: 'Цвет звезд вверх',
    hasFigure: true,
    isActive: false,
    colorFigure: colorPalette[11],
  },
  figureMiddle: {
    nameFigure: '',
    colorLabel: '',
    hasFigure: false,
    isActive: false,
    colorFigure: colorPalette[5],
  },
  figureBottom: {
    nameFigure: 'Звезды низ',
    colorLabel: 'Цвет звезд низ',
    hasFigure: true,
    isActive: false,
    colorFigure: colorPalette[11],
  },
};
export const hasStarsBack: IFigures = {
  figureTop: {
    nameFigure: '',
    colorLabel: '',
    hasFigure: false,
    isActive: false,
    colorFigure: colorPalette[11],
  },
  figureMiddle: {
    nameFigure: 'Вертикальные звезды',
    colorLabel: 'Цвет вертикальных звезд',
    hasFigure: true,
    isActive: false,
    colorFigure: colorPalette[5],
  },
  figureBottom: {
    nameFigure: '',
    colorLabel: '',
    hasFigure: false,
    isActive: false,
    colorFigure: colorPalette[11],
  },
};
export const hasLightning: IFigures = {
  figureTop: {
    nameFigure: 'Молния вверх',
    colorLabel: 'Цвет молнии вверх',
    hasFigure: true,
    isActive: false,
    colorFigure: colorPalette[9],
  },
  figureMiddle: {
    nameFigure: '',
    colorLabel: '',
    hasFigure: false,
    isActive: false,
    colorFigure: colorPalette[5],
  },
  figureBottom: {
    nameFigure: 'Молния низ',
    colorLabel: 'Цвет молнии низ',
    hasFigure: true,
    isActive: false,
    colorFigure: colorPalette[9],
  },
};
export const hasLightningBack: IFigures = {
  figureTop: {
    nameFigure: '',
    colorLabel: '',
    hasFigure: false,
    isActive: false,
    colorFigure: colorPalette[9],
  },
  figureMiddle: {
    nameFigure: 'Вертикальная молния',
    colorLabel: 'Цвет вертикальной молнии',
    hasFigure: true,
    isActive: false,
    colorFigure: colorPalette[5],
  },
  figureBottom: {
    nameFigure: '',
    colorLabel: '',
    hasFigure: false,
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
  figureMiddle: {
    nameFigure: '',
    colorLabel: '',
    hasFigure: false,
    isActive: false,
    colorFigure: colorPalette[5],
  },
  figureBottom: {
    nameFigure: '',
    colorLabel: '',
    hasFigure: false,
    isActive: false,
    colorFigure: colorPalette[1],
  },
};
export const hasStraightLinesBack: IFigures = {
  figureTop: {
    nameFigure: '',
    colorLabel: '',
    hasFigure: false,
    isActive: false,
    colorFigure: colorPalette[5],
  },
  figureMiddle: {
    nameFigure: 'Вертикальная линия',
    colorLabel: 'Цвет вертикальной линии',
    hasFigure: true,
    isActive: false,
    colorFigure: colorPalette[5],
  },
  figureBottom: {
    nameFigure: '',
    colorLabel: '',
    hasFigure: false,
    isActive: false,
    colorFigure: colorPalette[5],
  },
};
