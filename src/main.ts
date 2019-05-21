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
          ...Image.Default,
          Width: 200
        } as IImage,
        Container.VerticalSpace,
        {
          ...Raw.Default,
          Content: (
            Text.p("Dear {title} {surname}") +
            Text.Space +
            Text.p("We have recently noticed that due to a fault with our systems there has been an issue collecting the Direct Debit payments for your ScottishPower energy account. We have now resolved this issue by reinstating your Direct Debit instruction. Your new Direct Debit payment is £{ddAmount} (this is a variable – not sure on name yet)  and will begin on or around {ddDate}. (variable – again, not sure on name of it yet – will be date format)") +
            Text.Space +
            Text.p("If you require any further information on this matter please do not hesitate to contact us on 0800 xxx xxxx (will confirm number)") +
            Text.Space +
            Text.p("Will also confirm if its Lynda Clayton or Craig Paterson as the signatory – pop LC on it for now") + 
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