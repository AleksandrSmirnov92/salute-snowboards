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
  const exteriorColor = {
    colorCmyk: formValues.boardDetails.frontPart.colorModelFront.colorOut.isActive
      ? `CMYK: ${formValues.boardDetails.frontPart.colorModelFront.colorOut.color.cmyk}`
      : 'Нет',
    colorHex: formValues.boardDetails.frontPart.colorModelFront.colorOut.color.hex,
  };
  const interiorColor = {
    colorCmyk: formValues.boardDetails.frontPart.colorModelFront.colorIn.isActive
      ? `CMYK: ${formValues.boardDetails.frontPart.colorModelFront.colorIn.color.cmyk}`
      : 'Нет',
    colorHex: formValues.boardDetails.frontPart.colorModelFront.colorIn.color.hex,
  };
  const edgingColor = {
    colorCmyk: formValues.boardDetails.frontPart.colorModelFront.colorEdging.isActive
      ? `CMYK: ${formValues.boardDetails.frontPart.colorModelFront.colorEdging.color.cmyk}`
      : 'Нет',
    colorHex: formValues.boardDetails.frontPart.colorModelFront.colorEdging.color.hex,
  };
  const figureTop = {
    colorCmyk: formValues.boardDetails.frontPart.figuresFront.figureTop.isActive
      ? `CMYK: ${formValues.boardDetails.frontPart.figuresFront.figureTop.colorFigure.cmyk}`
      : 'Нет',
    colorHex: formValues.boardDetails.frontPart.figuresFront.figureTop.colorFigure.hex,
  };
  const figureBottom = {
    colorCmyk: formValues.boardDetails.frontPart.figuresFront.figureBottom.isActive
      ? `CMYK: ${formValues.boardDetails.frontPart.figuresFront.figureBottom.colorFigure.cmyk}`
      : 'Нет',
    colorHex: formValues.boardDetails.frontPart.figuresFront.figureBottom.colorFigure.hex,
  };
  const legend = {
    versionPosition: formValues.boardDetails.frontPart.legend.pos,
    top: {
      colorCmyk:
        formValues.boardDetails.frontPart.legend.pos !== 'Not selected'
          ? `CMYK: ${formValues.boardDetails.frontPart.legend.colorLegend.top!.colorPallete.cmyk}`
          : 'Нет',
      colorHex: formValues.boardDetails.frontPart.legend.colorLegend.top!.colorPallete.hex,
    },
    middle: {
      colorCmyk:
        formValues.boardDetails.frontPart.legend.pos !== 'Not selected'
          ? `CMYK: ${formValues.boardDetails.frontPart.legend.colorLegend.middle!.colorPallete.cmyk}`
          : 'Нет',
      colorHex: formValues.boardDetails.frontPart.legend.colorLegend.middle!.colorPallete.hex,
    },
    bottom: {
      colorCmyk:
        formValues.boardDetails.frontPart.legend.pos !== 'Not selected'
          ? `CMYK: ${formValues.boardDetails.frontPart.legend.colorLegend.bottom!.colorPallete.cmyk}`
          : 'Нет',
      colorHex: formValues.boardDetails.frontPart.legend.colorLegend.bottom!.colorPallete.hex,
    },
  };
  // back
  const colorSlippery = {
    colorCmyk: formValues.boardDetails.backPart.colorModelBack.colorOut.isActive
      ? `CMYK: ${formValues.boardDetails.backPart.colorModelBack.colorOut.color.cmyk}`
      : 'Нет',
    colorHex: formValues.boardDetails.backPart.colorModelBack.colorOut.color.hex,
  };
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

  const backFigureMiddle = {
    colorCmyk: formValues.boardDetails.backPart.figuresBack.figureMiddle.isActive
      ? `CMYK: ${formValues.boardDetails.backPart.figuresBack.figureMiddle.colorFigure.cmyk}`
      : 'Нет',
    colorHex: formValues.boardDetails.backPart.figuresBack.figureMiddle.colorFigure.hex,
  };
  const legendBack = {
    versionPosition: formValues.boardDetails.backPart.legend.pos,
    top:
      formValues.boardDetails.backPart.legend.pos !== 'Not selected'
        ? {
            colorCmyk: formValues.boardDetails.backPart.legend.colorLegend.top
              ? `CMYK: ${formValues.boardDetails.backPart.legend.colorLegend.top.colorPallete.cmyk}`
              : 'Нет',
            colorHex: formValues.boardDetails.backPart.legend.colorLegend.top?.colorPallete.hex,
          }
        : { colorCmyk: 'Нет', colorHex: 'Нет' },
    middle:
      formValues.boardDetails.backPart.legend.pos !== 'Not selected'
        ? {
            colorCmyk: formValues.boardDetails.backPart.legend.colorLegend.middle
              ? `CMYK: ${formValues.boardDetails.backPart.legend.colorLegend.middle.colorPallete.cmyk}`
              : 'Нет',
            colorHex: formValues.boardDetails.backPart.legend.colorLegend.middle?.colorPallete.hex,
          }
        : { colorCmyk: 'Нет', colorHex: 'Нет' },
    bottom:
      formValues.boardDetails.backPart.legend.pos !== 'Not selected'
        ? {
            colorCmyk: formValues.boardDetails.backPart.legend.colorLegend.bottom
              ? `CMYK: ${formValues.boardDetails.backPart.legend.colorLegend.bottom.colorPallete.cmyk}`
              : 'Нет',
            colorHex: formValues.boardDetails.backPart.legend.colorLegend.bottom?.colorPallete.hex,
          }
        : { colorCmyk: 'Нет', colorHex: 'Нет' },
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
