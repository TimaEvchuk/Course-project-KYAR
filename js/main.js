import { burgerMenuFunc } from "./burger-menu.js";
import { reviewsFunc } from "./reviews.js";
import { yandexMapFunc } from "./yandex-map.js";
import { sliderFunc } from "./slider.js";
import { formClipFunc } from "./form-clip.js";
document.addEventListener('DOMContentLoaded', function() {
  yandexMapFunc();
})
burgerMenuFunc();
reviewsFunc();
sliderFunc();
formClipFunc();