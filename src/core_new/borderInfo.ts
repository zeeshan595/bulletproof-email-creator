import EBorderType from "./borderType";
import IColor, * as Color from "./color";

export default interface IBorderInfo {
  Amount: number;
  Type: EBorderType;
  Color: IColor;
  Disabled: boolean;
};

export const Default: IBorderInfo = {
  Amount: 1,
  Type: EBorderType.Solid,
  Color: Color.Black,
  Disabled: true
};

export const toString = (info: IBorderInfo, name: string) => {
  if (info.Disabled) {
    return " " + name + ": 0; ";
  }
  return (
    " " +
    name +
    ": " +
    info.Amount + 
    "px " + 
    info.Type.toString() + 
    " " + 
    Color.ColorToHex(info.Color) +
    "; "
  );
}