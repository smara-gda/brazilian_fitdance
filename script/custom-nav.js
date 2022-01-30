const data = [
  { name: 'HOME', url: '../index.html' },
  { name: 'AGENDA', url: 'agenda.html' },
  { name: 'EVENTS', url: 'events.html' },
  { name: 'PRICING', url: 'pricing.html' },
  { name: 'SCHEDULE', url: 'schedule.html' },
  { name: 'MEDIA', url: 'media.html' },
  {
    name: 'FITDANCE',
    href: '#',
    dropdownData: [
      { name: 'ABOUT', url: 'about.html' },
      { name: 'CONTACT', url: 'contact.html' },
      { name: 'REGISTER', url: 'register.html' },
      { name: 'THE TEACHER', url: 'about.html' },
    ],
  },
];
const attributes = {
  src: '../images/icons/logo1.svg',
  width: '80',
  height: '80',
  alt: 'logo Brazilian Fitdance',
};
document.addEventListener('DOMContentLoaded', () => {
  const hookElement = document.getElementById('js-attach-nav');
  hookElement.appendChild(buildlogoEl());
});

function buildlogoEl() {
  // logo img & index redirection
  const ancorTag = document.createElement('a');
  ancorTag.setAttribute('href', '../index.html');

  // img tag for logo
  const img = document.createElement('img');
  img.classList.add('logo');
  setAttributes(img, attributes);

  //append the img tag to ancor
  ancorTag.appendChild(img);

  return ancorTag;
}

function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

// <!--Navigation menu-->
// <nav>
//   <ul>
//     <li><a href="../index.html">HOME</a></li>
//     <li><a href="agenda.html">AGENDA</a></li>
//     <!-- <li><a href="events.html">EVENTS</a></li> -->
//     <li><a href="pricing.html">PRICING</a></li>
//     <li><a href="schedule.html">SCHEDULE</a></li>
//     <li><a href="media.html">MEDIA</a></li>
//     <li class="dropdown">
//       <a href="#">FITDANCE <i class="fas fa-caret-down"></i></a>
//       <ul class="dropdown-content">
//         <li><a href="about.html">ABOUT</a></li>
//         <li><a href="contact.html">CONTACT</a></li>
//         <li><a href="register.html">REGISTER</a></li>
//         <li><a href="about.html">THE TEACHER</a></li>
//       </ul>
//     </li>
//   </ul>
// </nav> */
