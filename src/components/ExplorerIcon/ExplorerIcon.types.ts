export interface ExplorerIconProps {
  isDir: boolean;
  name: string;
  fullPath: string;
}

export type UseExplorerIcon = (
  isDir: boolean,
  fullPath: string,
) => {
  handleClick: () => void;
  currentSelection: string;
};
