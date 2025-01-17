import { ILegent, IModelSize } from '../../../types/types';
import { colorPaletteFront } from '../color-palette';

export const positionsUnit: ILegent[] = [
  {
    id: 1,
    pos: 'Not selected',
    title: 'Не выбранно',
    colorLegend: {
      top: {
        name: 'Цвет вверх',
        positionColor: 'Color legend Top',
        colorPallete: colorPaletteFront[9],
      },
      middle: {
        name: 'Цвет по центру',
        positionColor: 'Color legend middle',
        colorPallete: colorPaletteFront[9],
      },
      bottom: {
        name: 'Цвет низа',
        positionColor: 'Color legend Bottom',
        colorPallete: colorPaletteFront[9],
      },
    },
  },
  {
    id: 2,
    pos: 'Version1',
    title: 'Вариант 1',
    colorLegend: {
      top: {
        name: 'Цвет вверх',
        positionColor: 'Color legend Top',
        colorPallete: colorPaletteFront[9],
      },
      middle: {
        name: 'Цвет по центру',
        positionColor: 'Color legend middle',
        colorPallete: colorPaletteFront[9],
      },
      bottom: {
        name: 'Цвет низа',
        positionColor: 'Color legend Bottom',
        colorPallete: colorPaletteFront[9],
      },
    },
  },
];
export const positionsUnitBack: ILegent[] = [
  {
    id: 1,
    pos: 'Not selected',
    title: 'Не выбранно',
    colorLegend: {
      top: {
        name: 'Цвет вверх',
        positionColor: 'Color legend Top',
        colorPallete: colorPaletteFront[1],
      },
      bottom: {
        name: 'Цвет низа',
        positionColor: 'Color legend Bottom',
        colorPallete: colorPaletteFront[1],
      },
    },
  },
  {
    id: 2,
    pos: 'Version1',
    title: 'Вариант 1',
    colorLegend: {
      top: {
        name: 'Цвет вверх',
        positionColor: 'Color legend Top',
        colorPallete: colorPaletteFront[1],
      },
      bottom: {
        name: 'Цвет низ',
        positionColor: 'Color legend Bottom',
        colorPallete: colorPaletteFront[1],
      },
    },
  },
];
export const boardLengthUnit: IModelSize[] = [
  { id: 1, title: '125-cm', size: 125 },
  { id: 2, title: '130-cm', size: 130 },
  { id: 3, title: '135-cm', size: 135 },
  { id: 4, title: '140-cm', size: 140 },
];
