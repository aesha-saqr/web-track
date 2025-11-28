const toggleBtn = document.getElementById("toggleBtn");
const darkBtn = document.getElementById("darkBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// Toggle Sidebar (Open/Close)
toggleBtn.addEventListener("click", () => {
    const isOpen = sidebar.classList.contains("open"); // check if sidebar is open

    if (isOpen) {
        sidebar.classList.remove("open");
        overlay.classList.remove("show");
    } else {
        sidebar.classList.add("open");
        overlay.classList.add("show");
    }
});

// Close Sidebar with X button
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
});

// Close Sidebar by clicking overlay
overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
});

// Dark Mode Toggle
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkBtn.textContent = "☀️";
    } else {
        darkBtn.textContent = "🌙";
    }
});
