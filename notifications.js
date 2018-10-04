setTimeout(function() {
	var updateTitle = function () {
		var amount = document.querySelector('#sidebar .todayToolbar-count').innerText.match(/[0-9]+/)[0];
		var regex = /(.*)\(([0-9]+)\)$/;
		var titleMatch = document.title.match(regex);
		if (!titleMatch)
			document.title = document.title + ' (' + amount + ')';
		else if (titleMatch[2] != amount)
			document.title = titleMatch[0] + ' (' + amount + ')';
	};
	var todayCount = document.querySelector('#sidebar .todayToolbar-count');
	var pageTitle = document.querySelector('head title');
	var config = { childList: true };
	
	var observer = new MutationObserver(updateTitle);
	observer.observe(todayCount, config);
	observer.observe(pageTitle, config);
	
	updateTitle();
}, 10*1000);