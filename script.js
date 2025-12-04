// Game Data
const footballData = [
    // Players
    { word: "Lionel Messi", category: "Jugador", explanation: "Leyenda argentina, máximo ganador del Balón de Oro." },
    { word: "Cristiano Ronaldo", category: "Jugador", explanation: "Astro portugués, máximo goleador histórico." },
    { word: "Pelé", category: "Jugador", explanation: "O Rei, único en ganar 3 Mundiales." },
    { word: "Maradona", category: "Jugador", explanation: "El Pibe de Oro, héroe del Mundial 86." },
    { word: "Neymar", category: "Jugador", explanation: "Talento brasileño, conocido por su regate y magia." },
    { word: "Mbappé", category: "Jugador", explanation: "Velocista francés, campeón del mundo en 2018." },
    { word: "Haaland", category: "Jugador", explanation: "El 'Cyborg' noruego, máquina de hacer goles." },
    { word: "Zidane", category: "Jugador", explanation: "Elegancia francesa, famoso por su volea y cabezazo." },
    { word: "Ronaldinho", category: "Jugador", explanation: "La sonrisa del fútbol, magia pura en el campo." },
    { word: "Cruyff", category: "Jugador", explanation: "Padre del fútbol total y leyenda del Barcelona." },
    { word: "Beckham", category: "Jugador", explanation: "Inglés famoso por su precisión en tiros libres." },
    { word: "Iniesta", category: "Jugador", explanation: "El Ilusionista, autor del gol del Mundial 2010." },
    { word: "Xavi", category: "Jugador", explanation: "Maestro del mediocampo y del estilo tiki-taka." },
    { word: "Modric", category: "Jugador", explanation: "Mago croata, Balón de Oro 2018." },
    { word: "Benzema", category: "Jugador", explanation: "Goleador francés, leyenda del Real Madrid." },
    { word: "Lewandowski", category: "Jugador", explanation: "Depredador polaco, goleador incansable." },
    { word: "Salah", category: "Jugador", explanation: "El Faraón, estrella egipcia del Liverpool." },
    { word: "De Bruyne", category: "Jugador", explanation: "El cerebro belga, rey de las asistencias." },
    { word: "Vinicius Jr", category: "Jugador", explanation: "Extremo brasileño, velocidad y desborde puro." },
    { word: "Bellingham", category: "Jugador", explanation: "Joven estrella inglesa, todoterreno moderno." },
    { word: "Sergio Ramos", category: "Jugador", explanation: "Defensa goleador, líder y carácter fuerte." },
    { word: "Piqué", category: "Jugador", explanation: "Central elegante, parte del mejor Barça de la historia." },
    { word: "Puyol", category: "Jugador", explanation: "Corazón y garra, eterno capitán del Barcelona." },
    { word: "Maldini", category: "Jugador", explanation: "Il Capitano, leyenda defensiva del Milan." },
    { word: "Cannavaro", category: "Jugador", explanation: "Único defensa en ganar el Balón de Oro (2006)." },
    { word: "Cafú", category: "Jugador", explanation: "Lateral incansable, doble campeón mundial." },
    { word: "Roberto Carlos", category: "Jugador", explanation: "Potencia pura y tiros libres imposibles." },
    { word: "Casillas", category: "Jugador", explanation: "San Iker, milagros bajo los palos." },
    { word: "Buffon", category: "Jugador", explanation: "Eterno portero italiano, leyenda de la Juventus." },
    { word: "Neuer", category: "Jugador", explanation: "Revolucionó el puesto de portero-líbero." },

    // Teams
    { word: "Real Madrid", category: "Equipo", explanation: "El Rey de Europa, los Blancos." },
    { word: "FC Barcelona", category: "Equipo", explanation: "Más que un club, estilo de posesión." },
    { word: "Manchester United", category: "Equipo", explanation: "Los Diablos Rojos de Old Trafford." },
    { word: "Liverpool", category: "Equipo", explanation: "Los Reds, 'You'll Never Walk Alone'." },
    { word: "Juventus", category: "Equipo", explanation: "La Vecchia Signora, gigante italiano." },
    { word: "Bayern Munich", category: "Equipo", explanation: "El gigante de Baviera, máquina alemana." },
    { word: "PSG", category: "Equipo", explanation: "El club de la Torre Eiffel y las estrellas." },
    { word: "Chelsea", category: "Equipo", explanation: "Los Blues de Londres." },
    { word: "Arsenal", category: "Equipo", explanation: "Los Gunners, estilo y tradición." },
    { word: "Manchester City", category: "Equipo", explanation: "Los Citizens, dominio reciente en Inglaterra." },
    { word: "AC Milan", category: "Equipo", explanation: "Los Rossoneri, historia europea pura." },
    { word: "Inter Milan", category: "Equipo", explanation: "Los Nerazzurri, rivales del Milan." },
    { word: "Atlético Madrid", category: "Equipo", explanation: "Los Colchoneros, garra y lucha." },
    { word: "Boca Juniors", category: "Equipo", explanation: "Xeneize, la pasión de la Bombonera." },
    { word: "River Plate", category: "Equipo", explanation: "Millonarios, elegancia y buen fútbol." },
    { word: "Flamengo", category: "Equipo", explanation: "El Mengão, el club más popular de Brasil." },
    { word: "Santos", category: "Equipo", explanation: "El equipo de Pelé y Neymar." },
    { word: "Ajax", category: "Equipo", explanation: "Escuela de fútbol total en Ámsterdam." },
    { word: "Benfica", category: "Equipo", explanation: "Las Águilas, orgullo de Portugal." },
    { word: "Porto", category: "Equipo", explanation: "Los Dragones, competidores feroces." },

    // Tournaments
    { word: "Champions League", category: "Torneo", explanation: "La competición de clubes más prestigiosa." },
    { word: "Mundial", category: "Torneo", explanation: "La copa del mundo, el sueño de todos." },
    { word: "Copa América", category: "Torneo", explanation: "El torneo de selecciones más antiguo." },
    { word: "Eurocopa", category: "Torneo", explanation: "El torneo de selecciones de Europa." },
    { word: "Libertadores", category: "Torneo", explanation: "La gloria eterna de Sudamérica." },
    { word: "Premier League", category: "Torneo", explanation: "La liga inglesa, rápida y competitiva." },
    { word: "La Liga", category: "Torneo", explanation: "La liga española, técnica y estrellas." },
    { word: "Serie A", category: "Torneo", explanation: "El Calcio italiano, táctica y defensa." },
    { word: "Bundesliga", category: "Torneo", explanation: "La liga alemana, goles y estadios llenos." },
    { word: "Balón de Oro", category: "Premio", explanation: "El premio individual más codiciado." },

    // Terms
    { word: "Fuera de Juego", category: "Regla", explanation: "Estar adelantado al último defensa." },
    { word: "VAR", category: "Tecnología", explanation: "Videoarbitraje para revisar jugadas." },
    { word: "Penal", category: "Jugada", explanation: "Tiro desde los 11 metros sin barrera." },
    { word: "Tiro Libre", category: "Jugada", explanation: "Falta cobrada con barrera defensiva." },
    { word: "Córner", category: "Jugada", explanation: "Saque de esquina." },
    { word: "Saque de Banda", category: "Jugada", explanation: "Reanudar el juego con las manos." },
    { word: "Gol de Oro", category: "Regla", explanation: "El primero que marca gana (antigua regla)." },
    { word: "Prórroga", category: "Tiempo", explanation: "Tiempo extra si hay empate." },
    { word: "Tanda de Penales", category: "Definición", explanation: "Desempate desde el punto penal." },
    { word: "Autogol", category: "Jugada", explanation: "Marcar en tu propia portería." },
    { word: "Portero", category: "Posición", explanation: "El guardián del arco, usa las manos." },
    { word: "Delantero", category: "Posición", explanation: "El encargado de marcar los goles." },
    { word: "Defensa", category: "Posición", explanation: "Protege la portería y frena ataques." },
    { word: "Mediocampista", category: "Posición", explanation: "El motor del equipo, crea juego." },
    { word: "Árbitro", category: "Rol", explanation: "El juez que hace cumplir las reglas." },
    { word: "Entrenador", category: "Rol", explanation: "El estratega que dirige al equipo." },
    { word: "Suplente", category: "Rol", explanation: "Jugador que espera en el banquillo." },
    { word: "Capitán", category: "Rol", explanation: "Líder del equipo, lleva el brazalete." },
    { word: "Fichaje", category: "Mercado", explanation: "Contratación de un nuevo jugador." },
    { word: "Cesión", category: "Mercado", explanation: "Préstamo temporal de un jugador." },
    { word: "Gol", category: "Evento", explanation: "Cuando el balón cruza la línea de meta." },
    { word: "Asistencia", category: "Evento", explanation: "El pase previo al gol." },
    { word: "Tarjeta Roja", category: "Sanción", explanation: "Expulsión del partido." },
    { word: "Tarjeta Amarilla", category: "Sanción", explanation: "Amonestación, dos significan expulsión." },
    { word: "Hat-trick", category: "Logro", explanation: "Marcar tres goles en un partido." },
    { word: "Doblete", category: "Logro", explanation: "Marcar dos goles en un partido." },
    { word: "Póker", category: "Logro", explanation: "Marcar cuatro goles en un partido." },
    { word: "Manita", category: "Logro", explanation: "Marcar cinco goles en un partido." },
    { word: "Rabona", category: "Técnica", explanation: "Golpear el balón cruzando las piernas." },
    { word: "Chilena", category: "Técnica", explanation: "Remate acrobático de espaldas al arco." },
    { word: "Tiki-taka", category: "Estilo", explanation: "Juego de pases cortos y posesión." },
    { word: "Catenaccio", category: "Estilo", explanation: "Sistema defensivo italiano muy cerrado." },
    { word: "Hinchada", category: "Ambiente", explanation: "Los aficionados que alientan." },
    { word: "Ultra", category: "Ambiente", explanation: "Aficionado fanático y organizado." },
    { word: "Barras Bravas", category: "Ambiente", explanation: "Grupos organizados de hinchas en Latam." },
    { word: "Clásico", category: "Partido", explanation: "Partido entre rivales históricos." },
    { word: "Derbi", category: "Partido", explanation: "Partido entre equipos de la misma ciudad." },
    { word: "Remontada", category: "Resultado", explanation: "Dar vuelta un resultado adverso." },
    { word: "Goleada", category: "Resultado", explanation: "Ganar por mucha diferencia de goles." },
    { word: "Empate", category: "Resultado", explanation: "Igualdad en el marcador." }
];

// DOM Elements
const screens = {
    setup: document.getElementById('setup-screen'),
    reveal: document.getElementById('reveal-screen'),
    game: document.getElementById('game-screen'),
    votingReveal: document.getElementById('voting-reveal-screen'),
    voting: document.getElementById('voting-screen'),
    result: document.getElementById('result-screen')
};

const inputs = {
    playerCount: document.getElementById('player-count'),
    imposterCount: document.getElementById('imposter-count'),
    gameDuration: document.getElementById('game-duration'),
    namesContainer: document.getElementById('names-container')
};

const buttons = {
    generateNames: document.getElementById('btn-generate-names'),
    start: document.getElementById('btn-start'),
    nextTurn: document.getElementById('btn-next-turn'),
    voteStart: document.getElementById('btn-vote-start'),
    startVoteTurn: document.getElementById('btn-start-vote-turn'),
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
    revealedImposters: document.getElementById('revealed-imposters'),
    nextVoterName: document.getElementById('next-voter-name'),
    votingTitle: document.getElementById('voting-title'),
    ejectedPlayerInfo: document.getElementById('ejected-player-info')
};

// Game State
let gameState = {
    players: [], // Array of objects { name: "Nano", role: "Word" or "Imposter" }
    currentTurnIndex: 0,
    timerInterval: null,
    secretWordObj: null,
    imposters: [],
    selectedDuration: 300,
    votingTurnIndex: 0,
    votes: {} // { "PlayerName": count }
};

// Event Listeners
if (buttons.generateNames) buttons.generateNames.addEventListener('click', generateNameInputs);
if (buttons.start) buttons.start.addEventListener('click', startGame);
if (display.cardContainer) display.cardContainer.addEventListener('click', flipCard);
if (buttons.nextTurn) buttons.nextTurn.addEventListener('click', nextTurn);
if (buttons.voteStart) buttons.voteStart.addEventListener('click', startVoting);
if (buttons.startVoteTurn) buttons.startVoteTurn.addEventListener('click', showVotingScreen);
if (buttons.skipVote) buttons.skipVote.addEventListener('click', () => handleVote(null));
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

        gameState.selectedDuration = parseInt(inputs.gameDuration.value);

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
                hint: isImposter ? `Pista: ${gameState.secretWordObj.category}` : null,
                explanation: isImposter ? null : gameState.secretWordObj.explanation
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
    startTimer(gameState.selectedDuration);
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
    gameState.votingTurnIndex = 0;
    gameState.votes = {};

    // Initialize votes count
    gameState.players.forEach(p => gameState.votes[p.name] = 0);
    gameState.votes["Skip"] = 0;

    loadVotingTurn();
}

function loadVotingTurn() {
    const voter = gameState.players[gameState.votingTurnIndex];
    display.nextVoterName.textContent = `Turno de ${voter.name}`;
    switchScreen('votingReveal');
}

function showVotingScreen() {
    const voter = gameState.players[gameState.votingTurnIndex];
    display.votingTitle.textContent = `Votación de ${voter.name}`;

    display.votingGrid.innerHTML = '';
    gameState.players.forEach(player => {
        // Don't let player vote for themselves? (Optional, but usually allowed in Among Us)
        // For now, allow it.

        const btn = document.createElement('button');
        btn.className = 'vote-btn';
        btn.textContent = player.name;
        btn.onclick = () => handleVote(player.name);
        display.votingGrid.appendChild(btn);
    });

    switchScreen('voting');
}

function handleVote(votedName) {
    if (votedName) {
        gameState.votes[votedName] = (gameState.votes[votedName] || 0) + 1;
    } else {
        gameState.votes["Skip"] = (gameState.votes["Skip"] || 0) + 1;
    }

    gameState.votingTurnIndex++;

    if (gameState.votingTurnIndex < gameState.players.length) {
        loadVotingTurn();
    } else {
        calculateAndShowResults();
    }
}

function calculateAndShowResults() {
    let maxVotes = -1;
    let candidates = [];

    // Find max votes
    for (const [name, count] of Object.entries(gameState.votes)) {
        if (count > maxVotes) {
            maxVotes = count;
            candidates = [name];
        } else if (count === maxVotes) {
            candidates.push(name);
        }
    }

    let ejectedName = null;
    let resultMessage = "";
    let resultClass = "";

    if (candidates.length === 1 && candidates[0] !== "Skip") {
        ejectedName = candidates[0];
    }

    switchScreen('result');
    display.revealedImposters.textContent = gameState.imposters.join(", ");

    const ejectedInfoDiv = display.ejectedPlayerInfo;
    ejectedInfoDiv.innerHTML = '';

    if (ejectedName) {
        const ejectedPlayer = gameState.players.find(p => p.name === ejectedName);
        const isImposter = ejectedPlayer.isImposter;

        if (isImposter) {
            display.resultTitle.textContent = "¡LOS INOCENTES GANAN!";
            display.resultTitle.className = "win";
            resultMessage = `${ejectedName} era el Impostor.`;
        } else {
            display.resultTitle.textContent = "¡LOS IMPOSTORES GANAN!";
            display.resultTitle.className = "loss";
            resultMessage = `${ejectedName} NO era el Impostor.`;
        }
    } else {
        // Tie or Skip
        display.resultTitle.textContent = "NADIE FUE EXPULSADO";
        display.resultTitle.className = "highlight";
        resultMessage = "Empate o votos saltados.";
    }

    const messageP = document.createElement('p');
    messageP.style.fontSize = "1.2rem";
    messageP.style.color = "white";
    messageP.textContent = resultMessage;
    ejectedInfoDiv.appendChild(messageP);
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
    } else if (!player.isImposter && player.explanation) {
        const explanationText = document.createElement('p');
        explanationText.className = 'word-explanation';
        explanationText.textContent = player.explanation;
        display.roleContent.appendChild(explanationText);
    }
}

function flipCard() {
    if (display.roleCard.classList.contains('flipped')) return;

    display.roleCard.classList.add('flipped');
    buttons.nextTurn.classList.remove('hidden');
}

function switchScreen(screenName) {
    Object.values(screens).forEach(screen => {
        if (screen) {
            screen.classList.remove('active');
            screen.classList.add('hidden');
        }
    });
    if (screens[screenName]) {
        screens[screenName].classList.add('active');
        screens[screenName].classList.remove('hidden');
    }
}
