let navLinks = document.querySelectorAll('.nav-link')
let finalistsBtn = document.querySelector('.finalists')
let homeBtn = document.querySelector('.home')
let finalistsContainer = document.querySelector('.finalists_container')
let mainContainer = document.querySelector('main')
const body = document.body

const app = document.querySelector('#app')

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((navLink) => {
            navLink.classList.remove('active')
            link.classList.add('active')
        })
    } )

})

function pageAboutFinalists () {
    body.innerHTML = ''
    body.style.overflow = 'auto'
    body.style.paddingRight = '0px'
body.innerHTML = `
<header class="container-fluid">
<nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">
      <img src="./img/logo.png" alt="League Logo" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasDarkNavbar"
      aria-controls="offcanvasDarkNavbar"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="offcanvas offcanvas-end text-bg-dark"
      tabindex="-1"
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <div class="offcanvas-header">
        <img
          class="offcanvas-title"
          src="./img/logo.png"
          id="offcanvasDarkNavbarLabel"
        />
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="index.html"
              >HOME</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link release" href="http://theworldputtingleague.com/PLN_Press%20Release_WorldPuttingLeague_22823.pdf">PRESS RELEASE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active finalists" href="#">TOP 8 FINALISTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">DAY 1 RESULTS </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">DAY 2 RESULTS</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</header>
<div class="header-bg">
<div class="header-text">
  <h1>Gary Hester Wins Inaugural WPL Championship</h1>
  <p>
    Hester Defeats Matt McCaslin by Two Strokes in Final Round for First
    Place.
  </p>
</div>
</div>

<main>
<div class="container">
  <div class="row g-4 mt-5 mb-5">
    <div class="col-md-6 col-lg-4 text-center">
      <div class="person">
        <div class="person-img">
          <img src="img/finalists/graybeal.png" alt="" width="100%" />
        </div>
        <div class="person-descrip">
          <h4>Joey Graybeal</h4>
          <span>Top Seed</span>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 text-center">
      <div class="person">
        <div class="person-img">
          <img src="img/finalists/hester.png" alt="" width="100%" />
        </div>
        <div class="person-descrip">
          <h4>Gary Hester</h4>
          <span>2nd Seed</span>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 text-center">
      <div class="person">
        <div class="person-img">
          <img src="img/finalists/newport.png" alt="" width="100%" />
        </div>
        <div class="person-descrip">
          <h4>Greg Newport</h4>
          <span>3rd Seed</span>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 text-center">
      <div class="person">
        <div class="person-img">
          <img src="img/finalists/reeves.png" alt="" width="100%" />
        </div>
        <div class="person-descrip">
          <h4>Randy Reeves</h4>
          <span>4th Seed</span>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 text-center">
      <div class="person">
        <div class="person-img">
          <img src="img/finalists/mccaslin.png" alt="" width="100%" />
        </div>
        <div class="person-descrip">
          <h4>Matt McCaslin</h4>
          <span>5th Seed</span>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 text-center">
      <div class="person">
        <div class="person-img">
          <img src="img/finalists/prokopova.png" alt="" width="100%" />
        </div>
        <div class="person-descrip">
          <h4>Olivia Prokopova</h4>
          <span>6th Seed</span>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 text-center">
      <div class="person">
        <div class="person-img">
          <img src="img/finalists/alessi.png" alt="" width="100%" />
        </div>
        <div class="person-descrip">
          <h4>Rick Alessi</h4>
          <span>7th Seed</span>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 text-center">
      <div class="person">
        <div class="person-img">
          <img src="img/finalists/inabenit.png" alt="" width="100%" />
        </div>
        <div class="person-descrip">
          <h4>Jeremy Inabenit</h4>
          <span>8th Seed</span>
        </div>
      </div>
    </div>
  </div>
</div>
</main>

<footer>
<div class="container text-center">
  <div class="row justify-content-center">
    <div class="footer-logo">
      <img src="img/logo.png" alt="" />
      <p>
        World Putting League is sanctioned by the
        <b> <a href="#">USPMGA</a></b> (US Pro MiniGolf Association) and
        produced by <b><a href="#">Pro League Network</a></b>
      </p>
    </div>
  </div>
</div>
</footer>
</div>

<script src="main.js"></script>


`

}





finalistsBtn.addEventListener('click', pageAboutFinalists)
