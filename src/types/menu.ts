import ERoutes from "../routes";
import { IconType } from "react-icons";

export enum EMenuItemType {
  primary = "primary",
  secondary = "secondary",
}

export interface IMenuItemButtonProps {
  icon: IconType;
  text: string;
  type?: EMenuItemType,
  onClick?: React.MouseEventHandler<HTMLDivElement> & React.MouseEventHandler<HTMLButtonElement>,
}

export interface IMenuItemProps extends IMenuItemButtonProps {
  path: ERoutes;
}