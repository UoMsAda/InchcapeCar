function toggleAccordionPanel() {
    
    var accordios = $(".accordion");

    if(!accordios){
        return;
    }

    var panels = $(".accordion-container .panel");
    
    panels.hide();
    accordios.click(function() {		
        
        accordios.removeClass("active");
        
        var nextPanel = $(this).next();
        
        if(nextPanel.is(":visible")) {
            nextPanel.hide();
        } else {
            nextPanel.show();
            $(this).addClass("active");
        }
        
    });
}

function toggleRightMenu() {
    var rightMenu = $(".right-menu-box");

    if(!rightMenu) {
        return;
    }

    rightMenu.hide();
    
    $(".user-icon").click(function(e) {					
                if(rightMenu.is(":visible")) {
                    rightMenu.hide("slow");
                } else {
                    rightMenu.show("slow");
                }
    });
    
    $(".close-icon").click(function() {
        rightMenu.hide("slow");
    });
}

function toggleContactMenu() {
    var rightMenu = $(".contact-menu-model-box");
    if(!rightMenu) {
        return;
    }
    rightMenu.hide(); 
    $(".contact").click(function(e) {	 		
        if(rightMenu.is(":visible")) {	 		
            rightMenu.hide();
            removeUnScroll();
        } else {	 		
            rightMenu.show();
            unScroll();
         }
     });
    
    $(".close-icon").click(function() {		
        rightMenu.hide();
        removeUnScroll();
    });
}

function toggleFilter() {
    var listTypes = $(".list-type");
    if(!listTypes) {
        return;
    }
    listTypes.click(function() {
        var current = $(this);
        listTypes.removeClass("type-selector-active");
        current.addClass("type-selector-active");
        
        
        var currentTargetData = current.attr("target-data");
        $(".list-content").hide();
        $("."+currentTargetData).show();
    });
}

//do not scrolling
function unScroll() {
    var top = $(document).scrollTop();
    $(document).on('scroll.unable',function (e) {
        $(document).scrollTop(top);
    })
}
//remove do not scrolling
function removeUnScroll() {
    $(document).unbind("scroll.unable");
}

function otherDeal() {
    if((".view-detail")) {
        $(".view-detail").click(function() {
            location.href = "../page/product-details.html";
        });
    }
    if($(".back")) {
        $(".back").click(function() {
            history.back();
        });
        
    }
    if($(".logo")) {
        $(".logo").click(function() {
            location.href = "../page/index.html";
        });
        
    }
}

$(function() {
    toggleAccordionPanel();
    
    toggleRightMenu();
    
    toggleContactMenu();
     
    
    toggleFilter();

    otherDeal();
    
});