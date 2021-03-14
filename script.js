//show notification and close notification

var notice = document.getElementById('notice');

notice.style.bottom = '-135px';

setTimeout(function(){
	notice.style.bottom = '50px';
	notice.style.transition = 'bottom 1.5s';
}, 3000);

var closeNotice = function () {
	notice.style.display = 'none';
}


//tabs products
function showTab(tabName) {
	var i;
	var x = document.getElementsByClassName("tab");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	document.getElementById(tabName).style.display = "flex";

	//buoc 1: an tat ca cac tab
	//buoc 2: hien 1 tab bang the id
	

	var nn = tabName + '-father';

	var j;
	var z = document.getElementsByClassName("tabTitle");
	for (j = 0; j < z.length; j++) {
		z[j].style.borderBottom = "none";
	}

	document.getElementById(nn).style.borderBottom = "2px solid #151515";
}


//count like and cart
var countCart = 0;
var countLike = 0;

document.getElementById('count-cart').innerHTML = countCart;
document.getElementById('count-like').innerHTML = countLike;

function addToCart () {
	countCart++;
	document.getElementById('count-cart').innerHTML = countCart;
}

function like () {
	countLike++;
	document.getElementById('count-like').innerHTML = countLike;
}


//up top btn
upTop = document.getElementById('up-top');

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
	if ( document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		upTop.style.opacity = 1;
	} else {
		upTop.style.opacity = 0;
	}
}

function onTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}