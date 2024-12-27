import { ISnowboard, ModelsSnowboards } from '../contracts';
import { boardLengthAmFish } from './boardAmFishData';
import { boardLengthBCFR } from './boardBCFRData';
import { boardLengthFae, positionsFae } from './boardFaeData';
import { boardLengthPixie, positionsPixie } from './boardPixieData';
import { boardLengthUnderdog, positionsUnderdog } from './boardUnderdogData';
import { boardLengthUnit, positionsUnit } from './boardUnitData';
import { colorPalette } from './colorPalette';
import { hasLightning, hasNotFigure, hasStars, hasStraightLines } from './figures';

export const modelsSnowboards: ISnowboard[] = [
  {
    id: 1,
    model: ModelsSnowboards.Pixie,
    boardDetails: {
      colorModel: {
        colorOut: {
          isActive: true,
          color: colorPalette,
        },
        colorIn: {
          isActive: false,
          color: colorPalette,
        },
        colorEdging: {
          isActive: false,
          color: colorPalette,
        },
      },
      figures: hasStraightLines,
      legentPositions: positionsPixie,
      boardLength: boardLengthPixie,
    },
  },
  {
    id: 2,
    model: ModelsSnowboards.Underdog,
    boardDetails: {
      colorModel: {
        colorOut: {
          isActive: true,
          color: colorPalette,
        },
        colorIn: {
          isActive: false,
          color: colorPalette,
        },
        colorEdging: {
          isActive: false,
          color: colorPalette,
        },
      },
      figures: hasStraightLines,
      legentPositions: positionsUnderdog,
      boardLength: boardLengthUnderdog,
    },
  },
  {
    id: 3,
    model: ModelsSnowboards.AMFish,
    boardDetails: {
      colorModel: {
        colorOut: {
          isActive: true,
          color: colorPalette,
        },
        colorIn: {
          isActive: false,
          color: colorPalette,
        },
        colorEdging: {
          isActive: true,
          color: colorPalette,
        },
      },
      figures: hasStraightLines,
      legentPositions: positionsUnderdog,
      boardLength: boardLengthAmFish,
    },
  },
  {
    id: 4,
    model: ModelsSnowboards.BCFR,
    boardDetails: {
      colorModel: {
        colorOut: {
          isActive: true,
          color: colorPalette,
        },
        colorIn: {
          isActive: false,
          color: colorPalette,
        },
        colorEdging: {
          isActive: false,
          color: colorPalette,
        },
      },
      figures: hasNotFigure,
      legentPositions: positionsUnderdog,
      boardLength: boardLengthBCFR,
    },
  },
  {
    id: 5,
    model: ModelsSnowboards.Unit,
    boardDetails: {
      colorModel: {
        colorOut: {
          isActive: true,
          color: colorPalette,
        },
        colorIn: {
          isActive: true,
          color: colorPalette,
        },
        colorEdging: {
          isActive: true,
          color: colorPalette,
        },
      },
      figures: hasLightning,
      legentPositions: positionsUnit,
      boardLength: boardLengthUnit,
    },
  },
  {
    id: 6,
    model: ModelsSnowboards.Fae,
    boardDetails: {
      colorModel: {
        colorOut: {
          isActive: true,
          color: colorPalette,
        },
        colorIn: {
          isActive: true,
          color: colorPalette,
        },
        colorEdging: {
          isActive: true,
          color: colorPalette,
        },
      },
      figures: hasStars,
      legentPositions: positionsFae,
      boardLength: boardLengthFae,
    },
  },
];
