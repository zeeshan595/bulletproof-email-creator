export default interface ITemplate {
  toString: (data: ITemplate) => string;
};

export const toString = (template: ITemplate[]) => {
  let rtn = "";
  for (let i = 0; i < template.length; i++) {
    rtn += template[i].toString(template[i]);
  }
  return rtn;
}