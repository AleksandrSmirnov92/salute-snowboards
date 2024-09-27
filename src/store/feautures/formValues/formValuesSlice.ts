import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFigures, ILegent, ModelsSnowboards, IModelSize as IModelSize } from '../../contracts';
import { colorPalette, IColorPallete } from '../../data/colorPalette';
import { boardLengthBCFR } from '../../data/boardBCFRData';
import { hasNotFigure } from '../../data/figures';

const initialState: IInitialState = {
  model: {
    id: 4,
    title: ModelsSnowboards.BCFR,
  },
  colorModel: {
    colorOut: {
      isActive: true,
      color: {
        id: 1,
        cmyk: '9/6/0/8',
        hex: '#D2DAE9',
        title: 'Alice Blue',
        bgColor: 'bg-#D2DAE9',
      },
    },
    colorIn: {
      isActive: false,
      color: {
        id: 1,
        cmyk: '9/6/0/8',
        hex: '#D2DAE9',
        title: 'Alice Blue',
        bgColor: 'bg-#D2DAE9',
      },
    },
  },
  figures: hasNotFigure,
  boardLength: boardLengthBCFR[1],
  legend: {
    id: 1,
    pos: 'Position1',
    title: 'Position1',
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
        positionColor: 'Color legend Bottom',
        colorPallete: colorPalette[1],
      },
    },
  },
};
const selectedFormValues = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setModelValue(state, action: PayloadAction<any>) {
      state.model = action.payload;
    },
    setOuterColorValue(state, action: PayloadAction<any>) {
      state.colorModel.colorOut.color = action.payload;
    },
    setOuterColorValueToActive(state, action: PayloadAction<boolean>) {
      state.colorModel.colorOut.isActive = action.payload;
    },
    setInnerColorValue(state, action: PayloadAction<any>) {
      state.colorModel.colorIn.color = action.payload;
    },
    setInnerColorValueToActive(state, action: PayloadAction<boolean>) {
      state.colorModel.colorOut.isActive = action.payload;
    },
    setFigureTopActive(state, action: PayloadAction<boolean>) {
      state.figures.figureTop.isActive = action.payload;
    },
    setFigureTopColor(state, action: PayloadAction<IColorPallete>) {
      state.figures.figureTop.colorFigure = action.payload;
    },
    setFigureBottomActive(state, action: PayloadAction<boolean>) {
      state.figures.figureBottom.isActive = action.payload;
      // console.log('this is  Straight line', state.straightLines.straightLineTop.isActive);
    },
    setFigureBottomColor(state, action: PayloadAction<IColorPallete>) {
      state.figures.figureBottom.colorFigure = action.payload;
    },
    setHasFigureTop(state, action: PayloadAction<boolean>) {
      state.figures.figureTop.hasFigure = action.payload;
    },
    setHasFigureBottom(state, action: PayloadAction<boolean>) {
      state.figures.figureBottom.hasFigure = action.payload;
    },
    setLegendValue(state, action: PayloadAction<any>) {
      state.legend = action.payload;
    },
    setLegendTopColor(state, action: PayloadAction<IColorPallete>) {
      state.legend.colorLegend.top!.colorPallete = action.payload;
    },
    setLegendMiddleColor(state, action: PayloadAction<IColorPallete>) {
      state.legend.colorLegend.middle!.colorPallete = action.payload;
    },
    setLegendBottomColor(state, action: PayloadAction<IColorPallete>) {
      state.legend.colorLegend.bottom!.colorPallete = action.payload;
    },
    setSize(state, action: PayloadAction<IModelSize>) {
      state.boardLength = action.payload;
    },
  },
});
export const {
  setModelValue,
  setOuterColorValue,
  setOuterColorValueToActive,
  setInnerColorValue,
  setInnerColorValueToActive,
  setFigureTopActive,
  setFigureTopColor,
  setLegendValue,
  setLegendTopColor,
  setLegendMiddleColor,
  setLegendBottomColor,
  setFigureBottomActive,
  setFigureBottomColor,
  setHasFigureTop,
  setHasFigureBottom,
  setSize,
} = selectedFormValues.actions;
export default selectedFormValues.reducer;
export type SelectedFormValuesActionCreator =
  | typeof setModelValue
  | typeof setOuterColorValue
  | typeof setOuterColorValueToActive
  | typeof setInnerColorValue
  | typeof setInnerColorValueToActive
  | typeof setFigureTopActive
  | typeof setFigureTopColor
  | typeof setFigureBottomActive
  | typeof setFigureBottomColor
  | typeof setLegendValue
  | typeof setHasFigureTop
  | typeof setHasFigureBottom
  | typeof setSize;
export interface IInitialState {
  model: {
    id: number;
    title: ModelsSnowboards;
  };
  colorModel: {
    colorOut: {
      isActive: boolean;
      color: IColorPallete;
    };
    colorIn: {
      isActive: boolean;
      color: IColorPallete;
    };
  };
  figures: IFigures;
  legend: ILegent;
  boardLength: IModelSize;
}
