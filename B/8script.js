var tile1_at_random = Math.floor((Math.random()*20));
var tile2_at_random = Math.floor((Math.random()*20));

var tile = document.getElementsByClassName('item');

if(((tile1_at_random)<16 && (tile2_at_random)<16)) {
	if(tile1_at_random != tile2_at_random) {
		tile[tile1_at_random].innerHTML = '2';
		tile[tile2_at_random].innerHTML = '2';
	}
}

window.addEventListener('keydown',function(e){
	if(e.keyCode == '38') {
		//up key
	}
	else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
    }
});
