const assignments = [
    { name: "Assignment 1 — Getting to Know Each Other", link: "https://coltin14.github.io/Getting-To-Know-Each-Other/" },
    { name: "Assignment 2 — Resume", link: "https://jolly-stone-05ac6be10.4.azurestaticapps.net" },
    { name: "Assignment 3 — Dice Roller", link: "https://zealous-glacier-0ce124810.2.azurestaticapps.net" },
    { name: "Assignment 4 — Lion and Tigers", link: "https://jolly-field-0894e8710.2.azurestaticapps.net" },
    { name: "Assignment 5 — Will update soon", link: "#" }
];

const list = document.getElementById("assignment-list");

assignments.forEach(item => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = item.link;
    a.target = "_blank";
    a.textContent = item.name;

    li.appendChild(a);
    list.appendChild(li);
});
