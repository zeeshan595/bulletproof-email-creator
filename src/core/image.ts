import Template from "./template";
import Unit from "./unit";
import BorderRadius from "./borderRadius";

export default class Image extends Template {
  AltText: string = "";
  Source: string = "";
  Width: Unit = Unit.Auto;
  Height: Unit = Unit.Auto;
  BorderRadius: BorderRadius = BorderRadius.None;
  Loop: null | "infinite";

  constructor(fields?: Image) {
    super();
    Object.assign(this, fields);
  }

  toString(): string {
    if (this.Width.Type == "%" || this.Height.Type == "%") {
      throw Error(
        "img tag does not support percent scaling on some outlook clients!"
      );
    }

    let loop = "";
    if (this.Loop == "infinite") {
      loop = "loop='infinite' ";
    }

    return (
      '<img src="' +
      this.Source +
      '" alt="' +
      this.AltText +
      '" ' +
      this.Width.GetUnitAttribute("width") +
      " " +
      loop + " " +
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
