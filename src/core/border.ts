import BorderInfo from "./borderInfo";

export default class Border {
  Top: BorderInfo = BorderInfo.None;
  Bottom: BorderInfo = BorderInfo.None;
  Left: BorderInfo = BorderInfo.None;
  Right: BorderInfo = BorderInfo.None;
  IsDisabled: boolean = false;

  constructor(fields?: Border) {
    Object.assign(this, fields);
  }

  toString(): string {
    throw Error("Please use getBorderCSS");
  }

  getBorderCSS() {
    if (this.IsDisabled) return "";

    if (this.Top == this.Bottom) {
      if (this.Left == this.Right) {
        if (this.Top == this.Left) {
          return "border: " + this.Top.toString() + "; ";
        }
      }
    }

    return (
      "border-top: " + 
      this.Top.toString() +
      "; " +
      "border-bottom: " +
      this.Bottom.toString() +
      "; " +
      "border-left: " +
      this.Left.toString() +
      "; " +
      "border-right:" +
      this.Right.toString() +
      "; "
    );
  }

  static None: Border = new Border({
    IsDisabled: true
  } as Border);

  static All = (info: BorderInfo) => {
    return new Border({
      Top: info,
      Bottom: info,
      Left: info,
      Right: info
    } as Border);
  };

  static Top = (info: BorderInfo) => {
    return new Border({
      Top: info,
      Bottom: BorderInfo.None,
      Left: BorderInfo.None,
      Right: BorderInfo.None
    } as Border)
  };

  static Bottom = (info: BorderInfo) => {
    return new Border({
      Bottom: info,
      Top: BorderInfo.None,
      Left: BorderInfo.None,
      Right: BorderInfo.None
    } as Border)
  };

  static Left = (info: BorderInfo) => {
    return new Border({
      Left: info,
      Bottom: BorderInfo.None,
      Top: BorderInfo.None,
      Right: BorderInfo.None
    } as Border)
  };

  static Right = (info: BorderInfo) => {
    return new Border({
      Right: info,
      Bottom: BorderInfo.None,
      Left: BorderInfo.None,
      Top: BorderInfo.None
    } as Border)
  };
}
