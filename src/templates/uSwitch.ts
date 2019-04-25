import Color from "../core/color";
import Template from "../core/template";
import Container from "../core/container";
import Alignment from "../core/alignment";
import Unit from "../core/unit";
import Image from "../core/image";
import VerticalSpace from "../core/verticalSpace";
import Text from "../core/text";
import Hyperlink from "../core/hyperlink";
import Grid from "../core/grid";
import Cell from "../core/cell";

const applyMargin = (amount: number, content: Template[]) => {
  return new Container({
    Align: Alignment.Center,
    Width: Unit.Percent(100 - amount),
    Content: content
  } as Container);
};

export default 
    new Container({
      Align: Alignment.Center,
      Width: Unit.Pixels(600),
      TextAlign: Alignment.Center,
      Content: [
        VerticalSpace.Table(),
        new Grid({
          Width: Unit.Percent(100),
          TextAlign: Alignment.Center,
          Cells: [
            [
              new Cell({
                TextAlign: Alignment.Center,
                Content: [
                  new Image({
                    Source:
                      "https://scottishpower.co.uk/content/images/uswitch/uSwitch_Energy-Awards_19_WIN_Best-Account-Management_V_RGB-Blu.png",
                    AltText: "u-switch-best-account"
                  } as Image)
                ] as Template[]
              } as Cell),
              new Cell({
                TextAlign: Alignment.Center,
                Content: [
                  new Image({
                    Source:
                      "https://scottishpower.co.uk/content/images/uswitch/uSwitch_Energy-Awards_19_WIN_Best-Deal-For-You_V_RGB-Blu.png",
                    AltText: "u-switch-best-deal"
                  } as Image)
                ] as Template[]
              } as Cell),
              new Cell({
                TextAlign: Alignment.Center,
                Content: [
                  new Image({
                    Source:
                      "https://scottishpower.co.uk/content/images/uswitch/uSwitch_Energy-Awards_19_WIN_Best-Green-Services_V_RGB-Blu.png",
                    AltText: "u-switch-best-green"
                  } as Image)
                ] as Template[]
              } as Cell),
              new Cell({
                TextAlign: Alignment.Center,
                Content: [
                  new Image({
                    Source: 
                      "https://scottishpower.co.uk/content/images/uswitch/uSwitch_Energy-Awards_19_WIN_Best-Value-For-Money_V_RGB-Blu.png",
                    AltText: "u-switch-best-value"
                  } as Image)
                ] as Template[]
              } as Cell)
            ] as Cell[]
          ] as Cell[][]
        } as Grid),
        VerticalSpace.Table()
      ] as Template[]
    } as Container);
