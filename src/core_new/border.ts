import IBorderInfo, * as BorderInfo from "./borderInfo";

export default interface IBorder {
  Top: IBorderInfo;
  Bottom: IBorderInfo;
  Left: IBorderInfo;
  Right: IBorderInfo;
  Disabled: boolean;
};

export const Default: IBorder = {
  Top: {
    ...BorderInfo.Default,
  },
  Left: {
    ...BorderInfo.Default,
  },
  Right: {
    ...BorderInfo.Default,
  },
  Bottom: {
    ...BorderInfo.Default,
  },
  Disabled: true
};

export const toString = (border: IBorder) => {
  if (border.Disabled) return "";
  return (
    BorderInfo.toString(border.Top, "border-top") +
    BorderInfo.toString(border.Bottom, "border-bottom") +
    BorderInfo.toString(border.Left, "border-left") +
    BorderInfo.toString(border.Right, "border-right")
  );
}

export const All = (info: IBorderInfo) => ({
  Disabled: false,
  Top: info,
  Bottom: info,
  Left: info,
  Right: info
}) as IBorder