import IDocument, * as Document from "./core_new/document";
import IContainer, * as Container from "./core_new/container";
import IShadow, * as Shadow from "./core_new/shadow";
import IBorderRadius, * as BorderRadius from "./core_new/BorderRadius";
import * as Unit from "./core_new/unit";
import * as Color from "./core_new/color";
import EAlignment from "./core_new/alignment";

const container: IContainer = {
  ...Container.Default,
  Align: EAlignment.Center,
  Width: Unit.Pixels(600),
  BackgroundColor: Color.White,
  Shadow: Shadow.Box(0, 0, 10, 5, Color.rgb(220, 220, 220)),
  BorderRadius: BorderRadius.All(Unit.Pixels(10)),
  Content: [
    Container.VerticalSpace,
    {
      ...Container.DefaultMargin,
      BackgroundColor: Color.Black,
      Content: [
        Container.VerticalSpace
      ]
    } as IContainer,
    Container.VerticalSpace
  ]
}

const document: IDocument = {
  ...Document.Default,
  BackgroundColor: Color.rgb(250, 250, 250),
  Content: [
    Document.VerticalSpace,
    Document.VerticalSpace,
    container,
    Document.VerticalSpace
  ]
}
Document.saveDocument(document, "index.html");