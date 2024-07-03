import { Options } from './options-components/options';

export const Main = () => {
  return (
    <div className="grid grid-cols-2 gap-1 ">
      <div className="h-full border-solid border border-warm-gray mb-2">
        <img className="w-2/4 h-2/4" src="./layerOne.png" alt="" />
      </div>
      <div className="h-full border-solid border border-warm-gray mb-2 p-3">
        <Options />
      </div>
    </div>
  );
};
