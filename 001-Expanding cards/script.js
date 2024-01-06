// selecting all the flex items using querySelectorAll. It will give node list
const panels = document.querySelectorAll(".panel");

// looping through the panels to select each panel
panels.forEach((panel) => {
  // adding event listner-click
  panel.addEventListener("click", () => {
    // 01 - on click remove the active class on all panels.
    removeActiveClass();
    // 02 - Then, add the active class on clicked panel
    panel.classList.add("active");
  });
});

// creating function to remove active class.
function removeActiveClass() {
  // looping the panels
  panels.forEach((panel) => {
    // classList will give you all the classes of css. Then you can perform operations.
    // Removing the active class from each panel
    panel.classList.remove("active");
  });
}
