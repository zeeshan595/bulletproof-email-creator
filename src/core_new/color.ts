export default interface IColor {
  R?: number;
  G?: number;
  B?: number;
  Inherit?: boolean;
};

export const Default: IColor = {
  R: 255,
  G: 255,
  B: 255,
  Inherit: true
};

const GetHexCode = (n: number) => {
  var hex = Number(n).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

export const ColorToHex = (color: IColor) => {
  if (color.Inherit) {
    return "inherit";
  }
  return (
    "#" +
    GetHexCode(color.R) +
    GetHexCode(color.G) +
    GetHexCode(color.B)
  );
}

export const HexToColor = (hex: string): IColor => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var converted: any = result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    }
    : null;
  if (!converted) {
    return {
      Inherit: true
    };
  }
  return {
    R: converted.r,
    G: converted.g,
    B: converted.b
  }
}

export const rgb = (r: number, g: number, b: number) => ({
  Inherit: false,
  R: r,
  G: g,
  b: b
}) as IColor;
export const White: IColor = {
  R: 255, 
  G: 255,
  B: 255,
  Inherit: false
};

export const Black: IColor = {
  R: 0, 
  G: 0,
  B: 0,
  Inherit: false
};

export const toString = (color: IColor, name: string, type: "attribute" | "style") => {
  if (color.Inherit) {
    if (type == "attribute") {
      return "";
    } else if (type == "style") {
      return " " + name + ": inherit; ";
    }
  }

  if (type == "attribute") {
    return " " + name + '="' + ColorToHex(color) + '" ';
  } else if (type == "style") {
    return " " + name + ": " + ColorToHex(color) + "; ";
  }
}