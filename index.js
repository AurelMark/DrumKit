const buttons = document.querySelectorAll('button');

const sounds = ['crash', 'kick-bass', 'snare', 'tom-1', 'tom-2', 'tom-3', 'tom-4'];

const arrWords = [];
buttons.forEach((el, i) => {
	arrWords.push(el.textContent);
	el.addEventListener('click', (item) => {
		let audio = new Audio(`sounds/${sounds[i]}.mp3`);
		audio.play();
		item.target.style.color = 'pink';
		setTimeout(function () {
			item.target.style.color = '';
		}, 100);
	});
});

window.addEventListener('keypress', (i) => {
	const getCode = (el) => el == i.key;
	const indexMp3 = arrWords.findIndex(getCode);
	if (indexMp3 != -1) {
		document.querySelector(`.${i.key}`).style.color = 'pink';
		setTimeout(function () {
			document.querySelector(`.${i.key}`).style.color = '';
		}, 100);
		let audio = new Audio(`sounds/${sounds[indexMp3]}.mp3`);
		audio.play();
	} else {
		console.log(`Use only 'w', 'a', 's', 'd', 'j', 'k', 'l' key`);
	}
});
