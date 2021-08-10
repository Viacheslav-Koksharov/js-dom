const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
// First variant
// const gallery = document.querySelector('#gallery')
// const makeGallery = ({ url, alt }) => {

//     const list = document.createElement('li')
//     list.classList.add('image-list')

//     const el = document.createElement('img')
//     el.setAttribute('src', url);
//     el.setAttribute('alt', alt);
//     el.classList.add('image-form')
//     list.append(el)
//     return list
// }
// const galleryEl = images.map(makeGallery)
// gallery.append(...galleryEl)

// Second variant
const makeListEl = ({ url, alt }) => {
    return `<li class = 'image-list'>
    <img class ='image-form' src =${url} alt = ${alt} width="320px" />
    </li>`
}
const gallery = document.querySelector('#gallery')
const makeList = images.map(makeListEl).join('')
gallery.insertAdjacentHTML('beforeend', makeList)
