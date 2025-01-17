import { IModelSize, ILegent } from '../../../types/types';
import { colorPaletteFront } from '../color-palette';

export const positionsUnderdog: ILegent[] = [
  {
    id: 1,
    pos: 'Not selected',
    title: 'Не выбранно',
    colorLegend: {
      top: {
        name: 'Цвет вверх',
        positionColor: 'Color legend top',
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
  {
    id: 2,
    pos: 'Version1',
    title: 'Вариант 1',
    colorLegend: {
      top: {
        name: 'Цвет вверх',
        positionColor: 'Color legend top',
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

export const positionsUnderdogBack: ILegent[] = [
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

export const boardLengthUnderdog: IModelSize[] = [
  { id: 1, title: '148-cm', size: 148 },
  { id: 2, title: '151-cm', size: 151 },
  { id: 3, title: '155-cm', size: 155 },
  { id: 4, title: '155w-cm', size: 155 },
  { id: 5, title: '158-cm', size: 158 },
  { id: 6, title: '158w-cm', size: 158 },
];
