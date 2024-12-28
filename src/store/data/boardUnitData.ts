import { ILegent, IModelSize } from '../contracts';
import { colorPalette } from './colorPalette';

export const positionsUnit: ILegent[] = [
  {
    id: 1,
    pos: 'Not selected',
    title: 'Not selected',
    colorLegend: {
      top: {
        name: 'ColorLegendTop',
        positionColor: 'Color legend Top',
        colorPallete: colorPalette[9],
      },
      middle: {
        name: 'ColorLegendMiddle',
        positionColor: 'Color legend middle',
        colorPallete: colorPalette[9],
      },
      bottom: {
        name: 'ColorLegendBottom',
        positionColor: 'Color legend bottom',
        colorPallete: colorPalette[9],
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
        positionColor: 'Color legend Top',
        colorPallete: colorPalette[9],
      },
      middle: {
        name: 'ColorLegendMiddle',
        positionColor: 'Color legend middle',
        colorPallete: colorPalette[9],
      },
      bottom: {
        name: 'ColorLegendBottom',
        positionColor: 'Color legend bottom',
        colorPallete: colorPalette[9],
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
