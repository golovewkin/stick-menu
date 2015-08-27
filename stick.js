/**
 * Created by Den on 25.08.2015.
 */
(function ($) {
    $.fn.stickMenu = function () {

        var menu = $(this);
           //ставим активным первый li
            if (!(menu.find('li').hasClass("active"))) {

                this.find('li').first().addClass('active');

            }

        var line = $('#line');
        var active = menu.find('.active');

        var default_pos = active.offset().left - menu.offset().left;
        var default_width = active.outerWidth();
        line.css({left: default_pos, width: default_width});
        menu.find('li').hover(function () {

            var self = $(this);
            var diff = self.offset().left - menu.offset().left;
            line.stop().animate({
                width: self.outerWidth(),
                left: diff
            }, 500);

        }, function () {
            line.stop().animate({
                width: default_width,
                left: default_pos
            }, 500);
        });

    };
})(jQuery);
