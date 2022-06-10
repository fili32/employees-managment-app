import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Employee } from "./components/types";
import { EmployeeList } from "./components/employeeList";
import axios from "axios";

const initialEmployees: Employee[] = [];
// const initialStateButtons: StateButton[] = [];

function App() {
  const [employees, setEmployees]: [
    Employee[],
    (employees: Employee[]) => void
  ] = useState(initialEmployees);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    axios
      .get<Employee[]>(`http://localhost:5000/employees`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setEmployees(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, []);

  const toggleState = (selectedEmployee: Employee, text: string) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee === selectedEmployee) {
        const id = selectedEmployee.id;
        axios
          .patch(`http://localhost:5000/employees/${id}`, { state: text })
          .then((response) => {
            console.log("response.data", response.data);
            return response.data;
          });

        return { ...employee, state: text };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };
  console.log(employees);

  return (
    <React.Fragment>
      {!loading && (
        <EmployeeList employees={employees} toggleState={toggleState} />
      )}
      {error && <p className="error">{error}</p>}
    </React.Fragment>
  );
}

export default App;
