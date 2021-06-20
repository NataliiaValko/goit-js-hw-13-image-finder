import refs from './refs';
import { newApiService} from './searchForm'
import { makeMarkupGallery } from './gallery';

const actionButtonLoadMore = {
    visibility() {
        refs.btnLoadMore.classList.remove('is-hidden')
    },

    disable() {
        refs.btnLoadMore.disabled = true
    },

    enable() {
        refs.btnLoadMore.disabled = false
    },

    loadTextContent() {
        refs.btnLoadMore.textContent = 'Load...'
    },

    loadMoreTextContent() {
        refs.btnLoadMore.textContent = 'Load more'
    },

    checkForResponses() {
        return newApiService.no_more_response
            ? (actionButtonLoadMore.disable(), actionButtonLoadMore.loadMoreTextContent())
            : (actionButtonLoadMore.enable(), actionButtonLoadMore.loadMoreTextContent())
    },

    onScroll() {
        return refs.sentinel.scrollIntoView({ behavior: 'smooth', block: 'end', })
    }
}

const makeLoadMore = () => {
    actionButtonLoadMore.loadTextContent();
    actionButtonLoadMore.disable();
    newApiService.fetchGallery()
        .then(array => makeMarkupGallery(array))
    setTimeout(() => {
        actionButtonLoadMore.checkForResponses();
        actionButtonLoadMore.onScroll()
    }, 500);
}

refs.btnLoadMore.addEventListener('click', makeLoadMore);

export default actionButtonLoadMore;