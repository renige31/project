var container=$(".slide_wrap");
var slideShow=container.find(".slide_show");
var slideImg=slideShow.find(".slide_img");
var slides = slideImg.find(".img_div");
var slideBtn=container.find(".slide_btn");

var slideCount=slides.length;
var currentIndex = 0;
console.log(slideCount);

function prev(){
  if(currentIndex>0){
    slideImg.animate({left:"+=600px"},300);
    currentIndex--;
  }

}

function next(){
  if(currentIndex<slideCount-1){
    slideImg.animate({left:"-=600px"},300);
    currentIndex++;
  }
}

slideBtn.on("click", "a",function(){
    console.log("click");
  if($(this).hasClass("prev"))
  {
    console.log("prev btn");
    prev();
  }
  else{
    console.log("next btn");
    next();
  }
});
