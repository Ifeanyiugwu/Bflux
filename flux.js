
document.addEventListener('DOMContentLoaded', function () {
  const toggleMenu = document.querySelector('.toggle-menu');
  const navigation = document.querySelector('.navigation');

  toggleMenu.addEventListener('click', function () {
      navigation.classList.toggle('active');
  });
});

// chat

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }





  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// contact map
// The location of Uluru
const position = { lat: -25.344, lng: 131.031 };

// Request needed libraries.
//@ts-ignore
const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

// The map, centered at Uluru

      