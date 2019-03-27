export default class Color {
  R: number = 0;
  G: number = 0;
  B: number = 0;
  Inherit: boolean = false;

  constructor(fields?: Color) {
    Object.assign(this, fields);
  }

  private GetHexColor(color: number): string {
    var hex = Number(color).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  }
  toString(): string {
    if (this.Inherit) {
      return "inherit";
    }
    return (
      "#" +
      this.GetHexColor(this.R) +
      this.GetHexColor(this.G) +
      this.GetHexColor(this.B)
    );
  }

  GetColorAttribute(name: string): string {
    if (this.Inherit) return "";
    return name + '="' + this.toString() + '"';
  }

  GetColorCSS(name: string): string {
    if (this.Inherit) return "";
    return name + ": " + this.toString() + ";";
  }

  static Inherit = new Color({
    Inherit: true
  } as Color);
  static Black = new Color({
    R: 0,
    G: 0,
    B: 0
  } as Color);
  static White = new Color({
    R: 255,
    G: 255,
    B: 255
  } as Color);
  static HexToColor(hex: string): Color {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var converted: any = result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
    return new Color(<Color>{
      R: converted.r,
      G: converted.g,
      B: converted.b
    });
  }
  static RGB(r: number, g: number, b: number): Color {
    return new Color({
      R: r,
      G: g,
      B: b
    } as Color);
  }
}
