import IUnit from "./unit";
import IColor, * as Color from "./color";

export default interface IShadow {
  OffsetX?: number;
  OffsetY?: number;
  Blur?: number;
  Spread?: number;
  Color?: IColor;
  Disabled?: boolean;
};

export const Default: IShadow = {
  Disabled: true,
  OffsetX: 0,
  OffsetY: 0,
  Blur: 0,
  Spread: 0,
  Color: Color.rgb(220, 220, 220)
}

export const Box = (x: number, y: number, blur: number, spread: number, color: IUnit) => ({
  OffsetX: x,
  OffsetY: y,
  Blur: blur,
  Spread: spread,
  Color: color,
  Disabled: false
}) as IShadow

export const toString = (shadow: IShadow) => {
  if (shadow.Disabled) return "";
  const str = shadow.OffsetX + "px " + shadow.OffsetY + "px " + shadow.Blur + "px " + shadow.Spread + "px " + Color.ColorToHex(shadow.Color);
  return (
    " box-shadow: " + str + "; " +
    "-moz-box-shadow: " + str + "; " +
    "-webkit-box-shadow: " + str + "; " 
  );
}