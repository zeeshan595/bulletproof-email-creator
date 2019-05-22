import IDocument, * as Document from "./core_new/document";
import IContainer, * as Container from "./core_new/container";
import IShadow, * as Shadow from "./core_new/shadow";
import IBorderRadius, * as BorderRadius from "./core_new/BorderRadius";
import * as Unit from "./core_new/unit";
import * as Color from "./core_new/color";
import EAlignment, * as Alignment from "./core_new/alignment";
import IImage, * as Image from "./core_new/image";
import IText, * as Text from "./core_new/text";
import IRaw, * as Raw from "./core_new/raw";
import IGrid, * as Grid from "./core_new/grid";
import ICell, * as Cell from "./core_new/cell";

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
      Content: [
        {
          ...Grid.Default,
          Width: Unit.Percent(100),
          Cells: [
            [
              {
                ...Cell.Default,
                Content: [
                  {
                    ...Image.Default,
                    Width: 200
                  } as IImage
                ]
              },
              {
                ...Cell.Default,
                TextAlign: EAlignment.Right,
                Content: [
                 {
                   ...Raw.Default,
                   Content: (
                     Text.p(
                       "Account Number: " +
                       Text.strong("{accountNumber}")
                     )
                   )
                 } as IRaw
                ]
              }
            ]
          ]
        } as IGrid,
        Container.VerticalSpace,
        {
          ...Raw.Default,
          Content: (
            Text.p("Dear {title} {surname},") +
            Text.Space +
            Text.p("Little afraid its eat looked now. Very ye lady girl them good me make. It hardly cousin me always. An shortly village is raising we shewing replied. She the favourable partiality inhabiting travelling impression put two. His six are entreaties instrument acceptance unsatiable her. Amongst as or on herself chapter entered carried no. Sold old ten are quit lose deal his sent. You correct how sex several far distant believe journey parties. We shyness enquire uncivil affixed it carried to.") +
            Text.Space +
            Text.p("An an valley indeed so no wonder future nature vanity. Debating all she mistaken indulged believed provided declared. He many kept on draw lain song as same. Whether at dearest certain spirits is entered in to. Rich fine bred real use too many good. She compliment unaffected expression favourable any. Unknown chiefly showing to conduct no. Hung as love evil able to post at as.") +
            Text.Space +
            Text.p("Thanks")
          )
        } as IRaw
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