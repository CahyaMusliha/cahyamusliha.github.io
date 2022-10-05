$(document).ready(() => {
    $("td").click(function (event) {
        alert("My name " + $(this).html() + " !");
    });
    $("th").click(function (event) {
        alert("My name " + $(this).html() +" !");
    });
});
