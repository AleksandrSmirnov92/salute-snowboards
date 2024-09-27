import { IColorPallete } from './data/colorPalette';
export interface ISnowboard {
  id: number;
  model: ModelsSnowboards;
  boardDetails: ISnowboardDetails;
}

export interface ISnowboardDetails {
  colorModel: {
    colorOut: {
      isActive: boolean;
      color: IColorPallete[];
    };
    colorIn: {
      isActive: boolean;
      color: IColorPallete[];
    };
  };
  figures: IFigures;
  legentPositions: ILegent[];
  boardLength: IModelSize[];
}
export interface IModelSize {
  id: number;
  title: string;
  size: number;
}
export interface ILegent {
  id: number;
  title: string;
  pos: string;
  colorLegend: {
    top?: {
      name: string;
      positionColor: string;
      colorPallete: IColorPallete;
    };
    middle?: {
      name: string;
      positionColor: string;
      colorPallete: IColorPallete;
    };
    bottom?: {
      name: string;
      positionColor: string;
      colorPallete: IColorPallete;
    };
  };
}

export interface ISelectOptions {
  id: number;
  title: string;
  bgColor?: string;
  colorHex?: string;
  typeLegent?: string;
}
export interface IFigures {
  figureTop: {
    nameFigure: string;
    colorLabel: string;
    hasFigure: boolean;
    isActive: boolean;
    colorFigure: IColorPallete;
  };
  figureBottom: {
    nameFigure: string;
    colorLabel: string;
    hasFigure: boolean;
    isActive: boolean;
    colorFigure: IColorPallete;
  };
}
export enum ModelsSnowboards {
  Pixie = 'Pixie',
  Underdog = 'Underdog',
  AMFish = 'AM Fish',
  BCFR = 'BCFR',
  Unit = 'Unit',
  Fae = 'Fae',
}
