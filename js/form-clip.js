export const formClipFunc = () => {
	let formClip = document.querySelector('.form__textarea-input');
	let labelClip = document.querySelector('.custom-file-upload');
	formClip.addEventListener("click", ()=> {
		if (window.innerWidth > 1200) {
			labelClip.style.padding = '0 0 8px';
		} 
		else {
			labelClip.style.padding = '0 0 11px';
		}
	});
	document.getElementById('file-upload').onchange = function(e) {
		document.querySelector('.custom-file-upload').innerText = 'Прикрепленный файл: ' + e.target.files[0].name;
	};
}