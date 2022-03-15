
const target = document.querySelector(".target");
const links = document.querySelectorAll(".link-nav a");
const colors = ["#ffdb0e"];
const hamburgerMenu = document.getElementById("myLinks");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", (e) => e.preventDefault());
    links[i].addEventListener("mouseenter", mouseenterFunc);
    console.log(links);
  }

  function mouseenterFunc() {
    for (let i = 0; i < links.length; i++) {
      if (links[i].parentNode.classList.contains("active")) {
        links[i].parentNode.classList.remove("active");
      }
      links[i].style.opacity = "0.4";
    }
    
    this.parentNode.classList.add("active");
    this.style.opacity = "1";
    
    const width = this.getBoundingClientRect().width;
    const height = this.getBoundingClientRect().height;
    const left = this.getBoundingClientRect().left;
    const top = this.getBoundingClientRect().top;
    const color = colors[Math.floor(Math.random() * colors.length)];
  
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
    target.style.borderColor = color;
    target.style.transform = "none";
  }

  const texts = ['Development', 'Engineer', 'Operator', 'Father'];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';

  (function type() {
    
    if(count === texts.length) {
      count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;
    document.querySelector('.typing').style.color = '#66fcf1';

    if(letter.length === currentText.length) {
      count++;
      index = 0;
    }
      setTimeout(type, 300);
  }());

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.hamburger-menu')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function myFunction() {
    if (hamburgerMenu.style.display === "block") {
      hamburgerMenu.style.display = "none";
    } else {
      hamburgerMenu.style.display = "block";
    }
}

