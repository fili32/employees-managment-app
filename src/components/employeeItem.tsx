import React, { useState } from "react";
import { EmployeeState } from "./employeeState/employeeState";
import { StateButton, Employee, ToggleState } from "./types";

const theStates: StateButton[] = [
  {
    text: "ADDED",
    active: true,
  },
  {
    text: "IN-CHECK",
    active: false,
  },
  {
    text: "APPROVED",
    active: false,
  },
  {
    text: "ACTIVE",
    active: false,
  },
  {
    text: "INACTIVE",
    active: false,
  },
];

interface Props {
  employee: Employee;
  toggleState: ToggleState;
}

export const EmployeeItem: React.FC<Props> = ({ employee, toggleState }) => {
  const initialStateButtons = theStates.map((theState) => {
    if (theState.text === employee.state) {
      return {
        ...theState,
        active: true,
      };
    }
    return {
      ...theState,
      active: false,
    };
  });

  const [stateButtons, setStateButtons] = useState(initialStateButtons);
  const setState = (selectedStateButton: StateButton["text"]) => {
    const newStateButtons = stateButtons.map((stateButton) => {
      if (stateButton.text === selectedStateButton) {
        return {
          ...stateButton,
          active: true,
        };
      }
      return {
        ...stateButton,
        active: false,
      };
    });
    setStateButtons(newStateButtons);
  };

  return (
    <>
      <td>{employee.name}</td>
      <td>
        <EmployeeState
          employee={employee}
          stateButtons={stateButtons}
          setState={setState}
          toggleState={toggleState}
        />
      </td>
    </>
  );
};
