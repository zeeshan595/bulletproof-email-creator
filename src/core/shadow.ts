import Color from "./color";
import Unit from "./unit";

export default class Shadow {
  OffsetX: Unit = Unit.Zero;
  OffsetY: Unit = Unit.Zero;
  Blur: Unit = Unit.Zero;
  Spread: Unit = Unit.Zero;
  Color: Color = Color.RGB(204, 204, 204);
  IsDisabled: boolean = false;

  constructor(fields?: Shadow) {
    Object.assign(this, fields);
  }

  toShadowCSS(): string {
    return (
      "box-shadow: " + this.toString() + "; " +
      "-moz-box-shadow: " + this.toString() + "; " +
      "-webkit-box-shadow: " + this.toString() + "; " 
    );
  }

  toString(): string {
    if (this.IsDisabled) return "none";
    return (
      this.OffsetX.toString() +
      " " +
      this.OffsetY.toString() +
      " " +
      this.Blur.toString() +
      " " +
      this.Spread.toString() +
      " " +
      this.Color.toString()
    );
  }

  static None: Shadow = new Shadow({
    IsDisabled: true
  } as Shadow);
}