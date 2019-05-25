import ITemplate from "./template";
import IRaw, * as Raw from "./raw";
import IText, * as Text from "./text";
import IGrid, * as Grid from "./grid";
import ICell, * as Cell from "./cell";
import IUnit, * as Unit from "./unit";
import IContainer, * as Container from "./container";

export interface IList extends ITemplate {
  toString: (list: IList) => string;
  Content: ITemplate[];
  Text: IText;
  HorizontalSpacing: number;
  VerticalSpacing: number;
  StartingOrder: number;
  Type: "numbers" | "bullets";
}

export const Default: IList = {
  toString: (list) => {
    const cells: ICell[][] = [];
    for (let i = 0; i < list.Content.length; i++) {
      let str = "";
      switch (list.Type) {
        case "numbers":
          str = (i + list.StartingOrder).toString();
          break;
        case "bullets":
          str = "&#8226;";
          break;
      }
      cells.push([
        {
          ...Cell.Default,
          Content: [
            {
              ...Raw.Default,
              Content: (
                Text.span(str, list.Text)
              )
            } as IRaw
          ]
        },
        {
          ...Cell.Default,
          Width: Unit.Pixels(list.HorizontalSpacing)
        },
        {
          ...Cell.Default,
          Content: [
            list.Content[i]
          ]
        }
      ]);
      const verticalSpace: ITemplate[] = [];
      for (let j = 0; j < list.VerticalSpacing; j++) {
        verticalSpace.push(Container.VerticalSpace);
      }
      if (i + 1 != list.Content.length && list.VerticalSpacing != 0) {
        cells.push([
          {
            ...Cell.Default,
            Content: verticalSpace
          },
          {
            ...Cell.Default,
            Content: verticalSpace
          },
          {
            ...Cell.Default,
            Content: verticalSpace
          }
        ]);
      }
    }
    const grid = {
      ...Grid.Default,
      Cells: cells
    } as IGrid;
    return grid.toString(grid);
  },
  Content: [],
  Text: {
    ...Text.Default
  },
  HorizontalSpacing: 10,
  VerticalSpacing: 0,
  StartingOrder: 1,
  Type: "bullets"
}

export const Create = (
  content: ITemplate[],
  type?: "numbers" | "bullets",
  text?: IText,
  startingOrder?: number,
  horizontalSpace?: number,
  verticalSpace?: number
): IList => {
  if (!verticalSpace && verticalSpace != 0) {
    verticalSpace = Default.VerticalSpacing;
  }
  if (!horizontalSpace && horizontalSpace != 0) {
    horizontalSpace = Default.HorizontalSpacing;
  }
  if (!text) {
    text = Default.Text;
  }
  if (!startingOrder) {
    startingOrder = Default.StartingOrder;
  }
  if (!type) {
    type = Default.Type;
  }

  return ({
    ...Default,
    Content: content,
    Type: type,
    Text: text,
    StartingOrder: startingOrder,
    HorizontalSpacing: horizontalSpace,
    VerticalSpacing: verticalSpace
  })
};