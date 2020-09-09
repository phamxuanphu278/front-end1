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
		
		Next1.onclick = function() {
			Form1.style.left = "-450px";
			Form2.style.left = "40px";
			Progress.style.width = "240px";
		};
		Back1.onclick = function() {
			Form1.style.left = "40px";
			Form2.style.left = "450px";
			Progress.style.width = "120px";
		};
		Next2.onclick = function() {
			Form2.style.left = "-450px";
			Form3.style.left = "40px";
			Progress.style.width = "360px";
		};
		Back2.onclick = function() {
			Form2.style.left = "40px";
			Form3.style.left = "450px";
			Progress.style.width = "240px";
		}