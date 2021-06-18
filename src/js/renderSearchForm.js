import refs from './refs';
import markupSearchForm from '../templates/searchFormTpl.hbs';
import dataRequest from './apiService';
import doMarkupGallery from './renderGallery';
const debounce = require('lodash.debounce');
import pnotify from './pnotify';


const invalidMessage = 'Sorry we couldn’t find anything =/. Change your request, please!';

const clearGallery = () => {
    refs.gallery.innerHTML = '';
}

const showMessage = (message) => {
    pnotify(message);
    clearGallery()
}

const showInvalidMessage = () => {
    showMessage(invalidMessage)
}

const fetchGallery = async (requestHTTP) => {
    try {
        const response = await fetch(requestHTTP);
        const responseObject = await response.json();
        const array = await responseObject.hits
        clearGallery();
        doMarkupGallery(array)
    } catch {
        showInvalidMessage()
    }
}

const getValueForSearch = e => {
    const value = e.target.value.trim();
    if (!value) {
        clearGallery();
        return
    }

    dataRequest.setValueForSearch(value);
    fetchGallery(dataRequest.getURLRequest());
};

const addEventListenerSearchForm = () => {
    const searchInputRef = document.querySelector('.search-field__input');
    searchInputRef.addEventListener('input', debounce(getValueForSearch, 1000))
}

const createSearchForm = () => {
    refs.searchForm.innerHTML = markupSearchForm();
}

const doActiveSearchForm = () => {
    createSearchForm();
    addEventListenerSearchForm();
}

refs.searchButton.addEventListener('click', doActiveSearchForm)