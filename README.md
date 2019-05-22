#Email Builder
This application can be used to create email templates using typescript and avoids you from having to deal with legacy html code.

**Sample Code**
```typescript
import {
  IDocument,
  Document,
  IContainer,
  EAlignment,
  Unit,
  Shadow,
  Color,
  IRaw,
  Raw,
  IImage,
  ITemplate,
  Image,
  Text,
  Container
} from "bulletproof-email-creator";

//Create a container
const container = {
  //Container Properties
  Align: EAlignment.Center,
  Width: Unit.Pixels(600),
  Shadow: Shadow.Box(0, 0, 10, 5, Color.rgb(220, 220, 220)),
  Content: [
    //All text needs to go through
    //IRaw, Raw Template
    {
      ...Raw.Default,
      Content: (
        //Text elements can be nested
        Text.p(
          "some amazing text " +
          Text.a("super awesome link", { Hyperlink: "https://google.co.uk" })
        )
      )
    } as IRaw,
    //Container specific vertical space
    Container.VerticalSpace,
    //Image
    {
      ...Image.Default,
      Source: "my_cool_image.gif"
    } as IImage
  ] as ITemplate[]
} as IContainer

//Create a html document
const document = {
  ...Document.Default,
  Content: [
    //Document specific vertical space
    Document.VerticalSpace,
    container,
    Document.VerticalSpace
  ]
} as IDocument

//save the document
Document.saveDocument(document, "index.html");
```