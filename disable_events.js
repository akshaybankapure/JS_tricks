//This trick is to disable to the alt+F4
		window.addEventListener('keydown', (e) => {
    		const { key, altKey } = e;
    		if (key === 'F4' && altKey) {
        		e.preventDefault();   
    		}
		});
