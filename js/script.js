(".btn1").onrelease= function(){
  getURL("javascript_:document_link('anchor1');");
};
//
$(document).ready(function() {
  $('.drawer').drawer();
});
//
$(document).ready(function() {
    var pagetop = $('.pagetop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});
//
function CHangeThis(num)
{
  if(num==1){
    document.getElementById('top').style.backgroundImage = 'url(img/awaodori-top1.png)';
  }else if (num==2){
    document.getElementById('top').style.backgroundImage = 'url("img/eisa-top1.png")';
  }else if (num==3){
    document.getElementById('top').style.backgroundImage = 'url("img/arauma-top1.png")';
  }else if (num==4){
    document.getElementById('top').style.backgroundImage = 'url("img/ainu-top1.png")';
  }
};
//
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.list')) {

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
function comentFunction() {
    document.getElementById("myDropdown-coment").classList.toggle("show_coment");
}
window.onclick = function(event) {
  if (!event.target.matches('.coment')) {

    var dropdowns = document.getElementsByClassName("dropdown-coment");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show_coment')) {
        openDropdown.classList.remove('show_coment');
      }
    }
  }
}
function coment1Function() {
    document.getElementById("myDropdown-coment1").classList.toggle("show_coment");
}
window.onclick = function(event) {
  if (!event.target.matches('.coment')) {

    var dropdowns = document.getElementsByClassName("dropdown-coment");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show_coment')) {
        openDropdown.classList.remove('show_coment');
      }
    }
  }
}
function coment2Function() {
    document.getElementById("myDropdown-coment2").classList.toggle("show_coment");
}
window.onclick = function(event) {
  if (!event.target.matches('.coment')) {

    var dropdowns = document.getElementsByClassName("dropdown-coment");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show_coment')) {
        openDropdown.classList.remove('show_coment');
      }
    }
  }
}
function coment3Function() {
    document.getElementById("myDropdown-coment3").classList.toggle("show_coment");
}
window.onclick = function(event) {
  if (!event.target.matches('.coment')) {

    var dropdowns = document.getElementsByClassName("dropdown-coment");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show_coment')) {
        openDropdown.classList.remove('show_coment');
      }
    }
  }
}
