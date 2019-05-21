enum IAlignment {
  //Horizontal
  Inherit = 0,
  Left = "left",
  Center = "center",
  Right = "right",
  //Vertical
  Top = "top",
  Middle = "middle",
  Bottom = "bottom"
};
export default IAlignment;

export const toString = (align: IAlignment, name: string, type: "attribute" | "style") => {
  if (align == IAlignment.Inherit) {
    return "";
  }

  if (type == "attribute") {
    return ' ' + name + '="' + align.toString() + '" ';
  } else if (type == "style") {
    return " " + name + ": " + align.toString() + "; ";
  }
}