export const reviewsFunc = () => {
let reviewsText = document.querySelectorAll('.reviews__text');
let reviewsLink = document.querySelectorAll('.stars__link');
let reviewsEllipsis = document.querySelectorAll('.reviews__ellipsis');
let reviewsBools = [];
for(let i = 0; i < reviewsLink.length; i++) {
	reviewsBools[i] = false;
	reviewsLink[i].addEventListener("click", ()=> {
		if(reviewsBools[i] == false) {
			reviewsLink[i].textContent = 'Скрыть';
			reviewsBools[i] = true;
		}
		else {
			reviewsLink[i].textContent = 'Читать полностью';
			reviewsBools[i] = false;
		}
		reviewsLink[i].classList.toggle('active');
		reviewsEllipsis[i].classList.toggle('active');
		reviewsText[i].classList.toggle('active');
	});
}
}