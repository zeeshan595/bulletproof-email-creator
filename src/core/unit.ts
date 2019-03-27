export default class Unit {
  Value: "inherit" | "auto" | number = "auto";
  Type: "" | "px" | "%" = "px";

  constructor(fields?: Unit) {
    Object.assign(this, fields);
  }

  toString(): string {
    if (this.Value == "auto" || this.Value == "inherit") return this.Value;
    return this.Value + this.Type;
  }

  GetUnitAttribute(attribute: string): string {
    if (this.Value != "auto" && this.Value != "inherit") {
      if (this.Type == "%") {
        return attribute + '="' + this.toString() + '"';
      }
      return attribute + '="' + this.Value + '"';
    }
    return "";
  }

  GetUnitCSS(name: string): string {
    if (this.Value != "auto" && this.Value != "inherit") {
      return name + ": " + this.Value + this.Type + ";";
    }
    return "";
  }

  static Auto = new Unit({
    Type: "",
    Value: "auto"
  } as Unit);
  static Inherit = new Unit({
    Type: "",
    Value: "inherit"
  } as Unit);
  static Zero = new Unit({
    Type: "px",
    Value: 0
  } as Unit);
  static Pixels(n: number): Unit {
    return new Unit({
      Type: "px",
      Value: n
    } as Unit);
  }
  static Percent(n: number): Unit {
    return new Unit({
      Type: "%",
      Value: n
    } as Unit);
  }
}
