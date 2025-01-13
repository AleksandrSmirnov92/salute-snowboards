import { configureStore } from '@reduxjs/toolkit';
import selectOptionsReducer from './feautures/selectOptions/select-options-slice';
import selectValuesFormReducer from './feautures/formValues/form-values-slice';

export const store = configureStore({
  reducer: {
    selectOptions: selectOptionsReducer,
    selectedValuesForm: selectValuesFormReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
