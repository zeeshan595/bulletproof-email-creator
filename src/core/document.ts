import Template from "./template";
import Color from "./color";
import * as fs from "fs";
import Unit from "./unit";

export default class Document extends Template {
  Title: string = "Scottish Power";
  BackgroundColor: Color = Color.White;
  Content: Template[] = [];
  FontSize: Unit = Unit.Pixels(15);

  constructor(fields?: Document) {
    super();
    Object.assign(this, fields);
  }

  saveDocument(file: string) {
    const processedDocument = this.toString().replace(
      /\<tr\>[\s]*\<td\>[\s]*\<\/td\>[\s]*\<\/tr\>/g,
      ""
    );
    fs.writeFileSync("build/" + file, processedDocument, "utf-8");
  }

  _rawHTML =
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html  xmlns="http://www.w3.org/1999/xhtml"  xmlns:o="urn:schemas-microsoft-com:office:office"  xmlns:v="urn:schemas-microsoft-com:vml">  <head>    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />    <title>{Title}</title>    <meta content="width=device-width, initial-scale=1.0" name="viewport" />    <style type="text/css">      body {font-family: Arial, Helvetica, sans-serif;margin: 0;' +
    this.FontSize.GetUnitCSS("font-size") +
    '}    </style>  </head>  <body    style="background-color: {BackgroundColor}; font-family: Arial, Helvetica, sans-serif; margin: 0;"    bgcolor="{BackgroundColor}"  >    {EmailPreheader} <br />    <br />    {Content} <br />    <br />    {Attachments}{MessageOpen}  </body></html>';
}
