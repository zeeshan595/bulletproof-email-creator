import Template from "./template";
import Color from "./color";

export default class Hyperlink extends Template {
  Content: string = "";
  Href: string = "";
  TextColor: Color = new Color({
    R: 92,
    G: 136,
    B: 26
  } as Color);

  constructor(fields?: Hyperlink) {
    super();
    Object.assign(this, fields);
  }

  toString(): string {
    return (
      '<a href="' +
      this.Href +
      '" style="' +
      this.TextColor.GetColorCSS("color") +
      '">' +
      this.Content +
      "</a>"
    );
  }

  static A(href: string, content: string = ""): string {
    if (content == "")
      return (new Hyperlink({
        Href: href,
        Content: href
      } as Hyperlink)).toString();

    return (new Hyperlink({
      Href: href,
      Content: content
    } as Hyperlink)).toString();
  }

}
