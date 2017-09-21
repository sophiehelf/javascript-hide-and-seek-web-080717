function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget() {
	return document.querySelector('#nested div div div .target');
}

function increaseRankBy(n) {
	var list = document.querySelectorAll('.ranked-list');
	for (var i = 0; i < list.length; i++) {
		list[i].innerHTML = (i+1).toString();
	}
}

function deepestChild() {
	return document.getElementById('grand-node').querySelector('div div div div div');
}