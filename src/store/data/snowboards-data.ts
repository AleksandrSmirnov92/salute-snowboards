import { ISnowboard, ModelsSnowboards } from '../../types/types';
import { boardLengthAmFish } from './boards-data/board-amFish-data';
import { boardLengthBCFR } from './boards-data/board-bcfr-data';
import { boardLengthFae, positionsFae } from './boards-data/board-fae-data';
import { boardLengthPixie, positionsPixie } from './boards-data/board-pixie-data';
import { boardLengthUnderdog, positionsUnderdog } from './boards-data/board-underdog-data';
import { boardLengthUnit, positionsUnit } from './boards-data/board-unit-data';
import { colorPaletteBack, colorPaletteFront } from './color-palette';
import { hasLightning, hasNotFigure, hasStars, hasStraightLines, hasStraightLinesBack } from './figures';

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
        figures: hasStraightLinesBack,
        legentPositions: positionsPixie,
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
        figures: hasStraightLines,
      },
      boardLength: boardLengthPixie,
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
        figures: hasStraightLines,
      },
      boardLength: boardLengthUnderdog,
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
        figures: hasStraightLines,
      },
      boardLength: boardLengthAmFish,
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
        figures: hasStraightLines,
      },
      boardLength: boardLengthBCFR,
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
        figures: hasStraightLines,
      },
      boardLength: boardLengthUnit,
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
        figures: hasStraightLines,
      },
      boardLength: boardLengthFae,
    },
  },
];
