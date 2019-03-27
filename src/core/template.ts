import TemplateProperties from "./templateProperties";

export default class Template {
  protected _rawHTML: string = "";
  protected _properties: TemplateProperties[] = [];

  toString(): string {
    var rtn: string = this._rawHTML;
    Object.keys(this).forEach(key => {
      if (key == "_rawHTML") return;
      rtn = this.UpdateKeyWithContent(key, this[key], rtn);
    });
    this._properties.forEach(prop => {
      rtn = this.UpdateKeyWithContent(prop.name, prop.func(), rtn);
    });
    return rtn;
  }

  UpdateKeyWithContent(key: string, content: any, data: string) {
    const htmlKey = "{" + key + "}";
    let infLoopBreaker = 0;
    while (data.indexOf(htmlKey) != -1) {
      if (content instanceof Array) {
        data = data.replace(htmlKey, content.join(""));
      } else {
        data = data.replace(htmlKey, content.toString());
      }

      if (infLoopBreaker > 1000) {
        console.error(
          "Trying to replace the same content over 1k times. Are you doing something wrong?"
        );
        break;
      }
      infLoopBreaker++;
    }

    return data;
  }
}
