/* 根据屏幕尺寸改变根元素大小 */



 var calculate_size = function () {	/*字体设置为font-size: 0.32rem;  1rem=100px*/
     var BASE_FONT_SIZE = 100;
     var docEl = document.documentElement,
         clientWidth = docEl.clientWidth;
     if (!clientWidth) return;
     docEl.style.fontSize = BASE_FONT_SIZE * (clientWidth / 750) + 'px';
};
// Abort if browser does not support addEventListener
if (document.addEventListener) {
 var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
 window.addEventListener(resizeEvt, calculate_size, false);
 document.addEventListener('DOMContentLoaded', calculate_size, false);
 calculate_size();
}



// (function (win,doc) {
//         function setSize() {
//           doc.documentElement.style.fontSize=50*document.documentElement.clientWidth/375+'px';
//         }
//         setSize();
//         win.addEventListener('resize',setSize,false)
//       })(window,document);




