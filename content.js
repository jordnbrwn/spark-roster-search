let insertionPoint = document.getElementById("attendedOnRoster"); // We will insert our filter box after this element

// Create a div to keep everything in & style it
let container = document.createElement("div");
container.style.padding = "30px";
container.style.backgroundColor = "#e2e1e1";
container.style.marginBottom = "30px";

// Just a little heading to let the user know how to use it
let heading = document.createElement("h4");
heading.innerHTML =
  "Start typing a first or last name in the box below to filter the roster list.";

// Create the input box that allows people to use to filter
let text = document.createElement("input");
text.setAttribute("type", "text");
text.classList.add("search-text");
text.classList.add("form-control");
text.style.width = "20%";
text.style.fontSize = "14px";

text.addEventListener("keyup", (e) => {
  e.preventDefault();

  let students = document.querySelectorAll("table.table tr.greyBackground"); // Get the rows that contain students
  let searchText = document.querySelector(".search-text").value; // Get the input box

  for (let x = 0; x < students.length; x++) {
    let nameElement = students[x].querySelector("td h3"); // DOM Element that contains the student
    let nameLower = nameElement.innerHTML.toLowerCase(); // String containing student name in lower case
    let namesHidden = 0; // How many names we have hidden

    if (nameLower.search(searchText.toLowerCase()) === -1) {
      // -1 if nothing found | all other values means the characters were found
      students[x].style.display = "none"; // Hide the students who don't match up with the what the user typed
      namesHidden++; // Increment the number of students
    } else {
      students[x].style.display = "table-row"; // Show those students who meet the criteria
    }

    if (students.length === namesHidden) {
      // FIXME: If there are no students showing, display a message
    }
  }
});

container.appendChild(heading); // Insert the heading into the div
container.appendChild(text); // Insert the INPUT field into the div

insertionPoint.parentNode.insertBefore(container, insertionPoint.nextSibling); // Add all elements to the DOM just after insertion point
