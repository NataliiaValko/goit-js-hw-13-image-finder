export default {
    BASE_URL: 'https://pixabay.com/api/',
    keyPixabay: '22065853-88fcaf807f7c22500af22ab22',
    valueForSearch: '',
    image_type: 'photo',
    orientation: 'horizontal',
    numberPage: '1',
    per_page: '12',

    getURLRequest() {
        const request = `${this.BASE_URL}?image_type=${this.image_type}&orientation=${this.orientation}&q=${this.valueForSearch}&page=${this.numberPage}&per_page=${this.per_page}&key=${this.keyPixabay}`
        return request
    },
    
    setValueForSearch(value) {
        this.valueForSearch = value;
    }
}