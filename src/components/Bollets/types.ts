export interface IProps {
  items: any[];
  active: number;
  onBolletClick: (idx: number) => () => void;
}
