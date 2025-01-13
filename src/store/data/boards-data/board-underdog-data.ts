import { IModelSize, ILegent } from '../../../types/types';
import { colorPalette } from '../color-palette';

export const positionsUnderdog: ILegent[] = [
  {
    id: 1,
    pos: 'Not selected',
    title: 'Not selected',
    colorLegend: {
      top: {
        name: 'ColorLegendTop',
        positionColor: 'Color legend top',
        colorPallete: colorPalette[1],
      },
      middle: {
        name: 'ColorLegendMiddle',
        positionColor: 'Color legend middle',
        colorPallete: colorPalette[1],
      },
      bottom: {
        name: 'ColorLegendBottom',
        positionColor: 'Color legend Bottom',
        colorPallete: colorPalette[1],
      },
    },
  },
  {
    id: 2,
    pos: 'Version1',
    title: 'Version1',
    colorLegend: {
      top: {
        name: 'ColorLegendTop',
        positionColor: 'Color legend top',
        colorPallete: colorPalette[1],
      },
      middle: {
        name: 'ColorLegendMiddle',
        positionColor: 'Color legend middle',
        colorPallete: colorPalette[1],
      },
      bottom: {
        name: 'ColorLegendBottom',
        positionColor: 'Color legend Bottom',
        colorPallete: colorPalette[1],
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
