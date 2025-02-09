document.addEventListener('keydown', function(event) {
    // Block Ctrl + Shift + I (DevTools)
    if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault();
        alert('relapse was here lmfao');
    }

    // Block Ctrl + U (View Source)
    if (event.ctrlKey && event.keyCode === 85) {
        event.preventDefault();
        alert('relapse was here lmfao');
    }

    // Block F12 (DevTools)
    if (event.keyCode === 123) {
        event.preventDefault();
        alert('relapse was here lmfao');
    }

    // Block Ctrl + I (Another potential dev tools shortcut)
    if (event.ctrlKey && event.keyCode === 73) {  // Ctrl + I
        event.preventDefault();
        alert('relapse was here lmfao');
    }

    // Block Ctrl + S (Save Page)
    if (event.ctrlKey && event.keyCode === 83) {  // Ctrl + S
        event.preventDefault();
        alert('relapse was here lmfao');
    }
});

// Disable right-click to prevent "Inspect Element"
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('relapse was here lmfao');
});

// Detecting the window resize event when DevTools are opened
var lastHeight = window.innerHeight;
setInterval(function() {
    if (window.innerHeight < lastHeight) {
        alert('relapse was here lmfao');
    }
    lastHeight = window.innerHeight;
}, 1000);

// Detecting when the developer tools are opened via `devtoolsopen` event
var devtools = /./;
devtools.toString = function() {
    alert('relapse was here lmfao');
};
console.log('%c', devtools); // Triggers the alert when devtools are opened
