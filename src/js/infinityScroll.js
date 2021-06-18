import { galleryRef } from './renderGallery';
import refs from './refs';
import dataRequest from './apiService';

// // const element = document.getElementById('.my-element-selector');
// // element.scrollIntoView({
// //   behavior: 'smooth',
// //   block: 'end',
// // });


// const callback = (entries, io) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       console.log('Привет из колбека в forEach');
//       console.log(entry.target);
//     }
//   });
// };
// const options = {
//   // rootMargin: '100px',
//   // threshold: 0.5,
// };


// const onEntry = entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting && dataRequest.valueForSearch !== '') {
//       // console.log('Пора грузить еще статьи' + Date.now());
//       dataRequest.getURLRequest().then(articles => {
//         appendArticlesMarkup(articles);
//         dataRequest.incrementPage();
//       });
//     }
//   });
// };



// const observer = new IntersectionObserver(onEntry, {
//   rootMargin: '150px',
// });

// observer.observe(refs.sentinel);

