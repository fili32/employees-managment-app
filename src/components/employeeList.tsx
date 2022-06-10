import React from "react";
import { Employee, StateButton, ToggleState, SetState } from "./types";
import { EmployeeItem } from "./employeeItem";
import { Table } from "react-bootstrap";

interface EmployeeListProps {
  employees: Array<Employee>;
  toggleState: ToggleState;
}

export const EmployeeList: React.FC<EmployeeListProps> = ({
  employees,
  toggleState,
}) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <EmployeeItem employee={employee} toggleState={toggleState} />
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
