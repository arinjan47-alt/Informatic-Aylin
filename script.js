// General site script
function showMessage(msg) {
    alert(msg);
}

function greetUser(name) {
    // Accept a name string — if empty, use default message
    var displayName = (name && typeof name === 'string' && name.trim()) ? name.trim() : null;
    var welcomeMsg = displayName ? ('Welcome to Our Somtam shop, ' + displayName + '!') : 'Welcome to Our Somtam shop!';

    var welcomeContainer = document.getElementById('welcome-container');
    if (!welcomeContainer) {
        welcomeContainer = document.createElement('div');
        welcomeContainer.id = 'welcome-container';
        welcomeContainer.className = 'welcome-message';
        var page = document.getElementById('page');
        if (page && page.parentNode) {
            page.parentNode.insertBefore(welcomeContainer, page);
        } else {
            // fallback: append to body
            document.body.insertBefore(welcomeContainer, document.body.firstChild);
        }
    }

    // Set text content safely
    welcomeContainer.textContent = welcomeMsg;
}

// No automatic greeting prompt; developers or UI should call greetUser(name);
// However, to preserve previous behavior, add a public helper to prompt manually
function promptForName() {
    var name = prompt('Enter your name:', '');
    greetUser(name);
}
