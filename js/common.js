$(document).ready((function(){$(".mainslider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',speed:1200});var o=$(".gallery"),e=$(".pagingInfo__count"),t=$(".pagingInfo__all");o.on("init reInit afterChange",(function(o,s,n,i){if(s.slideCount<10){var l=(n||0)+1;e.text("0"+l),t.text(" / 0"+s.slideCount)}else{l=(n||0)+1;e.text(l),t.text(" / "+s.slideCount)}})),o.slick({infinite:!1,slidesToShow:3,slidesToScroll:1,dots:!1,prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',pauseOnFocus:!1,pauseOnHover:!1,speed:300,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),$(".submenu > span").click((function(){$(this).toggleClass("menuarrrotate"),$(this).next(".sublist").slideToggle()})),$(".header__language span").click((function(){$(this).toggleClass("menuarrrotate"),$(this).next("ul").slideToggle()})),$(window).scroll((function(){$(window).scrollTop()>10&&$()})),$((function(){var o=0;$(window).scroll((function(e){var t=$(this).scrollTop();Math.abs(o-t)<=15||(t>o&&o>0?$(".header__whiteline").slideUp("hideline"):$(".header__whiteline").slideDown("hideline"),o=t)}))})),$((function(){$(".footer .totop").click((function(){return $("html, body").animate({scrollTop:0},1500),!1}))})),$(".burger").click((function(){$(".mobwrapp").addClass("show")})),$(".closemenu").click((function(){$(".mobwrapp").removeClass("show")})),$(".mobtelbox").click((function(){$(this).find("ul").slideToggle()})),$(document).click((function(o){$(o.target).closest(".mobtelbox").length||$(".mobtelbox").find("ul").slideUp()})),$(".closemodal, .fullscreenmodal__btns a").click((function(o){o.preventDefault(),$(".fullscreenmodal").fadeOut()})),$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-nav",dots:!1}),$(".slider-nav").slick({slidesToShow:4,slidesToScroll:1,asNavFor:".slider-for",dots:!1,focusOnSelect:!0,arrows:!0,prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:2}}]}),$(".faq-closeshow").click((function(){$(this).parents(".faqsection__box").find(".faqsection__body").slideToggle(),$(this).parents(".faqsection__box").find(".faqsection__header").toggleClass("arrowimg")})),$("*").is(".telnum")&&$(".telnum").inputmask({mask:"+ 99 999 999 9999",showMaskOnHover:!1,showMaskOnFocus:!1})}));