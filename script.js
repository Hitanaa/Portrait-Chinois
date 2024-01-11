document.addEventListener("DOMContentLoaded", function () {
  // ======= CREATION DES SECTIONS (ANALOGIES) ======= 

  // AOS library
  AOS.init();

  // J'ai ajouter "id = " + resultat.id + " pour recuperer les ids de tes categories pour la redirection 


  // Lier le data.json
  fetch('data.json').then(function (response) {
    response.json().then(function (data) {
      data.forEach(function afficheAnalogie(resultat) {
        document.querySelector('#list-analogies').innerHTML += "<section data-aos=\"fade-down\" data-aos-duration=\"3000\" id = " + resultat.id + "> <h1 class=\"title-analogie\" data-aos=\"zoom-in\" data-aos-duration=\"500\">Si j’étais " + resultat.analogie + "</h1> <h2> Je serais "
          + resultat.Valeuranalogie + "</h2>" + '<div class="image-container hp"><img class="img blur" src="' + resultat.img + '"> <p class=\"htxt1\"> ' + resultat.justify + ' </p> </div></section>';
      })
    })
  });

})


/* Cette fonction permet d'afficher la navbar lorsqu'elle est dans la section 'eve-goncalves' */

function updateSidebarVisibility() {
  var titleSection = document.getElementById('title');
  var eveGoncalvesSection = document.getElementById('eve-goncalves');
  var sidebar = document.querySelector('.sidebar');

  // Calcul de la position de la section "title" par rapport à la fenêtre visible
  var titleRect = titleSection.getBoundingClientRect();

  // Calcul de la position de la section "eve-goncalves" par rapport à la fenêtre visible
  var eveGoncalvesRect = eveGoncalvesSection.getBoundingClientRect();

  // Ajout ou suppression de la classe en fonction de la position de défilement
  if (titleRect.top <= window.innerHeight && titleRect.bottom >= 0) {
      sidebar.classList.add('hidden-on-eve-goncalves');
  } else if (eveGoncalvesRect.top <= window.innerHeight && eveGoncalvesRect.bottom >= 0) {
      sidebar.classList.remove('hidden-on-eve-goncalves');
  } else {
      sidebar.classList.remove('hidden-on-eve-goncalves');
  }
}

window.addEventListener('scroll', updateSidebarVisibility);

// Appeler la fonction initiale après le chargement de la page
window.addEventListener('load', updateSidebarVisibility);


//création d'une nouvelle section quand on clique sur un button 'Creer' dans la section "À ton tour maintenant".
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
   // Vérifier si le formulaire est valide

    document.querySelector('#you').innerHTML += "<section class=\"sec\" data-aos=\"fade-down\" data-aos-duration=\"3000\" id=\"tigre\" class=\"aos-init aos-animate\"><h1 class=\"title-analogie aos-init aos-animate\" data-aos=\"zoom-in\" data-aos-duration=\"500\">Si j’étais " + document.querySelector("#analogie").value + "</h1> <h2> je serais " + document.querySelector("#valeurAnalogie").value + ".</h2><div class=\"image-container hp\"><img src=" + document.querySelector("#imganalogie").value + " alt='' class='img blur'><p class=\"htxt1\"> " + document.querySelector("#arganalogie").value + " </p></div></section>";
  //API
  fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=eve.goncalves&courriel=eve.goncalves@univ-eiffel.fr" + document.querySelector("#mail").value + "&message=Si j'étais " + document.querySelector("#analogie").value + "je serais " + document.querySelector("#valeurAnalogie").value + "Arguments" + document.querySelector("#arganalogie").value).then(function (response) {
    response.json().then(function (data) {
      if (data.status == "success") {
        document.querySelector("#message").innerHTML = "Bien reçu !";
      } else {
        document.querySelector("#message").innerHTML = "Mince, il y a une erreur...";
      }
    })
  });
});

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);




