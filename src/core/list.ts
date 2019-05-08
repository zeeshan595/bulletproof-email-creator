import Template from "./template";
import Grid from "./grid";
import Cell from "./cell";
import Image from "./image";
import Alignment from "./alignment";
import Text from "./text";
import Unit from "./unit";

class List extends Grid {
  constructor(content: Cell[], gridOptions?: Grid) {
    super({
      ...gridOptions
    } as Grid);
    for (let i = 0; i < content.length; i++) {
      let row: Cell[] = [
        new Cell({
          VerticalAlignment: Alignment.Top,
          Content: [
            new Image({
              Source: "https://www.scottishpower.co.uk/content/images/bullet.png",
              AltText: "list-bullet"
            } as Image)
          ] as Template[]
        } as Cell),
        content[i]
      ];
      this.Cells.push(row);
    }
  }

  static UnorderedList = (content: string[], options?: Grid): List => {
    const cells: Cell[] = [];
    for (let i = 0; i < content.length; i++)
      cells.push(
        new Cell({
          Content: [Text.P(content[i])] as Template[]
        } as Cell)
      );
    return new List(cells, {
      Width: Unit.Percent(100),
      ...options
    } as Grid);
  };
}

export default List;
