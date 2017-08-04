/* 根据屏幕尺寸改变根元素大小 */
(function(win,doc){
    win.onload=win.onresize=function(){
        doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/375+'px';
    };
})(window,document);

// ====================================
//     滑屏时阻止touchend事件冒泡
    // stopTouchendPropagationAfterScroll();
    // function stopTouchendPropagationAfterScroll(){
    //     var flag = false;
    //     window.addEventListener('touchmove', function(ev){
    //         flag || (flag = true, window.addEventListener('touchend', stopTouchendPropagation, true));
    //     }, false);
    //     function stopTouchendPropagation(ev){
    //         ev.stopPropagation();
    //         setTimeout(function(){
    //             window.removeEventListener('touchend', stopTouchendPropagation, true);
    //             flag = false;
    //         }, 50);
    //     }
    // }
// ========================================

// zepto.js点透事件用fastclick.js解决
// 方法一
// $(function() {  /*使用jQuery/zepto.js*/
//     FastClick.attach(document.body);
// });

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