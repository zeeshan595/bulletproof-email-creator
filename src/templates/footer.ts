import Container from "../core/container";
import Unit from "../core/unit";
import Alignment from "../core/alignment";
import Text from "../core/text";
import VerticalSpace from "../core/verticalSpace";
import Color from "../core/color";
import Hyperlink from "../core/hyperlink";

class DefaultFooter extends Container {
  constructor(options?: Container) {
    super();
    this.Align = Alignment.Center;
    this.Width = Unit.Pixels(600);
    this.TextAlign = Alignment.Left;
    this.Content = [
      VerticalSpace.Table(),
      Text.P(
        "* " +
          Hyperlink.A("", "Full tariff Terms and Conditions") +
          " apply. Your bill/Direct Debit amount may vary depending on your energy consumption."
      ),
      VerticalSpace.Table(),
      Text.P(
        "Data for this mailing was generated and correct on {_dataSupplyDate} to communicate relevant tariff information to ScottishPower customers. If you have recently moved to a new ScottishPower tariff or different supplier, please disregard this email."
      ),
      VerticalSpace.Table(),
      new Text({
        Type: "h4",
        TextColor: Color.HexToColor("#5C5C5C"),
        Content: "Why was I sent this email?"
      } as Text),
      Text.P(
        "As a valued energy customer, you will occasionally receive messages about the service we provide you. This is just to keep you up to date and to help you get the most from your online energy account."
      ),
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
