const gameList = [
    {
        name: "Alien Force",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/alien-force.png",
        link: "https://classicreload.com/win3x-alien-force.html",
    },
    {
        name: "Bow and Arrow",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/bow-and-arrow.png",
        link: "https://classicreload.com/win3x-bow-and-arrow.html",
    },
    {
        name: "Brix (1991)",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/brix-1991-screenshot.png",
        link: "https://classicreload.com/brix-1991.html",
    },
    {
        name: "Commander Keen 1: Marooned on Mars",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/commander-keen-1-marooned-on-mars.png",
        link: "https://classicreload.com/commander-keen-1-marooned-on-mars.html",
    },
    {
        name: "Commander Keen 6: Aliens Ate my Baby Sitter",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/ck6.jpg",
        link: "https://classicreload.com/commander-keen-6-aliens-ate-my-baby-sitter.html",
    },
    {
        name: "Commander Keen Dreams",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/ckd.jpg",
        link: "https://classicreload.com/commander-keen-dreams.html",
    },
    {
        name: "Dodger",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/dodger-win.png",
        link: "https://classicreload.com/win3x-dodger.html",
    },
    {
        name: "FIFA Soccer 95",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/genesis-fifa-soccer-95.png",
        link: "https://classicreload.com/genesis-fifa-soccer-95.html",
    },
    {
        name: "FIFA Soccer 96",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/fifa96.png",
        link: "https://classicreload.com/fifa-soccer-96.html",
    },
    {
        name: "Frogger 64",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/c64-frogger-64-screen.png",
        link: "https://classicreload.com/c64-frogger-64.html",
    },
    {
        name: "Jetpack",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/jetpack.jpg",
        link: "https://classicreload.com/jetpack.html",
    },
    {
        name: "Lotus III: The Ultimate Challenge",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/lotus-the-ultimate-challenge.png",
        link: "https://classicreload.com/lotus-the-ultimate-challenge.html",
    },
    {
        name: "Lotus Turbo Challenge 2",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/amiga-lotus-turbo-challenge-2-screen.png",
        link: "https://classicreload.com/amiga-lotus-turbo-challenge-2.html",
    },
    {
        name: "Mortal Kombat 3",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/genesis-mk3.png",
        link: "https://classicreload.com/genesis-mortal-kombat-3.html",
    },
    {
        name: "Pac-Man (1)",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/pac-man-screen.png",
        link: "https://classicreload.com/pac-man.html",
    },
    {
        name: "Pac-Man (2)",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/arcade-pacman-screenshot.png",
        link: "https://classicreload.com/pacman.html",
    },
    {
        name: "Pitfall II: Lost Caverns",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/atari-2600-pitfall-ii-lost-caverns-screenshot.png",
        link: "https://classicreload.com/atari-2600-pitfall-ii-lost-caverns.html",
    },
    {
        name: "Pitfall!",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/atari-2600-pitfall-screenshot.png",
        link: "https://classicreload.com/atari-2600-pitfall.html",
    },
    {
        name: "TETRIS for Windows",
        img: "https://classicreload.com/sites/default/files/styles/game_image/public/tetris-for-windows.png",
        link: "https://classicreload.com/win3x-tetris-for-windows.html",
    },
];

const divList = document.querySelector(".list");

gameList.forEach((game) => {
    const { img, link, name } = game;

    const gameElement = document.createElement("div");
    gameElement.classList.add("gameElement");

    const gameImg = document.createElement("img");
    gameImg.src = img;

    const gameOverlay = document.createElement("div");
    gameOverlay.classList.add("gameOverlay");
    gameOverlay.innerText = name;

    gameElement.appendChild(gameImg);
    gameElement.appendChild(gameOverlay);
    divList.appendChild(gameElement);

    gameElement.addEventListener("mouseenter", () => {
        gameOverlay.innerText = name;
        gameOverlay.classList.add("active");
    });

    gameElement.addEventListener("mouseleave", () => {
        gameOverlay.classList.remove("active");
    });

    gameElement.addEventListener("click", () => {
        window.open(link, "_blank");
    });
});
