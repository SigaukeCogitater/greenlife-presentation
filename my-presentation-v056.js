<!--
// http://www.kirupa.com/html5/running_your_code_at_the_right_time.htm

var myDivs;
var pageCounter = 0;
var currentPage = 0;
var allowConsole = false;

document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);
// http://help.dottoro.com/ljwqtkhj.php
function contentEditable() {

    var el = document.getElementById ("mycanvas");
    var html = document.getElementsByTagName("html");

    // if (el.contentEditable == "true") {
    //     el.contentEditable = "false";
    //     //button.innerHTML = "Enable editing!";
    // }
    // else {
    //     el.contentEditable = "true";
    //     //button.innerHTML = "Disable editing!";
    // }
    if (allowConsole) console.log('[my-presentation.js:contentEditable()] body editable: ' + 
                el.contentEditable);
    // [my-presentation.js:contentEditable()] body editable: 
    // inherit on line:23 Source:file:///home/vladimir/Dropbox/HTML5/my-presentation-v04.js" 
    if (allowConsole) console.log('[my-presentation.js:contentEditable()] html editable: ' + 
                html.contentEditable);
}
function findClassMatchingElements( classname )
{
    //var reMatch = new RegExp( toMatch, "g" ); // match and ignore case
    //if ( tagname == null ) tagname = "*"; // if not tagname passed, search all
    
    var elems = document.getElementsByClassName(classname);
    
    //alert('Total number of divs: ' + elems.length);
    var matches = [];
    for ( var e = 0; e < elems.length; ++e )
    {
        //        
        elems[e].setAttribute("id", "page"+(e+1));
        matches.push( elems[e] );
    }
    return matches;
}
//
// http://www.codingforums.com/javascript-programming/243417-search-element-using-pattern-javascript-only.html
//
function findMatchingElements( toMatch, tagname )
{
    var reMatch = new RegExp( toMatch, "g" ); // match and ignore case
    if ( tagname == null ) tagname = "*"; // if not tagname passed, search all
    var elems = document.getElementsByTagName(tagname); 
    //alert('Total number of divs: ' + elems.length);
    var matches = [];
    for ( var e = 0; e < elems.length; ++e )
    {
        //        
        if ( elems[e].id.match(reMatch) ) matches.push( elems[e] );
    }
    return matches;
}
//var myDivs = findMatchingElements( "notes_struct", "div" ); // only match <div>s
//var myMatches = findMatchingElements( "notes_struct" ); // match all elements
function setElementVisibility(elid)
{
    document.getElementById(elid).style.display = "none";
}
function returnContent(elid)
{
    var cont = document.getElementById(elid).innerHTML;
    //document.getElementsByTagName('body').innerHTML = "New text!";
    return cont; // replace contents
}
function setport()
{
    //document.getElementsByTagName('body').innerHTML = "New text!";
    document.body.innerHTML = 'Yaaahooo!'; // replace contents
}
function clearport()
{
    //document.getElementsByTagName('body').innerHTML = "New text!";
    //document.body.innerHTML = 'Yaaahooo!'; // replace contents
    //document.body.innerHTML = returnContent('page001'); // replace contents
    //window.location.href = "test4.html#page001";
    //var myDivs = document.getElementsByTagName("div");
    //var myDivs = findMatchingElements("page", "div");
    var myDivs = findMatchingElements("page\\d+$", "div");
    alert('Number of divs: ' + myDivs.length);
    var results = [];
    //for (var i = 0; i < myDivs.length; i++) {
    //    var id = myDivs[i].id;
    //    if (id && id.search('/^page/') != -1) {
    //      results.push(myDivs[i]);
    //    }
    //}
    //alert(results.length);   
    //document.write(myDivs[]);
    //for (var i = 0; i < myDivs.length; i++) { 
    //  //alert(myDivs[i]); //text += cars[i];
    //  document.write(myDivs[i]);
    //}
}
function viewport()
{
    var e = window
    , a = 'inner';
    if ( !( 'innerWidth' in window ) )
    {
    a = 'client';
    e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
}
document.addEventListener("load", pageFullyLoaded, false);
// http://rogeriolino.com/2008/01/15/javascript-fade-in-fade-out/
function fadeOut(element, time) {
    fade(element, time, 100, 0);
}
 
function fadeIn(element, time) {
    fade(element, time, 0, 100);
}
 
function fade(element, time, ini, fin) {
    var target = element;
    var alpha = ini;
    var inc;
    if (fin >= ini) { 
        inc = 2; 
    } else {
        inc = -2;
    }
    timer = (time * 1000) / 50;
    var i = setInterval(
        function() {
            if ((inc > 0 && alpha >= fin) || (inc < 0 && alpha <= fin)) {
                clearInterval(i);
            }
            setAlpha(target, alpha);
            alpha += inc;
        }, timer);
}
 
function setAlpha(target, alpha) {
    target.style.filter = "alpha(opacity="+ alpha +")";
    target.style.opacity = alpha/100;
}
function Reload() {
    try {
    var headElement = document.getElementsByTagName("head")[0];
    if (headElement && headElement.innerHTML)
    headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
    }
    catch (e) {}
}
function setPage(pageNumber)
{
    currentPage = pageNumber;

    //document.getElementsByTagName('html').className="faded";
    //document.getElementsByTagName("html")[0].style.backgroundColor="black"; // OK

    // see https://coderwall.com/p/aqyk7a

    //document.body.style.display = "none";
    //document.getElementsByTagName('html')[0].style.opacity =0.0;



    //document.getElementsByTagName("html")[0].style.background="#c72";
    
    //document.getElementsByTagName('html')[0].className ="faded";


    //document.getElementsByTagName('html')[0].className ="faded";
    //document.getElementsByTagName('html')[0].style.opacity =0.3;

    //document.getElementsByTagName('body').style.backgroundColor="black";
    //document.style.backgroundColor="black";
    //document.style.background="black";
    //document.body.style.backgroundColor="black";
    //var b = document.body.innerHTML;

    //console.log("[debug] body: " + b);

    //document.getElementsByTagName('html')[0].style.opacity =0.0;
    
    //document.getElementsByTagName('html')[0].className ="faded";

    //fadeIn(document.getElementsByTagName('body')[0], 1);
    // fadeOut(document.getElementsByTagName('body')[0], 0.6);
    //document.body.style.display = "none";

    // for (var i = 0; i < myDivs.length; i++)
    // {
    //     if (i == currentPage)
    //     {
    //         //smyDivs[i].style.display = 'table';
    //         document.getElementById("page"+(i+1)).style.display = 'table';
    //     }
    //     else 
    //     {
    //         //myDivs[i].style.display = 'none';
    //         document.getElementById("page"+(i+1)).style.display = 'none';
    //     }
    //     //console.log('[my-presentation:OnResizeDocument()] div visibility ' + i + ': ' + pages[i].style.display);
    // }

    // set the current page
    window.location.href = "#page" + (currentPage + 1);
    // resize window to center the page horizontally and vertically
    OnResizeDocument();


    // fadeIn(document.getElementsByTagName('body')[0], 1);
    
    //document.body.style.display = "initial";
    //fadeIn(document.getElementsByTagName('body')[0], 1);
    //fadeOut(document.getElementsByTagName('html')[0], 0.6);

    // setTimeout(function()
    // {
    //     fadeOut(document.getElementsByTagName('html')[0], 0.6);

    //     //document.getElementsByTagName('html').src = "#page" + (currentPage + 1);
    //     //document.getElementsByTagName('html')[0].className ="normal";
    //     window.location.href = "#page" + (currentPage + 1);
        
    //     fadeIn(document.getElementsByTagName('html')[0], 1);
    //     //document.getElementsByTagName('html')[0].className ="normal";

    //     //if (pageNumber > 0) Reload();
        
    //     //document.getElementsByTagName("html")[0].style.background="#c72111";
    // }, (2 * 1000));

    //document.getElementsByTagName('html')[0].style.opacity =1.0;
    
    

    //document.getElementsByTagName('body').innerHTML = "New text!";
    //document.body.innerHTML = 'Yaaahooo!'; // replace contents
    //document.getElementById(elid).style.display = "none";
    
    //alert('Number of divs: ' + myDivs.length);

    //window.location.href = "#page" + (currentPage + 1);

    //if (myDivs) {
    //document.body.innerHTML = myDivs[pageNumber].innerHTML; // replace contents
    //}

    // var w = window.innerWidth;
    // var h = window.innerHeight;
    // console.log('[my-presentation:setPage()] inner w: ' + w);
    // console.log('[my-presentation:setPage()] inner h: ' + h);

    // var mypage = document.getElementById("page1");

    // console.log('[my-presentation:setPage()] mypage: ' + mypage);

    // if (mypage) {
    //     console.log('[my-presentation:setPage()] mypage top: ' + mypage.style.top);
    //     //mypage.style.top="100px";
    // }
}

window.onresize = OnResizeDocument;

function OnResizeDocument() {

    //alert ("The size of the window or the document has changed.");

    // var mypage = document.getElementById("page1");

    // mypage.style.left = (document.body.clientWidth - mypage.clientWidth)/2 + 'px';
    // mypage.style.top = (document.body.clientHeight - mypage.clientHeight)/2 + 'px';

    // console.log('[my-presentation:OnResizeDocument()] mypage set left: ' + mypage.style.left);
    // console.log('[my-presentation:OnResizeDocument()] mypage set top: ' + mypage.style.top);

    // var pages = findMatchingElements("^page\\d+$", "div");
    // console.log('[my-presentation:OnResizeDocument()] Number of page divs: ' + pages.length); 

    // for (var i = 0; i < pages.length; i++)
    // {
    //     console.log('[my-presentation:OnResizeDocument()] div visibility ' + i + ': ' + pages[i].style.display);
    // }
    
    // html: 940x680
    // body: 920x660
    //
    
    var he = document.getElementsByTagName("HTML")[0];
    
    if (allowConsole) {
        
    console.log('[my-presentation:OnResizeDocument()] html offsetWidth: ' + he.offsetWidth);
    console.log('[my-presentation:OnResizeDocument()] html offsetHeight: ' + he.offsetHeight);
    
    console.log('[my-presentation:OnResizeDocument()] html scrollLeft: ' + he.scrollLeft); // 50
    console.log('[my-presentation:OnResizeDocument()] html scrollTop: ' + he.scrollTop);  // 0
    
    console.log('[my-presentation:OnResizeDocument()] html offsetLeft: ' + he.offsetLeft); // 50
    console.log('[my-presentation:OnResizeDocument()] html offsetTop: ' + he.offsetTop);  // 0 !!! Margin
    
    console.log('[my-presentation:OnResizeDocument()] html offsetParent: ' + he.offsetParent);  // 
    
    console.log('[my-presentation:OnResizeDocument()] he.clientWidth: ' + he.clientWidth); // 1040   
    console.log('[my-presentation:OnResizeDocument()] he.clientHeight: ' + he.clientHeight); // 722
    console.log('[my-presentation:OnResizeDocument()] he left: ' + he.clentLeft);
    console.log('[my-presentation:OnResizeDocument()] he top: ' + he.clentTop);
    
    console.log('[my-presentation:OnResizeDocument()] html marginTop: ' + he.style.marginTop); // 4
    
    //he.offsetTop = 40;
    
    console.log('[my-presentation:] html offsetTop1: ' + he.offsetTop);
    console.log('[my-presentation:] html style.top: ' + he.style.top);
    console.log('[my-presentation:] html style.marginTop1: ' + he.style.marginTop);
    //he.offsetTop = "100px";
    //he.scrollTop = "100px";
    //he.style.top = "100px";
//    he.style.marginTop = "100px";
    console.log('[my-presentation:] html style.marginTop2: ' + he.style.marginTop);
    console.log('[my-presentation:] html scrollTop: ' + he.scrollTop);  // 
    console.log('[my-presentation:] html offsetTop2: ' + he.offsetTop);
        
    }
    
    
    //var mc = document.getElementsById("mycanvas");
    var mc = document.body;
    
    if (allowConsole) {
    
    console.log('[my-presentation:OnResizeDocument()] body offsetWidth: ' + mc);
    console.log('[my-presentation:OnResizeDocument()] body offsetWidth: ' + mc.offsetWidth);
    console.log('[my-presentation:OnResizeDocument()] body offsetHeight: ' + mc.offsetHeight);
    
     console.log('[my-presentation:OnResizeDocument()] body offsetLeft: ' + mc.offsetLeft); // 0
    console.log('[my-presentation:OnResizeDocument()] body offsetTop: ' + mc.offsetTop);  // 0
    
    console.log('[my-presentation:OnResizeDocument()] body scrollLeft: ' + mc.scrollLeft); // 0
    console.log('[my-presentation:OnResizeDocument()] body scrollTop: ' + mc.scrollTop);  // 0
    
    console.log('[my-presentation:OnResizeDocument()] body clientLeft: ' + mc.clientLeft); // 4
    console.log('[my-presentation:OnResizeDocument()] body clientTop: ' + mc.clientTop);  // 4
    
    console.log('[my-presentation:OnResizeDocument()] body marginLeft: ' + mc.style.marginLeft); // 4
    
    }


    var meh = document.getElementsByClassName("slide");
    var div;
    
    if (allowConsole) {

    console.log('[my-presentation:OnResizeDocument()] slides found: ' + meh.length);
    
    console.log('[my-presentation:OnResizeDocument()] document.body.clientWidth: ' + document.body.clientWidth);
    
    console.log('[my-presentation:OnResizeDocument()] document.body.clientHeight: ' + document.body.clientHeight);
    
    console.log('[my-presentation:OnResizeDocument()] body left: ' + mc.style.left);
    console.log('[my-presentation:OnResizeDocument()] body top: ' + mc.style.top);
    
    console.log('[my-presentation:OnResizeDocument()] body client left: ' + mc.clentLeft);
    console.log('[my-presentation:OnResizeDocument()] body client top: ' + mc.clentTop);
        
    }
    
   he.style.marginTop = (he.clientHeight - mc.offsetHeight)/2 + "px";
    
    

    for (var i = 0; i < meh.length; i++)
    {
        // var style = window.getComputedStyle(el);
        // return (style.display === 'none')
        //if (meh[i].style.display != 'none')
        if (meh[i].offsetParent != null)
        {
            if (allowConsole) {
                
            console.log('[my-presentation:OnResizeDocument()] current page left: ' + meh[i].style.left);
            console.log('[my-presentation:OnResizeDocument()] current page top: ' + meh[i].style.top);
            
            console.log('[my-presentation:OnResizeDocument()] current page offsetWidth: ' + meh[i].offsetWidth);
            console.log('[my-presentation:OnResizeDocument()] current page offsetHeight: ' + meh[i].offsetHeight);
                
            }
            
            meh[i].style.left = (document.body.clientWidth - meh[i].clientWidth)/2 - 4 + 'px';
            meh[i].style.top = (document.body.clientHeight - meh[i].clientHeight)/2 + 'px';

            // elements[0].getAttribute( 'id' );
            // [DIV].style.visibility
            
            if (allowConsole) {

            console.log('[my-presentation:OnResizeDocument()] current page id: ' + meh[i].getAttribute( 'id' ));
            console.log('[my-presentation:OnResizeDocument()] current page vi: ' + meh[i].style.display);
            // console.log('[my-presentation:OnResizeDocument()] current page id: ' + meh[0].getAttribute( 'id' ));
            // console.log('[my-presentation:OnResizeDocument()] current page vi: ' + meh[0].style.display);
                
            }
        }
        //land.width() / items[0].style.left * 100 + "px"; 
        // "px" is very important.
        // also this will only work
        // if you have first set the
        // element's style attribute.
    }
}

function theDomHasLoaded(e) {
    // do something
    myDivs = findClassMatchingElements( "slide" );
    //myDivs = findMatchingElements("^page\\d+$", "div");
    console.log('[debug-new] Number of page divs: ' + myDivs.length); 
    pageCounter = myDivs.length;

    // for (var i = 0; i < myDivs.length; i++)
    // {
    //     console.log('[my-presentation:theDomHasLoaded(e)] before div visibility ' + i + ': ' + myDivs[i].style.display);
    // }

    // set the start page, counter starts from 0 (zero)
    //setPage(5);

    // for (var i = 0; i < myDivs.length; i++)
    // {
    //     console.log('[my-presentation:theDomHasLoaded(e)] after div visibility ' + i + ': ' + myDivs[i].style.display);
    // }

    var el = document.getElementById("mycanvas");
    //console.log('[my-presentation:theDomHasLoaded(e)] body by id element: ' + el);

    //var el = document.getElementsByTagName('body')[0];
    //var el = document.getElementById("page1");
    //console.log('[TOUCH] page1 by id element: ' + el);
    el.addEventListener("touchstart", handleStart, false);
//    el.addEventListener("mousedown", getCoordsMouse, false);
    
    var video = document.getElementById('videoId');
    //console.log('[my-presentation:theDomHasLoaded] z-index (1): ' + video.style.zIndex);
    //console.log('[my-presentation:theDomHasLoaded] style.position (1): ' + video.style.position);
    
    // myElement.style.zIndex = "9999";
    // myElement.style.position
    
//    video.addEventListener('click',function(){
//        console.log('[my-presentation:theDomHasLoaded] z-index (2): ' + video.style.zIndex);
//        video.play();
//        console.log('[my-presentation:theDomHasLoaded] z-index (3): ' + video.style.zIndex);
//    },false);
    
//    video.addEventListener('play',function(){
//        if (video.getAttribute('controls') != 'true') {
//            video.setAttribute('controls', 'true');                    
//        }
//        video.removeAttribute('controls');
//    },false);
    
//    $(document).ready(function(){
//    $("#video").on('play',function(){
//        if (this.getAttribute('controls') !== 'true') {
//            this.setAttribute('controls', 'true');                    
//        }
//        this.removeAttribute('controls');
//    });
//});

    //contentEditable();

    // var w = window.innerWidth;
    // var h = window.innerHeight;
    // console.log('[my-presentation:setPage()] inner w: ' + w);
    // console.log('[my-presentation:setPage()] inner h: ' + h);



    // var mypage = document.getElementById("page1");

    // var rect = mypage.getBoundingClientRect();
    // var divtop = rect.top + document.body.scrollTop;
    // var divleft = rect.left + document.body.scrollLeft;

    // console.log('[my-presentation:setPage()] mypage divtop: ' + divtop);
    // console.log('[my-presentation:setPage()] mypage divleft: ' + divleft);

    //  console.log('[my-presentation:setPage()] body clientwidth: ' + 
    //              document.body.clientWidth);
    // console.log('[my-presentation:setPage()] mypage clientwidth: ' + 
    //              mypage.clientWidth);

    // console.log('[my-presentation:setPage()] mypage: ' + mypage);

    // if (mypage) {
    //     console.log('[my-presentation:setPage()] mypage top: ' + mypage.style.top);
    //     //mypage.style.top="100px";
    // }

    // // set new left and top
    // // left: ($(window).width() - $('.className').outerWidth())/2,
    // //  top: ($(window).height() - $('.className').outerHeight())/2
    // mypage.style.left = (document.body.clientWidth - mypage.clientWidth)/2 + 'px';
    // mypage.style.top = (document.body.clientHeight - mypage.clientHeight)/2 + 'px';

    // console.log('[my-presentation:setPage()] mypage set left: ' + mypage.style.left);
    // console.log('[my-presentation:setPage()] mypage set top: ' + mypage.style.top);
    
     
      
}
function handleStart(e) {
    //console.log('[TOUCH] touchstart');
    //e.preventDefault();
    //console.log('[TOUCH] touchstart');

    console.log('touch x: ' + e.touches[0].pageX + ', y: ' + e.touches[0].pageY);

      // var el = document.getElementsByTagName("canvas")[0];
      // var ctx = el.getContext("2d");
      // var touches = evt.changedTouches;
            
      // for (var i=0; i < touches.length; i++) {
      //   log("touchstart:"+i+"...");
      //   ongoingTouches.push(copyTouch(touches[i]));
      //   var color = colorForTouch(touches[i]);
      //   ctx.beginPath();
      //   ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0,2*Math.PI, false);  // a circle at the start
      //   ctx.fillStyle = color;
      //   ctx.fill();
      //   log("touchstart:"+i+".");
      // }
}
function getCoordsMouse(event) {
  var coords = document.getElementById("coords");
  console.log('[MOUSE] mouse x: ' + event.pageX + ', y: ' +event.pageY);
}
function pageFullyLoaded(e) {
    //setPage(0);
    pageCounter = myDivs.length;
    var nop = document.getElementById("numofpages");
    if (nop) {
        nop.innerHtml = pageCounter;
    }
    
    
}
// http://digicompdiy.wordpress.com/2012/09/11/4519/
function leftArrowPressed() {
    // Your stuff here
    console.log('[JS:leftArrowPressed()] currentPage: ' + currentPage);
    
    if (currentPage > 0) currentPage--;

    //alert('current page: ' + currentPage);
    if ( currentPage >= 0 && currentPage <= (pageCounter-1))
    {
    // fadeOut(document.getElementsByTagName('body')[0], 0.8);
    //document.getElementsByTagName('html')[0].className ="faded";
    window.location.href = "#page" + (currentPage + 1);
    //document.getElementsByTagName('html')[0].className ="normal";
    // fadeIn(document.getElementsByTagName('body')[0], 1);
    }
    //setPage(pageCounter);
}
function rightArrowPressed() {
    // Your stuff here
    console.log('[JS:rightArrowPressed()] currentPage: ' + currentPage);
    
    if (currentPage < (pageCounter-1)) currentPage++;
    //alert('current page: ' + currentPage);
    //setPage(pageCounter);
    if ( currentPage >= 0 && currentPage <= (pageCounter-1))
    {
    window.location.href = "#page" + (currentPage +1);
    }
}
// http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
//
// end      35
// home     36
// 
document.onkeydown = function(evt) {
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 33: // page up
        leftArrowPressed();
        OnResizeDocument();
        break;
        case 34: // page down
        rightArrowPressed();
        OnResizeDocument();
        break;
        case 37: // left arrow
        leftArrowPressed();
        OnResizeDocument();
        break;
        case 39: // right arrow
        rightArrowPressed();
        OnResizeDocument();
        break;
    }
};

window.addEventListener("pageshow", function() {
    // fadeOut(document.getElementsByTagName('body')[0], 1);
    // fadeIn(document.getElementsByTagName('body')[0], 1);
}, false);
// setElementVisibility('page001')
//-->