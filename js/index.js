var content = $(".page-content");
var nav = $(".nav-content");

nav.scroll(function() {
    content.scrollTop(nav.scrollTop());
});

console.log("test");
