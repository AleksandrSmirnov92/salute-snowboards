import { IInitialState } from '../store/feautures/formValues/form-values-slice';
import { ISendMessageValue } from '../types/types';
import { createDataForTilde } from './creator-data-for-tilda';

export const generateHTMLForSave = (formValues: IInitialState) => {
  const values: ISendMessageValue = createDataForTilde(
    formValues,
    formValues.imageFrontShape,
    formValues.imageBackShape,
  );
  const htmlContent = `
        <style>
          table {
            width: 100%;
            height:70%;
            border-collapse: collapse;
          }
          td, th {
            border: 1px solid black;
            padding-left: 10px;
            padding-right: 10px;
            text-align: center; /* Горизонтальное выравнивание по центру */
            vertical-align: middle; /* Вертикальное выравнивание по центру */
            height: 50px; /* Задаем минимальную высоту ячеек */
          }
          .table-header {
            text-align: center;
            font-weight: bold;
          }
          .container {
            display: flex;
            justify-content: space-between; /* Исправлено на правильное значение */
            align-items: center; /* Добавлено выравнивание по центру по вертикали */
            gap: 20px; /* Добавляем отступ между изображением и таблицей */
          }
          .container img {
            max-width: 100%; /* Ограничиваем максимальный размер изображения */
            height: auto; /* Поддерживаем пропорции изображения */
          }
            img {
            width:200px;
            height:400px;
            }
        </style>
        <div class="container">
          <div><img src="${values.imageUrlFront}" alt="Image Front"></div>
          <div><img src="${values.imageUrlBack}" alt="Image Front"></div>
          <table>
            <tr>
              <td style="width: 40%;">Модель</td>
              <td id="table-model" style="width: 60%;">${values.model}</td>
            </tr>
            <tr>
              <td style="width: 40%;">Ростовка</td>
              <td id="table-model-size" style="width: 60%;">${values.modelSize}</td>
            </tr>
            <tr>
              <td style="width: 40%;">Внешний цвет</td>
              <td id="table-exterior-color" style="width: 60%;">${values.exteriorColor}</td>
            </tr>
            <tr>
              <td style="width: 40%;">Внутренний цвет</td>
              <td id="table-interior-color" style="width: 60%;">${values.interiorColor}</td>
            </tr>
            <tr>
              <td style="width: 40%;">Цвет внутренней окантовки</td>
              <td id="table-edging-color" style="width: 60%;">${values.edgingColor}</td>
            </tr>
            <tr>
              <td style="width: 40%;">Цвет верхней фигуры</td>
              <td id="table-top-figure-color" style="width: 60%;">${values.figureTop.colorCmyk}</td>
            </tr>
            <tr>
              <td style="width: 40%;">Цвет нижней фигуры</td>
              <td id="table-bottom-figure-color" style="width: 60%;">${values.figureBottom.colorCmyk}</td>
            </tr>
            <tr>
              <td style="width: 40%;">Расположение легенды</td>
              <td id="table-legend-position" style="width: 60%;">${values.legend.versionPosition}</td>
            </tr>
            <tr>
              <td style="width: 40%;">Цвет верхней легенды</td>
              <td id="table-legend-color-top" style="width: 60%;">${values.legend.top.colorCmyk}</td>
            </tr>
            <tr>
              <td style="width: 40%;">Цвет легенды по центру</td>
              <td id="table-legend-color-middle" style="width: 60%;">${values.legend.bottom.colorCmyk}</td>
            </tr>
            <tr>
              <td style="width: 40%;">Цвет нижней легенды</td>
              <td id="table-legend-color-bottom" style="width: 60%;">${values.legend.bottom.colorCmyk}</td>
            </tr>
            <tr>
              <td colspan="2" class="table-header">Скользяк</td>
            </tr>
            <tr>
              <td style="width: 40%;">Цвет скользяка</td>
              <td id="table-color-slipper" style="width: 60%;"></td>
            </tr>
            <tr>
              <td id="table-name-figure-slipper" style="width: 40%;">Цвет фигуры</td>
              <td id="table-color-figure-slipper" style="width: 60%;"></td>
            </tr>
            <tr>
              <td style="width: 40%;">Вариант</td>
              <td id="table-legend-position-back" style="width: 60%;"></td>
            </tr>
            <tr>
              <td style="width: 40%;">Цвет верхней легенды скользяка</td>
              <td id="table-legend-color-top-slipper" style="width: 60%;"></td>
            </tr>
            <tr>
              <td style="width: 40%;">Цвет нижней легенды скользяка</td>
              <td id="table-legend-color-bottom-slipper" style="width: 60%;"></td>
            </tr>
          </table>
        </div>
      `;
  return htmlContent;
};
