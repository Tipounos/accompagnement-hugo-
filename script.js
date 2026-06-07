window.odometerOptions = {
  auto: true, // Don't automatically initialize everything with class 'odometer'
  selector: '.odometer', // Change the selector used to automatically find things to be animated
  format: '(,ddd)', // Change how digit groups are formatted, and how many digits are shown after the decimal point
  duration: 3000, // Change how long the javascript expects the CSS animation to take
};

document.addEventListener("DOMContentLoaded", () => {
    // Number effect

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.innerHTML = entry.target.dataset.number;
            observer.unobserve(entry.target);
        }
    });
    });

    document.querySelectorAll(".number-animate").forEach(stat => {
        observer.observe(stat);
    });

    const heroTw = createTypewriter(document.getElementById("heroTypewriter"), {
        texts: ["même si tu débutes", "même si tu n'as pas beaucoup de budget", "même si tu n'as pas encore de clients", "même si tu as peu de temps"],
        highlights: ["débutes", "budget", "clients", "temps"],
        highlightColor: "--accent",
        highlightClass: "accent",
        pauseAfterType: 600,
        typeSpeed: 50,
    })

    // VSL player

    const vslPlayer = createVideoPlayer(document.getElementById("vsl"), {
        src: "https://youtu.be/PO-BS5-K4io?si=LlylM41QvZhSawks",
        autoplay: true,
    })
})    