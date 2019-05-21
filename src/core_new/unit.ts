export default interface IUnit {
  Type: "px" | "%";
  Value: "inherit" | "auto" | number;
};

export const Default: IUnit = {
  Type: "px",
  Value: "inherit"
};

export const Percent = (n: number): IUnit => ({
  Type: "%",
  Value: n
}) as IUnit;

export const Pixels = (n: number): IUnit => ({
  Type: "px",
  Value: n
});

export const toString = (unit: IUnit, name: string, type: "attribute" | "style"): string => {
  if (unit.Value == "inherit" || unit.Value == "auto") {
    return "";
  }

  if (type == "attribute") {
    switch (unit.Type) {
      case "px":
        return " " + name + '="' + unit.Value + '" ';
      case "%":
        return " " + name + '="' + unit.Value + '%" ';
      default:
        throw Error("Unit type not supported!");
    }
  } else {
    switch (unit.Type) {
      case "px":
        return " " + name + ': ' + unit.Value + 'px; ';
      case "%":
        return " " + name + '= ' + unit.Value + '%; ';
      default:
        throw Error("Unit type not supported!");
    }
  }
}