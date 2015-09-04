window.onload = function(){
var tween;
$('document').ready(function(){
  tween = new TimelineMax({
    repeat:-1
  });

  tween
  .fromTo("#obamatrump", 3, {rotation:0, transformOrigin:"50% 50%"}, {rotation:180, ease:Power2.easeOut})
    .fromTo("#blue", 3, {fill: "#137ec0"}, {fill:"rgb(228,155,104)", ease:Power2.easeOut, delay:-3})
  .fromTo(".red", 3, {fill: "#d5302a"}, {fill:"rgb(210,167,68)", ease:Power2.easeOut, delay:-3})



  .fromTo("#obamatrump", 3, {rotation:180,ransformOrigin:"50% 50%"}, {rotation:360, ease:Power2.easeOut})
    .fromTo("#blue", 3, {fill: "rgb(228,155,104)"}, {fill:"#137ec0", ease:Power2.easeOut, delay:-3})
  .fromTo(".red", 3, {fill: "rgb(210,167,68)"}, {fill:"#d5302a", ease:Power2.easeOut, delay:-3});
});
};
