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

const defaultColorFront = {
  id: 1,
  cmyk: '9/6/0/8',
  hex: '#D2DAE9',
  title: 'Alice Blue',
  bgColor: 'bg-#D2DAE9',
};
const defaultColorBack = {
  id: 1,
  cmyk: '9/6/0/8',
  hex: '#D2DAE9',
  title: 'Alice Blue',
  bgColor: 'bg-#D2DAE9',
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
      figures: hasNotFigure,
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
    },
  },
  boardLength: boardLengthBCFR[1],
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
      state.boardDetails.frontPart.figures.figureTop.isActive = action.payload.flag;
      state.boardDetails.frontPart.figures.figureTop.nameFigure = action.payload.nameFigure;
    },
    setFigureTopColorFrontPart(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.frontPart.figures.figureTop.colorFigure = action.payload;
    },
    setFigureBottomActiveFrontPart(state, action: PayloadAction<{ flag: boolean; nameFigure: string }>) {
      state.boardDetails.frontPart.figures.figureBottom.isActive = action.payload.flag;
      state.boardDetails.frontPart.figures.figureBottom.nameFigure = action.payload.nameFigure;
    },
    setFigureBottomColorFrontPart(state, action: PayloadAction<IColorPallete>) {
      state.boardDetails.frontPart.figures.figureBottom.colorFigure = action.payload;
    },
    setHasFigureTopFrontPart(state, action: PayloadAction<boolean>) {
      state.boardDetails.frontPart.figures.figureTop.hasFigure = action.payload;
    },
    setHasFigureBottomFrontPart(state, action: PayloadAction<boolean>) {
      state.boardDetails.frontPart.figures.figureBottom.hasFigure = action.payload;
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
  | ReturnType<typeof setSize>;
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
      figures: IFigures;
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
    };
  };
  // colorModelFront: {
  //   colorOut: {
  //     isActive: boolean;
  //     color: IColorPallete;
  //   };
  //   colorIn: {
  //     isActive: boolean;
  //     color: IColorPallete;
  //   };
  //   colorEdging: {
  //     isActive: boolean;
  //     color: IColorPallete;
  //   };
  // };
  // figures: IFigures;
  // legend: ILegent;
  boardLength: IModelSize;
}
