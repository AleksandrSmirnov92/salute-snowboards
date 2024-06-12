interface IStore {
  layerOne: IShape[];
  layerTwo: IShape[];
  layerThree: IShape[];
  layerFour: IShape[];
  layerFive: IShape[];
}
interface IShape {
  id: number;
  path: string;
  zIndex: number;
  nameOption: string;
}
interface ICustomResult {
  layerOne: string;
  layerTwo: string;
  layerThree: string;
  layerFour: string;
  layerFive: string;
}
