import Select from '../../custom/select/select';

export const Options = () => {
  return (
    <div>
      <div className="bg-#232729 h-12 mb-7 mt-3 pl-4 flex items-center w-full">
        <span className="text-warm-gray text-lg ">Детали доски</span>
      </div>

      <Select label={'Snowboards model'} />
      <Select label={'LayerTwo'} />
      <Select label={'LayerThree'} />
      <Select label={'LayerFour'} />
      <Select label={'LayerFive'} />
    </div>
  );
};
