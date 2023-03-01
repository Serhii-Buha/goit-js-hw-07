import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const imageEl = [];

galleryItems.forEach( galleryItem => {
    const container = document.createElement('div');
    container.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = galleryItem.original;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = galleryItem.preview;
    image.dataset.source = galleryItem.original;
    image.alt = galleryItem.description;

    link.appendChild(image);
    container.appendChild(link);

    imageEl.push(container);
});

galleryEl.append(...imageEl);

galleryEl.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}" width="800" height="600">
    </div>
`)

    instance.show()
    
    instance.element().querySelector('img').addEventListener('click', () => {
    instance.close();
});

window.addEventListener('keydown', onEscapePress);

function onEscapePress(event) {
    if (event.code === 'Escape') {
        instance.close();
        window.removeEventListener('keydown', onEscapePress);
    }
}
});