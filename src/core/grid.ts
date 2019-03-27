import Template from "./template";
import Unit from "./unit";
import Alignment from "./alignment";
import { GetAlignAttribute, GetAlignCSS } from "./alignment";
import Cell from "./cell";
import Color from "./color";
import Shadow from "./shadow";

export default class Grid extends Template {
  Align: Alignment = Alignment.Left;
  TextAlign: Alignment = Alignment.Left;
  Width: Unit = Unit.Auto;
  CellSpacing: number = 0;
  CellPadding: number = 0;
  Cells: Cell[][] = [];
  HeadingBackgroundColor: Color = null;
  AlternateColor: Color = null;
  Shadow: Shadow = Shadow.None;

  constructor(fields?: Grid) {
    super();
    Object.assign(this, fields);
  }

  toString(): string {
    if (this.CellSpacing < 0) this.CellSpacing = 0;
    if (this.CellPadding < 0) this.CellPadding = 0;

    let rtn =
      "<table " +
      GetAlignAttribute("align", "horizontal", this.Align) +
      " " +
      this.Width.GetUnitAttribute("width") +
      ' border="0" cellspacing="' +
      Math.round(this.CellSpacing).toString() +
      '" cellpadding="' +
      Math.round(this.CellPadding).toString() +
      '" style="' +
      GetAlignCSS("text-align", "horizontal", this.TextAlign) +
      " " +
      this.Shadow.toShadowCSS() +
      " " +
      this.Width.GetUnitCSS("width") +
      '">';

    let rowColour = Color.Inherit;

    for (let i = 0; i < this.Cells.length; i++) {
      rtn += "<tr>";

      if (this.AlternateColor) {
        if (i == 0 && this.HeadingBackgroundColor !== null) {
          rowColour = this.HeadingBackgroundColor;
        }
        else if (i % 2 == 0)
          rowColour = this.AlternateColor;
        else
          rowColour = Color.Inherit;
      }

      for (let j = 0; j < this.Cells[i].length; j++) {
        rtn +=
          "<td " +
          this.Cells[i][j].getColumnSpansAttribute() +
          ' ' +
          this.Cells[i][j].getWidthAttribute() +
          ' ' +
          rowColour.GetColorAttribute("bgcolor") +
          ' style="' +
          this.Cells[i][j].getTextAlignCSS() +
          " " +
          this.Cells[i][j].getVerticalAlignCSS() +
          " " +
          this.Cells[i][j].getWidthCSS() +
          " " +
          rowColour.GetColorCSS("background-color") +
          '">' +
          '<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width: 100%;"><tr><td>' +
          this.Cells[i][j].toString() +
          '</td></tr></table>' +
          "</td>";
      }
      rtn += "</tr>";
    }
    rtn += "</table>";
    return rtn;
  }

  getAlignmentAttribute(): string {
    if (this.Align == Alignment.Inherit) return "";
    return 'align="' + this.Align.toString() + '"';
  }
}
