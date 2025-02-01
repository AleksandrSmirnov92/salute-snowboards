import { ILegent, IModelSize } from '../../../types/types';
import { colorPaletteFront } from '../color-palette';

export const positionsAmFishBack: ILegent[] = [
  // {
  //   id: 1,
  //   pos: 'Not selected',
  //   title: 'Не выбранно',
  //   colorLegend: {
  //     top: {
  //       name: 'Цвет вверх',
  //       positionColor: 'Color legend Top',
  //       colorPallete: colorPaletteFront[1],
  //     },
  //   },
  // },
  {
    id: 1,
    pos: 'Version1',
    title: 'Вариант 1',
    colorLegend: {
      top: {
        name: 'Цвет вверх',
        positionColor: 'Color legend Top',
        colorPallete: colorPaletteFront[1],
      },
    },
  },
];
export const boardLengthAmFish: IModelSize[] = [
  { id: 1, title: '148-cm', size: 148 },
  { id: 2, title: '151-cm', size: 151 },
  { id: 3, title: '154-cm', size: 154 },
  { id: 4, title: '157-cm', size: 157 },
  { id: 5, title: '162-cm', size: 162 },
];
