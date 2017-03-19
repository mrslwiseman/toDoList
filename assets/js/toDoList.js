let newTodo;

// check off specific todos by clicking


// add listener to parent element, so that new li's have listeners attached to them
$('ul').on("click", "li", function(){
	$(this).toggleClass("done")
})



// click on X to delete Todo
$('ul').on("click", "span", function(e){
		e.stopPropagation()
	$(this).parent().fadeOut(500, function(){
		$(this).remove();

	})
})


// add listener to text input

$('input[type="text"]').on("keyup", function(e){
	 newTodo = $(this).val();
	 if(e.keyCode === 13){
	 	$('ul').append(`<li><span><i class="fa fa-trash"></i></span>${newTodo}</li>`)
	 	$(this).val("");
	 }
})


$('.fa-plus').on("click", function(){
	$('input[type="text"]').fadeToggle(200);
})