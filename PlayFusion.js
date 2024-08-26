function startGame(gameName) {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';

    switch (gameName) {
        case 'game1':
            gameContainer.innerHTML = '<p>Loading Game 1...</p>';
            // Load Game 1 specific script or content here
            break;
        case 'game2':
            gameContainer.innerHTML = '<p>Loading Game 2...</p>';
            // Load Game 2 specific script or content here
            break;
        case 'game3':
            gameContainer.innerHTML = '<p>Loading Game 3...</p>';
            // Load Game 3 specific script or content here
            break;
        default:
            gameContainer.innerHTML = '<p>Game not found.</p>';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('welcomeText');
    
    // Add a small delay before enlarging the text
    setTimeout(() => {
        textElement.style.fontSize = '50px'; // Enlarge the text
        textElement.style.opacity = '1'; // Make the text visible
    }, 500);
});
document.addEventListener('DOMContentLoaded', () => {
    // Array of new game titles
    const gameTitles = ["PUBG", "Call of Duty","COD:ColdWar","Clash of Clans","Tomb Raider","Apex","Valorant","2K23","Raji","God Of War","Counter Strike 2","GTA Vice City","Plant v/s Zombies","Rainbow 6","Cricket 24","Need for Speed","Red Dead Redemption","The Witcher Wild Hunt","Spider Man","Devil May Cry 5","Tomb Raider","Apex Legends","Valorant","WWE 2k24","Batman","God Of War","BioShock","Monster","GTA Vice City","Rainbow","Need for Speed","Death Standing","FIFA 2K23","FIFA Manager 13","FIFA 14","NBA","RealPool 3D","Tennis","Baseball","FootBall","BradMan","Cricket 19","Carrom","GTA Vice City 5","Ludo","Chess","Cricket'24","Badminton","Most Wanted","Need For Speed","Rivals","Dr.Driving","Asphalt","Hill Climb Racing","Forza Horizon","Forza Street","Word Puzzle","Maze Puzzle","Brain Games","Guess the Word!","Block Puzzle","Apex","Make Sentences","Add Puzzle","Granny","Evil Dead","Resident Evil","Evil Nun","Dying Light","DeadLight","DeadSpace","Alien Shooter","Formula 1","Bus Simulator","Goat Simulator","SIMS 5","Find my Home","Farming Simulator","Bowling","Meow Meow"];
    
    // Select all <h3> elements inside .game-info divs within .game-card divs
    const titleElements = document.querySelectorAll('.game-card .game-info h3');
    
    // Loop through each title element and update its text content
    titleElements.forEach((element, index) => {
        if (index < gameTitles.length) {
            element.textContent = gameTitles[index];
        }
    });
});

// // script.js
// document.addEventListener('DOMContentLoaded', () => {
//     const dropdown = document.querySelector('.dropdown');
//     const dropdownMenu = document.querySelector('.dropdown-menu');

//     dropdown.addEventListener('click', (event) => {
//         event.preventDefault();
//         dropdownMenu.classList.toggle('show');
//     });
// });

// script.js
// script.js
// script.js


// Sample data for the chatbot responses

// Sample data for the chatbot responses
const responses = {
    "hello": "Hi there! How can I assist you today?",
    "info about pubg": "PUBG (PlayerUnknown's Battlegrounds) is a popular battle royale game where 100 players fight to be the last person standing.",
    "info about fortnite": "Fortnite is a battle royale game that features building mechanics and a vibrant, cartoony style.",
    "default": "Sorry, I don't understand that. Can you please ask something else?"
};

function sendMessage() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const chatboxBody = document.getElementById('chatbox-body');

    // Display user message
    const userMessage = document.createElement('div');
    userMessage.textContent = `You: ${userInput}`;
    chatboxBody.appendChild(userMessage);

    // Get chatbot response
    const botResponse = responses[userInput] || responses["default"];
    
    // Display bot response
    const botMessage = document.createElement('div');
    botMessage.textContent = `Bot: ${botResponse}`;
    chatboxBody.appendChild(botMessage);

    // Clear user input
    document.getElementById('user-input').value = '';

    // Scroll to the bottom of the chatbox
    chatboxBody.scrollTop = chatboxBody.scrollHeight;
}

function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    if (chatbox.style.display === 'none' || chatbox.style.display === '') {
        chatbox.style.display = 'flex';
    } else {
        chatbox.style.display = 'none';
    }
}