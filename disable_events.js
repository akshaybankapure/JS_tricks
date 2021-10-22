//This trick is to disable to the alt+F4
window.addEventListener('keydown', (e) => {
   const { key, altKey } = e;
	if (key === 'F4' && altKey) {
        e.preventDefault();   
    	}
});
// if the windows has been resized call 'windowResized' to reload the page
window.addEventListener('resize', windowResized);	
// disable right click context menu
document.addEventListener('contextmenu', event => event.preventDefault());
