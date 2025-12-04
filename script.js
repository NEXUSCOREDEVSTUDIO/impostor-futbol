// Game Data
const footballData = [
    // Players
    { word: "Lionel Messi", category: "Jugador" },
    { word: "Cristiano Ronaldo", category: "Jugador" },
    { word: "Pelé", category: "Jugador" },
    { word: "Maradona", category: "Jugador" },
    { word: "Neymar", category: "Jugador" },
    { word: "Mbappé", category: "Jugador" },
    { word: "Haaland", category: "Jugador" },
    { word: "Zidane", category: "Jugador" },
    { word: "Ronaldinho", category: "Jugador" },
    { word: "Cruyff", category: "Jugador" },
    { word: "Beckham", category: "Jugador" },
    { word: "Iniesta", category: "Jugador" },
    { word: "Xavi", category: "Jugador" },
    { word: "Modric", category: "Jugador" },
    { word: "Benzema", category: "Jugador" },
    { word: "Lewandowski", category: "Jugador" },
    { word: "Salah", category: "Jugador" },
    { word: "De Bruyne", category: "Jugador" },
    { word: "Vinicius Jr", category: "Jugador" },
    { word: "Bellingham", category: "Jugador" },
    { word: "Sergio Ramos", category: "Jugador" },
    { word: "Piqué", category: "Jugador" },
    { word: "Puyol", category: "Jugador" },
    { word: "Maldini", category: "Jugador" },
    { word: "Cannavaro", category: "Jugador" },
    { word: "Cafú", category: "Jugador" },
    { word: "Roberto Carlos", category: "Jugador" },
    { word: "Casillas", category: "Jugador" },
    { word: "Buffon", category: "Jugador" },
    { word: "Neuer", category: "Jugador" },

    // Teams
    { word: "Real Madrid", category: "Equipo" },
    { word: "FC Barcelona", category: "Equipo" },
    { word: "Manchester United", category: "Equipo" },
    { word: "Liverpool", category: "Equipo" },
    { word: "Juventus", category: "Equipo" },
    { word: "Bayern Munich", category: "Equipo" },
    { word: "PSG", category: "Equipo" },
    { word: "Chelsea", category: "Equipo" },
    { word: "Arsenal", category: "Equipo" },
    { word: "Manchester City", category: "Equipo" },
    { word: "AC Milan", category: "Equipo" },
    { word: "Inter Milan", category: "Equipo" },
    { word: "Atlético Madrid", category: "Equipo" },
    { word: "Boca Juniors", category: "Equipo" },
    { word: "River Plate", category: "Equipo" },
    { word: "Flamengo", category: "Equipo" },
    { word: "Santos", category: "Equipo" },
    { word: "Ajax", category: "Equipo" },
    { word: "Benfica", category: "Equipo" },
    { word: "Porto", category: "Equipo" },

    // Tournaments
    { word: "Champions League", category: "Torneo" },
    { word: "Mundial", category: "Torneo" },
    { word: "Copa América", category: "Torneo" },
    { word: "Eurocopa", category: "Torneo" },
    { word: "Libertadores", category: "Torneo" },
    { word: "Premier League", category: "Torneo" },
    { word: "La Liga", category: "Torneo" },
    { word: "Serie A", category: "Torneo" },
    { word: "Bundesliga", category: "Torneo" },
    { word: "Balón de Oro", category: "Premio" },

    // Terms
    { word: "Fuera de Juego", category: "Regla" },
    { word: "VAR", category: "Tecnología" },
    { word: "Penal", category: "Jugada" },
    { word: "Tiro Libre", category: "Jugada" },
    { word: "Córner", category: "Jugada" },
    { word: "Saque de Banda", category: "Jugada" },
    { word: "Gol de Oro", category: "Regla" },
    { word: "Prórroga", category: "Tiempo" },
    { word: "Tanda de Penales", category: "Definición" },
    { word: "Autogol", category: "Jugada" },
    { word: "Portero", category: "Posición" },
    { word: "Delantero", category: "Posición" },
    { word: "Defensa", category: "Posición" },
    { word: "Mediocampista", category: "Posición" },
    { word: "Árbitro", category: "Rol" },
    { word: "Entrenador", category: "Rol" },
    { word: "Suplente", category: "Rol" },
    { word: "Capitán", category: "Rol" },
    { word: "Fichaje", category: "Mercado" },
    { word: "Cesión", category: "Mercado" },
    { word: "Gol", category: "Evento" },
    { word: "Asistencia", category: "Evento" },
    { word: "Tarjeta Roja", category: "Sanción" },
    { word: "Tarjeta Amarilla", category: "Sanción" },
    { word: "Hat-trick", category: "Logro" },
    { word: "Doblete", category: "Logro" },
    { word: "Póker", category: "Logro" },
    { word: "Manita", category: "Logro" },
    { word: "Rabona", category: "Técnica" },
    { word: "Chilena", category: "Técnica" },
    { word: "Tiki-taka", category: "Estilo" },
    { word: "Catenaccio", category: "Estilo" },
    { word: "Hinchada", category: "Ambiente" },
    { word: "Ultra", category: "Ambiente" },
    { word: "Barras Bravas", category: "Ambiente" },
    { word: "Clásico", category: "Partido" },
    { word: "Derbi", category: "Partido" },
    { word: "Remontada", category: "Resultado" },
    { word: "Goleada", category: "Resultado" },
    { word: "Empate", category: "Resultado" }
];

// DOM Elements
const screens = {
    setup: document.getElementById('setup-screen'),
    reveal: document.getElementById('reveal-screen'),
    game: document.getElementById('game-screen'),
    voting: document.getElementById('voting-screen'),
    result: document.getElementById('result-screen')
};

const inputs = {
    playerCount: document.getElementById('player-count'),
    imposterCount: document.getElementById('imposter-count'),
    namesContainer: document.getElementById('names-container')
};

const buttons = {
    generateNames: document.getElementById('btn-generate-names'),
    start: document.getElementById('btn-start'),
    nextTurn: document.getElementById('btn-next-turn'),
    voteStart: document.getElementById('btn-vote-start'),
    skipVote: document.getElementById('btn-skip-vote'),
    restart: document.getElementById('btn-restart'),
    playAgain: document.getElementById('btn-play-again')
};

const display = {
    currentPlayer: document.getElementById('current-player-name'),
    cardContainer: document.getElementById('card-container'),
    roleCard: document.getElementById('role-card'),
    roleContent: document.getElementById('role-content'),
    timer: document.getElementById('timer'),
    votingGrid: document.getElementById('voting-grid'),
    resultTitle: document.getElementById('result-title'),
    revealedImposters: document.getElementById('revealed-imposters')
};

// Game State
let gameState = {
    players: [], // Array of objects { name: "Nano", role: "Word" or "Imposter" }
    currentTurnIndex: 0,
    timerInterval: null,
    secretWordObj: null,
    imposters: []
};

// Event Listeners
if (buttons.generateNames) buttons.generateNames.addEventListener('click', generateNameInputs);
if (buttons.start) buttons.start.addEventListener('click', startGame);
if (display.cardContainer) display.cardContainer.addEventListener('click', flipCard);
if (buttons.nextTurn) buttons.nextTurn.addEventListener('click', nextTurn);
if (buttons.voteStart) buttons.voteStart.addEventListener('click', startVoting);
if (buttons.skipVote) buttons.skipVote.addEventListener('click', () => showResult(false, "Nadie"));
if (buttons.restart) buttons.restart.addEventListener('click', resetGame);
if (buttons.playAgain) buttons.playAgain.addEventListener('click', resetGame);

// Functions

function generateNameInputs() {
    const count = parseInt(inputs.playerCount.value);
    if (count < 3 || count > 40) {
        alert("Por favor ingresa entre 3 y 40 jugadores.");
        return;
    }

    inputs.namesContainer.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Nombre Jugador ${i + 1}`;
        input.className = 'player-name-input';
        input.value = `Jugador ${i + 1}`; // Default value
        inputs.namesContainer.appendChild(input);
    }

    buttons.start.classList.remove('hidden');
    buttons.generateNames.classList.add('hidden');
}

function startGame() {
    try {
        console.log("Start Game clicked");
        const nameInputs = document.querySelectorAll('.player-name-input');
        const playerNames = Array.from(nameInputs).map(input => input.value.trim() || input.placeholder);
        const imposterCount = parseInt(inputs.imposterCount.value);
        console.log(`Players: ${playerNames.length}, Imposters: ${imposterCount}`);

        if (imposterCount >= playerNames.length) {
            alert("Debe haber menos impostores que jugadores.");
            return;
        }

        // Reset State
        gameState.players = [];
        gameState.imposters = [];
        gameState.currentTurnIndex = 0;

        // Select Secret Word Object
        gameState.secretWordObj = footballData[Math.floor(Math.random() * footballData.length)];

        // Assign Roles
        let roles = Array(playerNames.length).fill('Civilian');

        let impostersAssigned = 0;
        while (impostersAssigned < imposterCount) {
            const randomIndex = Math.floor(Math.random() * roles.length);
            if (roles[randomIndex] === 'Civilian') {
                roles[randomIndex] = 'Imposter';
                impostersAssigned++;
            }
        }

        gameState.players = playerNames.map((name, index) => {
            const isImposter = roles[index] === 'Imposter';
            if (isImposter) gameState.imposters.push(name);
            return {
                name: name,
                role: isImposter ? "¡ERES EL IMPOSTOR!" : gameState.secretWordObj.word,
                isImposter: isImposter,
                hint: isImposter ? `Pista: ${gameState.secretWordObj.category}` : null
            };
        });

        switchScreen('reveal');
        loadTurn();
    } catch (error) {
        console.error("Error starting game:", error);
        alert("Error al iniciar el juego: " + error.message);
    }
}

function nextTurn() {
    gameState.currentTurnIndex++;

    if (gameState.currentTurnIndex < gameState.players.length) {
        loadTurn();
    } else {
        startGameLoop();
    }
}

function startGameLoop() {
    switchScreen('game');
    startTimer(5 * 60);
}

function startTimer(duration) {
    let timer = duration;
    updateTimerDisplay(timer);
    buttons.voteStart.classList.add('hidden');

    if (gameState.timerInterval) clearInterval(gameState.timerInterval);

    gameState.timerInterval = setInterval(() => {
        timer--;
        updateTimerDisplay(timer);

        if (timer <= 0) {
            clearInterval(gameState.timerInterval);
            buttons.voteStart.classList.remove('hidden');
        }
    }, 1000);

}

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    display.timer.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function startVoting() {
    clearInterval(gameState.timerInterval);
    switchScreen('voting');

    display.votingGrid.innerHTML = '';
    gameState.players.forEach(player => {
        const btn = document.createElement('button');
        btn.className = 'vote-btn';
        btn.textContent = player.name;
        btn.onclick = () => handleVote(player);
        display.votingGrid.appendChild(btn);
    });
}

function handleVote(targetPlayer) {
    if (targetPlayer.isImposter) {
        showResult(true, targetPlayer.name);
    } else {
        showResult(false, targetPlayer.name);
    }
}

function showResult(innocentsWon, votedName) {
    switchScreen('result');

    if (innocentsWon) {
        display.resultTitle.textContent = "¡LOS INOCENTES GANAN!";
        display.resultTitle.className = "win";
    } else {
        display.resultTitle.textContent = "¡LOS IMPOSTORES GANAN!";
        display.resultTitle.className = "loss";
    }

    display.revealedImposters.textContent = gameState.imposters.join(", ");
}

function resetGame() {
    clearInterval(gameState.timerInterval);
    buttons.start.classList.add('hidden');
    buttons.generateNames.classList.remove('hidden');
    inputs.namesContainer.innerHTML = '';
    switchScreen('setup');
}


function loadTurn() {
    const player = gameState.players[gameState.currentTurnIndex];
    display.currentPlayer.textContent = `Turno de ${player.name}`;

    // Reset card state
    display.roleCard.classList.remove('flipped');
    buttons.nextTurn.classList.add('hidden');

    // Set card content
    display.roleContent.innerHTML = '';

    const roleText = document.createElement('span');
    roleText.textContent = player.role;
    display.roleContent.appendChild(roleText);

    if (player.isImposter && player.hint) {
        const hintText = document.createElement('p');
        hintText.className = 'imposter-hint';
        hintText.textContent = player.hint;
        display.roleContent.appendChild(hintText);
    }
}

function flipCard() {
    if (display.roleCard.classList.contains('flipped')) return;

    display.roleCard.classList.add('flipped');
    buttons.nextTurn.classList.remove('hidden');
}

function switchScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });
    screens[screenName].classList.add('active');
    screens[screenName].classList.remove('hidden');
}
