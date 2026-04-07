// I used chatgpt for some of this code, 

const assignments = [
    { name: "Assignment 1 — Getting to Know Each Other", link: "https://coltin14.github.io/Getting-To-Know-Each-Other/" },
    { name: "Assignment 2 — Resume", link: "https://jolly-stone-05ac6be10.4.azurestaticapps.net" },
    { name: "Assignment 3 — Dice Roller", link: "https://zealous-glacier-0ce124810.2.azurestaticapps.net" },
    { name: "Assignment 4 — Lion and Tigers", link: "https://jolly-field-0894e8710.2.azurestaticapps.net" },
    { name: "Assignment 5 — Web Dice Roller", link: "https://web-dice-roller-nodejs-fhggc7e2hyakdcep.centralus-01.azurewebsites.net" },
    { name: "Assignment 5 — Client", link: "https://happy-tree-01d1df610.4.azurestaticapps.net" },
    { name: "Assignment 6 — Health Insurance Risk Calculator", link: "https://agreeable-field-022eee810.1.azurestaticapps.net" }, 
    { name: "Assignment 6 — Server", link: "https://health-insurance-risk-calc-server-backlog-fngae6hphbgcchd8.centralus-01.azurewebsites.net" },
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
