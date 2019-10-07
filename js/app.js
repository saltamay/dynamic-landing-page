/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sectionsArr = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 *
*/ 

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav() {
  sectionsArr.forEach(section => {
    console.log(section.offsetTop);
    if (section.id.includes('section')) {
      let navList = document.createElement('li');
      navList.innerHTML = `<a class="menu__link">${section.dataset.nav}`;
      navbarList.appendChild(navList);
    }
  });
}


// Add class 'active' to section when near top of viewport
function makeActive() {
  // Get menu links
  const menuLinks = document.querySelectorAll('.menu__link')
  // Make the first link item active on page load
  menuLinks[0].classList.add('active');

  for(let i = 0; i < sectionsArr.length; i++) {
    window.addEventListener('scroll', () => {
      if(Math.floor(window.scrollY) >= sectionsArr[i].offsetTop) {
        // Toggle the active state of the section which is already active  
        document.querySelector('.your-active-class').classList.toggle('your-active-class');
        // Make the section scrolled active
        let idSelector = sectionsArr[i].id;
        idSelector = '#' + idSelector;
        document.querySelector(idSelector).classList.toggle('your-active-class'); 
        // Make the link for the section scrolled active
        document.querySelector('.active').classList.toggle('active');
        menuLinks[i].classList.toggle('active');
      }
    }) 
  }
}

// Scroll to anchor ID using scrollTO event
function scrollToID() {
  // Get menu links
  const menuLinks = document.querySelectorAll('.menu__link')
  /**
   * Loop through the sections to get the offset values 
   * while adding scrollTo actions to menu links
  */
  for (let i = 0; i < sectionsArr.length; i++) {
    menuLinks[i].addEventListener('click', (e) => {
      e.preventDefault();

      scrollTo({
        left: 0,
        top: sectionsArr[i].offsetTop,
        behavior: 'smooth'
      })
    })
  }
} 

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
buildNav();
// Scroll to section on link click
scrollToID();

// Set sections as active
makeActive();