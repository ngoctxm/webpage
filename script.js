
// Ensure video autoplay works on all browsers and devices
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    
    // Try to play video automatically
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Autoplay started successfully
            console.log('Video autoplay started successfully');
        }).catch(error => {
            // Autoplay was prevented
            console.log('Autoplay was prevented, adding event listener for user interaction');
            
            // Add event listener to play video on first user interaction
            document.body.addEventListener('click', function() {
                video.play();
            }, { once: true });
        });
    }
});
