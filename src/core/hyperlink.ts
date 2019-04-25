import Template from "./template";
import Color from "./color";
import Text from "./text";

export default class Hyperlink extends Template {
  Content: Template[];
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
      this.Content.join("") +
      "</a>"
    );
  }

  static A(href: string, content: string = ""): string {
    if (content == "")
      return new Hyperlink({
        Href: href,
        Content: [ Text.P(href) ] as Template[]
      } as Hyperlink).toString();

    return new Hyperlink({
      Href: href,
      Content: [ Text.P(href) ] as Template[]
    } as Hyperlink).toString();
  }

  static Link(href: string, content: Template[]): Hyperlink {
    return new Hyperlink({
      Href: href,
      Content: content
    } as Hyperlink);
  }
}
