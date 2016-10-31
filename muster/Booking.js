// JavaScript Document
var Booking = {
	Query: {
		"WindowTop": true
	},
	QuerySite: {},
	ScriptUrl: 'open.upperbooking.com',
	VouchersUrl: 'http://upperbooking.com/{LOCALE}/booking/vouchers/wrap/{SITE}',
	BaseUrl: 'http://upperbooking.com/{LOCALE}/booking/start/{SITE}',
	BrowseUrl: 'http://upperbooking.com/{LOCALE}/booking/browse/wrap/{SITE}',
	SidebarUrl: 'http://upperbooking.com/{LOCALE}/booking/city/frame/{SITE}',
	TrackingUrl: '//trl.upperbooking.com/tr/pv/{SITE}',

	isMobile: function() {
		var a = navigator.userAgent || navigator.vendor || window.opera;
		return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)));
	},

	OpenInTap: function(url) {
		var win = window.open(url, '_blank');
		win.focus();
	},

	Open: function(params) {
		var site = Booking.Query.site || null;
		Booking.OpenSite(site, params);
	},

	OpenVoucher: function(params) {
		Booking.OpenVouchers(params);
	},

	OpenVouchers: function(params) {
		var site = Booking.Query.site || null;
		Booking.OpenVouchersSite(site, params);
	},

	OpenVouchersSite: function(site, params) {
		var url = Booking.PrepareUrl(Booking.VouchersUrl, site, params);
		Booking.OpenFrame(url);
	},

	OpenSite: function(site, params) {
		var url = Booking.PrepareUrl(Booking.BaseUrl, site, params);
		Booking.OpenFrame(url);
	},

	OpenBrowse: function(params) {
		var site = Booking.Query.site || null;
		var url = Booking.PrepareUrl(Booking.BrowseUrl, site, params);
		Booking.OpenFrame(url);
	},

	OpenBrowseSite: function(site, params) {
		var url = Booking.PrepareUrl(Booking.BrowseUrl, site, params);
		Booking.OpenFrame(url);
	},

	OpenSidebar: function(params) {
		if (!params) {
			params = {};
		}

		if (params.OfferID) {
			params.SingleOfferID = params.OfferID;
			delete params.OfferID;
		}

		params.SidebarMode = 'true';
		params.FrameMode = 'popup-sidebar';

		var site = Booking.Query.site || null;
		var url = Booking.PrepareUrl(Booking.SidebarUrl, site, params);

		Booking.OpenFrame(url, {
			className: 'upper5-sidebar',
			mode: 'sidebar',
			injectScripts: true
		});
	},

	OpenFrame: function(url, config) {

		if (Booking.isMobile()) {
			Booking.OpenInTap(url);
			return;
		}

		if (document.getElementById('upper5f')) {
			frameClose();
		}

		var glass = document.createElement('div'),
			frameHld = document.createElement('div'),
			frame = document.createElement('iframe'),
			close = document.createElement('div'),
			spinner = document.createElement('div');


		glass.id = "upper5-glass";
		frameHld.id = "upper5f";
		frameHld.className = "upper5-frame";

		if (config && config.className) {
			frameHld.className = config.className;
		}

		frame.id = "upper5finstance";
		frame.src = url;
		frame.width = "100%";
		frame.height = "100%";
		frame.frameborder = "0";
		frame.onload = frameLoaded;

		close.className = 'upper5-close';
		close.onclick = frameClose;

		spinner.id = 'upper5-frame-loader';
		spinner.className = 'upper5-spinner';
		spinner.innerHTML = ' <div class="double-bounce1"></div><div class="double-bounce2"></div>';

		frameHld.appendChild(spinner);
		frameHld.appendChild(frame);
		frameHld.appendChild(close);
		document.body.appendChild(glass);
		document.body.appendChild(frameHld);

		document.documentElement.style.overflow = 'hidden';
		document.body.style.overflow = 'hidden';
		document.documentElement.tabIndex = -1;

		if (config && config.injectScripts) {
			Booking.injectScripts();
		}

		if(config && config.mode && config.mode === 'sidebar') {
			setTimeout(function(){
				frameHld.classList.add('upper5-sidebar--loaded');
			}, 0);
		}

		function frameClose() {
			var frame = document.getElementById('upper5-glass'),
				glass = document.getElementById('upper5f');
			if (frame) {
				frame.parentElement.removeChild(frame);
				glass.parentElement.removeChild(glass);
			}

			document.documentElement.style.overflow = '';
			document.body.style.overflow = '';
			document.documentElement.tabIndex = 0;
		}

		function frameLoaded() {
			spinner.style.display = 'none';
		}
	},

	PrepareUrl: function(url, site, params) {
		var locale = Booking.Query.locale || '';
		if (site === null) {
			alert('UPPER: site parameter not passed');
			return;
		}
		if (!isNaN(parseFloat(site)) && isFinite(site)) {
			alert('UPPER: numeric id not supported');
			return;
		}

		url = url.replace('{LOCALE}', locale);
		url = url.replace('{SITE}', site);

		url += '?' + Booking.BuildQuery(params);

		url = Booking.PostProcessUrl(url);

		return url;
	},

	ParseSrc: function(src) {
		var schema = new RegExp(/\/([a-zA-Z0-9\_]+)\/Booking\.(js|min.js)/);
		var outputSchema = schema.exec(src);
		if (outputSchema) {
			Booking.Query.site = outputSchema[1];
		}
	},

	ParseQuery: function() {
		var scripts = document.getElementById('ubs') || document.getElementsByTagName('script');
		var myScript = null;
		if (!scripts.src) {
			var id, script;
			for (id in scripts) {
				script = scripts[id];
				if (script.src && (new RegExp("\\b" + Booking.ScriptUrl + "\\b")).exec(script.src)) {
					myScript = script;
				}
			}

		} else {
			myScript = scripts;
		}

		if (!myScript) return;
		// myScript now contains our script object
		var queryString = myScript.src.replace(/^[^\?]+\??/, '').split('&');
		for (var q in queryString) {
			if (queryString.hasOwnProperty(q)) {
				q = queryString[q].split('=');
				if (q.length == 2) Booking.Query[q[0]] = q[1];
			}
		}

		if (!Booking.Query.site) {
			Booking.ParseSrc(myScript.src);
		}


		//Query from site
		var siteString = window.location.href;
		var queryString = siteString.replace(/^[^\?]+\??/, '').split('&');
		for (var q in queryString) {
			if (queryString.hasOwnProperty(q)) {
				q = queryString[q].split('=');
				if (q.length == 2) Booking.QuerySite[q[0]] = q[1];
			}
		}

		if (Booking.QuerySite.upper && Booking.QuerySite.upper === "open") {
			var params = {};
			if (Booking.QuerySite.OfferID) {
				params.OfferID = Booking.QuerySite.OfferID;
			}
			Booking.Open(params);
		}
	},

	BuildQuery: function(obj) {
		if (typeof(obj) != 'undefined' && obj.tagName) return ''; // form extracting not supported yet
		var parts = [];
		var i;

		// serialize passed params
		if (typeof obj == 'string')
			parts.push(obj);
		else if (typeof obj != 'undefined')
			for (i in obj)
				if (obj.hasOwnProperty(i))
					parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));

				// copy over script defaults
		for (i in Booking.Query)
			if (Booking.Query.hasOwnProperty(i) && i != 'site' && i != 'locale')
				parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(Booking.Query[i]));

		var trackers = Booking.GetTrackers();
		if (trackers) {
			parts.push("GoogleTrackerID=" + trackers);
		}

		return parts.join("&");
	},


	//FROM u4
	GetTrackers: function() {
		var tid = [];
		var reg = /([A-Z]{2})-([0-9]+)-([0-9]{1,2})/;
		var i, c;
		//_gat
		if (typeof(_gat) != 'undefined') {
			var t = _gat._getTrackers();
			for (i = 0; i < t.length; i++)
				if (t[i]._getAccount())
					tid.push(t[i]._getAccount());
		}
		//_gaq
		if (typeof(_gaq) != 'undefined') {
			for (i = 0; i < _gaq.length; i++)
				if (typeof _gaq[i] === "object")
					for (c = 0; c < _gaq[i].length; c++)
						if (reg.exec(_gaq[i][c]))
							tid.push(_gaq[i][c]);
		}
		//isogram
		var gak = window.GoogleAnalyticsObject;
		if (gak) {
			if (typeof window[gak].q !== 'undefined') {
				for (i = 0; i < window[gak].q.length; i++) {
					var qu = window[gak].q[i];
					if (typeof qu === "object")
						for (c = 0; c < qu.length; c++)
							if (reg.exec(qu[c]))
								tid.push(qu[c]);
				}
			} else {
				for (i = 0; i < window[gak].getAll().length; i++)
					if (reg.exec(window[gak].getAll()[i].get('trackingId')))
						tid.push(window[gak].getAll()[i].get('trackingId'));
			}
		}
		return tid ? tid.join(",") : false;
	},

	PostProcessUrl: function(url) {
		try {
			if (typeof(_gat) != 'undefined') {
				var pageTracker = _gat._getTrackers()[0];
				url = pageTracker._getLinkerUrl(url);
			} else if (typeof(ga) != 'undefined') {
				url += '&' + ga.getAll()[0].get('linkerParam');
			}
		} catch (e) {}

		return url;
	},

	PageView: function() {
		if (typeof Booking.Query.site != 'undefined') {
			Booking._loadScript(Booking.TrackingUrl.replace('{SITE}', Booking.Query.site));
		}
	},

	_loadScript: function(url) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;

		if (typeof script.onreadystatechange !== 'undefined') {
			script.onreadystatechange = function() {
				if (this.readyState === 4 || this.readyState === 'complete' || this.readyState === 'loaded') {
					Booking._removeScript(script);
				}
			};
		} else {
			script.onload = function() {
				Booking._removeScript(script);
			};
			script.onerror = function() {
				Booking._removeScript(script);
			};
		}
		script.src = url;

		var fscript = document.getElementsByTagName('script')[0];
		fscript.parentNode.insertBefore(script, fscript);
	},

	_removeScript: function(script) {
		if (script && script.parentNode) {
			script.parentNode.removeChild(script);
		}
	},

	injectScripts: function() {
		Booking._loadScript('http://upperbooking.com/upper/booking/scripts/js/Frame.min.js');
		window.framecb = function() {
			$socket_up5.direction = document.getElementById('upper5f').contentWindow;
			$socket_up5.mode = "frame";
		};
	}

};

Booking.ParseQuery();
Booking.PageView();
var BookingCss = '.upper5-frame,.upper5-sidebar{z-index:99999999;position:fixed}#upper5-glass{position:fixed;width:100%;height:100%;z-index:99999998;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.5)}.upper5-frame{top:15px;left:15px;right:15px;bottom:15px;margin:auto;box-shadow:0 0 0 3px rgba(255,255,255,.2)}.upper5-frame iframe{border:0;width:100%;height:100%}.upper5-sidebar{top:0;right:0;bottom:0;width:550px;transform:translate(550px,0);transition:all .3s ease;background:#eceff1}.upper5-close,.upper5-spinner{width:40px;height:40px;position:absolute}.upper5-sidebar iframe{border:0;width:100%;height:100%}.upper5-sidebar.upper5-sidebar--loaded{transform:translate(0,0)}.upper5-sidebar .upper5-close{top:15px;right:20px}.upper5-close{background:#000;color:#FFF;text-align:center;line-height:40px;right:-3px;top:-3px;cursor:pointer}.upper5-close:before{content:\'\\2715\';font-size:28px;line-height:1.5em}.upper5-spinner{top:0;bottom:0;right:0;left:0;margin:auto;z-index:1}#upperModal{z-index:100000001}.modal-backdrop{z-index:100000000!important}.double-bounce1,.double-bounce2{width:100%;height:100%;border-radius:50%;background-color:#FFF;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:bounce 2s infinite ease-in-out;animation:bounce 2s infinite ease-in-out}.double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}';

(function() {
	var head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style');

	style.type = 'text/css';

	if (style.styleSheet) {
		style.styleSheet.cssText = BookingCss;
	} else {
		style.appendChild(document.createTextNode(BookingCss));
	}

	head.appendChild(style);
})();