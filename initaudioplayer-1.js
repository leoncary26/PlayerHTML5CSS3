jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingaudioplayer-1").amazingaudioplayer({
        jsfolder:jsFolder,
        skinsfoldername:"",
        volumeimagewidth:24,
        barbackgroundimage:"",
        imagewidth:550,
        showtime:true,
        titleinbarwidth:80,
        showprogress:true,
        random:false,
        titleformat:"%TITLE%",
        height:600,
        prevnextimage:"https://1.bp.blogspot.com/-Dqy69J5EMas/WQEbn80Y16I/AAAAAAAAvtM/DRKi6WvoGEMtYnXySLJBci3ZfjyggQOLgCLcB/s1600/prevnext-24-24-1.png",
        showinfo:false,
        imageheight:181,
        skin:"BarWhiteTitle",
        loopimage:"https://4.bp.blogspot.com/-hpL3l6IZsQo/WQEbnouyArI/AAAAAAAAvtQ/oy__0VACAJ4vOAr9P7AnIBEo0uz3lQ76ACLcB/s1600/loop-24-24-2.png",
        loopimagewidth:24,
        volumebarheight:80,
        prevnextimageheight:24,
        infoformat:"De %ARTIST% - %ALBUM%<br />%INFO%",
        showstop:false,
        preloadaudio:true,
        showvolumebar:true,
        width:555,
        showtitleinbar:true,
        showloop:true,
        volumeimage:"https://1.bp.blogspot.com/-ACPuytH4H2c/WQEboRYqrAI/AAAAAAAAvtY/HoT6nYcpogwv2-CB8pI67GDP23EFWXw9wCLcB/s1600/volume-24-24-2.png",
        playpauseimagewidth:24,
        loopimageheight:24,
        tracklistitemformat:"%ID%. %TITLE%",
        prevnextimagewidth:24,
        tracklistarrowimage:"https://4.bp.blogspot.com/-RoiLun7amf8/WQEboeTU84I/AAAAAAAAvtU/mtwWs_YKWNkj6HaJsJL4V3I7Yld8GEomwCLcB/s1600/tracklistarrow-16-16-0.png",
        playpauseimageheight:24,
        showbackgroundimage:false,
        progresswidthmode:"auto",
        stopimage:"stop-24-24-1.png",
        showvolume:true,
        playpauseimage:"https://4.bp.blogspot.com/-zWBXo1ojxrM/WQEbnjDRjEI/AAAAAAAAvtI/fj7FGxmo5WgsfXbm6Rz_YMnM3etqtXjYQCLcB/s1600/playpause-24-24-1.png",
        showprevnext:true,
        backgroundimage:"",
        volumebarpadding:8,
        progressheight:8,
        showtracklistbackgroundimage:false,
        progresswidth:96,
        showtitle:false,
        defaultvolume:-1,
        tracklistarrowimageheight:16,
        heightmode:"auto",
        titleinbarformat:"%TITLE%",
        showtracklist:true,
        stopimageheight:24,
        volumeimageheight:24,
        stopimagewidth:24,
        noncontinous:false,
        tracklistbackgroundimage:"",
        showbarbackgroundimage:false,
        showimage:true,
        tracklistwidth:555,
        tracklistarrowimagewidth:16,
        timeformat:"%CURRENT% / %DURATION%",
        autoplay:false,
        loop:1,
        tracklistitem:10
    });
});