  // Tab login
  function register()
  {
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn-login-register");
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
  }

  function login()
  {
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn-login-register");
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
  }

document.querySelector(".search-icon").addEventListener('click',function(){
    document.querySelector(".search-screen").classList.add("active-search");
});

document.querySelector(".close-icon").addEventListener('click',function(){
    document.querySelector(".search-screen").classList.remove("active-search");
});