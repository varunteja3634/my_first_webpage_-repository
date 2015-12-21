$(document).ready(jquery);

function jquery() {
    setInterval(autoSlide, 12000);
}

function autoscroll(){
    
}

function autoSlide(){
    var $slide2 = $('#slider-2-trigger');
    var $slide1 = $('#slider-1-trigger');
    
    if($slide1.is(':checked')){
        $slide2.click();
    }else{
        setInterval($slide1.click(), 12000);
    }
}