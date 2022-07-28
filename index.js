var a=0;

$(".menu-bar").css("display","none");

if ($("header nav").css("display").match("none")){
  $("header nav").before("<img class='m-burger'>");

  $("header img").click(()=>{
    a++;
    if (a%2==0){
      $("header img").removeClass("m-cross");
      $("header img").addClass("m-burger");
      $(".menu-bar").css("display","none");
      console.log(a);
    }else if (a%2==1){
      
      $("header img").removeClass("m-burger");
      $("header img").addClass("m-cross");

      $(".menu-bar").css("display","block");
      $(".empty").before($(".h-nav"));
      $(".h-nav").css("display","block");
      $(".h-nav ul li").css("display","block");
      $(".h-nav ul").css("margin","0");
      $(".h-nav ul li").css("margin","2rem");
    }
  })

}