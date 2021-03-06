(function(){var _Doc=document,_loaded={},_loading_queue={},_isArray=function(e){return e.constructor===Array;},_config={core_lib:['http://mat1.gtimg.com/joke/js/comm/core_1.0.1.js'],mods:{}},_file=_Doc.getElementsByTagName('script')[0],_load=function(url,type,charset,cb,context){if(!url){return;}if(_loaded[url]){_loading_queue[url]=false;if(cb){cb(url,context);}return;}if(_loading_queue[url]){setTimeout(function(){_load(url,type,charset,cb,context);},1);return;}_loading_queue[url]=true;var n,t=type||url.toLowerCase().substring(url.lastIndexOf('.')+1);if(t==='js'){n=_Doc.createElement('script');n.setAttribute('type','text/javascript');n.setAttribute('src',url);n.setAttribute('async',true);}else if(t==='css'){n=_Doc.createElement('link');n.setAttribute('type','text/css');n.setAttribute('rel','stylesheet');n.setAttribute('href',url);_loaded[url]=true;}if(charset){n.charset=charset;}if(t==='css'){_file.parentNode.insertBefore(n,_file);if(cb){cb(url,context);}return;}n.onload=n.onreadystatechange=function(){if(!this.readyState||this.readyState==='loaded'||this.readyState==='complete'){_loaded[this.getAttribute('src')]=true;if(cb){cb(this.getAttribute('src'),context);}n.onload=n.onreadystatechange=null;}};_file.parentNode.insertBefore(n,_file);},_calculate=function(e){if(!e||!_isArray(e)){return;}var i=0,item,result=[],mods=_config.mods,depeList=[],hasAdded={},getDepeList=function(e){var i=0,m,reqs;if(hasAdded[e]){return depeList;}hasAdded[e]=true;if(mods[e].requires){reqs=mods[e].requires;for(;m=reqs[i++];){if(mods[m]){getDepeList(m);depeList.push(m);}else{depeList.push(m);}}return depeList;}return depeList;};for(;item=e[i++];){if(mods[item]&&mods[item].requires&&mods[item].requires[0]){depeList=[];hasAdded={};result=result.concat(getDepeList(item));}result.push(item);}return result;},_queue=function(e){if(!e||!_isArray(e)){return;}this.queue=e;this.current=null;};_queue.prototype={_interval:10,start:function(){var o=this;this.current=this.next();if(!this.current){this.end=true;return;}this.run();},run:function(){var o=this,mod,currentMod=this.current;if(typeof currentMod==='function'){currentMod();this.start();return;}else if(typeof currentMod==='string'){if(_config.mods[currentMod]){mod=_config.mods[currentMod];_load(mod.path,mod.type,mod.charset,function(e){o.start();},o);}else if(/\.js|\.css/i.test(currentMod)){_load(currentMod,'','',function(e,o){o.start();},o);}else{this.start();}}},next:function(){return this.queue.shift();}};this.Qfast=function(){var args=Array.prototype.slice.call(arguments,1),thread;if(arguments[0]){thread=new _queue(_calculate(_config.core_lib.concat(args)));}else{thread=new _queue(_calculate(args));}thread.start();};this.Qfast.add=function(sName,oConfig){if(!sName||!oConfig||!oConfig.path){return;}_config.mods[sName]=oConfig;};})();/*  |xGv00|a56c45ac18b131851caff18ab68bdb71 */
var uedCommon = {};
uedCommon.Version = "1.02";
uedCommon.Author = "Hunkjiang";
uedCommon.CreateDate = "2011-02-16";
uedCommon.EditDate = "2011-05-05";
uedCommon.EditContent = "add fn.realOut()";
uedCommon.fn = {
    getEbyId: function(objectId) {
        if (document.getElementById && document.getElementById(objectId)) {
            return document.getElementById(objectId)
        } else if (document.all && document.all(objectId)) {
            return document.all(objectId)
        } else if (document.layers && document.layers[objectId]) {
            return document.layers[objectId]
        } else {
            return false
        }
    },
    getEbyTag: function(oTag) {
        if (document.getElementsByTagName && document.getElementsByTagName(oTag)) {
            return document.getElementsByTagName(oTag)
        } else {
            return false
        }
    },
    getEbyClass: function(obj, tag, clsName) {
        var reArray = [];
        var target = obj.getElementsByTagName(tag);
        for (i = 0; i < target.length; i++) {
            if (target[i].className == clsName) {
                reArray.push(target[i]);
            }
        }
        return reArray;
    },
    ie: /msie/.test(window.navigator.userAgent.toLowerCase()),
    moz: /gecko/.test(window.navigator.userAgent.toLowerCase()),
    isloaded: function(obj, fCallback) {
        if (this.ie) {
            obj.onreadystatechange = function() {
                if (this.readyState == 'loaded' || this.readyState == 'complete') {
                    fCallback()
                }
            }
        } else if (this.moz) {
            obj.onload = function() {
                fCallback()
            }
        } else {
            fCallback()
        }
    },
    LoadJs: function(sUrl, fCallback) {
        var _script = document.createElement('script');
        _script.setAttribute('type', 'text/javascript');
        _script.setAttribute('charset', 'gb2312');
        _script.setAttribute('src', sUrl);
        document.getElementsByTagName('head')[0].appendChild(_script);
        this.isloaded(_script, fCallback)
    },
    addEvent: function(l, i, I) {
        if (l.attachEvent) {
            l.attachEvent("on" + i, I)
        } else {
            l.addEventListener(i, I, false)
        }
    },
    delEvent: function(l, i, I) {
        if (l.detachEvent) {
            l.detachEvent("on" + i, I)
        } else {
            l.removeEventListener(i, I, false)
        }
    },
	getStyle:function(Ele,Attri){
	var style = '';
	if(Ele.currentStyle)
		{return style = Ele.currentStyle[Attri]}
	else if(window.getComputedStyle)
		{return style = window.getComputedStyle(Ele,null)[Attri];
		}
	},
	setStyle:function(Ele,Attri){
	var style = '';
	if(Ele.currentStyle)
		{return style = Ele.currentStyle[Attri]}
	else if(window.getComputedStyle)
		{return style = window.getComputedStyle(Ele,null)[Attri];
		}
	},
	realOut:function (obj, e, callback) {
        var e = window.event || e,
        relatedTarget = e.toElement || e.relatedTarget;
        while (relatedTarget && relatedTarget != obj) {
            relatedTarget = relatedTarget.parentNode;
        }
        if (!relatedTarget) {
            callback();
        }
    },
	isEobj: function(obj) {
            var oTrue;
            if (obj.nodeType == 1) {
                oTrue = obj
            } else if (obj.nodeType == 3) {
                oTrue = obj.previousSibling
            }
            return oTrue
        }
};
function __firefox(){
    HTMLElement.prototype.__defineGetter__("runtimeStyle", __element_style);
    window.constructor.prototype.__defineGetter__("event", __window_event);
    Event.prototype.__defineGetter__("srcElement", __event_srcElement);
}
function __element_style(){
    return this.style;
}
function __window_event(){
    return __window_event_constructor();
}
function __event_srcElement(){
    return this.target;
}
function __window_event_constructor(){
    if(document.all){
        return window.event;
    }
    var _caller = __window_event_constructor.caller;
    while(_caller!=null){
        var _argument = _caller.arguments[0];
        if(_argument){
            var _temp = _argument.constructor;
            if(_temp.toString().indexOf("Event")!=-1){
                return _argument;
            }
        }
        _caller = _caller.caller;
    }
    return null;
}
if(window.addEventListener){
    __firefox();
}/*  |xGv00|e6de01a122787fbff0b94239afbb7bd0 */
/*gun*/
function uedScroll(scrollContId, arrLeftId, arrRightId, dotListId, scrollSplit, dotSplit, sSliceIndex, sDir, nStep, nType) {
    this.scrollContId = scrollContId;
    this.arrLeftId = arrLeftId;
    this.arrRightId = arrRightId;
    this.dotListId = dotListId;
    this.scrollSplit = scrollSplit;
    this.dotSplit = dotSplit;
    this.sSliceIndex = sSliceIndex;
    this.sDir = sDir;
    this.nStep = nStep;
    this.nType = nType;
	this.pageIndex = 0;
    this.autoPlay = false;
    this.autoPlayTime = 4;
    this._state = "ready";
    this._endIndex = 0;
    this._forIndex = 0;
    this.nbuffer = 30;
	this.pageDot = [];
    this.stripDiv = document.createElement("DIV");
    this.listDiv01 = document.createElement("DIV");
    this.listDiv02 = document.createElement("DIV");
    if (!uedScroll.childs) {
        uedScroll.childs = []
    };
    this.ID = uedScroll.childs.length;
    uedScroll.childs.push(this);
    this.init = function() {
        this.scrollContObj = uedCommon.fn.getEbyId(this.scrollContId);
        this.listDiv01.innerHTML = this.listDiv02.innerHTML = this.scrollContObj.innerHTML;
        this.scrollContObj.innerHTML = "";
        this.scrollContObj.appendChild(this.stripDiv);
        this.stripDiv.appendChild(this.listDiv01);
        this.SplitObj = uedCommon.fn.getEbyClass(this.scrollContObj, this.scrollSplit.mytag, this.scrollSplit.myclass);
        this._endIndex = this.SplitObj.length;
		switch (this.sDir) {
        case 1:
            this.sDir = {
                ContObj: "scrollLeft",
                SplitObj: "offsetLeft"
            };
			this.mar = "marginLeft";
            this.stripDiv.style.width = "32766px";
            this.listDiv01.style.cssFloat = "left";
			this.listDiv02.style.cssFloat = "left";
            break;
        case 2:
            this.sDir = {
                ContObj: "scrollTop",
                SplitObj: "offsetTop"
            };
			this.mar = "marginTop";
            this.stripDiv.style.height = "32766px";
            break;
        };
        switch (this.nType) {
        case 1:
            this.leftEnd = function() {
                if (this.SplitObj.length % this.sSliceIndex != 0) {
                    var x = this.SplitObj.length % this.sSliceIndex;
                } else {
                    var x = this.sSliceIndex;
                }
                this.pageIndex = this.SplitObj.length - x;
                this.nStep = this.nYuanStep;
                this.nStep = this.nStep * 2;
                this.sGoTo = "next";
            };
            this.rightEnd = function() {
                this.pageIndex = 0;
                this.nStep = this.nYuanStep;
                this.nStep = this.nStep * 2;
                this.sGoTo = "prve";
            };
            break;
        case 2:
		    this._LoopCase();
            break;
		case 3:
		    this._LoopCase();
            break;
        default:
            break;
        };
        this.nYuanStep = this.nStep;
        uedCommon.fn.addEvent(this.scrollContObj, "mouseover", Function("uedScroll.childs[" + this.ID + "].stop()"));
        uedCommon.fn.addEvent(this.scrollContObj, "mouseout", Function("uedCommon.fn.realOut(uedScroll.childs[" + this.ID + "].scrollContObj,event,function(){uedScroll.childs[" + this.ID + "].play()})"));
        if (this.arrLeftId) {
            this.arrLeftObj = uedCommon.fn.getEbyId(this.arrLeftId);
            if (this.arrLeftObj) {
                uedCommon.fn.addEvent(this.arrLeftObj, "click", Function("uedScroll.childs[" + this.ID + "].clicks(1)"));

            }
        };
        if (this.arrRightId) {
            this.arrRightObj = uedCommon.fn.getEbyId(this.arrRightId);
            if (this.arrRightObj) {
                uedCommon.fn.addEvent(this.arrRightObj, "click", Function("uedScroll.childs[" + this.ID + "].clicks(2)"));
            }
        };
		if (this.dotListId) {
            this.dotListObj = uedCommon.fn.getEbyId(this.dotListId);
            if (this.dotListObj) {
				this.pageNum = Math.ceil(this._endIndex / this.sSliceIndex);
				this.dotMod = this.dotListObj.innerHTML;
				this.dotListObj.innerHTML = "";
				for(i=0;i<this.pageNum;i++){
					this.dotListObj.innerHTML += this.dotMod;
				};
				this.dotObj = uedCommon.fn.getEbyClass(this.dotListObj,this.dotSplit.mytag,this.dotSplit.myclass);
				var xy = 0;
				for(i=0;i<this.pageNum;i++){
					uedCommon.fn.addEvent(this.dotObj[i], this.Events, Function("uedScroll.childs[" + this.ID + "].pageTo("+xy+")"));
					this.pageDot.push(xy);
					xy += this.sSliceIndex;
					
				};
				this.dotObj[0].className = this.dotSplit.cur;
			    this.dotCurClass = function(){
					for(i=0;i<this.pageNum;i++){
						if(this.pageIn(i)){
							this.dotObj[i].className = this.dotSplit.cur;
						}else{
							if(this.dotSplit.offing){
							  this.dotObj[i].className = this.dotSplit.offing;
							}else{
							  this.dotObj[i].className = "";
							}
						};
					}
				};
            }
        };
        this.play();
    };
	this._LoopCase = function(){
	  this._forIndex = this.sSliceIndex;
            this.stripDiv.appendChild(this.listDiv02);
            this.SplitObj = uedCommon.fn.getEbyClass(this.scrollContObj, this.scrollSplit.mytag, this.scrollSplit.myclass);
			this.leftEnd = function() {
				if(this.pageIndex-this.sSliceIndex<0 && this.pageIndex != 0){
				  this.pageIndex = this._endIndex - (this.pageIndex-this.sSliceIndex);
				}else{
				  this.pageIndex = this._endIndex;
				};
                this.nStep = this.nYuanStep;
                this.scrollContObj[this.sDir.ContObj] = this.SplitObj[this.pageIndex][this.sDir.SplitObj];
                this.pageIndex = this.pageIndex - this.sSliceIndex;
                this.sGoTo = "prve";
            };
            this.rightEnd = function() {
                if (this.pageIndex >= this._endIndex) {
                    if (this._endIndex % this.sSliceIndex != 0 && this.pageIndex!=this._endIndex) {
                        var x = this._endIndex % this.sSliceIndex;
                    } else {
                        var x = this.sSliceIndex;
                    }
                    if (this._forIndex <= 0 || this._forIndex-x <= 0) {
                        this._forIndex = 0;
                    } else {
                        this._forIndex -= x
                    }
                    this.scrollContObj[this.sDir.ContObj] = this.SplitObj[this._forIndex][this.sDir.SplitObj];
                    this.pageIndex = this._forIndex;
                    if (this._forIndex <= 0) {
                        this._forIndex = this.sSliceIndex;
                    }
                }
            }
	};
    this.clicks = function(n) {
		if (this.nType == 3) {}
	    else{
		      if (this._state != "ready") {
                  return;
                }
		 }
		clearInterval(this._autoTimeObj);
        if (n == 1) {
            if (this.pageIndex <= 0 || (this.pageIndex-this.sSliceIndex<0 && this.pageIndex != 0) ) {
                this.leftEnd();
            } else {
                this.pageIndex -= this.sSliceIndex;
                this.nStep = this.nYuanStep;
                this.sGoTo = "prve";
            }
        } else if (n == 2) {
            if (this.pageIndex + this.sSliceIndex >= this.SplitObj.length) {
                this.rightEnd();
            } else {
                this.pageIndex += this.sSliceIndex;
                this.nStep = this.nYuanStep;
                this.sGoTo = "next";
            }
        };
		this._state = "floating";
		if(this.dotCurClass){this.dotCurClass();}
        this._scrollTimeObj = setInterval("uedScroll.childs[" + this.ID + "]." + this.sGoTo + "(" + (this.pageIndex) + "," + this.nStep + ",{ContObj:'" + this.sDir.ContObj + "',SplitObj:'" + this.sDir.SplitObj + "'})", 10)
    },
    this.prve = function(nIndex, nStep, sDir) {
		if(isNaN(parseInt(uedCommon.fn.getStyle(this.SplitObj[nIndex],this.mar)))){
		  var y = 0;
		}else{
		  var y = parseInt(uedCommon.fn.getStyle(this.SplitObj[nIndex],this.mar));
		}
		var x = this.SplitObj[nIndex][sDir.SplitObj] - y;
        if (this.scrollContObj[sDir.ContObj] > x) {
            if (Math.ceil(this.scrollContObj[sDir.ContObj] - this.SplitObj[nIndex][sDir.SplitObj]) <= this.nbuffer) {
                this.scrollContObj[sDir.ContObj]--;
            } else {
                this.scrollContObj[sDir.ContObj] -= nStep;
            }
        } else {
            clearInterval(this._scrollTimeObj);
            this._state = "ready"
			this.play();
			
        }
    };
    this.next = function(nIndex, nStep, sDir) {
		if(isNaN(parseInt(uedCommon.fn.getStyle(this.SplitObj[nIndex],this.mar)))){
		  var y = 0;
		}else{
		  var y = parseInt(uedCommon.fn.getStyle(this.SplitObj[nIndex],this.mar));
		}
		var x = this.SplitObj[nIndex][sDir.SplitObj] - y;
        if (this.scrollContObj[sDir.ContObj] < x) {
            if (Math.ceil(this.SplitObj[nIndex][sDir.SplitObj] - this.scrollContObj[sDir.ContObj]) <= this.nbuffer) {
                this.scrollContObj[sDir.ContObj]++;
            } else {
                this.scrollContObj[sDir.ContObj] += nStep;
            }
        } else {
            clearInterval(this._scrollTimeObj);
            this._state = "ready";
            if (this.nType == 2 || this.nType == 3) {
                this.rightEnd();
            };
			this.play();
        }
    };
	this.pageTo = function(n){
		if (this.nType == 3) {}
	    else{
		      if (this._state != "ready") {
                  return;
                }
		 }
		clearInterval(this._autoTimeObj);
		this.pageIndex = n;
		if (this.scrollContObj[this.sDir.ContObj] > this.SplitObj[n][this.sDir.SplitObj]){
		  var x ="prve"
		}else{
		  var x ="next"
		};
		this._state = "floating";
		if(this.dotCurClass){this.dotCurClass();}
        this._scrollTimeObj = setInterval("uedScroll.childs[" + this.ID + "]." + x + "(" + (this.pageIndex) + "," + this.nStep + ",{ContObj:'" + this.sDir.ContObj + "',SplitObj:'" + this.sDir.SplitObj + "'})", 10)
	};
	this.pageIn = function(n){
		var x = this.pageDot[n] - this.sSliceIndex;
		if(x < 0){x = 0};
		if(this.pageIndex >= this._endIndex){
		  y = this.pageIndex - this._endIndex;
		}else{
		  y = this.pageIndex;
		}
		if(y>x && y <= this.pageDot[n] || (y==0 && y==this.pageDot[n])){
			return true;
		}else{return false;}
	};
    this.play = function() {
        if (!this.autoPlay) {
            return;
        };;
		if (this.nType == 3) {}
	    else{
		      if (this._state != "ready") {
                  return;
                }
		 }
        this._autoTimeObj = setInterval("uedScroll.childs[" + this.ID + "].clicks(2)",this.autoPlayTime*1000)
    };
    this.stop = function() {
        if (this.nType == 3) {}
	    else{
		      if (this._state != "ready") {
                  return;
                }
		 }
            clearInterval(this._autoTimeObj);
			if (this.nType == 3) {
			  clearInterval(this._scrollTimeObj);
			};
    };
};