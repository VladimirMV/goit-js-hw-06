const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulEl = document.querySelector('ul');
 
const liEls = images.map(item => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.insertAdjacentHTML('afterbegin',`<img src = "${item.url} "alt = "${item.alt}" width=600 px >`)
  return liEl;
});

ulEl.append(...liEls);
console.log(ulEl);



 //Вариант без insertAdjacentHTML()
 
// const ulEl = document.querySelector('ul');
 
// const liEls = images.map(item => {
//   const liEl = document.createElement('li');
//   liEl.classList.add('item');
//   const imgEl = document.createElement('img');
//   imgEl.src = item.url;
//   imgEl.alt = item.alt;
//   liEl.append(imgEl);
 
//   return liEl;
// });

// ulEl.append(...liEls);

// console.log(ulEl);


  