import ITemplate from "./template";
import EAlignment, * as Alignment from "./alignment";
import IColor, * as Color from "./color";
import IUnit, * as Unit from "./unit";
import IShadow, * as Shadow from "./shadow";
import IBorder, * as Border from "./border";
import IBorderRadius, * as BorderRadius from "./BorderRadius";
import IVerticalSpace from "./verticalSpace";

export default interface IContainer extends ITemplate {
  toString: (data: IContainer) => string;
  Align: EAlignment;
  TextAlign: EAlignment;
  BackgroundColor: IColor;
  Width: IUnit;
  LineHeight: IUnit;
  Shadow: IShadow;
  Border: IBorder;
  BorderRadius: IBorderRadius;
  Content: ITemplate[];
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
    rtn += Shadow.toString(data.Shadow);
    rtn += BorderRadius.toString(data.BorderRadius);
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
  },
  Align: EAlignment.Inherit,
  TextAlign: EAlignment.Inherit,
  BackgroundColor: Color.White,
  Width: Unit.Default,
  LineHeight: Unit.Default,
  Shadow: Shadow.Default,
  Border: Border.Default,
  BorderRadius: BorderRadius.Default,
  Content: []
};

export const DefaultMargin: IContainer = {
  ...Default,
  Align: EAlignment.Center,
  Width: Unit.Percent(90)
}

export const VerticalSpace: IVerticalSpace = {
  toString: () => {
    return "&#160;";
  }
}