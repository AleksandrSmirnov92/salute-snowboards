import { IModelSize, ILegent } from '../../../types/types';
import { colorPaletteFront } from '../color-palette';

export const positionsPixieFront: ILegent[] = [
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
      middle: {
        name: 'Цвет по центру',
        positionColor: 'Color legend middle',
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
      middle: {
        name: 'Цвет по центру',
        positionColor: 'Color legend middle',
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

export const positionsPixieBack: ILegent[] = [
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

export const boardLengthPixie: IModelSize[] = [
  { id: 1, title: '140-cm', size: 140 },
  { id: 2, title: '142-cm', size: 142 },
  { id: 3, title: '145-cm', size: 145 },
  { id: 4, title: '147-cm', size: 147 },
  { id: 5, title: '149-cm', size: 149 },
];
