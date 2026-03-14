const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.onclick = function(){
        this.classList.toggle("flip");
    }
});