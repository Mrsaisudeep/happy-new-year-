// Add an event listener to the button to change the message
document.getElementById('changeMessageButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    const name = document.getElementById('name');
    
    message.textContent = "Welcome to 2025!";
    name.textContent = "Let's make it amazing, Sai Sudeep!";
    
    // Add a fun animation
    message.style.animation = 'none';
    setTimeout(() => {
        message.style.animation = 'fadeIn 3s ease-in-out';
    }, 50);
});
