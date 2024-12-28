import { IModelSize, ILegent } from '../contracts';
import { colorPalette } from './colorPalette';

export const positionsPixie: ILegent[] = [
  {
    id: 1,
    pos: 'Not selected',
    title: 'Not selected',
    colorLegend: {
      top: {
        name: 'ColorLegendTop',
        positionColor: 'Color legend Top',
        colorPallete: colorPalette[1],
      },
      middle: {
        name: 'ColorLegendMiddle',
        positionColor: 'Color legend middle',
        colorPallete: colorPalette[1],
      },
      bottom: {
        name: 'ColorLegendBottom',
        positionColor: 'Color legend bottom',
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
        positionColor: 'Color legend Top',
        colorPallete: colorPalette[1],
      },
      middle: {
        name: 'ColorLegendMiddle',
        positionColor: 'Color legend middle',
        colorPallete: colorPalette[1],
      },
      bottom: {
        name: 'ColorLegendBottom',
        positionColor: 'Color legend bottom',
        colorPallete: colorPalette[1],
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
