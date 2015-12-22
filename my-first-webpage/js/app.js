$(document).ready(jquery);

function jquery() {
    var radio = $('input[id^="slide-"]');
    var label = $(".clients label");
    
        //get the id of the checked radio button    
        var id = $('input[id^="slide-"]:checked').attr("id");
        
        //set it to the matched label with same for attribute
       $(".clients label[for='"+id+"']").addClass("checked-label"); 
    
   // Bind listener to the inputs
    radio.change(labelStyles); 
    
    setInterval(autoSlide, 12000);
}

function autoSlide(){
    var $slider2 = $('#slider-2-trigger');
    var $slider1 = $('#slider-1-trigger');
    var checkedLabel = $('.checked-label');
    var next = checkedLabel.next();   
    if($slider1.is(':checked')){
        $slider2.click(); 
    }else{
        setInterval($slider1.click(), 12000);
    }
    
    if(next.is("label")){
        next.click();
    }else{
       $(".clients label:first-of-type").click();
    }
}

function labelStyles(){
        // On change, get the ID of the changed radio
    		var id = $(this).attr("id");
        // Remove the class .checked-label from the labels
        $(".clients label").removeClass("checked-label");
        // Add the class to the label for the checked radio
        $(".clients label[for='"+id+"']").addClass("checked-label");
         
    }
