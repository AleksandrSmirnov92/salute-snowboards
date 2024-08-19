import { BoardDisplay } from './board-display/board-display';
import { Options } from './options-components/options';

export const Main = () => {
  return (
    <div className="flex justify-between h-screen overflow-hidden">
      <div className="flex w-1/2 justify-center h-full border-solid border border-warm-gray mb-2">
        <BoardDisplay />
      </div>
      <div className="relative h-full w-1/2  border-solid border border-warm-gray mb-10 p-3  overflow-hidden">
        <Options />
      </div>
    </div>
  );
};
