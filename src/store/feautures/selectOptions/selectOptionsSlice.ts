import { createSlice } from '@reduxjs/toolkit';
import { modelsSnowboards } from '../../data/snowboardsData';

const initialState = {
  snowboards: [...modelsSnowboards],
  modelsSnowboards: [
    ...modelsSnowboards.map((item) => {
      return {
        id: item.id,
        title: item.model,
      };
    }),
  ],
  actualModelColors: [],
};
const selectOptionsSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {},
});
export default selectOptionsSlice.reducer;
