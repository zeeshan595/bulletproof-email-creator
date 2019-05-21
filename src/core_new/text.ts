import IColor, * as Color from "./color";
import IUnit, * as Unit from "./unit";
import EAlignment, * as Alignment from "./alignment";

export default interface IText {
  TextAlign?: EAlignment;
  Color?: IColor;
  LineHeight?: IUnit;
  FontSize?: IUnit;
  FontWeight?: IUnit;
  Hyperlink?: string;
}

export const Default: IText = {
  TextAlign: EAlignment.Inherit,
  Color: Color.rgb(92, 92, 92),
  LineHeight: Unit.Pixels(22),
  FontSize: Unit.Pixels(17),
  FontWeight: Unit.Default,
  Hyperlink: null
}

const hyperlinkToString = (href: string) => {
  if (href) {
    return ' href="' + href + '" ';
  }
  return "";
}

const getAttrOptionsRawHTML = (options?: IText) => (
  hyperlinkToString(options.Hyperlink)
)

const getStyleOptionsRawHTML = (options?: IText) => (
  Alignment.toString(options.TextAlign, "text-align", "style") +
  Color.toString(options.Color, "color", "style") +
  Unit.toString(options.LineHeight, "line-height", "style") +
  Unit.toString(options.FontSize, "font-size", "style") +
  Unit.toString(options.FontWeight, "font-weight", "style")
)

export const p = (content: string, options?: IText) => (
  "<p " +
  getAttrOptionsRawHTML({
    ...Default,
    ...options
  }) + " " +
  'style="' +
  getStyleOptionsRawHTML({
    ...Default,
    ...options
  }) +
  ' margin: 0; padding: 0;" >' +
  content +
  "</p>"
);

export const h1 = (content: string, options?: IText) => (
  "<h1 " +
  getAttrOptionsRawHTML({
    ...Default,
    ...options
  }) + " " +
  'style="' +
  getStyleOptionsRawHTML({
    ...Default,
    ...options
  }) +
  ' margin: 0; padding: 0;" >' +
  content +
  "</h1>"
);

export const h2 = (content: string, options?: IText) => (
  "<h2 " +
  getAttrOptionsRawHTML({
    ...Default,
    ...options
  }) + " " +
  'style="' +
  getStyleOptionsRawHTML({
    ...Default,
    ...options
  }) +
  ' margin: 0; padding: 0;" >' +
  content +
  "</h2>"
);

export const h3 = (content: string, options?: IText) => (
  "<h3 " +
  getAttrOptionsRawHTML({
    ...Default,
    ...options
  }) + " " +
  'style="' +
  getStyleOptionsRawHTML({
    ...Default,
    ...options
  }) +
  ' margin: 0; padding: 0;" >' +
  content +
  "</h3>"
);

export const h4 = (content: string, options?: IText) => (
  "<h4 " +
  getAttrOptionsRawHTML({
    ...Default,
    ...options
  }) + " " +
  'style="' +
  getStyleOptionsRawHTML({
    ...Default,
    ...options
  }) +
  ' margin: 0; padding: 0;" >' +
  content +
  "</h4>"
);

export const h5 = (content: string, options?: IText) => (
  "<h5 " +
  getAttrOptionsRawHTML({
    ...Default,
    ...options
  }) + " " +
  'style="' +
  getStyleOptionsRawHTML({
    ...Default,
    ...options
  }) +
  ' margin: 0; padding: 0;" >' +
  content +
  "</h5>"
);

export const h6 = (content: string, options?: IText) => (
  "<h6 " +
  getAttrOptionsRawHTML({
    ...Default,
    ...options
  }) + " " +
  'style="' +
  getStyleOptionsRawHTML({
    ...Default,
    ...options
  }) +
  ' margin: 0; padding: 0;" >' +
  content +
  "</h6>"
);

export const strong = (content: string, options?: IText) => (
  "<strong " +
  getAttrOptionsRawHTML({
    ...Default,
    ...options
  }) + " " +
  'style="' +
  getStyleOptionsRawHTML({
    ...Default,
    ...options
  }) +
  ' margin: 0; padding: 0;" >' +
  content +
  "</strong>"
);

export const a = (content: string, options?: IText) => (
  "<a " +
  getAttrOptionsRawHTML({
    ...Default,
    ...options,
  }) + " " +
  'style="' +
  getStyleOptionsRawHTML({
    ...Default,
    ...options
  }) +
  ' margin: 0; padding: 0;" >' +
  content +
  "</a>"
);

export const span = (content: string, options?: IText) => (
  "<span " +
  getAttrOptionsRawHTML({
    ...Default,
    ...options
  }) + " " +
  'style="' +
  getStyleOptionsRawHTML({
    ...Default,
    ...options
  }) +
  ' margin: 0; padding: 0;" >' +
  content +
  "</span>"
);

export const Space = (
  "<table><tr><td>&#160;</td></tr></table>"
);