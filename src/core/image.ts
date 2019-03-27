import Template from "./template";
import Unit from "./unit";
import BorderRadius from "./borderRadius";

export default class Image extends Template {
  AltText: string = "";
  Source: string = "";
  Width: Unit = Unit.Auto;
  Height: Unit = Unit.Auto;
  BorderRadius: BorderRadius = BorderRadius.None;

  constructor(fields?: Image) {
    super();
    Object.assign(this, fields);
  }

  toString(): string {
    if (this.Width.Type == "%" || this.Height.Type == "%") {
      throw new Error(
        "img tag does not support percent scaling on some outlook clients!"
      );
    }

    return (
      '<img src="' +
      this.Source +
      '" alt="' +
      this.AltText +
      '" ' +
      this.Width.GetUnitAttribute("width") +
      " " +
      this.Height.GetUnitAttribute("height") +
      ' style="' +
      this.Width.GetUnitCSS("width") +
      this.Height.GetUnitCSS("height") +
      this.BorderRadius.toString() + 
      '"' +
      " />"
    );
  }
}
