let insertionPoint = document.getElementById("attendedOnRoster");

let container = document.createElement("div");
container.style.padding = "30px";
container.style.backgroundColor = "#e2e1e1";
container.style.marginBottom = "30px";

let heading = document.createElement("h4");
heading.innerHTML =
  "Start typing a first or last name in the box below to filter the roster list.";

let text = document.createElement("input");
text.setAttribute("type", "text");
text.classList.add("search-text");
text.classList.add("form-control");
text.style.width = "20%";
text.style.fontSize = "14px";

text.addEventListener("keyup", (e) => {
  e.preventDefault();
  let students = document.querySelectorAll("table.table tr.greyBackground");
  let searchText = document.querySelector(".search-text").value;
  for (let x = 0; x < students.length; x++) {
    let nameElement = students[x].querySelector("td h3");
    let name = nameElement.innerHTML;
    let nameLower = name.toLowerCase();
    let namesHidden = 0;
    if (nameLower.search(searchText.toLowerCase()) === -1) {
      students[x].style.display = "none";
      namesHidden++;
    } else {
      students[x].style.display = "table-row";
    }

    if (students.length === namesHidden) {
    }
  }
});

container.appendChild(heading);
container.appendChild(text);

insertionPoint.parentNode.insertBefore(container, insertionPoint.nextSibling);
