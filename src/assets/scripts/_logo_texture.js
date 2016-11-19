window.ProfileBook = window.ProfileBook || {};window.ProfileBook.on = window.ProfileBook.on || {};(function(){	var textsConfig = {		P : [			{ x : 8, y : 40 },			{ x : 8, y : 54 },			{ x : 8, y : 68 },			{ x : 8, y : 82 },			{ x : 8, y : 96 },			{ x : 20, y : 40 },			{ x : 34, y : 43 },			{ x : 38, y : 54 },			{ x : 32, y : 64 },			{ x : 20, y : 66 }		],		O : [			{ x : 25, y : 39 },			{ x : 36, y : 42 },			{ x : 45, y : 50 },			{ x : 48, y : 62 },			{ x : 47, y : 74 },			{ x : 43, y : 85 },			{ x : 35, y : 92 },			{ x : 26, y : 94 },			{ x : 14, y : 42 },			{ x :  5, y : 50 },			{ x :  2, y : 62 },			{ x :  3, y : 74 },			{ x :  7, y : 85 },			{ x : 15, y : 92 }		],		R : [			{ x : 8, y : 40 },			{ x : 8, y : 54 },			{ x : 8, y : 68 },			{ x : 8, y : 82 },			{ x : 8, y : 96 },			{ x : 19, y : 40 },			{ x : 30, y : 41 },			{ x : 38, y : 48 },			{ x : 39, y : 59 },			{ x : 32, y : 67 },			{ x : 19, y : 68 },			{ x : 29, y : 76 },			{ x : 35, y : 85 },			{ x : 41, y : 95 }		],		T : [			{ x :  0, y : 40 },			{ x : 13, y : 40 },			{ x : 26, y : 40 },			{ x : 39, y : 40 },			{ x : 19, y : 54 },			{ x : 19, y : 68 },			{ x : 19, y : 82 },			{ x : 19, y : 96 }		],		F : [			{ x : 8, y : 40 },			{ x : 8, y : 54 },			{ x : 8, y : 68 },			{ x : 8, y : 82 },			{ x : 8, y : 96 },			{ x : 19, y : 40 },			{ x : 30, y : 40 },			{ x : 41, y : 40 },			{ x : 20, y : 67 },			{ x : 32, y : 67 }		],		L : [			{ x : 8, y : 40 },			{ x : 8, y : 54 },			{ x : 8, y : 68 },			{ x : 8, y : 82 },			{ x : 8, y : 96 },			{ x : 21, y : 96 },			{ x : 33, y : 96 }		],		I : [			{ x : 11, y : 40 },			{ x : 11, y : 54 },			{ x : 11, y : 68 },			{ x : 11, y : 82 },			{ x : 11, y : 96 }		]	}	window.ProfileBook.setupLogo = function(target){		var dots = new Array();		var textStatus = new Array();		var tasks = {			removeDelimiter : function(){				for(var i=target.childNodes.length - 1; i>=0; i--){					if(target.childNodes[i].nodeType == document.TEXT_NODE && target.childNodes[i].nodeValue.match(/^\s+$/)){						target.removeChild(target.childNodes[i]);					}				}			},			calcPosition : function(){				for(var i=0; i<target.childNodes.length; i++){					textStatus.push({						x : target.childNodes[i].offsetLeft,						y : target.childNodes[i].offsetTop,						text : target.childNodes[i].getAttribute("data-logo-text"),						elm : target.childNodes[i]					});				}			},			deploy : function(){				for(var i=0; i<textStatus.length; i++){					var dotCoords = textsConfig[textStatus[i].text];					for(var j=0; j<dotCoords.length; j++){						dots.push((function(status, coord){							var dot = document.createElement("div");							dot.className = ProfileBook.config.logo.dot.className;							dot.style.left = status.x + coord.x + "px";							dot.style.top  = status.y + coord.y + "px";							target.appendChild(dot);							return dot;						})(textStatus[i], dotCoords[j]));					}				//	target.removeChild(textStatus[i].elm);				}			},			onActive : function(flag){				if(flag){					var distance = Math.pow(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2), 1/2);					for(var i=0; i<dots.length; i++){						(function(dot){							var angle = 2 * Math.PI * Math.random();							var centerX = Math.round(distance * Math.cos(angle));							var centerY = Math.round(distance * Math.sin(angle));							dot.classList.add("is-active");							dot.style.transformOrigin = centerX + "px " + centerY + "px";							dot.style.transform = "rotate(45deg)";						})(dots[i]);					}				}				else{					for(var i=0; i<dots.length; i++){						(function(dot){							dot.classList.remove("is-active");							dot.style.transform = "rotate(0deg)";						})(dots[i]);					}				}			}		};		tasks.removeDelimiter();		tasks.calcPosition();		tasks.deploy();		window.ProfileBook.on.menuActive = tasks.onActive;	};})();