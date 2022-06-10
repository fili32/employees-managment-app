import React from "react";
import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";
import { Employee, StateButton, ToggleState, SetState } from "../types";
import "./employeeState.css";

interface Props {
  stateButtons: Array<StateButton>;
  employee: Employee;
  toggleState: ToggleState;
  setState: SetState;
}

export const EmployeeState: React.FC<Props> = ({
  stateButtons,
  employee,
  toggleState,
  setState,
}) => {
  return (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        {stateButtons.map((stateButton, index) => {
          return (
            <Button
              key={index}
              className={stateButton.active ? "active" : ""}
              onClick={() => {
                setState(stateButton.text);
                toggleState(employee, stateButton.text);
              }}
            >
              <span>{stateButton.text}</span>
            </Button>
          );
        })}
      </ButtonGroup>
    </ButtonToolbar>
  );
};
