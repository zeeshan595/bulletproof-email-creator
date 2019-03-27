import Container from "../core/container";
import Unit from "../core/unit";
import Alignment from "../core/alignment";
import Text from "../core/text";
import VerticalSpace from "../core/verticalSpace";
import Seperator from "../core/seperator";
import Template from "../core/template";

export interface DefaultFooterSettings {
  IncludePremReference: boolean;
  IncludeDataSupplyDate: boolean;
}

class DefaultFooter extends Container {
  constructor(
    options?: Container,
    defaultFooterSettings?: DefaultFooterSettings
  ) {
    super();

    if (!defaultFooterSettings) {
      defaultFooterSettings = {
        IncludePremReference: false,
        IncludeDataSupplyDate: false
      };
    }

    this.Align = Alignment.Center;
    this.Width = Unit.Pixels(600);
    this.TextAlign = Alignment.Center;
    this.Content = [
      Text.P(
        '<a href="https://scottishpower.co.uk" style="color: #5c881a;">www.scottishpower.co.uk</a>'
      ),
      VerticalSpace.Table(1),
      new Seperator(),
      VerticalSpace.Table(1),
      Text.P("ScottishPower Energy Retail Limited"),
      Text.P("Registered Office: 320 St. Vincent Street, Glasgow G2 5AD"),
      Text.P("Registered in Scotland No. 190287. VAT No. GB 659 3720 08"),
      VerticalSpace.Table(1),

      defaultFooterSettings.IncludeDataSupplyDate
        ? (Text.P(
            "Data for this mailing was generated and correct on {DataSupplyDate} to communicate relevant tariff information to ScottishPower customers. Please note our tariffs can change at any time. If you have recently moved to a new ScottishPower tariff or different supplier, please disregard this email."
          ),
          VerticalSpace.Table())
        : new Template(),

      Text.P(
        'We understand the importance of keeping your personal details safe. To find out more, visit <a href="https://www.getsafeonline.org" style="color: #5c881a;">www.getsafeonline.org</a>'
      ),
      VerticalSpace.Table(1),
      Text.P("Please consider the environment before printing this email."),
      VerticalSpace.Table(1),
      Text.P(
        "If you have received this message in error, please notify the sender and immediately delete this message and any attachment hereto and/or copy hereof, as such message contains confidential information intended solely for the individual or entity to whom it is addressed. The use or disclosure of such information to third parties is prohibited by law and may give rise to civil or criminal liability. <br /><br />The views presented in this message are solely those of the author(s) and do not necessarily represent the opinion of Iberdrola, S.A. or any company of its group. Neither Iberdrola, S.A. nor any company of its group guarantees the integrity, security or proper receipt of this message. Likewise, neither Iberdrola, S.A. nor any company of its group accepts any liability whatsoever for any possible damages arising from, or in connection with, data interception, software viruses or manipulation by third parties."
      ),
      VerticalSpace.Table(1),

      defaultFooterSettings.IncludePremReference
        ? Text.P("{PremReference}")
        : new Template()
    ];
    Object.assign(this, options);
  }
}

export default DefaultFooter;
