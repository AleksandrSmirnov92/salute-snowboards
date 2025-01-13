import Select from '../../../../../components/custom/select/select';
import { ISelectOptions, ModelsSnowboards } from '../../../../../types/types';

interface ISelectModel {
  modelsOptions: {
    id: number;
    title: ModelsSnowboards;
  }[];
  selectedModel: ISelectOptions;
  setSelectedModel: React.Dispatch<React.SetStateAction<ISelectOptions>>;
}
export const SelectModel = ({ modelsOptions, selectedModel, setSelectedModel }: ISelectModel) => {
  return (
    <>
      <Select
        name={'SnowboardsModel'}
        label={'Snowboards model'}
        labelContentPosition={'justify-start'}
        options={modelsOptions.map((item) => {
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
