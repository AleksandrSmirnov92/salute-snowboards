import { useSelector } from 'react-redux';
import Select from '../../../../../components/custom/select/select';
import { useAppDispatch } from '../../../../../store/hooks/hooks';
import { IModelSize } from '../../../../../types/types';
import { setSize } from '../../../../../store/feautures/formValues/form-values-slice';
import { RootState } from '../../../../../store/store';
interface ISelectSize {
  options: IModelSize[];
}

export const SelectSize = ({ options }: ISelectSize) => {
  const dispatch = useAppDispatch();
  const formValues = useSelector((state: RootState) => state.selectedValuesForm);
  return (
    <>
      <Select
        name={'ModelSize'}
        label={'Size model'}
        labelContentPosition={'justify-start'}
        options={options}
        onChange={(e) => {
          dispatch(setSize(e));
        }}
        valueTest={{
          title: formValues.boardLength.title,
          value: formValues.boardLength,
        }}
      />
    </>
  );
};
