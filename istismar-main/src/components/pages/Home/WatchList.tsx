import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Employee} from './Employee';

interface Employee {
  id: number;
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Employee[]>('http://127.0.0.1:8000/api/getting/getting/');
        console.log(response.data)
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
        // Handle the error appropriately (e.g., show an error message)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Employee List</h1>
      {employees.length > 0 ? (
        employees.map((employee) => (
          <Employee
            key={employee.id}
            title={employee.title} // Assuming title exists in the response
            description={employee.description}
          />
          // <Employee key={employee.id} employee={employee} />
        ))
      ) : (
        <p>Loading employees...</p>
      )}
    </div>
  );
};

export default App;
