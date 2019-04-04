import Template from "./template";
import Alignment from "./alignment";
import Color from "./color";
import Unit from "./unit";
import Shadow from "./shadow";
import Border from "./border";
import TemplateProperties from "./templateProperties";
import BorderRadius from "./borderRadius";

export default class Container extends Template {
  Align: Alignment = Alignment.Left;
  TextAlign: Alignment = Alignment.Inherit;
  BackgroundColor: Color = Color.Inherit;
  Width: Unit = Unit.Auto;
  BorderRadius: BorderRadius = BorderRadius.None;
  Shadow: Shadow = Shadow.None;
  Border: Border = Border.None;
  Content: Template[] = [];

  constructor(fields?: Container) {
    super();
    Object.assign(this, fields);

    //HTML Attributes
    this._properties.push(
      new TemplateProperties({
        name: "WidthAtribute",
        func: () => {
          return this.Width.GetUnitAttribute("width");
        }
      } as TemplateProperties)
    );

    this._properties.push(
      new TemplateProperties({
        name: "BackgroundColorAtribute",
        func: () => {
          return this.BackgroundColor.GetColorAttribute("bgcolor");
        }
      } as TemplateProperties)
    );

    this._properties.push(
      new TemplateProperties({
        name: "TextAlignCSS",
        func: () => {
          if (this.TextAlign == Alignment.Inherit) return "";
          return "text-align: " + this.TextAlign + ";";
        }
      } as TemplateProperties)
    );

    this._properties.push(
      new TemplateProperties({
        name: "BackgroundColorFullCSS",
        func: () => {
          return "background-color: " + this.BackgroundColor + ";";
        }
      } as TemplateProperties)
    );
    this._properties.push(
      new TemplateProperties({
        name: "BackgroundColorFullATR",
        func: () => {
          return 'bgcolor="' + this.BackgroundColor + '"';
        }
      } as TemplateProperties)
    );
    this._properties.push(
      new TemplateProperties({
        name: "BorderAdvanced",
        func: () => {
          return this.Border.getBorderCSS();
        }
      } as TemplateProperties)
    )
  }

  _rawHTML = '<table  align="{Align}"  border="0"  cellpadding="0"  cellspacing="0"  {BackgroundColorFullATR}  style="{TextAlignCSS} {BackgroundColorFullCSS} width: {Width}; box-shadow: {Shadow}; {BorderAdvanced} {BorderRadius}"  {WidthAtribute}  {BackgroundColorAtribute}>  <tbody>    <tr>      <td>{Content}</td>    </tr>  </tbody></table>';
}
