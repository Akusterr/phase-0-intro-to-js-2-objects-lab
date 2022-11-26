

const employee = {
    name: "Charles Wooley",
    streetAddress: "103 10th Ave Belmar NJ 07719",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = {...employee};
    newEmployee[key]= value;
    return(newEmployee);
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value;
    return(employee);
}

function deleteFromEmployeeByKey(employee, key) {
    let deleteEmployee = {...employee};
    delete deleteEmployee[key];
    return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return (employee);
}

