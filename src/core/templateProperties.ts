export default class TemplateProperties {
  name: string;
  func: () => {};

  constructor(fields?: TemplateProperties) {
    Object.assign(this, fields);
  }

  toString() {
    return this.func();
  }
}
