import Template from "./template";
import Color from "./color";
import Unit from "./unit";

export default class Seperator extends Template {
  BackgroundColor: Color = Color.RGB(210, 210, 210);
  Thickness: Unit = Unit.Inherit;

  constructor(fields?: Seperator) {
    super();
    Object.assign(this, fields);
  }

  toString(): string {
    return (
      "<hr " +
      this.Thickness.GetUnitAttribute("height") +
      this.BackgroundColor.GetColorCSS("bgcolor") +
      ' style=" font-size: 0px;' +
      this.BackgroundColor.GetColorCSS("color") +
      this.BackgroundColor.GetColorCSS("background-color") +
      this.Thickness.GetUnitCSS("height") +
      '" />'
    );
  }
}
