import React from 'react';

// Assuming props are passed correctly from the parent component
export const Employee = ({ title, description }: { title: string; description: string }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

  

export const Person = ({ first_name, last_name,contentPost }: { first_name: string;
     last_name: string, contentPost:string}) => {
    return (
        <div>
            <h1>{first_name}</h1>
            <p>{last_name}</p>
            <p>{contentPost}</p>

        </div>
    );
};



// import React from 'react';
// const Employee = ({ employee  } : any ) => {
//     // Check if 'title' and 'description' exist
//     if (!employee.title || !employee.description) {
//       return <p>Employee data not available yet</p>; // Or display a placeholder
//     // }
  
//     return (
//       <div>
//         <h2>{employee.title}</h2>
//         <h3>{employee.description}</h3>
//       </div>
//     );
//   };

// export default Employee;