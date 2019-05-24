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
  BackgroundImage?: string;
  Width: IUnit;
  LineHeight: IUnit;
  Shadow: IShadow;
  Border: IBorder;
  BorderRadius: IBorderRadius;
  Content: ITemplate[];
};

const getBackgroundImage = (url: string, type: "attribute" | "style") => {
  if (!url) return "";

  if (type == "attribute") {
    return ' background="' + url + '" ';
  } else if (type == "style") {
    return " background-image: url('" + url + "');"
  }
}

export const attributes = (data: IContainer) => (
  Color.toString(data.BackgroundColor, "bgcolor", "attribute") +
  Unit.toString(data.Width, "width", "attribute") +
  Alignment.toString(data.Align, "align", "attribute") +
  getBackgroundImage(data.BackgroundImage, "attribute")
)

export const styles = (data: IContainer) => (
  Color.toString(data.BackgroundColor, "background-color", "style") +
  Unit.toString(data.Width, "width", "style") +
  Alignment.toString(data.TextAlign, "text-align", "style") +
  Unit.toString(data.LineHeight, "line-height", "style") +
  Shadow.toString(data.Shadow) +
  BorderRadius.toString(data.BorderRadius) +
  getBackgroundImage(data.BackgroundImage, "style")
)

export const Default: IContainer = {
  toString: (data: IContainer): string => {
    let outlookBackgroundImage = '';
    if (data.BackgroundImage) {
      outlookBackgroundImage = '<!--[if gte mso 9]>' +
        '<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">' +
        '<v:fill type="tile" src="' + data.BackgroundImage + '" color="' + Color.ColorToHex(data.BackgroundColor) + '"/>' +
        '</v:background>' +
        '<![endif]-->';
    }

    let rtn = "";
    rtn += '<div style="' + Color.toString(data.BackgroundColor, "background-color", "style") + '">';
    rtn += outlookBackgroundImage;
    rtn += "<table ";
    rtn += attributes(data);
    rtn += 'style="'
    rtn += styles(data);
    rtn += '">';
    for (let i = 0; i < data.Content.length; i++) {
      rtn += "<tr>";
      rtn += "<td>";
      rtn += data.Content[i].toString(data.Content[i]);
      rtn += "</td>"
      rtn += "</tr>";
    }
    rtn += "</table>"
    rtn += "</div>";
    return rtn;
  },
  Align: EAlignment.Inherit,
  TextAlign: EAlignment.Inherit,
  BackgroundColor: Color.Default,
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