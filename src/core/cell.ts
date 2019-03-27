import Template from "./template";
import Alignment from "./alignment";
import { GetAlignCSS, GetAlignAttribute } from "./alignment";
import Unit from "./unit";

export default class Cell extends Template {
  TextAlign: Alignment = Alignment.Inherit;
  VerticalAlignment: Alignment = Alignment.Top;
  ColumnSpan: number = 1;
  Content: Template[] = [];
  Width: Unit = Unit.Inherit;

  constructor(fields?: Cell) {
    super();
    Object.assign(this, fields);
  }

  toString() {
    return this.Content.join("").toString();
  }

  getTextAlignCSS(): string {
    return GetAlignCSS("text-align", "horizontal", this.TextAlign);
  }

  getVerticalAlignCSS(): string {
    return GetAlignCSS("vertical-align", "vertical", this.VerticalAlignment);
  }

  getColumnSpansAttribute(): string {
    if (this.ColumnSpan <= 1) return "";
    this.ColumnSpan = Math.round(this.ColumnSpan);
    return 'colspan="' + this.ColumnSpan + '"';
  }

  getWidthCSS(): string {
    return this.Width.GetUnitCSS("width");
  }

  getWidthAttribute(): string {
    return this.Width.GetUnitAttribute("width");
  }

  static Content = (content: Template[]) => {
    return new Cell({ Content: content } as Cell);
  };
}
