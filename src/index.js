import './index.css';
const body = document.querySelector('body');
const container = document.querySelector('#content'); //select the Content Div
const header = document.createElement('header'); //create header container


const selections = [];

function selector(e) {
        selections.forEach((selection) => {
        selection.style.display = 'none';
    });

    const selected = document.querySelector(`.${e.target.dataset.selection}`);
    selected.style.display = 'block';
}

const links = ['Home', 'Menu', 'Contact Us'] //list of Links
links.forEach((item, i)=> { //loop through the list create the List items and append to the NAV ul container
    const button = document.createElement('button')
    button.textContent = item
    button.classList.add('nav-button')
    button.dataset.selection = `selection-${i}`;
    button.addEventListener('click', selector)
    header.appendChild(button)
});


const content = document.createElement('div');
    for(let i=0; i < 3; i++) {
        let selection = document.createElement('div')
        selection.classList.add(`selection-${i}`)
        selection.classList.add('info-boxes')
        selections.push(selection)
        
        content.appendChild(selection);
    }

const homeInfo = document.createElement('div');
homeInfo.classList.add('homeInfo');
let sidesArray = [];
for(let i=0; i< 3; i++) {
    const sides = document.createElement('div')
    sides.classList.add(`sides-${i}`)
    sides.classList.add('sides');
    sidesArray.push(sides)
    homeInfo.appendChild(sides)
}
    sidesArray[0].textContent = 'hello'
    sidesArray[1].textContent = 'does'
    sidesArray[2].textContent = 'work'
selections[0].appendChild(homeInfo);

const menuInfo = document.createElement('div');
menuInfo.textContent = 'MenuInfo';
selections[1].appendChild(menuInfo)

const contactInfo = document.createElement('div');
contactInfo.textContent = 'ContentInfo';
selections[2].appendChild(contactInfo);

container.appendChild(content)

body.appendChild(header); //append the header to the Content Div
body.appendChild(container);