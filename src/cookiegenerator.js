var x=$.cookie('category');

if(x==null){location.href="메인페이지.html";

}
else {
  var storedCookie = JSON.parse($.cookie('category'));
  document.write(storedCookie);
  makecode.makedropdowntab(storedCookie,"");
}
