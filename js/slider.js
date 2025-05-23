export const sliderFunc = () => {
let position = 0;
let slidesToShow = 4;
let slidesToScroll = 1;
let sliderTrackPadding = 30; 
if (window.innerWidth <= 808) {
	slidesToShow = 2;
	sliderTrackPadding = 20;
} else if (window.innerWidth < 1200) {
	slidesToShow = 3;
	sliderTrackPadding = 20;
}
let itemPadding = sliderTrackPadding * (slidesToShow - 1);
const container = document.querySelector('.slider__container');
const track = document.querySelector('.slider__track');
const item = document.querySelector('.brand-card');
const items = document.querySelectorAll('.brand-card');
const itemCount = document.querySelectorAll('.brand-card').length;
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
let itemWidth = Math.round((container.clientWidth - 1.1 - itemPadding) / slidesToShow);
let movePosititon = (itemWidth * slidesToScroll) + sliderTrackPadding * slidesToScroll;

if(slidesToShow == 1) {
	movePosititon = (itemWidth * slidesToScroll + sliderTrackPadding * slidesToScroll);
}

items.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`;
});
let i = 0;
let a = 0;
btnNext.addEventListener('click', () => {
	const itemsLeft = itemCount - ((Math.abs(position) - sliderTrackPadding * i * (slidesToScroll) + (slidesToShow * itemWidth))) / itemWidth;

	if (itemsLeft >= slidesToScroll) {
		position -= movePosititon;
	} else {
		position -= itemsLeft * itemWidth + sliderTrackPadding * itemsLeft;
	}

	i++;
	if (itemsLeft >= slidesToScroll) {
		a += slidesToScroll;
	} else {
		a += itemsLeft;
	}
	setPosititon();
	checkBtns();
});
btnPrev.addEventListener('click', () => {
	const itemsRight = (Math.abs(position) - sliderTrackPadding * a) / itemWidth;

	if (itemsRight >= slidesToScroll) {
		position += movePosititon;
	} else {
		position += itemsRight * itemWidth + sliderTrackPadding * itemsRight;
	}

	if (a >= slidesToScroll) {
		a -= slidesToScroll;
	} else {
		a -= a;
	}
	i--;
	setPosititon();
	checkBtns();
});

const setPosititon = () => {
	track.style.transform = `translate(${position}px)`;
}
let checkBtnBool = false;
const checkBtns = () => {
		if(position === 0) {
			btnPrev.classList.add('disabled');
			checkBtnBool = true;
		}
		else {
			btnPrev.classList.remove('disabled');
			checkBtnBool = false;
		}

		if(position <= -(itemCount - slidesToShow) * itemWidth - (sliderTrackPadding * (itemCount - slidesToShow))) {
			btnNext.classList.add('disabled');
			checkBtnBool = true;
		}
		else {
			btnNext.classList.remove('disabled');
			checkBtnBool = false;
		}
}
checkBtns();
}
