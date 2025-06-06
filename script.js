document.addEventListener("DOMContentLoaded", () => {
    const usernameElements = document.querySelectorAll(".username");
    const avatarElements = document.querySelectorAll(".avatar");
    const bannerElements = document.querySelectorAll(".banner img");
    const badgesContainers = document.querySelectorAll(".badges");

    const profilesData = [
        {
            username: "d5n",
            avatar: "danzin.gif",
            banner: "bannerd.gif",
            badges: ["badge1.png", "badge2.png", "badge4.png", "badge5.png"]
        },
        {
            username: "14x6",
            avatar: "juju.png",
            banner: "bannerzin.jpeg",
            badges: ["badge3.png", "badge2.png", "badge6.png", "badge5.png"]
        },
        {
            username: "14z6",
            avatar: "america.png",
            banner: "bannerze.gif",
            badges: ["badge1.png", "badge2.png", "badge7.png", "badge5.png"]
        },
        {
            username: "3e2",
            avatar: "pato.png",
            banner: "patoban.png",
            badges: ["badge8.png", "badge7.png"]
        },
        {
            username: "11x0.",
            avatar: "ruru.png",
            banner: "ruruban.png",
            badges: ["badge2.png"]
        }
    ];

    profilesData.forEach((profileData, index) => {
        if (usernameElements[index]) {
            usernameElements[index].textContent = profileData.username;
        }
        if (avatarElements[index]) {
            avatarElements[index].src = profileData.avatar;
        }
        if (bannerElements[index]) {
            bannerElements[index].src = profileData.banner;
        }
        if (badgesContainers[index]) {
            badgesContainers[index].innerHTML = "";
            profileData.badges.forEach(badge => {
                const img = document.createElement("img");
                img.src = badge;
                img.alt = "Badge";
                img.classList.add("badge");
                badgesContainers[index].appendChild(img);
            });
        }
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

const tracks = [
  {
    src: "audio.mp3",
    cover: "capa1.gif",
    title: "Emozinhas Boas"
  },
  {
    src: "audio2.mp3",
    cover: "capa2.png",
    title: "The last of plug"
  },
  {
    src: "audio3.mp3",
    cover: "capa3.png",
    title: "Mataram o Premos"
  }
  // pode adicionar mais objetos aqui
];

let currentTrackIndex = 0;

const audio = document.getElementById("audio");
const musicCover = document.querySelector(".music-cover");
const musicTitle = document.querySelector(".music-title");

function loadTrack(index) {
  if (index < 0) index = tracks.length - 1;
  if (index >= tracks.length) index = 0;
  currentTrackIndex = index;

  audio.src = tracks[currentTrackIndex].src;
  musicCover.src = tracks[currentTrackIndex].cover;
  musicTitle.textContent = tracks[currentTrackIndex].title;

  if (isPlaying) {
    audio.play();
  }
}

// Atualiza os botões de próximo e anterior
function prevTrack() {
  loadTrack(currentTrackIndex - 1);
}

function nextTrack() {
  loadTrack(currentTrackIndex + 1);
}

// Inicializa o primeiro track (mas sem tocar ainda)
loadTrack(currentTrackIndex);
