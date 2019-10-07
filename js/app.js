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
function buildNav(sectionsArr) {
  sectionsArr.forEach(section => {
    if (section.id.includes('section')) {
      let navList = document.createElement('li');
      navList.innerHTML = `<a class="menu__link">${section.dataset.nav}`;
      navbarList.appendChild(navList);
    }
  });
}


// Add class 'active' to section when near top of viewport
function makeActive(sectionsArr) {
  sectionsArr.forEach(section => {
    window.addEventListener('scroll', () => {
      if(Math.floor(window.scrollY) >= section.offsetTop) {
        document.querySelector('.your-active-class').className = "";
        let idSelector = section.id;
        idSelector = '#' + idSelector;
        console.log(document.querySelector(idSelector));
        document.querySelector(idSelector).className = 'your-active-class'; 
      }
    })
  })
}

// Scroll to anchor ID using scrollTO event
const scrollToID = (sectionsArr) => {
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
buildNav(sectionsArr);
// Scroll to section on link click
scrollToID(sectionsArr);

// Set sections as active
makeActive(sectionsArr);