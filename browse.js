new Splide(".splide").mount();

document.addEventListener("DOMContentLoaded", function() {
    var thumbnails = new Splide("#thumbnail-slider", {
        fixedWidth: 400,
        fixedHeight: 300,
        gap: 10,
        rewind: true,
        pagination: true,
        cover: true,
        isNavigation: true,
        breakpoints: {
            600: {
                fixedWidth: 60,
                fixedHeight: 44,
            },
        },
    }).mount();
});