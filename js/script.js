'use strict'
// let circularButton = document.querySelectorAll('.circle-button');
//
// for (let i = 0; i < circularButton.length; i++) {
//   let item = circularButton[i]
//   item.addEventListener('click', function (e){
//       console.log(e);
//
//       item.classList.toggle('backgroundColor');
//       item.classList
//       //USE TOGGLE AND CREATE CSS CLASSES SO THAT WE CAN ADD THEM HERE
//
//     //we want only one button to be orange, if we click another button, we want that button to change back to normal
//
//     document.querySelector('.long-button').addEventListener('click', function(){
//       document.querySelector('.star-pic').remove();
//       document.querySelector('.first-para').remove();
//       document.querySelector('ol').remove();
//       document.querySelector('.long-button').remove();
//       document.querySelector('h4').remove();
//       //how to add images using dom
//       const image = document.createElement('img');
//       image.src = 'images/illustration-thank-you.svg'
//       document.querySelector('.wrapper').appendChild(image);
//
//       document.querySelector('.wrapper').style.display = 'grid';
//       document.querySelector('.wrapper').style.justifyItems = 'center';
//       const addedParaOne = document.createElement("p"); //creating a paragraph tag in js
//       const text = document.createTextNode(`you selected ${i} out of 5`);
//       addedParaOne.appendChild(text);
//       document.querySelector('.wrapper').appendChild(addedParaOne);
//
//
//       //add text using innerHTML
//     })
//   })
//
// }

document.querySelectorAll('.circle-button').forEach((button) => {
  button.addEventListener('click', function(){
    // Resetting the previous active button: //e.g. if another button is clicked, the one before wouldnt be clicked anymore
    document.querySelectorAll('.portfolio-buttons-active').forEach((button) => {//making sure i target every button that has this class
    button.classList.remove('portfolio-buttons-active')
  });//we want this to happen before the clicked button ia changed oth4erwise the clicked button's bg colour would be removed also

  // Add the active class to the clicked button
  button.classList.add('portfolio-buttons-active');

   document.querySelector('.long-button').addEventListener('click', function(){
  document.querySelector('.soon-to-hide').style.display = 'none';
  //how to add images using dom
  // const image = document.createElement('img');
  // image.src = 'images/illustration-thank-you.svg'
  // document.querySelector('.wrapper').appendChild(image);
  //
  // document.querySelector('.wrapper').style.display = 'grid';
  // document.querySelector('.wrapper').style.justifyItems = 'center';
  // const addedParaOne = document.createElement("p"); //creating a paragraph tag in js
  // const text = document.createTextNode(`you selected ${button.innerHTML} out of 5`);
  // addedParaOne.appendChild(text);
  // document.querySelector('.wrapper').appendChild(addedParaOne);

  document.querySelector('.hidden-div').classList.remove('hidden');
  document.querySelector('.para-after-click1').innerHTML = `You selected ${document.querySelector('.portfolio-buttons-active').textContent} out of 5`
})
})
})
