import { SaluteShapesSvg } from '../../assets/svg/salute-shapes.svg';

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[100px] md:h-[120px] flex justify-center items-center border-b border-warm-gray p-4 bg-[#0b1318] z-10">
      <SaluteShapesSvg />
    </div>
  );
};
// border border-b-0 border-solid border-warm-gray
