const layout1 = document.getElementById("layout-1");
const layout2 = document.getElementById("layout-2");
const layout3 = document.getElementById("layout-3");

function displayLayout1() {
    layout1.style.display = "grid";
    layout2.style.display = "none";
    layout3.style.display = "none";
}
function displayLayout2() {
    layout1.style.display = "none";
    layout2.style.display = "grid";
    layout3.style.display = "none";
}
function displayLayout3() {
    layout1.style.display = "none";
    layout2.style.display = "none";
    layout3.style.display = "grid";
}