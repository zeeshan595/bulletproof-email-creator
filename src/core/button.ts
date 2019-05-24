import ITemplate from "./template";
import IColor, * as Color from "./color";

export default interface IButton extends ITemplate {
  toString: (button: IButton) => string;
  Content: string;
  Hyperlink: string;
  BackgroundImage?: string | null;
  BackgroundColor: IColor;
  BorderColor?: IColor | null;
  BorderRadius?: number;
  Width: number;
  Height: number;
  FontSize: number;
  FontColor: IColor;
  FontBold?: boolean;
  FontUnderline?: boolean;
}

export const Default: IButton = {
  toString: (button) => {
    let msoBackground = '';
    let background = '';
    if (button.BackgroundImage) {
      msoBackground = 'src="' + button.BackgroundImage + '"';
      background = ' background-image: url(' + button.BackgroundImage + '); '
    }
    let stroke = '';
    let border = ' border: 0; '
    if (button.BorderColor) {
      stroke = ' strokecolor="' + button.BorderColor + '" ';
      border = ' border: 1px solid #1e3650; ';
    }

    let msoBorderRadius = ' arcsize="0%" ';
    if (button.BorderRadius) {
      msoBorderRadius = ' arcsize="' + (button.Width / (button.Height * 2)) * button.BorderRadius + '%" '
    }
    let bold = ' font-weight: normal; ';
    if (button.FontBold) {
      bold = ' font-weight: bold; ';
    }
    let underline = ' text-decoration:none; ';
    if (button.FontUnderline) {
      underline = ' text-decoration: underline; ';
    }

    return (
      //OUTLOOK
      '<div><!--[if mso]>' +
      '<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="' + button.Hyperlink + '" style="height:' + button.Height + 'px;v-text-anchor:middle;width:' + button.Width + 'px;" ' + msoBorderRadius + ' ' + stroke + ' fill="t">' +
      '<v:fill type="tile" ' + msoBackground + ' color="' + Color.ColorToHex(button.BackgroundColor) + '" />' +
      '<w:anchorlock/>' +
      '<center style="color:' + Color.ColorToHex(button.FontColor) + ';' + underline + 'font-family: Arial, Helvetica, sans-serif;font-size:' + button.FontSize + 'px;' + bold + '">' + button.Content + '</center>' +
      '</v:roundrect>' +
      '<![endif]-->' +
      //HTML
      '<a href="' + button.Hyperlink + '" style="background-color:' + Color.ColorToHex(button.BackgroundColor) + ';' + background + border + ' border-radius:' + button.BorderRadius + 'px;color:' + Color.ColorToHex(button.FontColor) + ';display:inline-block;font-family: Arial, Helvetica, sans-serif;font-size:' + button.FontSize + 'px;' + bold + 'line-height:' + button.Height + 'px;text-align:center;' + underline + 'width:' + button.Width + 'px;-webkit-text-size-adjust:none;mso-hide:all;">' + button.Content + '</a></div>'
    )
  },
  Content: "Button",
  Hyperlink: "https://google.co.uk",
  FontColor: Color.rgb(255, 255, 255),
  BackgroundColor: Color.HexToColor("#5C811A"),
  Width: 200,
  Height: 50,
  FontSize: 15,
  BorderRadius: 10
}