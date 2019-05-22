import IContainer, * as Container from "./container";
import IUnit, * as Unit from "./unit";

export default interface ICell extends IContainer {

}

export const Default: ICell = {
  ...Container.Default,
  Width: Unit.Percent(100)
}