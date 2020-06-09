var simpson = JSON.parse(simpsons)
console.log(simpson)



$(document).ready(function(){

	var bigbox = $("<div></div>").addClass("bigbox")
	$("body").prepend(bigbox)



	for (i = 0; i < simpson.length; i++){

		smallbox = $("<div></div>").addClass("smallbox")
		bigbox.append(smallbox)

		var name = $("<h1>" + simpson[i].name + "</h1>")
		var imgsrc = $("<img>")

		var relation = $("<p> The relation to the main character is: </p>")

		var colorspan = $("<span>" + simpson[i].relation + "</span>")

		relation.append(colorspan)
		smallbox.append(name).append(imgsrc).append(relation)
		imgsrc.attr("src", simpson[i].imgsrc)

		var rel = simpson[i].relation


		if (rel == "Parent"){
			colorspan.css("color", "blue")
		} else if (rel == "Sibling"){
			colorspan.css("color", "green")
		} else if (rel == "Other"){
			colorspan.css("color", "purple")
		} else {
			colorspan.css("color", "red")
			}

	}

	$(".bigbox").css({"display":"flex", "flex-wrap": "wrap", "justify-content": "space-around", "width" : "100%", "background-color": "black"})
	$(".smallbox").css({"width": "30%", "background-color":"grey", "display":"flex", "justify-content":"center", "flex-direction":"column", "align-items":"center", "margin":"2% 0"})
	$("img").css({"height": "25vw"})

	});