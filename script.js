const menuIcon=document.querySelector('#menu-bar');
const navLinks=document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}