// Get the sidebar

// Get the sidebar
const getSidebar = () => {
  var sidebarButton = document.querySelector("#sidebarButton"); // Removed '#' from the element ID
  var sidebarOpen = document.querySelector("#list"); // Removed '#' from the element ID

  // Check if the sidebar elements exist
  if (sidebarButton || sidebarOpen) {
    // Add a class to the sidebar to make it responsive
    sidebarButton.addEventListener("click", () => {
      sidebarOpen.classList.toggle("isHidden");
    });
  }
};

const windowResizer = () => {
  var sidebarPc = document.getElementById("sidebarPc"); // Removed '#' from the element ID
  var sidebarMobile = document.querySelector("#sidebarMobile"); // Removed '#' from the element ID

  // Check if the sidebar elements exist
  if (sidebarPc || sidebarMobile) {
    // Check if the window width is less than a certain value (e.g., 768px)
    console.log("Window resized", window.innerWidth);
    if (window.innerWidth < 768) {
      // Add a class to the sidebar to make it responsive
      sidebarPc.style.display = "none"; // Hide the sidebar on smaller screens
      sidebarMobile.style.display = "block"; // Show the sidebar on smaller screens
    } else {
      // Remove the responsive class from the sidebar
      sidebarPc.style.display = "flex"; // Show the sidebar on larger screens
      sidebarMobile.style.display = "none"; // Hide the sidebar on larger screens
    }
  }
};

windowResizer();
getSidebar();

window.addEventListener("load", () => {
  windowResizer();
  getSidebar();
});

// Add event listener to window resize
window.addEventListener("resize", windowResizer);

// add event listener to window resize

