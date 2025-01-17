import ReactDOMServer from 'react-dom/server';
import { ILegent, ModelsSnowboards } from '../types/types';
import { BackShapePixie } from '../components/boards/pixie/back-shape/back-shape-pixie';
import { FrontShapePixie } from '../components/boards/pixie/front-shape/front-shape-pixie';
import { SnowboardSpecs } from '../components/boards/SnowboardSpecsFront';
import { BackShapeUnderdog } from '../components/boards/underdog/back-shape/back-shape-underdog';
import { FrontShapeUnderdog } from '../components/boards/underdog/front-shape/front-shape-underdog';
import { FrontShapeAmFish } from '../components/boards/amf/front-shape-am-fish/front-shape-am-fish';
import { BackShapeAmFish } from '../components/boards/amf/back-shape-am-fish/back-shape-am-fish';
import { FrontShapeBcfr } from '../components/boards/bcfr/front-shape-bcfr/front-shape-bcfr';
import { BackShapeBcfr } from '../components/boards/bcfr/back-shape-bcfr/back-shape-bcfr';
import { FrontShapeUnit } from '../components/boards/unit/front-shape/front-shape-unit';
import { FrontShapeFae } from '../components/boards/fae/front-shape/front-shape-fae';
import { BackShapeUnit } from '../components/boards/unit/back-shape/back-shape-unit';
import { BackShapeFae } from '../components/boards/fae/back-shape/back-shape-fae';
interface IProps {
  model: string;
  colorShapeFront: string;
  colorShapeBack: string;
  isFigureTopActive: boolean;
  figureTopColor: string;
  isFigureBottomActive: boolean;
  figureBottomColor: string;
  legend: ILegent;
  modelSize: number;
  rotation: number;
  svgRefFront: React.Ref<SVGSVGElement>;
  svgRefBack: React.Ref<SVGSVGElement>;
  edgingColor: string;
  colorShapeOut: string;
  colorShapeInner: string;
}
export const getS = ({
  model,
  rotation,
  legend,
  colorShapeBack,
  colorShapeFront,
  modelSize,
  isFigureBottomActive,
  isFigureTopActive,
  figureTopColor,
  figureBottomColor,
  edgingColor,
  colorShapeOut,
  colorShapeInner,
}: IProps) => {
  switch (model) {
    case ModelsSnowboards.Pixie: {
      const boardFront = (
        <SnowboardSpecs rotation={rotation}>
          <FrontShapePixie
            legend={legend}
            colorShapeFront={colorShapeFront}
            modelSize={modelSize}
            isFigureTopActive={isFigureTopActive}
            isFigureBottomActive={isFigureBottomActive}
            figureBottomColor={figureBottomColor}
            figureTopColor={figureTopColor}
          />
        </SnowboardSpecs>
      );
      const boardBack = (
        <SnowboardSpecs rotation={rotation}>
          {/* <BackShapePixie colorShapeBack={colorShapeBack} /> */}
          <></>
        </SnowboardSpecs>
      );
      const backSnowboard = ReactDOMServer.renderToStaticMarkup(boardBack);
      const frontSnowboard = ReactDOMServer.renderToStaticMarkup(boardFront);
      return { frontSnowboard, backSnowboard };
    }
    case ModelsSnowboards.Underdog: {
      const boardFront = (
        <SnowboardSpecs rotation={rotation}>
          <FrontShapeUnderdog
            colorShapeFront={colorShapeFront}
            isFigureTopActive={isFigureTopActive}
            isFigureBottomActive={isFigureBottomActive}
            figureBottomColor={figureBottomColor}
            figureTopColor={figureTopColor}
            legend={legend}
            modelSize={modelSize}
          />
        </SnowboardSpecs>
      );
      const boardBack = (
        <SnowboardSpecs rotation={rotation}>
          <BackShapeUnderdog colorShapeBack={colorShapeBack} />
        </SnowboardSpecs>
      );
      const backSnowboard = ReactDOMServer.renderToStaticMarkup(boardBack);
      const frontSnowboard = ReactDOMServer.renderToStaticMarkup(boardFront);
      return { frontSnowboard, backSnowboard };
    }
    case ModelsSnowboards.AMFish: {
      const boardFront = (
        <SnowboardSpecs rotation={rotation}>
          <FrontShapeAmFish
            colorShapeFront={colorShapeFront}
            isFigureTopActive={isFigureTopActive}
            figureTopColor={figureTopColor}
            isFigureBottomActive={isFigureBottomActive}
            figureBottomColor={figureBottomColor}
            legend={legend}
            modelSize={modelSize}
            edgingColor={edgingColor}
          />
        </SnowboardSpecs>
      );
      const boardBack = (
        <SnowboardSpecs rotation={rotation}>
          <BackShapeAmFish colorShapeBack={colorShapeBack} />
        </SnowboardSpecs>
      );
      const backSnowboard = ReactDOMServer.renderToStaticMarkup(boardBack);
      const frontSnowboard = ReactDOMServer.renderToStaticMarkup(boardFront);
      return { frontSnowboard, backSnowboard };
    }
    case ModelsSnowboards.BCFR: {
      const boardFront = (
        <SnowboardSpecs rotation={rotation}>
          <FrontShapeBcfr colorShapeFront={colorShapeFront} legend={legend} modelSize={modelSize} />
        </SnowboardSpecs>
      );
      const boardBack = (
        <SnowboardSpecs rotation={rotation}>
          <BackShapeBcfr colorShapeBack={colorShapeBack} />
        </SnowboardSpecs>
      );
      const backSnowboard = ReactDOMServer.renderToStaticMarkup(boardBack);
      const frontSnowboard = ReactDOMServer.renderToStaticMarkup(boardFront);
      return { frontSnowboard, backSnowboard };
    }
    case ModelsSnowboards.Unit: {
      const boardFront = (
        <SnowboardSpecs rotation={rotation}>
          <FrontShapeUnit
            legend={legend}
            modelSize={modelSize}
            colorShapeInner={colorShapeInner}
            colorShapeOut={colorShapeOut}
            figureBottomColor={figureBottomColor}
            figureTopColor={figureTopColor}
            isFigureBottomActive={isFigureBottomActive}
            isFigureTopActive={isFigureTopActive}
            edgingColor={edgingColor}
          />
        </SnowboardSpecs>
      );
      const boardBack = (
        <SnowboardSpecs rotation={rotation}>
          <BackShapeUnit colorShapeBack={colorShapeBack} />
        </SnowboardSpecs>
      );
      const backSnowboard = ReactDOMServer.renderToStaticMarkup(boardBack);
      const frontSnowboard = ReactDOMServer.renderToStaticMarkup(boardFront);
      return { frontSnowboard, backSnowboard };
    }
    case ModelsSnowboards.Fae: {
      const boardFront = (
        <SnowboardSpecs rotation={rotation}>
          <FrontShapeFae
            legend={legend}
            modelSize={modelSize}
            colorShapeInner={colorShapeInner}
            colorShapeOut={colorShapeOut}
            figureBottomColor={figureBottomColor}
            figureTopColor={figureTopColor}
            isFigureBottomActive={isFigureBottomActive}
            isFigureTopActive={isFigureTopActive}
            edgingColor={edgingColor}
          />
        </SnowboardSpecs>
      );
      const boardBack = (
        <SnowboardSpecs rotation={rotation}>
          <BackShapeFae colorShapeBack={colorShapeBack} />
        </SnowboardSpecs>
      );
      const backSnowboard = ReactDOMServer.renderToStaticMarkup(boardBack);
      const frontSnowboard = ReactDOMServer.renderToStaticMarkup(boardFront);
      return { frontSnowboard, backSnowboard };
    }
  }
};
