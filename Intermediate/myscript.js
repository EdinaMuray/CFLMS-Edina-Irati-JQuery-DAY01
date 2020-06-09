$("form").submit(function(e) {

	e.preventDefault();
	

});


//$("#myform").css("display", "none")

var newdiv = $('<div></div> <div></div> <div></div> <div></div> <div></div>')
$("article").prepend(newdiv)

$("#msg").attr("value", "Search for...")

$("div").addClass("box")

$("a").attr("href", "www.codefactory.wien")