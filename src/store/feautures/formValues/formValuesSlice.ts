import { createSlice, isAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IStraightLines, ISnowboardColor, ILegent, ModelsSnowboards } from '../../contracts';
import { IColorPallete } from '../../data/colorPalette';

const initialState: IInitialState = {
  model: {
    id: 4,
    title: ModelsSnowboards.BCFR,
  },
  color: {
    id: 1,
    title: 'Light Beige',
    bgColor: 'bg-#f3e3cc',
    hex: '#f3e3cc',
  },
  straightLines: {
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
  },
  legend: {
    id: 1,
    pos: 'Position1',
    title: 'Position1',
    colorLegend: {
      top: { id: 1, cmyk: '9/6/0/8', hex: '#D2DAE9', title: 'Alice Blue', bgColor: 'bg-#D2DAE9' },
      middle: { id: 1, cmyk: '9/6/0/8', hex: '#D2DAE9', title: 'Alice Blue', bgColor: 'bg-#D2DAE9' },
      bottom: { id: 1, cmyk: '9/6/0/8', hex: '#D2DAE9', title: 'Alice Blue', bgColor: 'bg-#D2DAE9' },
    },
  },
};
const selectedFormValues = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setModelValue(state, action: PayloadAction<any>) {
      state.model = action.payload;
      // console.log('this is model', state.model);
    },
    setColorValue(state, action: PayloadAction<any>) {
      state.color = action.payload;
      // console.log('this is color', state.color);
    },
    setStraightLineTopActive(state, action: PayloadAction<boolean>) {
      state.straightLines.straightLineTop.isActive = action.payload;
    },
    setStraightLineTopColor(state, action: PayloadAction<IColorPallete>) {
      state.straightLines.straightLineTop.colorLine = action.payload;
    },
    setStraightLineBottomActive(state, action: PayloadAction<boolean>) {
      state.straightLines.straightLineBottom.isActive = action.payload;
      // console.log('this is  Straight line', state.straightLines.straightLineTop.isActive);
    },
    setStraightLineBottomColor(state, action: PayloadAction<IColorPallete>) {
      state.straightLines.straightLineBottom.colorLine = action.payload;
    },
    setLegendValue(state, action: PayloadAction<any>) {
      // console.log('legend', action);
      state.legend = action.payload;
      // console.log('this is legend', state.legend);
    },
    setLegendTopColor(state, action: PayloadAction<IColorPallete>) {
      console.log('legendTop');
      state.legend.colorLegend.top = action.payload;
      // console.log('this is legend', state.legend);
    },
    setLegendMiddleColor(state, action: PayloadAction<IColorPallete>) {
      console.log('legendMeddle', action);
      state.legend.colorLegend.middle = action.payload;
      // console.log('legend', action);
      // state.legend = action.payload;
      // console.log('this is legend', state.legend);
    },
    setLegendBottomColor(state, action: PayloadAction<IColorPallete>) {
      state.legend.colorLegend.bottom = action.payload;
      console.log('legendBottom', action);
      // console.log('legend', action);
      // state.legend = action.payload;
      // console.log('this is legend', state.legend);
    },
  },
});
export const {
  setModelValue,
  setColorValue,
  setStraightLineTopActive,
  setStraightLineTopColor,
  setLegendValue,
  setLegendTopColor,
  setLegendMiddleColor,
  setLegendBottomColor,
  setStraightLineBottomActive,
  setStraightLineBottomColor,
} = selectedFormValues.actions;
export default selectedFormValues.reducer;
export type SelectedFormValuesActionCreator =
  | typeof setModelValue
  | typeof setColorValue
  | typeof setStraightLineTopActive
  | typeof setStraightLineTopColor
  | typeof setStraightLineBottomActive
  | typeof setStraightLineBottomColor
  | typeof setLegendValue;
export interface IInitialState {
  model: {
    id: number;
    title: ModelsSnowboards;
  };
  color: ISnowboardColor;
  straightLines: IStraightLines;
  legend: ILegent;
}
