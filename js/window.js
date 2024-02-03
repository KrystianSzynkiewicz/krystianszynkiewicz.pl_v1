const buttonWindow = document.getElementById('button_window');
const window_content = document.getElementById('window_content');



buttonWindow.addEventListener('click', function removeWindow() {
    
    window_content.style.animationName = "delete";
    window_content.style.animationDuration = "1s"
    window_content.style.animationTimingFunction = "linear";
    window_content.style.animationIterationCount = "1";

    setTimeout(none,1000);

    function none () {
        window_content.style.display = "none"
    }

});

