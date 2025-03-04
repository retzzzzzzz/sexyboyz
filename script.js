document.addEventListener("DOMContentLoaded", () => {
    const usernameElements = document.querySelectorAll(".username");
    const avatarElements = document.querySelectorAll(".avatar");
    const bannerElements = document.querySelectorAll(".banner img");
    const badgesContainers = document.querySelectorAll(".badges");

    const profilesData = [
        {
            username: "d5n",
            avatar: "danzin.jpg",
            banner: "sis.gif",
            badges: ["badge1.png", "badge2.png"]
        },
        {
            username: "14x6",
            avatar: "teste.jpeg",
            banner: "bannerzin.jpeg",
            badges: ["badge1.png", "badge2.png"]
        }
    ];

    profilesData.forEach((profileData, index) => {
        usernameElements[index].textContent = profileData.username;
        avatarElements[index].src = profileData.avatar;
        bannerElements[index].src = profileData.banner;
        badgesContainers[index].innerHTML = profileData.badges
            .map(badge => `<img src="${badge}" alt="Badge" class="badge">`)
            .join("");
    });

    const profileCards = document.querySelectorAll(".profile-card");

    profileCards.forEach((profileCard) => {
        profileCard.addEventListener("mousemove", (e) => {
            const cardRect = profileCard.getBoundingClientRect();
            const centerX = cardRect.left + cardRect.width / 2;
            const centerY = cardRect.top + cardRect.height / 2;

            const deltaX = (e.clientX - centerX) / (cardRect.width / 2);
            const deltaY = (e.clientY - centerY) / (cardRect.height / 2);

            profileCard.style.transform = `rotateX(${deltaY * 20}deg) rotateY(${deltaX * 20}deg)`;
        });

        profileCard.addEventListener("mouseleave", () => {
            profileCard.style.transform = "rotateX(0deg) rotateY(0deg)";
        });
    });

    if (window.particlesJS) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 100, density: { enable: true, value_area: 800 } },
                color: { value: '#ffffff' },
                shape: { type: 'circle' },
                opacity: { value: 0.7 },
                size: { value: 3 },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: { enable: true, speed: 2, direction: 'none', out_mode: 'out' }
            },
            interactivity: {
                detect_on: 'window',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 200, line_linked: { opacity: 1 } },
                    bubble: { distance: 200, size: 4, duration: 2, opacity: 1 },
                    repulse: { distance: 100, duration: 0.4 },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 }
                }
            },
            retina_detect: true
        });
    } else {
        console.error("particles.js not loaded");
    }
});
