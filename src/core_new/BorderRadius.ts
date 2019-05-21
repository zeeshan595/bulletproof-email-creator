import IUnit, * as Unit from "./unit";

export default interface IBorderRadius {
  TopLeft: IUnit;
  TopRight: IUnit;
  BottomLeft: IUnit;
  BottomRight: IUnit;
  Disabled: boolean;
};

export const Default: IBorderRadius = {
  Disabled: true,
  TopLeft: Unit.Pixels(10),
  TopRight: Unit.Pixels(10),
  BottomLeft: Unit.Pixels(10),
  BottomRight: Unit.Pixels(10)
};

export const All = (unit: IUnit) => ({
  Disabled: false,
  BottomLeft: unit,
  BottomRight: unit,
  TopLeft: unit,
  TopRight: unit
}) as IBorderRadius;

export const Top = (unit: IUnit) => ({
  Disabled: false,
  TopLeft: unit,
  TopRight: unit,
  BottomLeft: Unit.Default,
  BottomRight: Unit.Default
}) as IBorderRadius;

export const Bottom = (unit: IUnit) => ({
  Disabled: false,
  BottomLeft: unit,
  BottomRight: unit,
  TopLeft: Unit.Default,
  TopRight: Unit.Default
}) as IBorderRadius;

export const toString = (borderRadius: IBorderRadius) => {
  if (borderRadius.Disabled) return "";

  return (
    Unit.toString(borderRadius.TopLeft, "border-top-left-radius", "style") +
    Unit.toString(borderRadius.TopRight, "border-top-right-radius", "style") +
    Unit.toString(borderRadius.BottomLeft, "border-bottom-left-radius", "style") +
    Unit.toString(borderRadius.BottomRight, "border-bottom-right-radius", "style")
  );
}