import { colorPaletteBack, colorPaletteFront } from '../store/data/color-palette';
import { IColorPallete } from '../types/color-pallete';

export const randomazer = (): IRandomSnowboards => {
  // const colorPaletteFrontLength = colorPaletteFront.length - 1;
  // const colorPaletteBackLength = colorPaletteBack.length - 1;
  const flags = [true, false];

  return {
    colorOut: colorPaletteFront[Math.floor(Math.random() * 30)],
    colorIn: colorPaletteFront[Math.floor(Math.random() * 30)],
    colorEdging: colorPaletteFront[Math.floor(Math.random() * 30)],
    figureTopActive: flags[Math.random() < 0.5 ? 0 : 1],
    frigureTopColor: colorPaletteFront[Math.floor(Math.random() * 30)],
    figureMiddleActive: flags[Math.random() < 0.5 ? 0 : 1],
    frigureMiddleColor: colorPaletteFront[Math.floor(Math.random() * 30)],
    figureBottomActive: flags[Math.random() < 0.5 ? 0 : 1],
    frigureBottomColor: colorPaletteFront[Math.floor(Math.random() * 30)],
    legendTopColor: colorPaletteFront[Math.floor(Math.random() * 30)],
    legendMiddleColor: colorPaletteFront[Math.floor(Math.random() * 30)],
    legendBottomColor: colorPaletteFront[Math.floor(Math.random() * 30)],
    colorBack: colorPaletteBack[Math.floor(Math.random() * 5)],
    figureTopColorBack: colorPaletteBack[Math.floor(Math.random() * 5)],
    figureTopActiveBack: flags[Math.random() < 0.5 ? 0 : 1],
    figureMiddleColorBack: colorPaletteBack[Math.floor(Math.random() * 5)],
    figureMiddleActiveBack: flags[Math.random() < 0.5 ? 0 : 1],
    figureBottomColorBack: colorPaletteBack[Math.floor(Math.random() * 5)],
    figureBottomActiveBack: flags[Math.random() < 0.5 ? 0 : 1],
    legendTopColorBack: colorPaletteBack[Math.floor(Math.random() * 5)],
    legendMiddleColorBack: colorPaletteBack[Math.floor(Math.random() * 5)],
    legendBottomColorBack: colorPaletteBack[Math.floor(Math.random() * 5)],
  };
};
export interface IRandomSnowboards {
  colorOut: IColorPallete;
  colorIn: IColorPallete;
  colorEdging: IColorPallete;
  figureTopActive: boolean;
  frigureTopColor: IColorPallete;
  figureMiddleActive: boolean;
  frigureMiddleColor: IColorPallete;
  figureBottomActive: boolean;
  frigureBottomColor: IColorPallete;
  legendTopColor: IColorPallete;
  legendMiddleColor: IColorPallete;
  legendBottomColor: IColorPallete;
  colorBack: IColorPallete;
  figureTopColorBack: IColorPallete;
  figureTopActiveBack: boolean;
  figureMiddleColorBack: IColorPallete;
  figureMiddleActiveBack: boolean;
  figureBottomColorBack: IColorPallete;
  figureBottomActiveBack: boolean;
  legendTopColorBack: IColorPallete;
  legendMiddleColorBack: IColorPallete;
  legendBottomColorBack: IColorPallete;
}
