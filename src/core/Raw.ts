import Template from "./template";
import Hyperlink from "./hyperlink";
import Alignment from "./alignment";
import Color from "./color";
import Unit from "./unit";

export default class Raw extends Template {
  Content: string = "";

  constructor(text: string) {
    super();
    this.Content = text;
  }

  _rawHTML = "{Content}";
}
