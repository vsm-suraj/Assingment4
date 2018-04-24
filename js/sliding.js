$(document).ready(function () {
    $('.pins').click(function () {
        $('.pins-ng-view').show();
        $('.routing-div').hide();
        $('.column-left-main-body').animate({
            top: '630px',
            height: '50px'
        }, 'slow');
    });

    $('.left-side-nav-bar').click(function () {
        $('.pins-ng-view').hide();
        $('.routing-div').show();
        $('.column-left-main-body').animate({
            top: '40px',
            height: '650px'
        }, 'slow');
    });
});