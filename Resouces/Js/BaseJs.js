$(window).ready(function(){
	Initialize();
	Easing(".topnavigate","._key",".cn_preview",".cn_content","easeOutCirc",100);
	Easing(".headlines_title",".headlines_title_key",".headlines_content",".headlines_content_c","easeOutCirc",500)
	GetStart();
	fllowtomouse()
	//$('.m-logo').click(GetStart);
})
//********** Initialize html page **********
function Initialize(){
	//document.getElementById('ph2nf').style.height="100%";
	//$('<img src="../Resouces/Image/G.jpg"/>').appendTo('#ph2nf');
	//$('<p class="ant05"/>').appendTo('#ph2nf').html("POWER&nbsp;&nbsp;&nbsp;&nbsp;HUMANITY&nbsp;&nbsp;&nbsp;&nbsp;HOPE&nbsp;&nbsp;&nbsp;&nbsp;NATURE&nbsp;&nbsp;&nbsp;&nbsp;FREEDOM")
    //selection
    /*function cansels(){event.returnValue=false;}
    $('*:not(.canselect)').bind('selectstart',cansels);
    	alert($('*:not(.canselect)').length)*/
    document.onselectstart=new Function('event.returnValue=false;');
    /*alert(document.getElementsByClassName('canselect'))*/
    //end
    var nh1=$('body').height()*0.4+"px";
    var nh2=$('body').height()*0.6+"px";
	$('.bodycontent_navigate ul:first-child').css("height",nh1);
	$('.bodycontent_navigate ul:last-child').css("height",nh2);
	/*function noselect(){}
	$('.no-select').bind('mouseout',clearfouse)
	document.getElementsByClassName('no-select').onselectstart=new function('arguments[0].returnValue=false;||window.event.returnValue=false;')*/
}
function GetStart(){
	//document.getElementById('ph2nf').style.height=$('body').height+"px";
	$('.topnavigate').before('<img src="data:image/png;base64,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"/>');
	$("body").mCustomScrollbar({
		autoHideScrollbar:true,
		theme:"light-thin"
	});
}
//********** Easy ease **********
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});
function Easing(actlist,actkey,easelist,easekey,animate,time){
	var $cn_list = $(actlist);
	var $items = $cn_list.find(actkey);
    var $cn_preview = $(easelist);
    var current = 5;
    $items.each(function(i){
        var $item = $(this);
        $item.data('idx',i+1);
        $item.bind('click',function(){
            var $this = $(this);
            $cn_list.find('.selected').removeClass('selected');
            $this.addClass('selected');
            var idx = $(this).data('idx');
            var $current = $cn_preview.find(''+easekey+':nth-child('+current+')');
            var $next = $cn_preview.find(''+easekey+':nth-child('+idx+')');
            if(idx > current){
                $current.stop().animate({'left':'-120%'},time,animate,function(){
                    $(this).css({'left':'120%'});
                });
                $next.css({'left':'120%'}).stop().animate({'left':'0'},time,animate);
                $(".cn_preview").css("height",$next.height());
            }
            else if(idx < current){
                $current.stop().animate({'left':'120%'},time,animate,function(){
                    $(this).css({'left':'120%'});
                });
                $(".cn_preview").css("height",$next.height());
                $next.css({'left':'-120%'}).stop().animate({'left':'0'},time,animate);
            }
        current = idx;
        });
    });
}
//********** Get mouse's coordinate **********
/*function getMouseC(doc){
	function mouseMove(ev) { 
		ev= ev || window.event; 
		var mousePos = mouseCoords(ev); 
		//alert(ev.pageX); 
		$('.fousemouse').left = mousePos.x + "px";
		$('.fousemouse').top = mousePos.y + "px";
	} 
	function mouseCoords(ev) { 
		if(ev.pageX || ev.pageY){ 
		return {x:ev.pageX, y:ev.pageY}; 
		} 
		return { 
			x:ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, 
			y:ev.clientY + document.body.scrollTop + document.documentElement.scrollTop
		}; 
	} 
	document.getElementById(doc).onmousemove = mouseMove;
}*/
function fllowtomouse(){
	$("<a id='fousemouse' style='display:none'></a>").appendTo(".TM_timeline");
	function tlinegetfouse(){
		$('#fousemouse').css({
			width: "7px",
			height: "7px",
			position: "absolute",
			top: "4px",
			display: "block"
		})
		var points=document.getElementById('fousemouse');
		var e=arguments[0]||window.event;
		var l=$('.TM_timeline').offset().left;
		points.style.left=e.clientX-l-5.5+"px";
		/*getMouseC("TM");*/
		/*alert(l);*/
	}
	function clearfouse(){document.getElementById('fousemouse').style.display='none'}
	$('.TM_timeline').bind('mousemove',tlinegetfouse)
	$('.TM_timeline').bind('mouseout',clearfouse)
}