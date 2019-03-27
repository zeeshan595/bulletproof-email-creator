import Template from "./template";

export default class VerticalSpace extends Template {
  Amount: Number = 1;
  Type: "tag" | "code" | "table" = "tag";

  constructor(amount: Number = 1, type: "tag" | "code" | "table" = "table") {
    super();
    this.Amount = amount;
    this.Type = type;
  }

  toString() {
    let rtn = "";
    for (let i = 0; i < this.Amount; i++) {
      if (this.Type == "tag") {
        rtn += "<br />";
      } else if (this.Type == "code") {
        rtn += "&#160;";
      } else if (this.Type == "table") {
        rtn += "</td></tr><tr><td>&#160;</td></tr><tr><td>";
      } else {
        throw Error("Trying to use unknown type of vertical space");
      }
    }
    return rtn;
  }

  static Tag = (amount: number = 1) => {
    return new VerticalSpace(amount, "tag");
  };
  static Code = (amount: number = 1) => {
    return new VerticalSpace(amount, "code");
  };
  static Table = (amount: number = 1) => {
    return new VerticalSpace(amount, "table");
  };
}
