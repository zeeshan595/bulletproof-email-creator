export default interface IImage {
  Source: string;
  AlternateText: string;
  Width: number | null;
  Height: number | null;
}

export const Default: IImage = {
  Source: "https://www.scottishpower.co.uk/assets/images/global/logo/sp_logo.jpg",
  AlternateText: "scottish power",
  Width: null,
  Height: null
};

export const toString = (image: IImage): string => {
  let widthAtr = "";
  let widthSty = "";
  if (image.Width) {
    widthAtr = ' width="' + image.Width + '" ';
    widthSty = " width: " + image.Width + "; ";
  }

  let heightAtr = "";
  let heightSty = "";
  if (image.Height) {
    heightAtr = ' height="' + image.Height + '" ';
    heightSty = " height: " + image.Height + "; ";
  }

  return (
    "<img " +
    widthAtr +
    heightAtr +
    ' alt="' +
    image.AlternateText +
    '" ' +
    ' src="' +
    image.Source +
    '" ' +
    'style="' +
    widthSty +
    heightSty +
    '" />'
  );
}