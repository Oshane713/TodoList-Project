// Check off todos by clicking
$("ul").on("click", "li", function()
{
	$(this).toggleClass("completed");
});

// Click on X to delete todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropgation();
});

// accept input and enter it to todo list
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		// grab todo text
	var todoText = $(this).val();
	$(this).val("");
	// creare li and add text to ul
	$("ul").append("<li><span><i class='fas fa-trash'></i></span>" + todoText + "</li>");
	}
});

$(".fa-pencil-alt").click(function(){
	$("input[type = 'text']").fadeToggle();
});
