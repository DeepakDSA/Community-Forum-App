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