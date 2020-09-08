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

    var btnTab1 = document.getElementById("btn-tab1");
    var btnTab2 = document.getElementById("btn-tab2");
    var btnTab3 = document.getElementById("btn-tab3");

    function openHTML() {
      content1.style.transform = "translateX(0)";
      content2.style.transform = "translateX(100%)";
      content3.style.transform = "translateX(100%)";
      btnTab1.style.color = "#ff7846";
      btnTab2.style.color = "#000";
      btnTab3.style.color = "#000";
    }
    function openCSS() {
      content1.style.transform = "translateX(100%)";
      content2.style.transform = "translateX(0)";
      content3.style.transform = "translateX(100%)";
      btnTab1.style.color = "#000";
      btnTab2.style.color = "#ff7846";
      btnTab3.style.color = "#000";
    }
    function openJS() {
      content1.style.transform = "translateX(100%)";
      content2.style.transform = "translateX(100%)";
      content3.style.transform = "translateX(0)";
      btnTab1.style.color = "#000";
      btnTab2.style.color = "#000";
      btnTab3.style.color = "#ff7846";
    }