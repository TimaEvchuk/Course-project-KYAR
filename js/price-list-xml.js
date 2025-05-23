export const xmlFunction = () => {
	document.addEventListener('DOMContentLoaded', function() {
			fetch('../data/price-list.xml')
					.then(response => response.text())
					.then(xmlString => {
							const parser = new DOMParser();
							const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
							
							const categories = xmlDoc.querySelectorAll('services > category');
							const cardElements = document.querySelectorAll('.price-list__card');
							
							categories.forEach((category, index) => {
									if (index >= cardElements.length) return;
									
									const cardElement = cardElements[index];
									const categoryName = category.getAttribute('name');
									const description = category.querySelector('description').textContent;
									
									const titleBox = cardElement.querySelector('.upper-part__title-box');
									titleBox.querySelector('.upper-part__title').textContent = categoryName;
									titleBox.querySelector('.upper-part__subtitle').textContent = description;
									
									const servicesList = cardElement.querySelector('.upper-part__points');
									servicesList.innerHTML = '';
									const services = category.querySelectorAll('services_list service');
									services.forEach(service => {
											const li = document.createElement('li');
											li.className = 'upper-part__point';
											li.textContent = service.textContent;
											servicesList.appendChild(li);
									});
									
									const innerPart = cardElement.querySelector('.inner-part');
									
									const priceCategories = category.querySelectorAll('price_categories category');
									priceCategories.forEach(cat => {
											const headline = document.createElement('span');
											headline.className = 'inner-part__headline';
											headline.textContent = `${cat.getAttribute('range')} ${cat.getAttribute('name')}`;
											innerPart.appendChild(headline);
									});
									
									const complexityLevels = category.querySelectorAll('complexity_levels level');
									complexityLevels.forEach(level => {
											const categoryDiv = document.createElement('div');
											categoryDiv.className = 'inner-part__category';
											categoryDiv.innerHTML = `
													<h4 class="inner-part__category-title">${level.getAttribute('name')}</h4>
													<span class="inner-part__category-subtitle">${level.getAttribute('description')}</span>
											`;
											innerPart.appendChild(categoryDiv);
											
											const prices = level.querySelectorAll('price');
											prices.forEach(price => {
													const digitSpan = document.createElement('span');
													digitSpan.className = 'inner-part__digit';
													digitSpan.textContent = price.textContent;
													innerPart.appendChild(digitSpan);
											});
									});
							});
					})
					.catch(error => console.error('Ошибка загрузки XML:', error));
	});
}