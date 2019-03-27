enum Alignment {
  //Horizontal
  Inherit = 0,
  Left = "left",
  Center = "center",
  Right = "right",
  //Vertical
  Top = "top",
  Middle = "middle",
  Bottom = "bottom"
}

const errorChecking = (type: "vertical" | "horizontal", data: Alignment) => {
  if (type == "vertical") {
    if (
      data == Alignment.Left ||
      data == Alignment.Right ||
      data == Alignment.Center
    ) {
      throw Error("Trying to use horizontal alignments for a vertical field");
    }
  } else if (type == "horizontal") {
    if (
      data == Alignment.Top ||
      data == Alignment.Bottom ||
      data == Alignment.Middle
    ) {
      throw Error("Trying to use vertical alignments for a horizontal field");
    }
  }
};

export default Alignment;
export const GetAlignAttribute = (
  name: string,
  type: "vertical" | "horizontal",
  data: Alignment
) => {
  if (data == Alignment.Inherit) return "";
  errorChecking(type, data);
  return name + '="' + data.toString() + '"';
};

export const GetAlignCSS = (
  name: string,
  type: "vertical" | "horizontal",
  data: Alignment
) => {
  if (data == Alignment.Inherit) return "";
  errorChecking(type, data);
  return name + ": " + data.toString() + ";";
};
