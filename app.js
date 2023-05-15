//CHAPTER 43 to 48

// Q1

// Q2

// Q3
// function deleteRow(button) {
//     var row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
//   }

// Q4


// Q5
// var counter = 0;
// var counterElement = document.getElementById("counter");

// function increaseCounter() {
//     counter++;
//     counterElement.textContent = counter;
// }

// function decreaseCounter() {
//     if (counter > 0) {
//         counter--;
//         counterElement.textContent = counter;
//     }
// }







//CHAPTER 49 to 52

// Q1
// var form = document.getElementById("signupForm");
// var formDataElement = document.getElementById("formData");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     formDataElement.innerHTML = "<p>Name: " + name + "</p><p>Email: " + email + "</p>";
//     form.reset();
// });

// Q2
// var itemDetails = document.getElementById("itemDetails");
// var fullDetailsVisible = false;
// var fullDetails = "Full item details...";

// function showFullDetails() {
//     if (fullDetailsVisible) {
//         itemDetails.innerHTML = `
//                     <h3>Item Title</h3>
//                     <p>${fullDetails}</p>
//                     <button onclick="showTruncatedDetails()">Read less</button>
//                   `;
//         fullDetailsVisible = false;
//     } else {
//         itemDetails.innerHTML = `<h3>Item Title</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique enim in urna auctor lobortis.</p>
//             <button onclick="showFullDetails()">Read more</button>`;
//         fullDetailsVisible = true;
//     }
// }

// Q3
// var studentForm = document.getElementById("studentForm");
// var studentTable = document.getElementById("studentTable");
// var editForm = document.getElementById("editForm");

// studentForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     var name = document.getElementById("name").value;
//     var grade = document.getElementById("grade").value;
//     addStudent(name, grade);
//     studentForm.reset();
// });

// function addStudent(name, grade) {
//     var row = document.createElement("tr");
//     var nameCell = document.createElement("td");
//     nameCell.textContent = name;
//     var gradeCell = document.createElement("td");
//     gradeCell.textContent = grade;
//     var actionCell = document.createElement("td");
//     var deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", function () {
//         deleteStudent(row);
//     });
//     var editButton = document.createElement("button");
//     editButton.textContent = "Edit";
//     editButton.addEventListener("click", function () {
//         editStudent(row);
//     });
//     actionCell.appendChild(deleteButton);
//     actionCell.appendChild(editButton);
//     row.appendChild(nameCell);
//     row.appendChild(gradeCell);
//     row.appendChild(actionCell);
//     studentTable.appendChild(row);
// }

// function deleteStudent(row) {
//     row.parentNode.removeChild(row);
// }

// function editStudent(row) {
//     var name = row.children[0].textContent;
//     var grade = row.children[1].textContent;
//     var editName = document.getElementById("editName");
//     var editGrade = document.getElementById("editGrade");
//     editName.value = name;
//     editGrade.value = grade;
//     editForm.style.display = "block";
//     editForm.dataset.rowIndex = row.rowIndex;
// }

// function updateStudent() {
//     var rowIndex = parseInt(editForm.dataset.rowIndex);
//     var row = studentTable.rows[rowIndex];
//     var name = document.getElementById("editName").value;
//     var grade = document.getElementById("editGrade").value;
//     row.children[0].textContent = name;
//     row.children[1].textContent = grade;
//     editForm.style.display = "none";
// }

// function cancelEdit() {
//     editForm.style.display = "none";
// }
