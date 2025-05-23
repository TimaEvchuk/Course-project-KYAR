export const burgerMenuFunc = () => {
	let burgerMenuBtn = document.querySelector('.header__burger-menu');
	let navbar = document.querySelector('.header__links');
	let headerTel = document.querySelector('.header__tel');

	burgerMenuBtn.addEventListener("click", function() {
		burgerMenuBtn.classList.toggle('active');
		navbar.classList.toggle('active');
		headerTel.classList.toggle('active');
	});
}