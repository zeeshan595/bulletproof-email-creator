import Container from "../core/container";
import Unit from "../core/unit";
import Alignment from "../core/alignment";
import Text from "../core/text";
import VerticalSpace from "../core/verticalSpace";
import Color from "../core/color";
import Hyperlink from "../core/hyperlink";
import Seperator from "../core/seperator";
import Grid from "../core/grid";
import Cell from "../core/cell";
import Template from "../core/template";
import Image from "../core/image";

class DefaultFooter extends Container {
  constructor(options?: Container) {
    super();
    this.Align = Alignment.Center;
    this.Width = Unit.Pixels(600);
    this.TextAlign = Alignment.Center;
    this.Content = [
      VerticalSpace.Table(2),
      Hyperlink.Link("https://scottishpower.co.uk", [
        new Text({
          Content: "www.scottishpower.co.uk"
        } as Text)
      ] as Template[]),
      new Grid({
        Align: Alignment.Center,
        TextAlign: Alignment.Center,
        CellPadding: 50,
        Cells: [
          [
            new Cell({
              Content: [
                Hyperlink.Link(
                  "https://en-gb.facebook.com/ScottishPower/",
                  [
                    new Image({
                      Height: Unit.Pixels(50),
                      Source: "https://www.scottishpower.co.uk/content/images/icons/facebook-green-icon.png"
                    } as Image)
                  ] as Template[]
                )
              ] as Template[]
            } as Cell),
            new Cell({
              Content: [
                Hyperlink.Link(
                  "https://twitter.com/ScottishPower",
                  [
                    new Image({
                      Height: Unit.Pixels(50),
                      Source: "https://www.scottishpower.co.uk/content/images/icons/twitter-green-icon.png"
                    } as Image)
                  ] as Template[]
                )
              ] as Template[]
            } as Cell),
            new Cell({
              Content: [
                Hyperlink.Link(
                  "https://www.instagram.com/scottishpowerhq/?hl=en",
                  [
                    new Image({
                      Height: Unit.Pixels(50),
                      Source: "https://www.scottishpower.co.uk/content/images/icons/instagram-green-icon.png"
                    } as Image)
                  ] as Template[]
                )
              ] as Template[]
            } as Cell)
          ] as Cell[]
        ] as Cell[][]
      } as Grid),
      new Seperator(),
      VerticalSpace.Table(),
      Text.P("ScottishPower Energy Retail Limited"),
      Text.P("Registered Office: 320 St. Vincent Street, Glasgow G2 5AD"),
      Text.P("Registered in Scotland No. 190287. VAT No. GB 659 3720 08"),
      VerticalSpace.Table(1),
      Text.P(
        'We understand the importance of keeping your personal details safe. To find out more, visit <a href="https://www.getsafeonline.org" style="color: #5c881a;">www.getsafeonline.org</a>'
      ),
      VerticalSpace.Table(1),
      Text.P("Please consider the environment before printing this email."),
      VerticalSpace.Table(1),
      Text.P(
        "If you have received this message in error, please notify the sender and immediately delete this message and any attachment hereto and/or copy hereof, as such message contains confidential information intended solely for the individual or entity to whom it is addressed. The use or disclosure of such information to third parties is prohibited by law and may give rise to civil or criminal liability. <br /><br />The views presented in this message are solely those of the author(s) and do not necessarily represent the opinion of Iberdrola, S.A. or any company of its group. Neither Iberdrola, S.A. nor any company of its group guarantees the integrity, security or proper receipt of this message. Likewise, neither Iberdrola, S.A. nor any company of its group accepts any liability whatsoever for any possible damages arising from, or in connection with, data interception, software viruses or manipulation by third parties."
      ),
      VerticalSpace.Table(1)
    ];
    Object.assign(this, options);
  }
}

export default DefaultFooter;
