// Function to update time and date
function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zero if needed
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Display time
    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds} ${ampm}`;

    // Display date
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    document.getElementById("date").textContent =
        now.toLocaleDateString(undefined, options);
}

// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);
