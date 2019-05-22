import ITemplate from "./template";

export default interface IRaw extends ITemplate {
  toString: (raw: IRaw) => string;
  Content: string;
}

export const Default: IRaw = {
  toString: (raw: IRaw) => raw.Content,
  Content: ""
}