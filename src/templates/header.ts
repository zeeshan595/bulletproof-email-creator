import Grid from "../core/grid";
import Cell from "../core/cell";
import Template from "../core/template";
import Shadow from "../core/shadow";
import Container from "../core/container";
import Unit from "../core/unit";
import Image from "../core/image";
import Alignment from "../core/alignment";
import Color from "../core/color";
import BorderRadius from "../core/borderRadius";
import VerticalSpace from "../core/verticalSpace";
import Text from "../core/text";

const applyMargin = (amount: number, content: Template[]) => {
  return new Container({
    Align: Alignment.Center,
    Width: Unit.Percent(100 - amount),
    Content: content
  } as Container);
};

export const DefaultHeader = new Image({
  Source:
    "https://www.scottishpower.co.uk/assets/images/global/logo/sp_logo.jpg",
  AltText: "Scottish Power Logo",
  Width: Unit.Pixels(200)
} as Image);

export const DefaultHeaderAccountInfo = new Grid({
  Width: Unit.Percent(100),
  Cells: [
    [
      new Cell({
        Content: [DefaultHeader] as Template[]
      } as Cell),
      new Cell({
        Content: [
          new Container({
            Align: Alignment.Right,
            TextAlign: Alignment.Right,
            BorderRadius: BorderRadius.All(Unit.Pixels(10)),
            Width: Unit.Pixels(200),
           /* Shadow: new Shadow({
              Blur: Unit.Pixels(2),
              Spread: Unit.Pixels(1),
              Color: Color.RGB(220, 220, 220)
            } as Shadow),
            BackgroundColor: Color.RGB(238, 240, 240),*/
            Content: [
              VerticalSpace.Table(),
              applyMargin(15, [
                new Grid({
                  Width: Unit.Percent(100),
                  Cells: [
                    [
                      new Cell({
                        TextAlign: Alignment.Left,
                        Content: [
                          Text.P("Account: ")
                        ] as Template[]
                      } as Cell),
                      new Cell({
                        TextAlign: Alignment.Right,
                        Content: [
                          Text.P("<strong>{_accountNumber}</strong>")
                        ] as Template[]
                      } as Cell)
                    ] as Cell[],
                    [
                      new Cell({
                        TextAlign: Alignment.Left,
                        Content: [
                          Text.P("Postcode: ")
                        ] as Template[]
                      } as Cell),
                      new Cell({
                        TextAlign: Alignment.Right,
                        Content: [
                          Text.P("<strong>{_postcode}</strong>")
                        ] as Template[]
                      } as Cell)
                    ] as Cell[]
                  ] as Cell[][]
                } as Grid)
              ] as Template[]),
              VerticalSpace.Table()
            ] as Template[]
          } as Container)
        ] as Template[]
      } as Cell)
    ] as Cell[]
  ] as Cell[][]
} as Grid);