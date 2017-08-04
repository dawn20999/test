/* 根据屏幕尺寸改变根元素大小 */
(function (doc, win) {      //字体设置为0.32rem，1rem=100px；
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;        
        if (!clientWidth) return;
        docEl.style.fontSize = 100*(clientWidth/750) + 'px';
    };
    if ( ! doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


//  var calculate_size = function () {
//      var BASE_FONT_SIZE = 100;
//      var docEl = document.documentElement,
//          clientWidth = docEl.clientWidth;
//      if (!clientWidth) return;
//      docEl.style.fontSize = BASE_FONT_SIZE * (clientWidth / 750) + 'px';
// };
// // Abort if browser does not support addEventListener
// if (document.addEventListener) {
//  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
//  window.addEventListener(resizeEvt, calculate_size, false);
//  document.addEventListener('DOMContentLoaded', calculate_size, false);
//  calculate_size();
// }



// (function (win,doc) {
//         function setSize() {
//           doc.documentElement.style.fontSize=50*document.documentElement.clientWidth/375+'px';
//         }
//         setSize();
//         win.addEventListener('resize',setSize,false)
//       })(window,document);


// ====================================
//     滑屏时阻止touchend事件冒泡
    stopTouchendPropagationAfterScroll();
    function stopTouchendPropagationAfterScroll(){
        var flag = false;
        window.addEventListener('touchmove', function(ev){
            flag || (flag = true, window.addEventListener('touchend', stopTouchendPropagation, true));
        }, false);
        function stopTouchendPropagation(ev){
            ev.stopPropagation();
            setTimeout(function(){
                window.removeEventListener('touchend', stopTouchendPropagation, true);
                flag = false;
            }, 50);
        }
    }
// ========================================

// zepto.js点透事件用fastclick.js解决
// 方法一
$(function() {  /*使用jQuery/zepto.js*/
    FastClick.attach(document.body);
});

// if ('addEventListener' in document) {  原生js
//     document.addEventListener('DOMContentLoaded', function() {
//         FastClick.attach(document.body);
//     }, false);
// }
// 方法二
 // $("#cbFinish").on("touchend", function (event) {  
 //     //很多处理比如隐藏什么的
 //     event.preventDefault();
 // });