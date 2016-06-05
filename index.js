var $log = document.getElementById('logs');
function log(msg) {
	$log.value = ($log.value ? $log.value + '\n' : '') + msg + '\n';
}

window.onerror = function(msg) {
	alert(msg);
};

const ua = navigator.userAgent;
const info = {};
log(ua);

// 获取系统信息
if (/windows/gi.test(ua)) {
	// Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)
	info.system = {
		name: 'windows'
	};

} else if (/iphone|ipad|mac|ipod/gi.test(ua)) {
	try {
		var _sys = ua.match(/(os|mac os x)\s([0-9]{1,2}([_\.][0-9]{1,2})*)/i);
		info.system = {
			name: _sys[1].replace(/^os/i, 'IOS'),
			version: _sys[2].replace(/_/g, '.')
		};
		info.device = ua.match(/\((iphone|ipad|mac|ipod)/i)[1];
	} catch(e) {}
}

// 浏览器信息
// var browser = ua.match(/safari\/[0-9\.]+/g);
var browser = '';

var regThirdBrowser = /[a-z]+browser\/[1-9][0-9]*(\.[0-9]+)*/gi;
var regWebkitBrowser = /(chrome|firefox|safari|edge)\/[1-9][0-9]*(\.[0-9]+)*/gi;
var regIEBrowser = /MSIE\s[0-9]+\.[0-9]+/gi;
var regIE11 = /rv:11\.0/gi;

browser = ua.match(regThirdBrowser) || ua.match(regWebkitBrowser) || ua.match(regIEBrowser) || ua.match(regIE11);

if (browser && browser[0]) {
	if (ua.indexOf('Edge') > -1) {
		browser = ua.match(/edge\/[1-9][0-9]*(\.[0-9]+)*/gi);
	}
	browser = browser[0].split(/[\/\s\:]/);
	if (browser[0].indexOf('MSIE') > -1 || browser[0] === 'rv') {
		browser[0] = 'IE';
	}
	info.browser = {
		name: browser[0],
		version: browser[1]
	};
}

log(JSON.stringify(info, '', '\t'));