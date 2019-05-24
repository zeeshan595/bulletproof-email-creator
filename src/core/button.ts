import { ITemplate, Color, IColor } from "../main";

export default interface IButton extends ITemplate {
  toString: (button: IButton) => string;
  Text: string;
  Hyperlink: string;
  BackgroundImage?: string | null;
  BackgroundColor: IColor;
  TextColor: IColor;
  BorderColor?: IColor | null;
  BorderRadius?: number;
  Width: number;
  Height: number;
  FontSize: number;
}

export const Default: IButton = {
  toString: (button) => {
    return (
      '<div><!--[if mso]>' +
      '<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="'+
      button.Hyperlink +
      '" style="height:' +
      button.Height +
      'px;v-text-anchor:middle;width:' + 
      button.Width +
      'px;" arcsize="'+
      (button.Width / (button.Height * 2)) * button.BorderRadius +
      '%" stroke="f" fillcolor="'+
      Color.ColorToHex(button.BackgroundColor) +
      '">' +
      '<w:anchorlock/>' +
      '<center>' +
      '<![endif]-->' +
      '<a href="'+
      button.Hyperlink +
      '"' +
      'style="background-color:'+
      Color.ColorToHex(button.BackgroundColor) +
      ';border-radius:4px;color:#e37878;display:inline-block;font-family: Arial, Helvetica, sans-serif;font-size:' +
      button.FontSize +
      'px;font-weight:bold;line-height:' +
      button.Height +
      'px;text-align:center;text-decoration:none;width:' + 
      button.Width +
      'px;-webkit-text-size-adjust:none;">'+
      button.Text +
      '</a>' +
      '<!--[if mso]>' +
      '</center>' +
      '</v:roundrect>' +
      '<![endif]--></div>'
    )
  },
  Text: "Button",
  Hyperlink: "https://google.co.uk",
  TextColor: Color.rgb(255, 255, 255),
  BackgroundColor: Color.HexToColor("#5C811A"),
  Width: 200,
  Height: 50,
  FontSize: 15
}