/** Menu */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  document.querySelector(".search-icon").addEventListener('click',function(){
        document.querySelector(".search-screen").classList.add("active-search");
    });

    document.querySelector(".close-icon").addEventListener('click',function(){
        document.querySelector(".search-screen").classList.remove("active-search");
    });
/** Menu */
/** countup */
    function countup(el, target) {
      let data = { count: 0 };
      anime({
        targets: data,
        count: [0, target],
        duration: 2000,
        round: 1,
        delay: 200,
        easing: 'easeOutCubic',
        update() {
          el.innerText = data.count.toLocaleString();
        }
      });
    }
    
    function makeCountup(el) {
      const text = el.textContent;
      const target = parseInt(text, 10);
    
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            countup(el, target);
            io.unobserve(entry.target);
          }
        });
      });
    
      io.observe(el);
    }
    
    const els = document.querySelectorAll('[data-countup]');
    
    els.forEach(makeCountup);
/** countup */
/** Tab */
    var content1 = document.getElementById("content1");
    var content2 = document.getElementById("content2");
    var content3 = document.getElementById("content3");
    var content4 = document.getElementById("content4");

    var btnTab1 = document.getElementById("btn-tab1");
    var btnTab2 = document.getElementById("btn-tab2");
    var btnTab3 = document.getElementById("btn-tab3");
    var btnTab4 = document.getElementById("btn-tab4");

    function openAsia() {
      content1.style.transform = "translateX(0)";
      content2.style.transform = "translateX(100%)";
      content3.style.transform = "translateX(100%)";
      content4.style.transform = "translateX(100%)";
      btnTab1.style.color = "#d45a5a";
      btnTab2.style.color = "#000";
      btnTab3.style.color = "#000";
      btnTab4.style.color = "#000";
    }
    function openEurope() {
      content1.style.transform = "translateX(100%)";
      content2.style.transform = "translateX(0)";
      content3.style.transform = "translateX(100%)";
      content4.style.transform = "translateX(100%)";
      btnTab1.style.color = "#000";
      btnTab2.style.color = "#d45a5a";
      btnTab3.style.color = "#000";
      btnTab4.style.color = "#000";
    }
    function openAmerica() {
      content1.style.transform = "translateX(100%)";
      content2.style.transform = "translateX(100%)";
      content3.style.transform = "translateX(0)";
      content4.style.transform = "translateX(100%)";
      btnTab1.style.color = "#000";
      btnTab2.style.color = "#000";
      btnTab3.style.color = "#d45a5a";
      btnTab4.style.color = "#000";
    }
    function openAfrica() {
      content1.style.transform = "translateX(100%)";
      content2.style.transform = "translateX(100%)";
      content3.style.transform = "translateX(100%)";
      content4.style.transform = "translateX(0)";
      btnTab1.style.color = "#000";
      btnTab2.style.color = "#000";
      btnTab3.style.color = "#000";
      btnTab4.style.color = "#d45a5a";
    }

    // Multi step form

    var Form1 = document.getElementById("form1");
		var Form2 = document.getElementById("form2");
		var Form3 = document.getElementById("form3");

		var Next1 = document.getElementById("next1");
		var Next2 = document.getElementById("next2");
		var Back1 = document.getElementById("back1");
		var Back2 = document.getElementById("back2");

		var Progress = document.getElementById("progress");
		
    function next1(){
			Form1.style.left = "-450px";
			Form2.style.left = "40px";
			Progress.style.width = "240px";
		};
		function back1() {
			Form1.style.left = "40px";
			Form2.style.left = "450px";
			Progress.style.width = "120px";
		};
		function next2() {
			Form2.style.left = "-450px";
			Form3.style.left = "40px";
			Progress.style.width = "360px";
		};
		function back2() {
			Form2.style.left = "40px";
			Form3.style.left = "450px";
			Progress.style.width = "240px";
    }


// Count down
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('Dec 1, 2020 00:00:00').getTime(),
  x = setInterval(function() {    
    let now = new Date().getTime(),
    distance = countDown - now;

    document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
  }, second);

// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn1 = document.getElementById('modalBtn1');
var modalBtn2 = document.getElementById('modalBtn2');
var modalBtn3 = document.getElementById('modalBtn3');
var modalBtn4 = document.getElementById('modalBtn4');
var modalBtn5 = document.getElementById('modalBtn5');
var modalBtn6 = document.getElementById('modalBtn6');
var modalBtn7 = document.getElementById('modalBtn7');
var modalBtn8 = document.getElementById('modalBtn8');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn1.addEventListener('click', openModal);
modalBtn2.addEventListener('click', openModal);
modalBtn3.addEventListener('click', openModal);
modalBtn4.addEventListener('click', openModal);
modalBtn5.addEventListener('click', openModal);
modalBtn6.addEventListener('click', openModal);
modalBtn7.addEventListener('click', openModal);
modalBtn8.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Open modal
function openModal(){
  modal.style.display = 'block';
}

// Close modal
function closeModal(){
  modal.style.display = 'none';
}

// Click outside and close
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}