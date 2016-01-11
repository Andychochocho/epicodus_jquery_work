$("h1").click(function(){
  alert("This is your reminder to get a burrito today.");
});


$("img").click(function(){
  $("img").hide("fast", function(){
  });
});

$("h2").click(function(){
  $("img").show("slow", function(){
  });
});
