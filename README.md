#Credit
I used ChatGpt for some help with the main.js section, more specifically this: assignments.forEach(item => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = item.link;
    a.target = "_blank";
    a.textContent = item.name;

    li.appendChild(a);
    list.appendChild(li);
});

While I had it do this I also learned what it does. 

This code loops through the assignments, creates a link for the assignment, places the link in the list item, and then it adds the item to the webpage so all assignments appear as a list and create a new tab with that link.
