// 非chrome或非edge打开页面时显示警告
let ua = navigator.userAgent;
if (ua.includes("Chrome") || ua.includes("Edge")) {
        var warningDiv = document.getElementById("warning");
        warningDiv.style.display = "none";
}

// 在控制台中显示的信息
function howToEntitleIt1() {
    window.console.log.apply(console, [" %c %c %c 作者 %c  %c 白杨 %c","background: #fadfa3; padding:5px 0;","background: #fadfa3; padding:5px 0;","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;","background: #FCEDC9; color:#030307; padding:5px 0;","background: #fadfa3; padding:5px 0;"]);
    window.console.log.apply(console, ["%c 当你看到这行字时，想必已经打开了这个网页的控制台（或这个网页的html文件）。\n 作者并非专业的网页开发者，这个网页只是边学边做的，纯属图一乐 %c","background: #FFFFCC; padding:5px 0;","background: #FFFFCC; padding:5px 0;"]);
}howToEntitleIt1()

let boolean1 = true;
const drags = document.querySelectorAll('.special');
const sp = document.getElementById("sp");
const special = document.getElementsByClassName("special");

sp.addEventListener('mousedown', function(e){
    for ( i = 0 ; i < 4 ; i++) {
        special.item(i).style.left = ( Math.floor ( Math.random() * 1000 ) ) + 'px';
        special.item(i).style.top = ( Math.floor ( Math.random() * 1000 ) ) + 'px';
        special.item(i).style.display = 'block';
    }
})

const allowableError = 4;
drags.forEach( function(drag) {
    drag.addEventListener('mousedown', function(e) {
        let offsetX = e.clientX - drag.offsetLeft;
        let offsetY = e.clientY - drag.offsetTop;
        
        function move(e) {
            drag.style.position = 'absolute';
            drag.style.left = (e.clientX - offsetX) + 'px';
            drag.style.top = (e.clientY - offsetY) + 'px';
        }
    
        function stopMoving(e) {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('mouseup', stopMoving);
            if ( Math.abs( special.item(1).offsetLeft - special.item(0).offsetLeft ) < Math.abs( special.item(0).offsetWidth + allowableError ) && Math.abs( special.item(1).offsetTop - special.item(0).offsetTop ) < allowableError ) {
                if ( Math.abs( special.item(2).offsetLeft - special.item(0).offsetLeft ) < allowableError && Math.abs( special.item(2).offsetTop - special.item(0).offsetTop ) < Math.abs( special.item(0).offsetHeight + allowableError ) ) {
                    if ( Math.abs( special.item(3).offsetLeft - special.item(2).offsetLeft ) < Math.abs( special.item(2).offsetWidth + allowableError ) && Math.abs( special.item(3).offsetTop - special.item(2).offsetTop ) < allowableError ) {
                        if ( Math.abs( special.item(3).offsetLeft - special.item(1).offsetLeft ) < allowableError && Math.abs( special.item(3).offsetTop - special.item(1).offsetTop ) < Math.abs( special.item(1).offsetHeight + allowableError ) ) {
                            document.getElementById("special").style.display = "block";
                            document.getElementById("sp").style.display = "none";
                            for (let index = 0; index < 4; index++) {
                                document.getElementsByClassName("special").item(index).style.display = "none";
                            }
                            if ( boolean1 == true) {
                                document.getElementById("bingo").style.left = document.getElementsByClassName("special").item(0).style.left;
                                document.getElementById("bingo").style.top = document.getElementsByClassName("special").item(0).style.top;
                                document.getElementById("bingo").style.display = "block";
                                boolean1 = false;
                            }
                            for ( i = 0 ; i < 4 ; i++) {
                                special.item(i).style.left = ( Math.floor ( Math.random() * 1000 ) ) + 'px';
                                special.item(i).style.top = ( Math.floor ( Math.random() * 1000 ) ) + 'px';
                            }
                        }
                    }
                }
            }
        }
    
        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', stopMoving);
    } );
} );