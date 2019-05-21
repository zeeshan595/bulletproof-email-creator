import ITemplate from "./template";
import IAlignment, * as Alignment from "./alignment";
import IColor, * as Color from "./color";
import IUnit, * as Unit from "./unit";

export default interface IContainer extends ITemplate {
  toString: (data: IContainer) => string;
  Align?: IAlignment;
  TextAlign?: IAlignment;
  BackgroundColor?: IColor;
  Width?: IUnit;
  LineHeight?: IUnit;
  Content?: ITemplate[];
};

export const Default: IContainer = {
  toString: (data: IContainer): string => {
    let rtn = "";
    rtn += "<table ";
    rtn += Color.toString(data.BackgroundColor, "bgcolor", "attribute");
    rtn += Unit.toString(data.Width, "width", "attribute");
    rtn += Alignment.toString(data.Align, "align", "attribute");
    rtn += 'style="'
    rtn += Color.toString(data.BackgroundColor, "background-color", "style");
    rtn += Unit.toString(data.Width, "width", "style");
    rtn += Alignment.toString(data.TextAlign, "text-align", "style");
    rtn += Unit.toString(data.LineHeight, "line-height", "style");
    rtn += '">';
    for (let i = 0; i < data.Content.length; i++) {
      rtn += "<tr>";
      rtn += "<td>";
      rtn += data.Content[i].toString(data.Content[i]);
      rtn += "</td>"
      rtn += "</tr>";
    }
    rtn += "</table>"
    return rtn;
  }
};