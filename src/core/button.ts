import Template from "./template";
import Alignment, { GetAlignCSS } from "./alignment";
import Unit from "./unit";
import Color from "./color";
import TemplateProperties from "./templateProperties";
import Shadow from "./shadow";
import BorderRadius from "./borderRadius";

export default class Button extends Template {
  Align: Alignment = Alignment.Left;
  TextAlign: Alignment = Alignment.Inherit;
  Width: Unit = Unit.Inherit;
  BorderRadius: BorderRadius = BorderRadius.None;
  BackgroundColor: Color = new Color({ R: 237, G: 101, B: 43 } as Color);
  Hyperlink: string = "https://scottishpower.co.uk";
  TextColor: Color = Color.White;
  PaddingVertical: number = 15;
  PaddingHorizontal: number = 40;
  Text: string = "Button";
  Shadow: Shadow = Shadow.None;

  constructor(fields?: Button) {
    super();
    Object.assign(this, fields);

    this._properties.push(
      new TemplateProperties({
        name: "BackgroundColorAttribute",
        func: () => {
          return this.BackgroundColor.GetColorAttribute("bgcolor");
        }
      } as TemplateProperties),
      new TemplateProperties({
        name: "widthAttribute",
        func: () => {
          return this.Width.GetUnitAttribute("width");
        }
      } as TemplateProperties), 
      new TemplateProperties({
        name: "widthCSS",
        func: () => {
          return this.Width.GetUnitCSS("width");
        }
      } as TemplateProperties),
      new TemplateProperties({
        name: "textAlignment",
        func: () => {
          return GetAlignCSS("text-align", "horizontal", this.TextAlign);
        }
      } as TemplateProperties)
    );
  }

  _rawHTML = '<table align={Align} bgcolor="{BackgroundColor}" {widthAttribute} border="0"  cellpadding="0"  cellspacing="0"  style="{textAlignment}{widthCSS}background-color: {BackgroundColor}; padding: {PaddingVertical}px {PaddingHorizontal}px; box-shadow: {Shadow}; {BorderRadius}">  <tbody>    <tr>      <td>        <a href="{Hyperlink}" style="color: {TextColor}; text-decoration: none;"          ><strong>{Text}</strong>        </a>      </td>    </tr>  </tbody></table>';
}
