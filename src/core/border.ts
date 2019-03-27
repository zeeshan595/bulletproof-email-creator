import Unit from "./unit";
import Color from "./color";

export default class Border {
  Width: Unit = new Unit({
    Type: "px",
    Value: 2
  } as Unit);
  Type: "solid" = "solid";
  Color: Color = Color.Black;
  IsDisabled: boolean = false;

  constructor(fields?: Border) {
    Object.assign(this, fields);
  }

  toString(): string {
    if (this.IsDisabled) return "none";

    return (
      this.Width.toString() +
      " " +
      this.Type.toString() +
      " " +
      this.Color.toString()
    );
  }

  static None: Border = new Border({
    IsDisabled: true
  } as Border);
}
