import IContainer, * as Container from "./container";
import * as Color from "./color";
import ICell from "./cell";

export default interface IGrid extends IContainer {
  Cells: ICell[][]
}

export const Default: IGrid = {
  ...Container.Default,
  Content: null,
  toString: (data: IGrid) => {
    let outlookBackgroundImage = '';
    if (data.BackgroundImage) {
      outlookBackgroundImage = '<!--[if gte mso 9]>' +
        '<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">' +
        '<v:fill type="tile" src="' + data.BackgroundImage + '" color="' + Color.ColorToHex(data.BackgroundColor) + '"/>' +
        '</v:background>' +
        '<![endif]-->';
    }

    if (data.Content != null) {
      console.warn("Please use Cell instead of content for grid");
    }
    let rtn = "";
    rtn += '<div style="' + Color.toString(data.BackgroundColor, "background-color", "style") + '">';
    rtn += outlookBackgroundImage;
    rtn += "<table ";
    rtn += Container.attributes(data);
    rtn += 'style="'
    rtn += Container.styles(data);
    rtn += '">';
    for (let i = 0; i < data.Cells.length; i++) {
      rtn += "<tr>";
      for (let j = 0; j < data.Cells[i].length; j++) {
        rtn += "<td>";
        rtn += data.Cells[i][j].toString(data.Cells[i][j]);
        rtn += "</td>";
      }
      rtn += "</tr>";
    }
    rtn += "</table>"
    rtn += "</div>";
    return rtn;
  },
  Cells: []
}