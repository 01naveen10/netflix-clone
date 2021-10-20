new Splide(".splide").mount();

document.addEventListener("DOMContentLoaded", function() {
    var thumbnails = new Splide("#thumbnail-slider", {
        fixedWidth: 300,
        fixedHeight: 300,
        gap: 10,
        rewind: true,
        pagination: false,
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

/***************
 * var main = new Splide("#main-slider", {
        type: "fade",
        rewind: true,
        pagination: false,
        arrows: false,
    });
    
      main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
    
    ***********/