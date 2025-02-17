import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  IFigures,
  ILegent as ILegend,
  ModelsSnowboards,
  IModelSize as IModelSize,
  ISelectOptions,
} from '../../../types/types';
import { colorPaletteFront } from '../../data/color-palette';
import { boardLengthBCFR } from '../../data/boards-data/board-bcfr-data';
import { hasNotFigure } from '../../data/figures';
import { IColorPallete } from '../../../types/color-pallete';
import { IRandomSnowboards } from '../../../utils/random-snowboard';

const defaultColorFront = {
  id: 1,
  cmyk: '9/6/0/8',
  hex: '#D2DAE9',
  title: 'Alice Blue',
  bgColor: 'bg-#D2DAE9',
};
const defaultColorBack = {
  id: 1,
  cmyk: '3/2/0/97', // Очень темный, почти черный с нейтральным подтоном
  hex: '#0D0F11', // Почти черный, без выраженного коричневого оттенка
  title: 'Noble Black',
  bgColor: 'bg-#0D0F11',
};
const initialState: IInitialState = {
  model: {
    id: 4,
    title: ModelsSnowboards.BCFR,
  },
  boardDetails: {
    frontPart: {
      colorModelFront: {
        colorOut: {
          isActive: true,
          color: defaultColorFront,
        },
        colorIn: {
          isActive: false,
          color: defaultColorFront,
        },
        colorEdging: {
          isActive: false,
          color: defaultColorFront,
        },
      },
      figuresFront: hasNotFigure,
      legend: {
        id: 1,
        pos: 'Version1',
        title: 'Вариант 1',
        colorLegend: {
          top: {
            name: 'Цвет вверх',
            positionColor: 'Color legend Top',
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
    },
    backPart: {
      colorModelBack: {
        colorOut: {
          isActive: true,
          color: defaultColorBack,
        },
        colorIn: {
          isActive: false,
          color: defaultColorBack,
        },
        colorEdging: {
          isActive: false,
          color: defaultColorBack,
        },
      },
      figuresBack: hasNotFigure,
      legend: {
        id: 1,
        pos: 'Version1',
        title: 'Вариант 1',
        colorLegend: {
          top: {
            name: 'Цвет вверх',
            positionColor: 'Color legend Top',
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
    },
  },
  boardLength: boardLengthBCFR[1],
  price: 64000,
  imageFrontShape: '',
  imageBackShape: '',
};
const selectedFormValues = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setModelValue(state, action: PayloadAction<ISelectOptions>) {
      state.model = action.payload;
    },
    updateOuterColorFrontPart(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.frontPart.colorModelFront.colorOut.color = action.payload;
    },
    toggleOuterColorActiveFrontPart(state, action: PayloadAction<boolean>) {
      state.boardDetails.frontPart.colorModelFront.colorOut.isActive = action.payload;
    },
    updateInnerColorFrontPart(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.frontPart.colorModelFront.colorIn.color = action.payload;
    },
    toggleInnerColorActiveFrontPart(state, action: PayloadAction<boolean>) {
      state.boardDetails.frontPart.colorModelFront.colorIn.isActive = action.payload;
    },
    updateEdgingColorFrontPart(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.frontPart.colorModelFront.colorEdging.color = action.payload;
    },
    toggleEdgingColorActiveFrontPart(state, action: PayloadAction<boolean>) {
      state.boardDetails.frontPart.colorModelFront.colorEdging.isActive = action.payload;
    },
    setFigureTopActiveFrontPart(state, action: PayloadAction<{ flag: boolean; nameFigure: string }>) {
      state.boardDetails.frontPart.figuresFront.figureTop.isActive = action.payload.flag;
      state.boardDetails.frontPart.figuresFront.figureTop.nameFigure = action.payload.nameFigure;
    },
    setFigureTopColorFrontPart(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.frontPart.figuresFront.figureTop.colorFigure = action.payload;
    },
    setFigureBottomActiveFrontPart(state, action: PayloadAction<{ flag: boolean; nameFigure: string }>) {
      state.boardDetails.frontPart.figuresFront.figureBottom.isActive = action.payload.flag;
      state.boardDetails.frontPart.figuresFront.figureBottom.nameFigure = action.payload.nameFigure;
    },
    setFigureBottomColorFrontPart(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.frontPart.figuresFront.figureBottom.colorFigure = action.payload;
    },
    setHasFigureTopFrontPart(state, action: PayloadAction<boolean>) {
      state.boardDetails.frontPart.figuresFront.figureTop.hasFigure = action.payload;
    },
    setHasFigureBottomFrontPart(state, action: PayloadAction<boolean>) {
      state.boardDetails.frontPart.figuresFront.figureBottom.hasFigure = action.payload;
    },
    setLegendValueFrontPart(state, action: PayloadAction<ILegend>) {
      state.boardDetails.frontPart.legend = action.payload;
    },
    setLegendTopColorFrontPart(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.frontPart.legend.colorLegend.top!.colorPallete = action.payload;
    },
    setLegendMiddleColorFrontPart(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.frontPart.legend.colorLegend.middle!.colorPallete = action.payload;
    },
    setLegendBottomColorFrontPart(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.frontPart.legend.colorLegend.bottom!.colorPallete = action.payload;
    },
    setSize(state, action: PayloadAction<IModelSize>) {
      state.boardLength = action.payload;
    },
    updateOuterColorFrontBack(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.backPart.colorModelBack.colorOut.color = action.payload;
    },
    setFigureTopActiveBackPart(state, action: PayloadAction<{ flag: boolean; nameFigure: string }>) {
      state.boardDetails.backPart.figuresBack.figureTop.isActive = action.payload.flag;
      state.boardDetails.backPart.figuresBack.figureTop.nameFigure = action.payload.nameFigure;
    },
    setFigureTopColorBackPart(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.backPart.figuresBack.figureTop.colorFigure = action.payload;
    },
    setHasFigureTopBackPart(state, action: PayloadAction<boolean>) {
      state.boardDetails.backPart.figuresBack.figureTop.hasFigure = action.payload;
    },
    setFigureMiddleActiveBackPart(state, action: PayloadAction<{ flag: boolean; nameFigure: string }>) {
      state.boardDetails.backPart.figuresBack.figureMiddle.isActive = action.payload.flag;
      state.boardDetails.backPart.figuresBack.figureMiddle.nameFigure = action.payload.nameFigure;
    },
    setFigureMiddleColorBackPart(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.backPart.figuresBack.figureMiddle.colorFigure = action.payload;
    },
    setHasFigureMiddleBackPart(state, action: PayloadAction<boolean>) {
      state.boardDetails.backPart.figuresBack.figureMiddle.hasFigure = action.payload;
    },
    setHasFigureBottomBackPart(state, action: PayloadAction<boolean>) {
      state.boardDetails.backPart.figuresBack.figureBottom.hasFigure = action.payload;
    },
    setFigureBottomActiveBackPart(state, action: PayloadAction<{ flag: boolean; nameFigure: string }>) {
      state.boardDetails.backPart.figuresBack.figureBottom.isActive = action.payload.flag;
      state.boardDetails.backPart.figuresBack.figureBottom.nameFigure = action.payload.nameFigure;
    },
    setFigureBottomColorBackPart(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.backPart.figuresBack.figureMiddle.colorFigure = action.payload;
    },
    setLegendValueBackPart(state, action: PayloadAction<ILegend>) {
      state.boardDetails.backPart.legend = action.payload;
    },
    setLegendTopColorBackPart(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.backPart.legend.colorLegend.top!.colorPallete = action.payload;
    },
    setLegendMiddleColorBackPart(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.backPart.legend.colorLegend.middle!.colorPallete = action.payload;
    },
    setLegendBottomColorBackPart(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.backPart.legend.colorLegend.bottom!.colorPallete = action.payload;
    },
    setPriceModel(state, action: PayloadAction<number>) {
      state.price = action.payload;
    },
    randomSnowboard(state, action: PayloadAction<IRandomSnowboards>) {
      state.boardDetails.frontPart.colorModelFront.colorOut.color = action.payload.colorOut;
      state.boardDetails.frontPart.colorModelFront.colorIn.color = action.payload.colorIn;
      state.boardDetails.frontPart.colorModelFront.colorEdging.color = action.payload.colorEdging;
      state.boardDetails.frontPart.figuresFront.figureTop.isActive = action.payload.figureTopActive;
      if (action.payload.figureTopActive) {
        state.boardDetails.frontPart.figuresFront.figureTop.colorFigure = action.payload.frigureTopColor;
      }
      state.boardDetails.frontPart.figuresFront.figureMiddle.isActive = action.payload.figureMiddleActive;
      if (action.payload.figureMiddleActive) {
        state.boardDetails.frontPart.figuresFront.figureMiddle.colorFigure = action.payload.frigureMiddleColor;
      }
      state.boardDetails.frontPart.figuresFront.figureBottom.isActive = action.payload.figureBottomActive;
      if (action.payload.figureBottomActive) {
        state.boardDetails.frontPart.figuresFront.figureBottom.colorFigure = action.payload.frigureBottomColor;
      }
      state.boardDetails.frontPart.legend.colorLegend.top!.colorPallete = action.payload.legendTopColor;
      state.boardDetails.frontPart.legend.colorLegend.middle!.colorPallete = action.payload.legendMiddleColor;
      state.boardDetails.frontPart.legend.colorLegend.bottom!.colorPallete = action.payload.legendBottomColor;
      // Back
      state.boardDetails.backPart.colorModelBack.colorOut.color = action.payload.colorBack;

      state.boardDetails.backPart.figuresBack.figureTop.isActive = action.payload.figureTopActiveBack;
      if (action.payload.figureTopActiveBack) {
        state.boardDetails.backPart.figuresBack.figureTop.colorFigure = action.payload.figureTopColorBack;
      }
      state.boardDetails.backPart.figuresBack.figureMiddle.isActive = action.payload.figureMiddleActiveBack;
      if (action.payload.figureMiddleActiveBack) {
        state.boardDetails.backPart.figuresBack.figureMiddle.colorFigure = action.payload.figureMiddleColorBack;
      }
      state.boardDetails.backPart.figuresBack.figureBottom.isActive = action.payload.figureBottomActiveBack;
      if (action.payload.figureBottomActiveBack) {
        state.boardDetails.backPart.figuresBack.figureTop.colorFigure = action.payload.figureBottomColorBack;
      }
      state.boardDetails.backPart.legend.colorLegend.top!.colorPallete = action.payload.legendTopColorBack;
      state.boardDetails.backPart.legend.colorLegend.bottom!.colorPallete = action.payload.legendBottomColorBack;
    },
    setImageFrontShape(state, action: PayloadAction<string>) {
      state.imageFrontShape = action.payload;
    },
    setImageBackShape(state, action: PayloadAction<string>) {
      state.imageBackShape = action.payload;
    },
  },
});
export const {
  setModelValue,
  updateOuterColorFrontPart,
  toggleOuterColorActiveFrontPart,
  updateInnerColorFrontPart,
  toggleInnerColorActiveFrontPart,
  updateEdgingColorFrontPart,
  toggleEdgingColorActiveFrontPart,
  setFigureTopActiveFrontPart,
  setFigureTopColorFrontPart,
  setLegendValueFrontPart,
  setLegendTopColorFrontPart,
  setLegendMiddleColorFrontPart,
  setLegendBottomColorFrontPart,
  setFigureBottomActiveFrontPart,
  setFigureBottomColorFrontPart,
  setHasFigureTopFrontPart,
  setHasFigureBottomFrontPart,
  setSize,
  updateOuterColorFrontBack,
  setFigureTopActiveBackPart,
  setFigureTopColorBackPart,
  setHasFigureTopBackPart,
  setFigureMiddleActiveBackPart,
  setFigureMiddleColorBackPart,
  setHasFigureMiddleBackPart,
  setHasFigureBottomBackPart,
  setFigureBottomActiveBackPart,
  setFigureBottomColorBackPart,
  setLegendValueBackPart,
  setLegendTopColorBackPart,
  setLegendMiddleColorBackPart,
  setLegendBottomColorBackPart,
  setPriceModel,
  randomSnowboard,
  setImageFrontShape,
  setImageBackShape,
} = selectedFormValues.actions;
export default selectedFormValues.reducer;

export type SelectedFormValuesActionCreator =
  | ReturnType<typeof setModelValue>
  | ReturnType<typeof updateOuterColorFrontPart>
  | ReturnType<typeof toggleOuterColorActiveFrontPart>
  | ReturnType<typeof updateInnerColorFrontPart>
  | ReturnType<typeof toggleInnerColorActiveFrontPart>
  | ReturnType<typeof updateEdgingColorFrontPart>
  | ReturnType<typeof toggleEdgingColorActiveFrontPart>
  | ReturnType<typeof setFigureTopActiveFrontPart>
  | ReturnType<typeof setFigureTopColorFrontPart>
  | ReturnType<typeof setFigureBottomActiveFrontPart>
  | ReturnType<typeof setFigureBottomColorFrontPart>
  | ReturnType<typeof setLegendValueFrontPart>
  | ReturnType<typeof setLegendTopColorFrontPart>
  | ReturnType<typeof setLegendMiddleColorFrontPart>
  | ReturnType<typeof setLegendBottomColorFrontPart>
  | ReturnType<typeof setHasFigureTopFrontPart>
  | ReturnType<typeof setHasFigureBottomFrontPart>
  | ReturnType<typeof setSize>
  | ReturnType<typeof updateOuterColorFrontBack>
  | ReturnType<typeof setFigureTopActiveBackPart>
  | ReturnType<typeof setFigureTopColorBackPart>
  | ReturnType<typeof setHasFigureTopBackPart>
  | ReturnType<typeof setFigureMiddleActiveBackPart>
  | ReturnType<typeof setFigureMiddleColorBackPart>
  | ReturnType<typeof setHasFigureMiddleBackPart>
  | ReturnType<typeof setHasFigureBottomBackPart>
  | ReturnType<typeof setFigureBottomActiveBackPart>
  | ReturnType<typeof setFigureBottomColorBackPart>
  | ReturnType<typeof setLegendValueBackPart>
  | ReturnType<typeof setLegendTopColorBackPart>
  | ReturnType<typeof setLegendMiddleColorBackPart>
  | ReturnType<typeof setLegendBottomColorBackPart>
  | ReturnType<typeof setPriceModel>
  | ReturnType<typeof randomSnowboard>
  | ReturnType<typeof setImageFrontShape>
  | ReturnType<typeof setImageBackShape>
  | ReturnType<typeof randomSnowboard>;
export interface IInitialState {
  model: {
    id: number;
    title: ModelsSnowboards;
  };
  boardDetails: {
    frontPart: {
      colorModelFront: {
        colorOut: {
          isActive: boolean;
          color: IColorPallete;
        };
        colorIn: {
          isActive: boolean;
          color: IColorPallete;
        };
        colorEdging: {
          isActive: boolean;
          color: IColorPallete;
        };
      };
      figuresFront: IFigures;
      legend: ILegend;
    };
    backPart: {
      colorModelBack: {
        colorOut: {
          isActive: boolean;
          color: IColorPallete;
        };
        colorIn: {
          isActive: boolean;
          color: IColorPallete;
        };
        colorEdging: {
          isActive: boolean;
          color: IColorPallete;
        };
      };
      figuresBack: IFigures;
      legend: ILegend;
    };
  };
  boardLength: IModelSize;
  price: number;
  imageFrontShape: string;
  imageBackShape: string;
}
