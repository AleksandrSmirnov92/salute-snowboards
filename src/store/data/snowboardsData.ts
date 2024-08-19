import { ILegent, ISnowboard, ISnowboardColor, IStraightLines, ModelsSnowboards } from '../contracts';

const colorsModel: ISnowboardColor[] = [
  {
    id: 1,
    title: 'Light Beige',
    bgColor: 'bg-#f3e3cc',
    hex: '#f3e3cc',
  },
  {
    id: 2,
    title: 'Light Sage',
    bgColor: 'bg-#b6c1ae',
    hex: '#b6c1ae',
  },
  {
    id: 3,
    title: 'Dark Grey',
    bgColor: 'bg-#585856',
    hex: '#585856',
  },
  {
    id: 4,
    title: 'Slate Grey',
    bgColor: 'bg-#7b8b9d',
    hex: '#7b8b9d',
  },
  {
    id: 5,
    title: 'Dark Slade',
    bgColor: 'bg-#3b4c4e',
    hex: '#3b4c4e',
  },
];
const straightLines: IStraightLines = {
  straightLineTop: {
    isActive: false,
    colorLine: {
      id: 1,
      cmyk: '9/6/0/8',
      hex: '#D2DAE9',
      title: 'Alice Blue',
      bgColor: 'bg-#D2DAE9',
    },
  },
  straightLineBottom: {
    isActive: false,
    colorLine: {
      id: 1,
      cmyk: '9/6/0/8',
      hex: '#D2DAE9',
      title: 'Alice Blue',
      bgColor: 'bg-#D2DAE9',
    },
  },
};

const legend: ILegent = {
  id: 1,
  pos: 'Position1',
  title: 'Position1',
  colorLegend: {
    top: { id: 1, cmyk: '9/6/0/8', hex: '#D2DAE9', title: 'Alice Blue', bgColor: 'bg-#D2DAE9' },
    middle: { id: 1, cmyk: '9/6/0/8', hex: '#D2DAE9', title: 'Alice Blue', bgColor: 'bg-#D2DAE9' },
    bottom: { id: 1, cmyk: '9/6/0/8', hex: '#D2DAE9', title: 'Alice Blue', bgColor: 'bg-#D2DAE9' },
  },
};
const notSelectedLegend: ILegent = {
  id: 1,
  pos: 'Not selected',
  title: 'Not selected',
  colorLegend: {
    top: { id: 1, cmyk: '9/6/0/8', hex: '#D2DAE9', title: 'Alice Blue', bgColor: 'bg-#D2DAE9' },
    middle: { id: 1, cmyk: '9/6/0/8', hex: '#D2DAE9', title: 'Alice Blue', bgColor: 'bg-#D2DAE9' },
    bottom: { id: 1, cmyk: '9/6/0/8', hex: '#D2DAE9', title: 'Alice Blue', bgColor: 'bg-#D2DAE9' },
  },
};
export const modelsSnowboards: ISnowboard[] = [
  {
    id: 1,
    model: ModelsSnowboards.Pixie,
    boardDetails: {
      colors: [colorsModel[1], colorsModel[2]],
      straightLines: straightLines,
      legentPositions: [
        notSelectedLegend,
        { ...legend, id: 2 },
        { ...legend, id: 3 },
        { ...legend, id: 4 },
        { ...legend, id: 5 },
        { ...legend, id: 6 },
      ],
    },
  },
  {
    id: 2,
    model: ModelsSnowboards.Underdog,
    boardDetails: {
      colors: [colorsModel[3], colorsModel[4]],
      straightLines: straightLines,
      legentPositions: [notSelectedLegend, legend],
    },
  },
  {
    id: 3,
    model: ModelsSnowboards.AMFish,
    boardDetails: {
      colors: [...colorsModel],
      straightLines: straightLines,
      legentPositions: [notSelectedLegend, legend],
    },
  },
  {
    id: 4,
    model: ModelsSnowboards.BCFR,
    boardDetails: {
      colors: [...colorsModel],
      straightLines: straightLines,
      legentPositions: [notSelectedLegend, legend],
    },
  },
  {
    id: 5,
    model: ModelsSnowboards.Unit,
    boardDetails: {
      colors: [...colorsModel],
      straightLines: straightLines,
      legentPositions: [notSelectedLegend, legend],
    },
  },
];
