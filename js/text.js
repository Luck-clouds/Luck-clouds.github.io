var a_idx = 0;  
  
// 定义一个函数来生成随机颜色  
function getRandomColor() {  
    var letters = '0123456789ABCDEF';  
    var color = '#';  
    for (var i = 0; i < 6; i++) {  
        color += letters[Math.floor(Math.random() * 16)];  
    }  
    return color;  
}  
  
jQuery(document).ready(function($) {  
    $("body").click(function(e) {  
        var a = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];  
        var $i = $("<span/>").text(a[a_idx]);  
        a_idx = (a_idx + 1) % a.length;  
  
        var x = e.pageX,  
            y = e.pageY;  
  
        // 设置随机颜色  
        var randomColor = getRandomColor();  
  
        $i.css({  
            "z-index": 5,  
            "top": y - 20,  
            "left": x,  
            "position": "absolute",  
            "font-weight": "bold",  
            "color": randomColor, // 使用随机颜色  
            "opacity": 1 // 初始透明度设置为1  
        });  
  
        $("body").append($i);  
  
        $i.animate({  
            "top": y - 180,  
            "opacity": 0  
        }, 3000, function() {  
            $i.remove();  
        });  
    });  
  
    // 注意：下面的setTimeout调用存在问题，因为'delay()'是一个字符串，而不是函数引用  
    // 如果您确实想延迟执行某个函数，应该这样做：  
    // setTimeout(delay, 2000); 而不是 setTimeout('delay()', 2000);  
    // 但是，由于'delay'函数在您的代码中没有实际执行任何与DOM相关的操作，并且它试图移除一个不存在的'onclick'属性，  
    // 所以这个setTimeout调用可能是不必要的，或者需要进一步的上下文来确定其用途。  
    // setTimeout(delay, 2000); // 如果需要的话，可以这样调用  
});  
  
// 保留这个函数，但请注意它可能不执行任何实际有用的操作  
function delay() {  
    $(".buryit").removeAttr("onclick");  
}