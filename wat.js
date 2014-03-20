//use strict

window.addEventListener('keydown', function (e) {
    
    if(e.keyCode === 39) {
        console.log(e.keyCode);
		$.scrollTo('#slide2');
    }
});