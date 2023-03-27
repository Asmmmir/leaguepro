const navLinks = document.querySelectorAll('.nav-link')
const finalistsBtn = document.querySelector('.finalists')
const homeBtn = document.querySelector('.home')
const finalistsContainer = document.querySelector('.finalists_container')
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
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
<header id="header" class="container-fluid">
        <nav class="navbar">
            <div class="logo">
                <img src="img/logo.png" alt="" srcset="">
               </div>
               <ul class="nav-menu">
               <li class="nav-item"> 
                   <i class="fa fa-home fa-2x"></i>
                   <a href="index.html" class="nav-link">Home</a>
               </li>
               <li class="nav-item"> 
                   <i class="fa-solid fa-circle-info fa-2x"></i>
                   <a href="http://theworldputtingleague.com/PLN_Press%20Release_WorldPuttingLeague_22823.pdf" class="nav-link">Press release</a>
               </li>
               <li class="nav-item"> 
                   <i class="fa-solid fa-medal fa-2x"></i>
                   <a href="#" class="nav-link finalists active">Top 8 finalists</a>
               </li>
               <li class="nav-item"> 
                   <i class="fa-solid fa-list fa-2x"></i>
                   <a href="http://theworldputtingleague.com/results22723.html" class="nav-link">Day 1 results</a>
               </li>
               <li class="nav-item"> 
                   <i class="fa-solid fa-list fa-2x"></i>
                   <a href="http://theworldputtingleague.com/results22823.html" class="nav-link">Day 2 results</a>
               </li>
               <li class="nav-item"> 
                   <i class="fa-solid fa-exclamation fa-2x"></i>
                   <a href="https://docs.google.com/forms/d/e/1FAIpQLScwAOvIZ1MJZQLjuphzAbGjr2VIdInlbDUjWwHq59upIu6EHQ/viewform" class="nav-link">Player application</a>
               </li>
           </ul>
            <div class="hamburger">

                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
           

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


const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll(('.nav-link')).forEach((link) => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
    })
})


}


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll(('.nav-link')).forEach((link) => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
    })
})



finalistsBtn.addEventListener('click', pageAboutFinalists)
