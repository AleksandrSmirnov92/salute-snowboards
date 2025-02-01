import s from './snowboard-specs-front.module.css';
interface IProps {
  children: React.ReactNode;
  isActive?: boolean;
}
export const SnowboardSpecs = ({ children, isActive }: IProps) => {
  const viewBoxWidth = 600;
  const viewBoxHeight = 600;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={'100%'}
      height={'100%'}
      className={`w-full ${isActive ? s.rotateAnimation : ''}`}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="xMidYMin slice"
    >
      {children}
    </svg>
  );
};
