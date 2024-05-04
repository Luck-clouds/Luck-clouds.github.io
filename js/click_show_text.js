var a = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];  
var a_idx = 0;  
  
jQuery(document).ready(function($) {  
    $("body").click(function(e) {  
        var textSpan = $("<span/>").text(a[a_idx]);  
        a_idx = (a_idx + 1) % a.length;  
        var x = e.pageX,  
            y = e.pageY;  
        textSpan.css({  
            "z-index": 5,  
            "top": y - 20,  
            "left": x,  
            "position": "absolute",  
            "font-weight": "bold",  
            "color": "#FF0000"  
        });  
        $("body").append(textSpan);  
        textSpan.animate({  
            "top": y - 180,  
            "opacity": 0  
        }, 3000, function() {  
            textSpan.remove();  
        });  
    });  
  
    // 如果需要延迟执行某个函数，并且该函数与点击事件无关，可以这样做：  
    setTimeout(function() {  
        // 这里假设你要做一些与点击事件无关的操作  
        // 例如：移除某个元素的onclick事件，但首先你需要确保这个元素存在  
        // $(".buryit").off("click"); // 使用.off()代替.removeAttr("onclick")  
    }, 2000);  
});