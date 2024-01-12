

// interaction 1: changing pictures
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/profile.jpeg') {
    myImage.setAttribute ('src','images/img2.jpeg');
  } else {
    myImage.setAttribute ('src','images/profile.jpeg');
  }
}

// interaction 2: input name
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
  let userName = prompt('Please enter your name.');
  if(!userName) {
    setUserName();
  } else {
    localStorage.setItem('name', userName);
    myHeading.innerHTML = 'Hi, ' + userName + '!';
  }
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = 'Hi, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}
  

  
  