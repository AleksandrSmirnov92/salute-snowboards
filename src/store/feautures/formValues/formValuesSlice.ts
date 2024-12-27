import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFigures, ILegent, ModelsSnowboards, IModelSize as IModelSize, ISelectOptions } from '../../contracts';
import { colorPalette, IColorPallete } from '../../data/colorPalette';
import { boardLengthBCFR } from '../../data/boardBCFRData';
import { hasNotFigure } from '../../data/figures';

const defaultColor = {
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
  colorModel: {
    colorOut: {
      isActive: true,
      color: defaultColor,
    },
    colorIn: {
      isActive: false,
      color: defaultColor,
    },
    colorEdging: {
      isActive: false,
      color: defaultColor,
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
    setModelValue(state, action: PayloadAction<ISelectOptions>) {
      state.model = action.payload;
    },
    updateOuterColor(state, action: PayloadAction<IColorPallete>) {
      state.colorModel.colorOut.color = action.payload;
    },
    toggleOuterColorActive(state, action: PayloadAction<boolean>) {
      state.colorModel.colorOut.isActive = action.payload;
    },
    updateInnerColor(state, action: PayloadAction<IColorPallete>) {
      state.colorModel.colorIn.color = action.payload;
    },
    toggleInnerColorActive(state, action: PayloadAction<boolean>) {
      state.colorModel.colorIn.isActive = action.payload;
    },
    updateEdgingColor(state, action: PayloadAction<IColorPallete>) {
      state.colorModel.colorEdging.color = action.payload;
    },
    toggleEdgingColorActive(state, action: PayloadAction<boolean>) {
      state.colorModel.colorEdging.isActive = action.payload;
    },
    setFigureTopActive(state, action: PayloadAction<boolean>) {
      state.figures.figureTop.isActive = action.payload;
    },
    setFigureTopColor(state, action: PayloadAction<IColorPallete>) {
      state.figures.figureTop.colorFigure = action.payload;
    },
    setFigureBottomActive(state, action: PayloadAction<boolean>) {
      state.figures.figureBottom.isActive = action.payload;
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
    setLegendValue(state, action: PayloadAction<ILegent>) {
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
  updateOuterColor,
  toggleOuterColorActive,
  updateInnerColor,
  toggleInnerColorActive,
  updateEdgingColor,
  toggleEdgingColorActive,
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
  | ReturnType<typeof setModelValue>
  | ReturnType<typeof updateOuterColor>
  | ReturnType<typeof toggleOuterColorActive>
  | ReturnType<typeof updateInnerColor>
  | ReturnType<typeof toggleInnerColorActive>
  | ReturnType<typeof updateEdgingColor>
  | ReturnType<typeof toggleEdgingColorActive>
  | ReturnType<typeof setFigureTopActive>
  | ReturnType<typeof setFigureTopColor>
  | ReturnType<typeof setFigureBottomActive>
  | ReturnType<typeof setFigureBottomColor>
  | ReturnType<typeof setLegendValue>
  | ReturnType<typeof setLegendTopColor>
  | ReturnType<typeof setLegendMiddleColor>
  | ReturnType<typeof setLegendBottomColor>
  | ReturnType<typeof setHasFigureTop>
  | ReturnType<typeof setHasFigureBottom>
  | ReturnType<typeof setSize>;
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
    colorEdging: {
      isActive: boolean;
      color: IColorPallete;
    };
  };
  figures: IFigures;
  legend: ILegent;
  boardLength: IModelSize;
}

/*
id=form829695528
name=form829695528
role="form"
action="#"
data-formactiontype="2"
data-inputbox=".t-input-group"
data-success-callback="t678_onSuccess"
url=https://forms.tildaapi.com/procces/
Remote Address:178.248.235.12:443
'formservices[]': [
    '679fabec04f12e85da07b1afeb2ddc3c',
    '986b9677cbf2cf3fa031139dc4118597',
    '11ad007f998709df9ea1d03526f534dc',
  ]
  tildaspec-projectid: 7795673,
  tildaspec-formskey: e8aca28af9896c41e6c6f46457795673,
  tildaspec-formid: form829695528

*/
