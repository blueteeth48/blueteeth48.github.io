$(window).load(function() {
    $.vegas('slideshow', {
        backgrounds: [
            {src: 'img/fishing.jpg', fade: 2000},
            {src: 'img/clouds.jpg', fade: 2000},
            {src: 'img/wedding.jpg', fade: 2000}
        ]
    })('overlay', {
        src: 'img/overlay.png'
    });
})