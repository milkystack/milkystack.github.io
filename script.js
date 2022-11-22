var request_02 = new XMLHttpRequest();
request_02.open('GET', './data/timeline.json');
request_02.responseType = 'json';
request_02.send();
request_02.onload = function() {
    var list = request_02.response;
    list = JSON.parse(JSON.stringify(list));

    for (var index = 0; index < list.length; index++) {
        var elem = '<a href="'+list[index].link+'" class="timeline_content inview_re fadeIn_up"><div class="date">'+list[index].date+'</div><div class="content">'+list[index].title+'</div></a>'
        timeline.insertAdjacentHTML('beforeend', elem); 
        if(index == 2){break;}
    }

    for (var index = 0; index < list.length; index++) {
        var elem = '<a href="'+list[index].link+'"><div class="section__item"><div><img src="'+list[index].cover+'" alt=""></div><p>'+list[index].title+'</p></div></a>'
        section.innerHTML += elem;
    }
    init();
}

var request = new XMLHttpRequest();
request.open('GET', './data/playlist.json');
request.responseType = 'json';
request.send();
request.onload = function() {
    var list = request.response;
    list = JSON.parse(JSON.stringify(list));

    for (var index = 0; index < list.length; index++) {
        var murl = list[index].replace('music.apple.com', 'embed.music.apple.com');
        var elem = '<iframe src="'+murl+'&amp;app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=light" height="175px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style="width: 100%; overflow: hidden; border-radius: 10px; background-color: transparent; --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor: transparent;" data-darkreader-inline-bgimage="" data-darkreader-inline-bgcolor=""></iframe>'
        playlist.insertAdjacentHTML('beforeend', elem); 
        if(index == 2){
            var elem = '<a href="./music.html" id="more" class="anim-box kiran">More</a>';
            playlist.insertAdjacentHTML('beforeend', elem); 
            return;
        }
    }
    init();
}

$(function(){
    $(window).on('load',function(){
        setTimeout(() => {
            loading.style.left = "100%";
            window.scroll({
                top: 1,
                behavior: "smooth"
            });
            $("#snap_scroll").addClass("kiran");
        }, 500);
    });
});
function init() {
    $(".inview_re").on("inview", function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass("is-show");
        } else {
            $(this).stop().removeClass("is-show");
        }
    });
}