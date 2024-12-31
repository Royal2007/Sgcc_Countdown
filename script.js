var targetDate = new Date('2025-01-01T00:00:00'); // New Year's Eve 2025

setInterval(function(){
    var currentDate = new Date();
    var timeLeft = targetDate - currentDate;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    
    function formatTimeWithZero(num) {
        return num < 10 ? '0' + num : num; 
    }

    // Update HTML with formatted time
    document.getElementById("days").innerHTML = formatTimeWithZero(days);
    document.getElementById("hours").innerHTML = formatTimeWithZero(hours);
    document.getElementById("minutes").innerHTML = formatTimeWithZero(minutes);
    document.getElementById("seconds").innerHTML = formatTimeWithZero(seconds);
    
    document.getElementById("end-date").innerHTML = targetDate;

    var secondsElement = document.getElementById("seconds");

    if (timeLeft > 0 && timeLeft <= 30000) {
        secondsElement.classList.add('warning');
    } else {
        secondsElement.classList.remove('warning');
    }

    if (timeLeft <= 0){
        
        document.getElementById("message").innerHTML = "Welcome to 2025!!";
        clearInterval(this); 
    }

    var formattedTargetDate = targetDate.toLocaleString(); 
    document.getElementById("end-date").innerHTML = formattedTargetDate;

}, 1000);
