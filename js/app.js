var imgObserverOptions = {
    rootMargin: "0px 0px 50px 0px",
    threshold: 0,
};

var imgObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const src = entry.target.getAttribute("data-src");
        if (!src) return;
        entry.target.src = src;
        observer.unobserve(entry.target);
    });
}, imgObserverOptions);

var backgroundImgObserver = new IntersectionObserver(function (
    entries,
    observer
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const src = entry.target.getAttribute("data-background-src");
        if (!src) return;
        entry.target.style.backgroundImage = "url('" + src + "')";
        observer.unobserve(entry.target);
    });
},
imgObserverOptions);

$(function () {
    $("[data-src]").each(function (index, element) {
        imgObserver.observe(element);
    });
    $("[data-background-src]").each(function (index, element) {
        backgroundImgObserver.observe(element);
    });
    $("body").on("click", "[data-redirect-url]", function () {
        location.href = $(this).data("redirect-url");
    });
});