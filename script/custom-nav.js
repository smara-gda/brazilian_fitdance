document.addEventListener('DOMContentLoaded', () => {
  const hookElement = document.getElementById('js-attach-nav');
  const nav = document.getElementById('js-attach-nav-items');
  hookElement.appendChild(buildlogoEl());
  nav.appendChild(buiildNavItems(data));
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
function buiildNavItems(data) {
  const ul = document.createElement('ul');
  for (let key in data) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = data[key].name;
    a.href = data[key].url;
    // a.classList.add('highlight-active');
    li.appendChild(a);
    ul.appendChild(li);
  }
  handleLastChildClasses(ul);
  buildDropDownItems(data[5], ul);

  return ul;
}

function handleLastChildClasses(ul) {
  const lastLi = ul.lastChild;
  lastLi.classList.add('dropdown');
  const lastLiAncorTag = lastLi.querySelector('a');
  const i = document.createElement('i');

  i.classList.add('fas', 'fa-caret-down');
  lastLiAncorTag.appendChild(i);
}
function buildDropDownItems(data, mainUL) {
  const lastLi = mainUL.lastChild;
  if (data && Array.isArray(data.dropdownData) && data.dropdownData.length) {
    const subUL = document.createElement('ul');
    subUL.classList.add('dropdown-content');
    for (let key in data.dropdownData) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      //   a.classList.add('highlight-active');
      a.innerText = data.dropdownData[key].name;
      a.href = data.dropdownData[key].url;
      li.appendChild(a);
      subUL.appendChild(li);
      lastLi.appendChild(subUL);
    }
  }
}
// TODO add active class on click of links in header of the active page
//
//   add('highlight-active');
