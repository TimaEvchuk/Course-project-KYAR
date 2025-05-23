export function yandexMapFunc() {
ymaps.ready(function () {
	let centerCoordinats = [53.844457866048344,27.5565906822092];
	let placemarkCoordinats = [53.84517410182978,27.559775841315837];
	let zoomCoordinats = 17;
	if (window.innerWidth <= 808) {
		centerCoordinats = [53.84517505930467,27.559768860390005];
		zoomCoordinats = 16;
	} 
	let map = new ymaps.Map("map-test", {
		center: centerCoordinats,
		zoom: zoomCoordinats
	});
	
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl'); 
  map.controls.remove('typeSelector'); 
  map.controls.remove('fullscreenControl');
  map.controls.remove('rulerControl'); 
	map.behaviors.disable(['scrollZoom']); 
	if (window.innerWidth <= 808) {
		map.controls.remove('geolocationControl'); 
		map.controls.remove('zoomControl'); 
	} 
	let placemark = new ymaps.Placemark([53.84517410182978,27.559775841315837], {}, {
		iconLayout: 'default#image',
		iconImageHref: '../images/placemark-icon.svg',
		iconImageSize: [50, 50],
		iconImageOffset: [-25, -50]
	});
	map.geoObjects.add(placemark);
});
}