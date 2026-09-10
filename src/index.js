import './index.css';
const body = document.querySelector('body');
const container = document.querySelector('#content'); //select the Content Div
const header = document.createElement('header'); //create header container

const links = ['Home', 'Menu', 'Contact Us'] //list of Links
links.forEach((item)=> { //loop through the list create the List items and append to the NAV ul container
    const button = document.createElement('button')
    button.textContent = item
    button.addEventListener('click', () => alert(`You clicked ${item}`))
    header.appendChild(button)
});

const content = document.createElement('div');
content.textContent = 'hello';
container.appendChild(content)

body.appendChild(header); //append the header to the Content Div
body.appendChild(container);