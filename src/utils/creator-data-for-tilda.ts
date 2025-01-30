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
  // back
  const colorSlippery = formValues.boardDetails.backPart.colorModelBack.colorOut.isActive
    ? `CMYK: ${formValues.boardDetails.backPart.colorModelBack.colorOut.color.cmyk}`
    : 'Нет';
  let nameBackFigureMiddle = 'Цвет фигуры';
  if (formValues.boardDetails.backPart.figuresBack.figureMiddle.nameFigure === 'Линия') {
    nameBackFigureMiddle = 'Цвет линии';
  }
  if (formValues.boardDetails.backPart.figuresBack.figureMiddle.nameFigure === 'Звезды') {
    nameBackFigureMiddle = 'Цвет звезд';
  }
  if (formValues.boardDetails.backPart.figuresBack.figureMiddle.nameFigure === 'Молния') {
    nameBackFigureMiddle = 'Цвет молнии';
  }

  const backFigureMiddle = formValues.boardDetails.backPart.figuresBack.figureMiddle.isActive
    ? `CMYK: ${formValues.boardDetails.backPart.figuresBack.figureMiddle.colorFigure.cmyk}`
    : 'Нет';
  console.log(formValues.boardDetails.backPart.legend.colorLegend);
  const legendBack = {
    versionPosition: formValues.boardDetails.backPart.legend.pos,
    top:
      formValues.boardDetails.backPart.legend.pos !== 'Not selected'
        ? formValues.boardDetails.backPart.legend.colorLegend.top
          ? `CMYK: ${formValues.boardDetails.backPart.legend.colorLegend.top?.colorPallete.cmyk}`
          : 'Нет'
        : 'Нет',
    middle:
      formValues.boardDetails.backPart.legend.pos !== 'Not selected'
        ? formValues.boardDetails.backPart.legend.colorLegend.middle
          ? `CMYK: ${formValues.boardDetails.backPart.legend.colorLegend.middle?.colorPallete.cmyk}`
          : 'Нет'
        : 'Нет',
    bottom:
      formValues.boardDetails.backPart.legend.pos !== 'Not selected'
        ? formValues.boardDetails.backPart.legend.colorLegend.bottom
          ? `CMYK: ${formValues.boardDetails.backPart.legend.colorLegend.bottom.colorPallete.cmyk}`
          : 'Нет'
        : 'Нет',
  };
  const price = formValues.price;
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
    colorSlippery: colorSlippery,
    backFigureMiddle: backFigureMiddle,
    legendBack: legendBack,
    nameBackFigureMiddle,
    price: price,
  };
  return result;
};
