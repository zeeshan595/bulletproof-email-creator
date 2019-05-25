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
  Container,
  IButton,
  Button,
  BorderRadius,
  List
} from "./main";

//Create a container
const container = {
  //You MUST import the default settings
  //for this to work properly
  ...Container.Default, //IMPORTANT
  //Container Properties
  Align: EAlignment.Center,
  Width: Unit.Pixels(600),
  Shadow: Shadow.Box(0, 0, 10, 5, Color.rgb(220, 220, 220)),
  BackgroundColor: Color.White,
  BorderRadius: BorderRadius.All(Unit.Pixels(10)),
  Content: [
    //Another container to add left & right margins
    Container.VerticalSpace,
    {
      ...Container.Default,//IMPORTANT
      Align: EAlignment.Center,
      Width: Unit.Percent(90),
      Content: [
        //All text needs to go through
        //IRaw, Raw Template
        {
          ...Raw.Default,//IMPORTANT
          Content: (
            //Text elements can be nested
            Text.p(
              "some amazing text " +
              Text.a("super awesome link", { Hyperlink: "https://google.co.uk" })
            ) + 
            Text.Space + // Add a vertical space
            Text.p(" Some more text ")
          )
        } as IRaw,
        //Container specific vertical space
        Container.VerticalSpace,
        //Image
        {
          ...Image.Default,//IMPORTANT
          Source: "my_cool_image.gif",
          AlternateText: "Cool Image"
        } as IImage,
        //Bulletproof Button
        {
          ...Button.Default//IMPORTANT
          //My Properties for button
        } as IButton,
        {
          ...Container.Default,
          BackgroundImage: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          Width: Unit.Pixels(400),
          Content: [
            Container.VerticalSpace,
            Container.VerticalSpace,
            Container.VerticalSpace,
            Container.VerticalSpace,
            Container.VerticalSpace,
            Container.VerticalSpace
          ]
        } as IContainer,
        //List example
        List([
          {
            ...Raw.Default, //IMPORTANT
            Content: (
              Text.p("Hello World")
            )
          } as IRaw,
          {
            ...Raw.Default, //IMPORTANT
            Content: (
              Text.p("Bye World")
            )
          } as IRaw
        ], "numbers", null, 5)
      ] as ITemplate[]
    } as IContainer,
    Container.VerticalSpace
  ] as ITemplate[]
} as IContainer

//Create a html document
const document = {
  ...Document.Default,//IMPORTANT
  BackgroundColor: Color.rgb(240, 240, 240),
  Title: "My Awesome Email",
  Content: [
    //Document specific vertical space
    Document.VerticalSpace,
    container,
    Document.VerticalSpace
  ]
} as IDocument

//save the document
Document.saveDocument(document, "index.html");
