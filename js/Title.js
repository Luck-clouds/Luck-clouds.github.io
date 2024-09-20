<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '-(◞‸◟)-别走~';
         clearTimeout(titleTime);
     }
     
     else {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '(,,・ω・,,)' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });