import { ISnowboard, ModelsSnowboards } from '../../types/types';
import { boardLengthAmFish, positionsAmFishBack } from './boards-data/board-amFish-data';
import { boardLengthBCFR, positionsBcfrBack } from './boards-data/board-bcfr-data';
import { boardLengthFae, positionsFae, positionsFaeBack } from './boards-data/board-fae-data';
import { boardLengthPixie, positionsPixieBack, positionsPixieFront } from './boards-data/board-pixie-data';
import { boardLengthUnderdog, positionsUnderdog, positionsUnderdogBack } from './boards-data/board-underdog-data';
import { boardLengthUnit, positionsUnit, positionsUnitBack } from './boards-data/board-unit-data';
import { colorPaletteBack, colorPaletteFront } from './color-palette';
import {
  hasLightning,
  hasLightningBack,
  hasNotFigure,
  hasStars,
  hasStarsBack,
  hasStraightLines,
  hasStraightLinesBack,
} from './figures';

export const modelsSnowboards: ISnowboard[] = [
  {
    id: 1,
    model: ModelsSnowboards.Pixie,
    boardDetails: {
      frontPart: {
        colorModelFront: {
          colorOut: {
            isActive: true,
            color: colorPaletteFront,
          },
          colorIn: {
            isActive: false,
            color: colorPaletteFront,
          },
          colorEdging: {
            isActive: false,
            color: colorPaletteFront,
          },
        },
        figures: hasStraightLines,
        legentPositions: positionsPixieFront,
      },
      backPart: {
        colorModelBack: {
          colorOut: {
            isActive: true,
            color: colorPaletteBack,
          },
          colorIn: {
            isActive: false,
            color: colorPaletteBack,
          },
          colorEdging: {
            isActive: false,
            color: colorPaletteBack,
          },
        },
        figures: hasStraightLinesBack,
        legentPositions: positionsPixieBack,
      },
      boardLength: boardLengthPixie,
      price: 49000,
    },
  },
  {
    id: 2,
    model: ModelsSnowboards.Underdog,
    boardDetails: {
      frontPart: {
        colorModelFront: {
          colorOut: {
            isActive: true,
            color: colorPaletteFront,
          },
          colorIn: {
            isActive: false,
            color: colorPaletteFront,
          },
          colorEdging: {
            isActive: false,
            color: colorPaletteFront,
          },
        },
        figures: hasStraightLines,
        legentPositions: positionsUnderdog,
      },
      backPart: {
        colorModelBack: {
          colorOut: {
            isActive: true,
            color: colorPaletteBack,
          },
          colorIn: {
            isActive: false,
            color: colorPaletteBack,
          },
          colorEdging: {
            isActive: false,
            color: colorPaletteBack,
          },
        },
        figures: hasStraightLinesBack,
        legentPositions: positionsUnderdogBack,
      },
      boardLength: boardLengthUnderdog,
      price: 49000,
    },
  },
  {
    id: 3,
    model: ModelsSnowboards.AMFish,
    boardDetails: {
      frontPart: {
        colorModelFront: {
          colorOut: {
            isActive: true,
            color: colorPaletteFront,
          },
          colorIn: {
            isActive: false,
            color: colorPaletteFront,
          },
          colorEdging: {
            isActive: true,
            color: colorPaletteFront,
          },
        },
        figures: hasStraightLines,
        legentPositions: positionsUnderdog,
      },
      backPart: {
        colorModelBack: {
          colorOut: {
            isActive: true,
            color: colorPaletteBack,
          },
          colorIn: {
            isActive: false,
            color: colorPaletteBack,
          },
          colorEdging: {
            isActive: false,
            color: colorPaletteBack,
          },
        },
        figures: hasStraightLinesBack,
        legentPositions: positionsAmFishBack,
      },
      boardLength: boardLengthAmFish,
      price: 64000,
    },
  },
  {
    id: 4,
    model: ModelsSnowboards.BCFR,
    boardDetails: {
      frontPart: {
        colorModelFront: {
          colorOut: {
            isActive: true,
            color: colorPaletteFront,
          },
          colorIn: {
            isActive: false,
            color: colorPaletteFront,
          },
          colorEdging: {
            isActive: false,
            color: colorPaletteFront,
          },
        },
        figures: hasNotFigure,
        legentPositions: positionsUnderdog,
      },
      backPart: {
        colorModelBack: {
          colorOut: {
            isActive: true,
            color: colorPaletteBack,
          },
          colorIn: {
            isActive: false,
            color: colorPaletteBack,
          },
          colorEdging: {
            isActive: false,
            color: colorPaletteBack,
          },
        },
        figures: hasNotFigure,
        legentPositions: positionsBcfrBack,
      },
      boardLength: boardLengthBCFR,
      price: 64000,
    },
  },
  {
    id: 5,
    model: ModelsSnowboards.Unit,
    boardDetails: {
      frontPart: {
        colorModelFront: {
          colorOut: {
            isActive: true,
            color: colorPaletteFront,
          },
          colorIn: {
            isActive: true,
            color: colorPaletteFront,
          },
          colorEdging: {
            isActive: true,
            color: colorPaletteFront,
          },
        },
        figures: hasLightning,
        legentPositions: positionsUnit,
      },
      backPart: {
        colorModelBack: {
          colorOut: {
            isActive: true,
            color: colorPaletteBack,
          },
          colorIn: {
            isActive: false,
            color: colorPaletteBack,
          },
          colorEdging: {
            isActive: false,
            color: colorPaletteBack,
          },
        },
        figures: hasLightningBack,
        legentPositions: positionsUnitBack,
      },
      boardLength: boardLengthUnit,
      price: 33000,
    },
  },
  {
    id: 6,
    model: ModelsSnowboards.Fae,
    boardDetails: {
      frontPart: {
        colorModelFront: {
          colorOut: {
            isActive: true,
            color: colorPaletteFront,
          },
          colorIn: {
            isActive: true,
            color: colorPaletteFront,
          },
          colorEdging: {
            isActive: true,
            color: colorPaletteFront,
          },
        },
        figures: hasStars,
        legentPositions: positionsFae,
      },
      backPart: {
        colorModelBack: {
          colorOut: {
            isActive: true,
            color: colorPaletteBack,
          },
          colorIn: {
            isActive: false,
            color: colorPaletteBack,
          },
          colorEdging: {
            isActive: false,
            color: colorPaletteBack,
          },
        },
        figures: hasStarsBack,
        legentPositions: positionsFaeBack,
      },
      boardLength: boardLengthFae,
      price: 33000,
    },
  },
];
