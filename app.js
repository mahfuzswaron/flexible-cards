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

    // animates layout 1
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
    // animates layout 2
    const layout2Cards = layout2.children;
    for (let i = 0; i < layout2Cards.length; i++) {
        const card = layout2Cards[i];
        if (i < 3) {
            card.classList.add("animate__animated", "animate__slideInLeft")
        }
        else {
            card.classList.add("animate__animated", "animate__slideInRight")
        }
        card.style.setProperty('--animate-duration', '2s');

    }

    // animates 3 cards in middle div in layout 3 
    const middleDivCards = middleDiv.children;
    for (let i = 0; i < middleDivCards.length; i++) {
        const card = middleDivCards[i];
        card.classList.add("animate__animated", "animate__slideInRight")

    }

    // animates rest 2 elements in layout 3
    const layout3Cards = layout3.children;
    for (let i = 0; i < layout3Cards.length; i++) {
        const card = layout3Cards[i];
        if (card.id !== "middle-div") {
            card.classList.add("animate__animated", "animate__slideInLeft")
            card.style.setProperty('--animate-duration', '2s');
        }
    }


}

animateCards()

// 