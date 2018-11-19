

$(document).ready(function() {


$('#about').click(function(){
	window.scrollTo(0,1200)

});
$('#restaurants').click(function(){
	window.scrollTo(0,2060)

});
$('#homemade').click(function(){
	window.scrollTo(0,3360)

});
$('#contact').click(function(){
	window.scrollTo(0,4460)

});

$(".filter").click(function() {

		let buttonName = $(this).text();
		let buttonActive = $(this).hasClass("active");



		if (buttonActive==false) {
			$(this).addClass("active");
			$(this).removeClass("inactive");
			$("."+buttonName).show("slow");
			console.log(buttonActive);



		} else {
			$(this).addClass("inactive");
			$(this).removeClass("active");
			$("."+buttonName).hide("slow");
		}
	});



});

function openModal(id) {

  console.log(id)
  document.getElementById('modal'+id).style.display = "block";
}

function closeModal(id) {
  document.getElementById('modal'+id).style.display = "none";
}


