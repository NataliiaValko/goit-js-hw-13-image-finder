import refs from './refs';
import markupGallery from '../templates/galleryTpl.hbs';
import doOpenModal from './modal';

refs.gallery.addEventListener('click', doOpenModal);

const doMarkupGallery = (array) => {
    refs.gallery.insertAdjacentHTML('beforeend', markupGallery(array))
}

export default doMarkupGallery;