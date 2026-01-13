import { useState, useRef } from "react";
import { employees } from "./data";

export default function EmployeeTable() {
  const originalDataRef = useRef(employees);
  const [data, setData] = useState(employees);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSort = (key) => {
    let direction = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    } else if (sortConfig.key === key && sortConfig.direction === "desc") {
      setSortConfig({ key: null, direction: null });
      setData(originalDataRef.current);
      return;
    }

    const sorted = [...data].sort((a, b) => {
      if (key === "joinDate") {
        return direction === "asc"
          ? new Date(a[key]) - new Date(b[key])
          : new Date(b[key]) - new Date(a[key]);
      }

      if (typeof a[key] === "number") {
        return direction === "asc" ? a[key] - b[key] : b[key] - a[key];
      }

      return direction === "asc"
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    });

    setSortConfig({ key, direction });
    setData(sorted);
  };

  const indicator = (key) =>
    sortConfig.key === key
      ? sortConfig.direction === "asc"
        ? " ↑"
        : " ↓"
      : "";

  return (
    <table border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>Name{indicator("name")}</th>
          <th onClick={() => handleSort("department")}>
            Department{indicator("department")}
          </th>
          <th onClick={() => handleSort("salary")}>
            Salary{indicator("salary")}
          </th>
          <th onClick={() => handleSort("joinDate")}>
            Join Date{indicator("joinDate")}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
            <td>${emp.salary.toLocaleString()}</td>
            <td>{emp.joinDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
