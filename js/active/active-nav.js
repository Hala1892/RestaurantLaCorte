$(document).ready(function () {
        $(document).on("scroll", onScroll);
        
        //smoothscroll
        $('.navbar-nav li a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
            
            $('.navbar-nav li a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
          
            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 2200, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });
    
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#bs-example-navbar-collapse-1 a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top - 100 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#bs-example-navbar-collapse-1 ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }