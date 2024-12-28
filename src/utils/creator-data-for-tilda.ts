export const createDataForTilde = (): SendMessageValue => {
  const result: any = {};
  return result;
};
interface SendMessageValue {
  model: string;
  modelSize: string;
  exteriorColor: string;
  interiorColor: string;
  edgingColor: string;
  figureTop: string;
  figureBottom: string;
  legend: {
    top: string;
    middle: string;
    bottom: string;
  };
}
