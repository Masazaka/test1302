function startCountdown(targetDate) {
    function updateCountdown() {
        let now = new Date().getTime();
        let timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            document.getElementById("timer").innerHTML = "Hết giờ!";
            clearInterval(interval);
            return;
        }

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = 
            `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
    }

    let interval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Đặt thời gian đếm ngược đến ngày 27/3 lúc 3 giờ sáng
let countdownDate = new Date("2025-03-27T03:00:00").getTime();
startCountdown(countdownDate);