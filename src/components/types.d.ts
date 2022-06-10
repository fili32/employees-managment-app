export interface StateButton {
  text: string;
  active: boolean;
}

export interface Employee {
  id: number;
  name: string;
  state: string;
}

export type SetState = StateButton.text;
export type ToggleState = (Employee, text: string) => void;
