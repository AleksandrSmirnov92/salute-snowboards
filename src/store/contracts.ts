import { modelsSnowboards } from './data/snowboardsData';
import { IColorPallete } from './data/colorPalette';
export interface ISnowboard {
  id: number;
  model: ModelsSnowboards;
  boardDetails: ISnowboardDetails;
}

export interface ISnowboardDetails {
  colors: ISnowboardColor[];
  straightLines: IStraightLines;
  legentPositions: ILegent[];
}

export interface ILegent {
  id: number;
  title: string;
  pos: string;
  colorLegend: { top: IColorPallete; middle: IColorPallete; bottom: IColorPallete };
}
export interface ISnowboardColor {
  id: number;
  title: string;
  bgColor?: string;
  hex?: string;
}

export interface ISelectOptions {
  id: number;
  title: string;
  bgColor?: string;
  colorHex?: string;
  typeLegent?: string;
}
export interface IStraightLines {
  straightLineTop: {
    isActive: boolean;
    colorLine: IColorPallete;
  };
  straightLineBottom: {
    isActive: boolean;
    colorLine: IColorPallete;
  };
}
export enum ModelsSnowboards {
  Pixie = 'Pixie',
  Underdog = 'Underdog',
  AMFish = 'AM Fish',
  BCFR = 'BCFR',
  Unit = 'Unit',
}
