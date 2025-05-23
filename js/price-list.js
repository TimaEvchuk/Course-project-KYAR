import { xmlFunction } from "./price-list-xml.js";
import { burgerMenuFunc } from "./burger-menu.js";
import { formClipFunc } from "./form-clip.js";
import { priceListCardFunc } from "./price-list-card.js";
import { yandexMapFunc } from "./yandex-map.js";

document.addEventListener('DOMContentLoaded', function() {
  yandexMapFunc();
})
xmlFunction();
burgerMenuFunc();
formClipFunc();
priceListCardFunc();
