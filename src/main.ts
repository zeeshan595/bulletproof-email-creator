import Document from "./core/document";
import Color from "./core/color";
import Template from "./core/template";
import Container from "./core/container";
import Alignment from "./core/alignment";
import Unit from "./core/unit";
import BorderRadius from "./core/borderRadius";
import Image from "./core/image";
import VerticalSpace from "./core/verticalSpace";
import Text from "./core/text";
import Button from "./core/button";
import Hyperlink from "./core/hyperlink";
import Shadow from "./core/shadow";


// another change

// somewhere else

//Defaults
import DefaultFooter, { DefaultFooterSettings } from "./templates/footer";
import { DefaultHeaderAccountInfo } from "./templates/header";
import Seperator from "./core/seperator";
import Raw from "./core/Raw";
import List from "./core/list";
import Grid from "./core/grid";
import Cell from "./core/cell";
import { SPDefaults } from "./sp-defaults/sp-defaults";

const applyMargin = (amount: number, content: Template[]) => {
  return new Container({
    Align: Alignment.Center,
    Width: Unit.Percent(100 - amount),
    Content: content
  } as Container);
};

const containterWidth = 650;
const borderRadius = 10;

const container = new Container({
  Align: Alignment.Center,
  Width: Unit.Pixels(containterWidth),
  BackgroundColor: Color.White,
  BorderRadius: BorderRadius.All(Unit.Pixels(10)),

  Content: [
    applyMargin(10, [
      DefaultHeaderAccountInfo,
      
    ] as Template[])
  ] as Template[]
} as Container);

const document = new Document({
  Title: "Scottish Power",
  BackgroundColor: SPDefaults.Colors.Background,
  Content: [
    container,
    VerticalSpace.Table(1),
    new DefaultFooter(null, {
      IncludeDataSupplyDate: false,
      IncludePremReference: false
    } as DefaultFooterSettings),
    VerticalSpace.Table(1)
  ] as Template[]
} as Document);
document.saveDocument("index.html");
