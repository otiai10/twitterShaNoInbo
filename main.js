$(function(){
    var a = $('div.flex-module.profile-banner-footer.clearfix>div>ul>li>a.js-nav');
    $.each(a, function(){
        if($(this).attr('href') == '/followers'){
            var target = $(this);
            setInterval(function(){
                var followers = parseInt(target.children('strong').html());
                if(!followers) followers = 0;
                if(localStorage.getItem('decrement') == 'true') followers--;
                else followers++;
                target.children('strong').html(followers);
            },1000);
        }
    });
});
