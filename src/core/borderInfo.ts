import Unit from "./unit";
import Color from "./color";
import BorderType from "./BorderType";

export default class BorderInfo {
  Amount: Unit = Unit.Pixels(1);
  Type: BorderType = BorderType.Solid;
  Color: Color = Color.Black;
  IsDisabled: boolean = false;

  constructor(fields?: BorderInfo) {
    Object.assign(this, fields);
  }

  toString(): string {
    if (this.IsDisabled) return "none";

    if (this.Amount.Type == "%") {
      throw Error("Cannot use percentage scaling on border.");
    }

    let color: string = this.Color.toString();
    if (this.Color.Inherit) {
      color = "";
    }

    return this.Amount.toString() + " " + this.Type.toString() + " " + color;
  }

  static None: BorderInfo = new BorderInfo({
    IsDisabled: true
  } as BorderInfo);
}
