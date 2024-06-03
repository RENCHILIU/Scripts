javascript:(function() {
    var target = document.querySelector('div[data-tid="active-chat-list"].content.active.ts-tree-group');
    if (!target) {
        alert('Target element not found.');
        return;
    }

    var alertActive = false; // Flag to track if an alert is active

    var observer = new MutationObserver(function(mutations) {
        if (!alertActive) { // Only show alert if no alert is currently active
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    alertActive = true; // Set alert as active
                    alert('Content update detected!');
                    setTimeout(function() { alertActive = false; }, 3000); // Reset alert active state after 3 seconds
                }
            });
        }
    });

    var config = { attributes: true, childList: true, subtree: true, characterData: true };
    observer.observe(target, config);

    alert('Observer is set. Watching for changes...');
})();


//=======

javascript:(function() {
    var target = document.querySelector('div[data-tid="active-chat-list"].content.active.ts-tree-group');
    if (!target) {
        console.log('Target element not found.');
        return;
    }
    var observer = new MutationObserver(function(mutations) {
        var audio = new Audio('http://localhost:8000/audio'); // URL to your audio file
        audio.play().catch(e => console.error('Error playing audio:', e));
    });

    var config = { childList: true, subtree: true };
    observer.observe(target, config);
    console.log('Observer is set. Watching for changes...');
})();
