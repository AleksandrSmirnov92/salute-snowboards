import { ISendMessageValue } from '../types/types';
import { IInitialState } from '../store/feautures/formValues/form-values-slice';

export const createDataForTilde = (
  formValues: IInitialState,
  dataUrlFront: string,
  dataUrlBack: string,
): ISendMessageValue => {
  const imageUrlFront = dataUrlFront;
  const imageUrlBack = dataUrlBack;
  const model = formValues.model.title;
  const modelSize = formValues.boardLength.title;
  const exteriorColor = formValues.boardDetails.frontPart.colorModelFront.colorOut.isActive
    ? `CMYK: ${formValues.boardDetails.frontPart.colorModelFront.colorOut.color.cmyk}`
    : 'Нет';
  const interiorColor = formValues.boardDetails.frontPart.colorModelFront.colorIn.isActive
    ? `CMYK: ${formValues.boardDetails.frontPart.colorModelFront.colorIn.color.cmyk}`
    : 'Нет';
  const edgingColor = formValues.boardDetails.frontPart.colorModelFront.colorEdging.isActive
    ? `CMYK: ${formValues.boardDetails.frontPart.colorModelFront.colorEdging.color.cmyk}`
    : 'Нет';
  const figureTop = formValues.boardDetails.frontPart.figuresFront.figureTop.isActive
    ? `CMYK: ${formValues.boardDetails.frontPart.figuresFront.figureTop.colorFigure.cmyk}`
    : 'Нет';
  const figureBottom = formValues.boardDetails.frontPart.figuresFront.figureBottom.isActive
    ? `CMYK: ${formValues.boardDetails.frontPart.figuresFront.figureBottom.colorFigure.cmyk}`
    : 'Нет';
  const legend = {
    versionPosition: formValues.boardDetails.frontPart.legend.pos,
    top:
      formValues.boardDetails.frontPart.legend.pos !== 'Not selected'
        ? `CMYK: ${formValues.boardDetails.frontPart.legend.colorLegend.top!.colorPallete.cmyk}`
        : 'Нет',
    middle:
      formValues.boardDetails.frontPart.legend.pos !== 'Not selected'
        ? `CMYK: ${formValues.boardDetails.frontPart.legend.colorLegend.middle!.colorPallete.cmyk}`
        : 'Нет',
    bottom:
      formValues.boardDetails.frontPart.legend.pos !== 'Not selected'
        ? `CMYK: ${formValues.boardDetails.frontPart.legend.colorLegend.bottom!.colorPallete.cmyk}`
        : 'Нет',
  };
  const result: ISendMessageValue = {
    model,
    modelSize,
    exteriorColor,
    interiorColor,
    edgingColor,
    figureTop,
    figureBottom,
    legend,
    imageUrlFront: imageUrlFront,
    imageUrlBack: imageUrlBack,
  };
  return result;
};
