!function() {
    window;
    const e = document.documentElement;
    if (e.classList.remove("no-js"), e.classList.add("js"), true) {
        (window.sr = ScrollReveal()).reveal(".reveal-on-scroll", {
            duration: 600,
            distance: "20px",
            easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
            origin: "left",
            interval: 100
        })
    }
}();