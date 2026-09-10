import './index.css';

const container = document.querySelector('#content'); //select the Content Div
const header = document.createElement('header'); //create header container

const links = ['Home', 'Menu', 'Contact Us'] //list of Links
links.forEach((item)=> { //loop through the list create the List items and append to the NAV ul container
    const button = document.createElement('button')
    button.textContent = item
    header.appendChild(button)
});

container.appendChild(header); //append the header to the Content Div