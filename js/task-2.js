const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulEl = document.querySelector('.gallery');
const fragment = document.createDocumentFragment();

images.forEach(image => {
  const liEl = document.createElement('li');
  const imageEl = document.createElement('img');

  imageEl.src = image.url;
  imageEl.alt = image.alt;

  liEl.appendChild(imageEl);
  fragment.appendChild(liEl);
});

ulEl.appendChild(fragment);
console.log(ulEl);

// Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.
// <ul class="gallery"></ul>
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
// Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().
// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами через CSS класи.
