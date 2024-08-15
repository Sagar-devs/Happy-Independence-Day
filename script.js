document.getElementById('hoistButton').addEventListener('click', function() {
    const flagContainer = document.querySelector('.flag-container');
    const flag = document.getElementById('flag');
    const anthem = document.getElementById('anthem');
    
    flagContainer.style.display = 'block';
    flag.classList.add('hoist-animation');
    
    // Play the national anthem
    anthem.play();
});