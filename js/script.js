
$(document).ready(function(){
    // console.log("hiii");

    // Start Back To Top
    $(".btn-backtotops").hide();
    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if(getscrolltop >= 370){
            $(".btn-backtotops").fadeIn(1000);
        }else{
            $(".btn-backtotops").fadeOut(1000);
        }
    });
    // End Back To Top 


    // Start Headers

    // Start nav 

    // for bugger
    $(".navbuttons").click(function(){
        $(".navbuttons").toggleClass("crossxs");
    });

    // for nav 

    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();
        // conslole.log(getscrolltop);

        if(getscrolltop >= 200){
            $(".navbar").addClass("navmenus");
        }else{
            $(".navbar").removeClass("navmenus");
        }
    });

    // End nav 

    // End Header 

    // Start Properties

    $(".propertylists").click(function(){

        // for activeitems
        $(this).addClass("activeitems");
        $(this).siblings().removeClass("activeitems");


        // for filter 
        let getattvalue = $(this).attr("data-filter");
        // console.log(getattrvalue);

        if(getattvalue === "all"){
            $(".filters").show("slide",500);
        }else{

            $(".filters").hide();

            $(".filters").not("."+getattvalue).hide("slide",500);

            $(".filters").filter("."+getattvalue).show("slide",500);
        }
    });

    // For image overlay (or) lightbox2

    lightbox.option({
        showImageNumberLabel:false
    });
    
    // End properties

    // Start Adv Section

    $(window).scroll(function(){

        let getscrolltop = $(this).scrollTop();

        if(getscrolltop >= 900){
            $(".advimages").addClass("fromlefts");
            $(".advtexts").addClass("fromrights");
        }else{
            $(".advimages").removeClass("fromlefts");
            $(".advtexts").removeClass("fromrights");

        }
    });

    // End Adv Section


    // Start Footer Section 
    const getyear = $("#getyear");
    const getfullyear = new Date().getUTCFullYear();
    getyear.text(getfullyear);
    // End Footer Section 


});