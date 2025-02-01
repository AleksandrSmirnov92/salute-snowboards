import { ILegent, IModelSize } from '../../../types/types';
import { colorPaletteFront } from '../color-palette';

export const positionsBcfrBack: ILegent[] = [
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
export const boardLengthBCFR: IModelSize[] = [
  { id: 1, title: '157-cm', size: 157 },
  { id: 2, title: '159-cm', size: 159 },
  { id: 3, title: '162-cm', size: 162 },
  { id: 4, title: '165-cm', size: 165 },
  { id: 5, title: '165w-cm', size: 165 },
];
