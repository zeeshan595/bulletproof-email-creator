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

  switch (name) {
    case "align":
    case "text-align":
      if (
        align == EAlignment.Top ||
        align == EAlignment.Middle ||
        align == EAlignment.Bottom
      ) {
        throw Error("You are trying to use vertical alignment on a field that only accepts horizontal aligments");
      }
      break;
    case "valign":
    case "vertical-align":
      if (
        align == EAlignment.Left ||
        align == EAlignment.Center ||
        align == EAlignment.Right
      ) {
        throw Error("You are trying to use horizontal alignment on a field that only accepts vertical alignments");
      }
      break;
  }

  if (type == "attribute") {
    return ' ' + name + '="' + align.toString() + '" ';
  } else if (type == "style") {
    return " " + name + ": " + align.toString() + "; ";
  }
}