import Template from "./template";
import Hyperlink from "./hyperlink";
import Alignment from "./alignment";
import Color from "./color";
import Unit from "./unit";

export default class Text extends Template {
  Align: Alignment = Alignment.Inherit;
  Type: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "p";
  TextColor: Color = new Color({
    R: 92,
    G: 92,
    B: 92
  } as Color);
  LineHeight: Unit = Unit.Inherit;
  FontSize: Unit = Unit.Inherit;
  Content: string = "";

  constructor(fields?: Text) {
    super();
    Object.assign(this, fields);
  }

  getAlignmentCSS() {
    if (this.Align == Alignment.Inherit) {
      return "";
    }

    return "text-align: " + this.Align.toString() + ";";
  }

  toString(): string {
    return (
      "<" +
      this.Type +
      ' style="margin: 0; padding: 0; ' +
      this.LineHeight.GetUnitCSS("line-height") +
      "color: " +
      this.TextColor.toString() +
      ";" +
      this.getAlignmentCSS() +
      this.FontSize.GetUnitCSS("font-size") +
      '">' +
      this.Content +
      "</" +
      this.Type +
      ">"
    );
  }

  static P(str: string) {
    return new Text({ Type: "p", Content: str } as Text);
  }
  static H1(str: string) {
    return new Text({
      Type: "h1",
      Content: str,
      TextColor: Color.RGB(75, 120, 21),
      Align: Alignment.Center
    } as Text);
  }
  static H2(str: string) {
    return new Text({ Type: "h2", Content: str } as Text);
  }
  static H3(str: string) {
    return new Text({ Type: "h3", Content: str } as Text);
  }
  static H4(str: string) {
    return new Text({ Type: "h4", Content: str } as Text);
  }
  static H5(str: string) {
    return new Text({ Type: "h5", Content: str } as Text);
  }
  static H6(str: string) {
    return new Text({ Type: "h6", Content: str } as Text);
  }
}
