document.addEventListener("DOMContentLoaded", () => {
    const profileCards = document.querySelectorAll(".profile-card");

    profileCards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const cardRect = card.getBoundingClientRect();
            const centerX = cardRect.left + cardRect.width / 2;
            const centerY = cardRect.top + cardRect.height / 2;

            const deltaX = (e.clientX - centerX) / (cardRect.width / 2);
            const deltaY = (e.clientY - centerY) / (cardRect.height / 2);

            card.style.transform = `
                rotateX(${deltaY * 10}deg)
                rotateY(${deltaX * 10}deg)
            `;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateX(0deg) rotateY(0deg)";
        });
    });
});
