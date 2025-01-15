import Select from '../../../../../components/custom/select/select';
import { ISelectOptions, ModelsSnowboards } from '../../../../../types/types';

interface ISelectModel {
  options: {
    id: number;
    title: ModelsSnowboards;
  }[];
  selectedModel: ISelectOptions;
  setSelectedModel: React.Dispatch<React.SetStateAction<ISelectOptions>>;
}
export const SelectModel = ({ options, selectedModel, setSelectedModel }: ISelectModel) => {
  return (
    <>
      <Select
        name={'SnowboardsModel'}
        label={'Сноуборд'}
        labelContentPosition={'justify-start'}
        options={options.map((item) => {
          return {
            title: item.title,
            id: item.id,
          };
        })}
        onChange={(e) => {
          setSelectedModel(e);
        }}
        valueTest={{
          title: selectedModel.title,
          value: selectedModel,
        }}
      />
    </>
  );
};
