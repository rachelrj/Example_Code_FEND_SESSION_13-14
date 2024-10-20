// Open with html.html

document.addEventListener("DOMContentLoaded", () => {
  // Create a parent element and add it to the body
  const parentElement = document.createElement("ul");
  parentElement.id = "parentElement";
  document.body.appendChild(parentElement);

  // Add some child elements to the parent element
  for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${i}`;
    parentElement.appendChild(listItem);
  }

  // Attach an event listener to the parent element
  document
    .getElementById("parentElement")
    .addEventListener("click", function (event) {
      if (event.target && event.target.matches("li")) {
        event.target.classList.toggle("green");
      } else {
        console.log("You clicked the ul, but not an li");
      }
    });

  console.log("Click on any list item to see the event delegation in action.");
});
