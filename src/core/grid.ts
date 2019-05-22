import IContainer, * as Container from "./container";
import ICell from "./cell";

export default interface IGrid extends IContainer {
  Cells: ICell[][]
}

export const Default: IGrid = {
  ...Container.Default,
  Content: null,
  toString: (data: IGrid) => {
    if (data.Content != null) {
      console.warn("Please use Cell instead of content for grid");
    }
    let rtn = "";
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
    return rtn;
  },
  Cells: []
}