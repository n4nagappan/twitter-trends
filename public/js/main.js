$(document).ready(function(){
    var data ={
        url : "https://thenypost.files.wordpress.com/2013/10/stevejobsbig.jpg",
        name: "Steve",
        text: "Good artists copy, Great artists steal",
        screen_name : "@jobs"
    };
    
    $.get("http://107.170.209.244/celetwit/tweets",function(data){
        alert(typeof data);
        for( var i = 0; i< 99 ; ++i){
            var html = ich.cardui(data);
            $('#card_list').append(html);
        }
    });
});