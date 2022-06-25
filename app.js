const layout1 = document.getElementById("layout-1");
const layout2 = document.getElementById("layout-2");
const layout3 = document.getElementById("layout-3");
const cards = layout1.children;
const middleDiv = document.getElementById("middle-div");
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

function animateCards() {

    // animates all cards in layout 1
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        card.style.setProperty('--animate-duration', '2s');
        if (i % 2 === 0) {
            card.classList.add("animate__animated", "animate__slideInLeft")
        }
        else {
            card.classList.add("animate__animated", "animate__slideInRight")
        }

    }

    // animates 3 cards in middle div in layout 3 
    const middleDivCards = middleDiv.children;
    for (let i = 0; i < middleDivCards.length; i++) {
        const card = middleDivCards[i];
        card.classList.add("animate__animated", "animate__slideInRight")

    }

    // animates 


}

animateCards()

// 