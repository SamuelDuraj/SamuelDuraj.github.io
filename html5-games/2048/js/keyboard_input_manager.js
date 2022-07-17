function KeyboardInputManager(){this.events={},window.navigator.msPointerEnabled?(this.eventTouchstart="MSPointerDown",this.eventTouchmove="MSPointerMove",this.eventTouchend="MSPointerUp"):(this.eventTouchstart="touchstart",this.eventTouchmove="touchmove",this.eventTouchend="touchend"),this.listen()}KeyboardInputManager.prototype.on=function(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)},KeyboardInputManager.prototype.emit=function(t,e){var n=this.events[t];n&&n.forEach((function(t){t(e)}))},KeyboardInputManager.prototype.listen=function(){var t,e,n=this,o={38:0,39:1,40:2,37:3,75:0,76:1,74:2,72:3,87:0,68:1,83:2,65:3};document.addEventListener("keydown",(function(t){var e=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey,i=o[t.which];e||void 0!==i&&(t.preventDefault(),n.emit("move",i)),e||82!==t.which||n.restart.call(n,t)})),this.bindButtonPress(".retry-button",this.restart),this.bindButtonPress(".restart-button",this.restart),this.bindButtonPress(".keep-playing-button",this.keepPlaying);var i=document.getElementsByClassName("game-container")[0];i.addEventListener(this.eventTouchstart,(function(n){!window.navigator.msPointerEnabled&&n.touches.length>1||n.targetTouches.length>1||(window.navigator.msPointerEnabled?(t=n.pageX,e=n.pageY):(t=n.touches[0].clientX,e=n.touches[0].clientY),n.preventDefault())})),i.addEventListener(this.eventTouchmove,(function(t){t.preventDefault()})),i.addEventListener(this.eventTouchend,(function(o){if(!(!window.navigator.msPointerEnabled&&o.touches.length>0||o.targetTouches.length>0)){var i,a;window.navigator.msPointerEnabled?(i=o.pageX,a=o.pageY):(i=o.changedTouches[0].clientX,a=o.changedTouches[0].clientY);var r=i-t,s=Math.abs(r),h=a-e,u=Math.abs(h);Math.max(s,u)>10&&n.emit("move",s>u?r>0?1:3:h>0?2:0)}}))},KeyboardInputManager.prototype.restart=function(t){t.preventDefault(),this.emit("restart")},KeyboardInputManager.prototype.keepPlaying=function(t){t.preventDefault(),this.emit("keepPlaying")},KeyboardInputManager.prototype.bindButtonPress=function(t,e){var n=document.querySelector(t);n.addEventListener("click",e.bind(this)),n.addEventListener(this.eventTouchend,e.bind(this))};