
function myFunc(id) {
    var innerDiv = document.getElementById("panel1-inner");
    innerDiv.innerHTML = document.getElementById(id).innerHTML;
}

function ajaxCallback(data) {
    var innerDiv = document.getElementById("panel1-inner");
    innerDiv.innerHTML = data;
}

function ajaxCallback_2(response, id) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(response, "text/xml");
    var results = xmlDoc.documentElement.getElementsByTagName("f");
    var count = results.length;
    var result;
    while (count--) {
        if (results[count].getAttribute("id") == id) {
            result = results[count];
            break;
        }
    }

    var question = "", answer = "";
    if (result) {
        console.log(result.getElementsByTagName("qu")[0]);
        question = result.getElementsByTagName("qu")[0].innerHTML;
        answer = result.getElementsByTagName("an")[0].innerHTML;
    }

    var innerDiv = document.getElementById("panel1-inner");
    innerDiv.innerHTML = "<h2>" + question + "</h2><p>" + answer + "</p>";
}

var panelOptions =
{
    panelId: "panel1",
    slideInFrom: "top, 5%", 
    speed: 200,
    showMode: "default",
    transparentLayer: true,
    resizeCallback: null
};

var panel1 = new McSuperPanel(panelOptions);

/* Page Panel v2015.12.5. Copyright www.menucool.com */
function McSuperPanel(d){"use strict";var A="replace",k="display",h="className",e="length",q="addEventListener",b="style";if(typeof String.prototype.trim!=="function")String.prototype.trim=function(){return this[A](/^\s+|\s+$/g,"")};var l=document,r="getElementById",i=setTimeout,n=function(a,b){return l[a](b)},L=function(a,d){if(typeof getComputedStyle!="undefined")var c=getComputedStyle(a,null);else if(a.currentStyle)c=a.currentStyle;else c=a[b];return c[d]},v=0,p,a,f=[],c=0,j=0,g=0,E=function(a){if(g){g[b].opacity=0;if(a){g[b][k]="block";i(function(){g[b].opacity=1},0)}else i(function(){g[b][k]="none"},350)}},m=function(a,c,b){if(a[q])a[q](c,b,false);else a.attachEvent&&a.attachEvent("on"+c,b)},K=function(a,c){var b=a[e];while(b--)if(a[b]===c)return true;return false},z=function(b,a){return K(b[h].split(" "),a)},y=function(a,b,c){if(!z(a,b))if(!a[h])a[h]=b;else if(c)a[h]=b+" "+a[h];else a[h]+=" "+b},F=function(c,f){if(c[h]){for(var d="",b=c[h].split(" "),a=0,g=b[e];a<g;a++)if(b[a]!==f)d+=b[a]+" ";c[h]=d.trim()}},G=function(a){if(a&&a.stopPropagation)a.stopPropagation();else if(window.event)window.event.cancelBubble=true},J=function(b){var a=b||window.event;if(a.preventDefault)a.preventDefault();else if(a)a.returnValue=false},t=function(h){h&&o(0);clearTimeout(c.g);for(var g=0;g<f[e];g++)F(f[g],"active");if(!v)if(c.a=="default")a[b].opacity=0;else{a[b].opacity=0;var d="0,0";switch(c.a){case"top":d="0,-"+c.b;break;case"bottom":d="0,"+c.b;break;case"right":d=c.b+",0";break;case"left":d="-"+c.b+",0"}a[b].transform=a[b].WebkitTransform="translate("+d+") translateZ(0)"}c.g=i(function(){F(a,"active");a[b][k]="none";o(p)},p+20);E(0)},x=function(g){g&&o(0);clearTimeout(c.g);for(var d=0;d<f[e];d++)y(f[d],"active");y(a,"active");a[b][k]="";if(!v)if(c.a===0)i(function(){a[b].opacity=1},0);else i(function(){a[b].opacity=1;a[b].transform=a[b].WebkitTransform="translate(0,0) translateZ(0)";o(p)},0);E(1)},H=function(d){if(z(f[0],"active"))t();else{var e=d.target||d.srcElement,a=e.getAttribute("data-click");if(a){a=s(a);window[a[0]]&&window[a[0]].apply(a.splice(0,1),a)}var b=e.getAttribute("data-ajax");if(b){b=s(b);var c=new XMLHttpRequest;c.onreadystatechange=function(){if(c.readyState==4&&c.status==200){var a=c.responseText,d=/^[\s\S]*<body[^>]*>([\s\S]+)<\/body>[\s\S]*$/i;if(d.test(a))a=a[A](d,"$1");a=a.trim();window[b[1]].apply(b.splice(0,2,a),b)}};c.open("GET",b[0],true);c.send()}(a||b)&&e.getAttribute("href")=="#"&&J(d);x()}G(d)},C=function(){return window.innerWidth||l.documentElement.clientWidth||l.body.clientWidth},D=function(){return window.screen.width},B=function(){var a=c.e[0],d=c.e[1],h=c.f===1;if(c.c){var i=c.d?D():C();if(i>c.c){a=c.e[2];d=c.e[3]}if(c.f[0]!=a||c.f[1]!=d){h=1;c.f=[a,d]}}if(h){for(var g=0;g<f[e];g++)f[g][b][k]=a?"":"none";if(d)x(1);else t(1)}},o=function(c){a[b].transition=a[b].WebkitTransition=a[b].msTransition="all "+c+"ms ease-in"},M=function(){var c,g,a;if(l.getElementsByClassName)c=n("getElementsByClassName","panel-button");else{c=[];var h=l.getElementsByTagName("*");a=h[e];while(a--)z(h[a],"panel-button")&&c.push(h[a])}a=c[e];while(a--){g=c[a].getAttribute("data-panel");if(!g||g==d.panelId){c[a][b].zIndex=j+1;f.push(c[a])}}},u=function(c,b){var a=false;if(c[e]>b){a=c.charAt(b).toLowerCase()=="y";if(!b&&!f)a=false}return a},s=function(a){return a[A](/\s/g,"").split(",")},w=function(){a=n(r,d.panelId);if(a){v=typeof a[b].transition=="undefined"&&typeof a[b].WebkitTransition=="undefined";p=v?0:d.speed;j=L(a,"zIndex");if(/^[\d\-]+$/.test(j))j=parseInt(j);else j=2;M();var w,x,k,l,h=[];w=k=f?1:0;x=l=0;if(d.showMode&&d.showMode!="default"){h=s(d.showMode);if(h[e]>0){w=k=u(h[0],0);x=l=u(h[0],1);if(h[e]>2){k=u(h[2],0);l=u(h[2],1)}}}var q=s(d.slideInFrom),A=q[e]>1?q[1]:"120%";c={a:q[0],b:A,c:h[e]>1?parseInt(h[1]):0,d:h[e]>1?h[1].indexOf("d")!="-1":0,e:[w,x,k,l],f:1,g:1};if(d.transparentLayer){g=n("createElement","div");y(g,"transparent-layer");a.parentNode.insertBefore(g,a);g[b].zIndex=j-1;m(a,"click",G);m(g,"click",function(){t(0)})}for(var z=0;z<f[e];z++)m(f[z],"click",H);o(p);B();c.c&&m(window,"resize",B);a[b].visibility="visible"}typeof d.initCallback=="function"&&i(d.initCallback,0);if(d.resizeCallback){m(window,"resize",d.resizeCallback);i(d.resizeCallback,0)}},I=function(c){var a=0;function b(){if(a)return;a=1;i(c,14)}if(l[q])l[q]("DOMContentLoaded",b,false);else m(window,"load",b)};if(n(r,d.panelId))w();else I(w);return{init:function(){!a&&w()},getDeviceWidth:D,getBrowserWidth:C,show:function(d){var c=n(r,d);if(c)if(c==a)x(1);else c[b][k]=""},hide:function(d){var c=n(r,d);if(c)if(c==a)t(1);else c[b][k]="none"}}}