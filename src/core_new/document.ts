import IColor, * as Color from "./color";
import IUnit, * as Unit from "./unit";
import ITemplate, * as Template from "./template";

export default interface Document {
  Title?: string;
  BackgroundColor?: IColor;
  FontSize?: IUnit;
  Content?: ITemplate[];
};

export const Default: Document = {
  Title: "Scottish Power",
  BackgroundColor: Color.Black,
  FontSize: Unit.Pixels(15),
  Content: []
}

export const toString = (document: Document) => {
  let rtn = "";
  rtn += '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html  xmlns="http://www.w3.org/1999/xhtml"  xmlns:o="urn:schemas-microsoft-com:office:office"  xmlns:v="urn:schemas-microsoft-com:vml">  <head>    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />    <title>';
  rtn += document.Title;
  rtn += '</title>    <meta content="width=device-width, initial-scale=1.0" name="viewport" />    <style type="text/css"> a{text-decoration: none;} sup,sub{line-height: 0;}  body {font-family: Arial, Helvetica, sans-serif;margin: 0;';
  rtn += Unit.toString(document.FontSize, "font-size", "style");
  rtn += '}    </style>  </head>  <body    style="';
  rtn += Color.toString(document.BackgroundColor, 'background-color', 'style');
  rtn += 'line-height: 22px; font-family: Arial, Helvetica, sans-serif; margin: 0;"';
  rtn += Color.toString(document.BackgroundColor, "bgcolor", "attribute");
  rtn +='>    {EmailPreheader} <br /> ';
  rtn += Template.toString(document.Content);
  rtn += ' <br />    <br />    {Attachments}{MessageOpen}  </body></html>';
  return rtn;
}