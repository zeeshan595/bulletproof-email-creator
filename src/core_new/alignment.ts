enum EAlignment {
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
export default EAlignment;

export const toString = (align: EAlignment, name: string, type: "attribute" | "style") => {
  if (align == EAlignment.Inherit) {
    return "";
  }

  if (type == "attribute") {
    return ' ' + name + '="' + align.toString() + '" ';
  } else if (type == "style") {
    return " " + name + ": " + align.toString() + "; ";
  }
}