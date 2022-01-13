// Custom cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Start.BTN - Hover effect
const btnStart = document.querySelector(".btnStart");
btnStart.addEventListener("mouseover", () => {
    cursor.classList.add("cursorHover");
});
btnStart.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursorHover");
});