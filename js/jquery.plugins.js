/* jQuery */
$(document).ready(function() {
      
      // tooltip bootstrap
      $('[data-toggle=tooltip]').tooltip({
            template: '<div class="tooltip tooltip-square"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            container: "body"
      });

      /* slider */
      //initialize swiper when document ready  
      var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            parallax: true,
            speed: 600,
            effect: 'fade',
            autoplay: "3000"
      });

      /* lightBox galerie */
      $("#lightgallery").lightGallery({
            thumbnail: false,
            loop: false,
            download: false,
            hideControlOnEnd: true,
            counter: false,
            zoom: false,
            autoplayControls: false,
            hash: false
            }); 
      
      /* rollover nad gallerii obrázku */
      $(".img-overlay").mouseenter(function(){
                  $(this).addClass("hover");
            })
            // handle the mouseleave functionality
            .mouseleave(function(){
                  $(this).removeClass("hover");
      });
      
      /* top animate scroll */
      $('a[href=#top]').click(function(){
            $('html, body').animate({scrollTop:0}, '1000');
            return false;
      });
      
      $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 0) {
                  $('.back-admin').addClass('fixed');
            } else {
                  $('.back-admin').removeClass('fixed');
            }
      });
      
      // contact form validation
      $("#request").validate({
            rules: {
                  note: "required",
                  name: { required: true, minlength: 5 },
                  email: { required: true, email: true },
                  phone: { required: true, digits: true, minlength: 9 },
                  secure: { required: true, digits: true },
            },
          
            submitHandler: function(form) {
                  $("input:submit").replaceWith('<input type="submit" class="btn btn-square btn-danger" disabled="disabled" value="právě teď se to odesílá ..." />');
                  form.submit();
            }
      });
});

// EU cookie law javascript
window.cookieconsent_options = {
      "message":"Tato webová stránka používá cookies, abychom věděli, jak stránky vylepšit. Používáním našich webových stránek vyjadřujete svůj souhlas.",
      "dismiss":"V pořádku",
      "learnMore":"Více info",
      "link":"",
      "theme":"dark-bottom"
      };