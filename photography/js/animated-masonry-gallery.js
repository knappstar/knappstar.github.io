$(window).load(function () {

var size = 1;
var button = 1;
var button_class = "gallery-header-center-right-links-current";
var normal_size_class = "gallery-content-center-normal";
var full_size_class = "gallery-content-center-full";
var $container = $('#gallery-content-center');
    
$container.isotope({itemSelector : 'img'});


function check_button(){
	$('.gallery-header-center-right-links').removeClass(button_class);
	if(button==1){
		$("#filter-all").addClass(button_class);
		$("#gallery-header-center-left-title").html('All Galleries');
		}
	if(button==2){
		$("#filter-animals").addClass(button_class);
		$("#gallery-header-center-left-title").html('Animal Gallery');
		}
	if(button==3){
		$("#filter-arch").addClass(button_class);
		$("#gallery-header-center-left-title").html('Architecture Gallery');
		}	
	if(button==4){
		$("#filter-food").addClass(button_class);
		$("#gallery-header-center-left-title").html('Food Gallery');
		}
	if(button==5){
		$("#filter-landscapes").addClass(button_class);
		$("#gallery-header-center-left-title").html('Landscapes Gallery');
		}		
	if(button==6){
		$("#filter-nature").addClass(button_class);
		$("#gallery-header-center-left-title").html('Nature Gallery');
		}	
	if(button==7){
		$("#filter-night").addClass(button_class);
		$("#gallery-header-center-left-title").html('Night Gallery');
		}	
	if(button==8){
		$("#filter-portraits").addClass(button_class);
		$("#gallery-header-center-left-title").html('Portraits Gallery');
		}
	if(button==9){
		$("#filter-products").addClass(button_class);
		$("#gallery-header-center-left-title").html('Products Gallery');
		}		
	if(button==10){
		$("#filter-travel").addClass(button_class);
		$("#gallery-header-center-left-title").html('Travel Gallery');
		}	
}
	
function check_size(){
	$("#gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
	if(size==0){
		$("#gallery-content-center").addClass(normal_size_class); 
		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');
		}
	if(size==1){
		$("#gallery-content-center").addClass(full_size_class); 
		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');
		}
	$container.isotope({itemSelector : 'img'});
}


	
$("#filter-all").click(function() { $container.isotope({ filter: '.all' }); button = 1; check_button(); });
$("#filter-animals").click(function() {  $container.isotope({ filter: '.animals' }); button = 2; check_button();  });
$("#filter-arch").click(function() {  $container.isotope({ filter: '.arch' }); button = 3; check_button();  });
$("#filter-food").click(function() {  $container.isotope({ filter: '.food' }); button = 4; check_button();  });
$("#filter-landscapes").click(function() {  $container.isotope({ filter: '.landscapes' }); button = 5; check_button();  });
$("#filter-nature").click(function() {  $container.isotope({ filter: '.nature' }); button = 6; check_button();  });
$("#filter-night").click(function() {  $container.isotope({ filter: '.night' }); button = 7; check_button();  });
$("#filter-portraits").click(function() {  $container.isotope({ filter: '.portraits' }); button = 8; check_button();  });
$("#filter-products").click(function() {  $container.isotope({ filter: '.products' }); button = 9; check_button();  });
$("#filter-travel").click(function() {  $container.isotope({ filter: '.travel' }); button = 10; check_button();  });
$("#gallery-header-center-left-icon").click(function() { if(size==0){size=1;}else if(size==1){size=0;} check_size(); });


check_button();
check_size();
});