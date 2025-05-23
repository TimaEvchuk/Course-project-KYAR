export const priceListCardFunc = () => {
	let arrows = document.querySelectorAll('.upper-part__arrow-text');
	let innerParts = document.querySelectorAll('.price-list__inner-part-box');
	let upperParts = document.querySelectorAll(".price-list__upper-part");
	let questions = document.querySelectorAll(".inner-part__question-icon");
	let questionsText = document.querySelectorAll(".inner-part__question-text");
	let pointsContainers = document.querySelectorAll(".upper-part__points");
	let upperPartsHeadliners = document.querySelectorAll(".upper-part__title");
	let innerPartHeights = [];
	let bools = [];
	for(let i = 0; i < innerParts.length; i++) {
		bools[i] = false;
		innerPartHeights[i] = 1000;
		arrows[i].addEventListener("click", ()=> {
			arrows[i].classList.toggle('activeBtn');
			innerParts[i].classList.toggle('active');
			if (bools[i] == false) {
				arrows[i].textContent = "Скрыть";
				innerParts[i].style.maxHeight = `${innerPartHeights[i]}px`;
				bools[i] = true;
			} 
			else {
				arrows[i].textContent = "Развернуть";
				innerParts[i].style.maxHeight = `0px`;
				bools[i] = false;
			}
		})
		questions[i].addEventListener("mouseover", ()=> {
			questionsText[i].classList.add("active");
			arrows[i].style.zIndex = "1";
		})
		questions[i].addEventListener("mouseout", ()=> {
			questionsText[i].classList.remove("active");
			arrows[i].style.zIndex = "6";
		})
	}
}