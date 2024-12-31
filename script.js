var targetDate = new Date('2025-01-01T00:00:00'); // New Year's Eve 2025

// Store the interval ID
var countdownInterval = setInterval(function () {
    var currentDate = new Date();
    var timeLeft = targetDate - currentDate;

    // Calculate time units
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Format time with leading zero
    function formatTimeWithZero(num) {
        return num < 10 ? '0' + num : num;
    }

    // Update HTML with formatted time
    document.getElementById("days").textContent = formatTimeWithZero(days);
    document.getElementById("hours").textContent = formatTimeWithZero(hours);
    document.getElementById("minutes").textContent = formatTimeWithZero(minutes);
    document.getElementById("seconds").textContent = formatTimeWithZero(seconds);

    // Add or remove warning class
    var secondsElement = document.getElementById("seconds");
    if (timeLeft > 0 && timeLeft <= 30000) {
        secondsElement.classList.add('warning');
    } else {
        secondsElement.classList.remove('warning');
    }

    // Display the target date
    document.getElementById("end-date").textContent = targetDate.toLocaleString();

    // Stop the timer when countdown ends
    if (timeLeft <= 0) {
        clearInterval(countdownInterval); // Use the interval ID
        document.getElementById("message").textContent = "Welcome to 2025!!";

        // Reset all timer elements to 00
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    }
    var formattedTargetDate = targetDate.toLocaleString(); 
    document.getElementById("end-date").innerHTML = formattedTargetDate;
}, 1000);
