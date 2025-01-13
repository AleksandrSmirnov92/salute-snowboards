import { ISnowboard, ModelsSnowboards } from '../../types/types';
import { boardLengthAmFish } from './boards-data/board-amFish-data';
import { boardLengthBCFR } from './boards-data/board-bcfr-data';
import { boardLengthFae, positionsFae } from './boards-data/board-fae-data';
import { boardLengthPixie, positionsPixie } from './boards-data/board-pixie-data';
import { boardLengthUnderdog, positionsUnderdog } from './boards-data/board-underdog-data';
import { boardLengthUnit, positionsUnit } from './boards-data/board-unit-data';
import { colorPalette } from './color-palette';
import { hasLightning, hasNotFigure, hasStars, hasStraightLines } from './figures';

export const modelsSnowboards: ISnowboard[] = [
  {
    id: 1,
    model: ModelsSnowboards.Pixie,
    boardDetails: {
      frontPart: {
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
      },
      backPart: {},
      boardLength: boardLengthPixie,
    },
  },
  {
    id: 2,
    model: ModelsSnowboards.Underdog,
    boardDetails: {
      frontPart: {
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
      },
      backPart: {},
      boardLength: boardLengthUnderdog,
    },
  },
  {
    id: 3,
    model: ModelsSnowboards.AMFish,
    boardDetails: {
      frontPart: {
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
      },
      backPart: {},
      boardLength: boardLengthAmFish,
    },
  },
  {
    id: 4,
    model: ModelsSnowboards.BCFR,
    boardDetails: {
      frontPart: {
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
      },
      backPart: {},
      boardLength: boardLengthBCFR,
    },
  },
  {
    id: 5,
    model: ModelsSnowboards.Unit,
    boardDetails: {
      frontPart: {
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
      },
      backPart: {},
      boardLength: boardLengthUnit,
    },
  },
  {
    id: 6,
    model: ModelsSnowboards.Fae,
    boardDetails: {
      frontPart: {
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
      },
      backPart: {},
      boardLength: boardLengthFae,
    },
  },
];
