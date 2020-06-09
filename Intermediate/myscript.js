$("form").submit(function(e) {

	e.preventDefault();
	

});

$("#msg").attr("value", "Search for...")

$("#myform").remove()

var newdiv = $('<div></div> <div></div> <div></div> <div></div> <div></div>')
$("article").prepend(newdiv)



$("div").addClass("box")

$("a").attr("href", "www.codefactory.wien")