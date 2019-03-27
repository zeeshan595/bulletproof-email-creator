import Unit from "./unit";

export default class BorderRadius {
  TopLeft: Unit = Unit.Pixels(0);
  TopRight: Unit = Unit.Pixels(0);
  BottomLeft: Unit = Unit.Pixels(0);
  BottomRight: Unit = Unit.Pixels(0);
  IsDisabled: boolean = false;

  constructor(fields?: BorderRadius) {
    Object.assign(this, fields);
  }

  toString(): string {
    if (this.IsDisabled) return "";
    return (
      "border-top-left-radius: " +
      this.TopLeft.toString() +
      ";" +
      "border-top-right-radius: " +
      this.TopRight.toString() +
      ";" +
      "border-bottom-left-radius: " +
      this.BottomLeft.toString() +
      ";" +
      "border-bottom-right-radius: " +
      this.BottomRight.toString() +
      ";"
    );
  }

  static All(r: Unit): BorderRadius {
    return new BorderRadius({
      TopLeft: r,
      TopRight: r,
      BottomLeft: r,
      BottomRight: r
    } as BorderRadius);
  }
  static Bottom(r: Unit): BorderRadius {
    return new BorderRadius({
      BottomLeft: r,
      BottomRight: r
    } as BorderRadius);
  }
  static Top(r: Unit): BorderRadius {
    return new BorderRadius({
      TopLeft: r,
      TopRight: r
    } as BorderRadius);
  }
  static None = new BorderRadius({ IsDisabled: true } as BorderRadius);
}
