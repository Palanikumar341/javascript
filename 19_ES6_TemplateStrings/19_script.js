let employee = {
    empId : 455,
    name : 'John',
    age : 45,
    designation : 'Manager',
    company : 'Infosys'
};

let tableBody = document.querySelector('#t-body');

let strConcat = "<tr>" +
                    "<td>" + employee.empId +"</td>" + "\n" +
                    "<td>" + employee.name +"</td>" + "\n" +
                    "<td>" + employee.age +"</td>" + "\n" +
                    "<td>" + employee.designation +"</td>" + "\n" +
                    "<td>" + employee.company +"</td>" + "\n" +
                 "</tr>";

//tableBody.innerHTML = strConcat;

let templateString = `<tr>
                        <td>${employee.empId}</td>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.designation}</td>
                        <td>${employee.company}</td>
                      </tr>`;
tableBody.innerHTML = templateString;