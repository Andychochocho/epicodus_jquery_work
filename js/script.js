// $("h1").click(function(){
//   alert("This is your reminder to get a burrito today.");
// });
//
//
// $("#soft_drink").click(function(){
//   $("#soft_drink").hide("fast", function(){
//   });
// });
//
// $("#burrito").click(function(){
//   $("#burrito").hide("fast", function(){
//   });
// });
//
// $("h2").click(function(){
//   $("img").show("slow", function(){
//   });
// });


$('#burrito-show').click(function(){
  $('#burrito').toggle("fadeIn");
});

$('#soda-show').click(function(){
  $('#soft_drink').toggle("fadeOut");
});
