var pausecontent=new Array()
pausecontent[0]='<span class="bulBrdHd_1">  <img src="images/siteStructure/buttons/Alive.png"  class="floatLeft">  <b>Holy Spirit Church links of Interest </b><br>'
pausecontent[1]='<span class="bulBrdHd_1"> <a href="pagesV3/HolySpiritSideFoldCard.pdf" ><img src="images/blue_pdf.gif" width="29" height="28">  Our  Parish at a Glance</a> an overview of our history, purpose, goals and people<br>'
pausecontent[2]='<span class="bulBrdHd_1"> <img src="images/siteStructure/buttons/treasureSM.png" width="80" height="92" class="floatLeft"> Parish Treasures, A<a href="treasures1.htm"> collection of brief articles</a> to call attention to the fixtures and art works we have in our church.'
pausecontent[3]='<span class="bulBrdHd_1"> <img src="images/aliveLogo.jpg" width="62" height="60" class="floatLeft" ></a> Alive in the Spirit. A <a href="pastor.htm">Weekly Message </a>  from our to the Parish can be read here.<br> '
pausecontent[4]='<span class="bulBrdHd_1"> <img src="images/siteStructure/buttons/NotreDame.png" width="76" height="100" class="floatLeft"> Sister Parish News Information about our <a href="sister.parish.htm" class="link">Our Lady of Africa in Abidjan, Ivory Coast</a><br>'
pausecontent[5]='<span class="bulBrdHd_1"> <img src="images/siteStructure/buttons/cross.png" class="floatLeft"> <a href="pagesV3/worship.htm" class="link">Holy  Spirit Mass Times</a>'
pausecontent[6]='<span class="bulBrdHd_1"> <img src="images/blue_pdf.gif" width="29" height="28" class="floatLeft">  <a href="documents/LiturgicalMinisters/LMschedule/pg1.pdf" class="link">Liturgical Ministers Schedule</a> <br>Lectors<br> Commentators<br> Altar Servers<br>Communion Minister'
pausecontent[7]='<span class="bulBrdHd_1"> <img src="images/siteStructure/buttons/suggestion.png"  class="floatLeft" >  <a href="http://www.holyspiritwebster.org/Suggestions.html" class="link">Submit </a> Comments and Suggestions to the Parish Council'
pausecontent[8]='<span class="bulBrdHd_1"> <img src="images/siteStructure/buttons/spiritual-weight-loss.png"  class="floatLeft" >  <a href="http://www.holyspiritwebster.org/pagesV3/news/Weightlossflyer.pdf" class="link">Weight Loss </a> <br>The Spirituality of Weight Loss<br>Wednesdays beginning March 4 7:00 pm - 8:00 pm Holy Spirit Church'
pausecontent[9]='<span class="bulBrdHd_1"> <img src="images/shamrock.gif"  class="floatLeft" >  <a href="images/siteStructure/buttons/MarchCalendarWPCC.png">Click Here</a>'
pausecontent[10]='<span class="bulBrdHd_1"> <a href="http://www.holyspiritwebster.org/minutes/Feb-17-2009minutes1.pdf">Parish Council Minutes 2-2009 </a><br>These are the meeting minutes from the most recent Parish council hilighting Fr. McMahons 50th Aniversary, The Greeter program, etc.'
pausecontent[11]='<span class="bulBrdHd_1"> <img src="images/siteStructure/buttons/LentenSoup.png"  class="floatLeft"> <a href="http://holyspiritwebster.org/pagesV3/news/events.htm">Lenten Soup Dinner </a><br>Hot, homemade, meatless soup, great fellowship and time with the Lord on:<br><bold>March 6 <br> March 22 <br> April 6.</bold>'


/***********************************************
* Pausing up-down scroller- © Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for this script and 100s more.


***********************************************/

function pausescroller(content, divId, divClass, delay){
this.content=content //message array content
this.tickerid=divId //ID of ticker div to display information
this.delay=delay //Delay between msg change, in miliseconds.
this.mouseoverBol=0 //Boolean to indicate whether mouse is currently over scroller (and pause it if it is)
this.hiddendivpointer=1 //index of message array for hidden div
document.write('<div id="'+divId+'" class="'+divClass+'" style="position: relative; overflow: hidden"><div class="innerDiv" style="position: absolute; width: 100%" id="'+divId+'1">'+content[0]+'</div><div class="innerDiv" style="position: absolute; width: 100%; visibility: hidden" id="'+divId+'2">'+content[1]+'</div></div>')
var scrollerinstance=this
if (window.addEventListener) //run onload in DOM2 browsers
window.addEventListener("load", function(){scrollerinstance.initialize()}, false)
else if (window.attachEvent) //run onload in IE5.5+
window.attachEvent("onload", function(){scrollerinstance.initialize()})
else if (document.getElementById) //if legacy DOM browsers, just start scroller after 0.5 sec
setTimeout(function(){scrollerinstance.initialize()}, 500)
}

// -------------------------------------------------------------------
// initialize()- Initialize scroller method.
// -Get div objects, set initial positions, start up down animation
// -------------------------------------------------------------------

pausescroller.prototype.initialize=function(){
this.tickerdiv=document.getElementById(this.tickerid)
this.visiblediv=document.getElementById(this.tickerid+"1")
this.hiddendiv=document.getElementById(this.tickerid+"2")
this.visibledivtop=parseInt(pausescroller.getCSSpadding(this.tickerdiv))
//set width of inner DIVs to outer DIV's width minus padding (padding assumed to be top padding x 2)
this.visiblediv.style.width=this.hiddendiv.style.width=this.tickerdiv.offsetWidth-(this.visibledivtop*2)+"px"
this.getinline(this.visiblediv, this.hiddendiv)
this.hiddendiv.style.visibility="visible"
var scrollerinstance=this
document.getElementById(this.tickerid).onmouseover=function(){scrollerinstance.mouseoverBol=1}
document.getElementById(this.tickerid).onmouseout=function(){scrollerinstance.mouseoverBol=0}
if (window.attachEvent) //Clean up loose references in IE
window.attachEvent("onunload", function(){scrollerinstance.tickerdiv.onmouseover=scrollerinstance.tickerdiv.onmouseout=null})
setTimeout(function(){scrollerinstance.animateup()}, this.delay)
}


// -------------------------------------------------------------------
// animateup()- Move the two inner divs of the scroller up and in sync
// -------------------------------------------------------------------

pausescroller.prototype.animateup=function(){
var scrollerinstance=this
if (parseInt(this.hiddendiv.style.top)>(this.visibledivtop+5)){
this.visiblediv.style.top=parseInt(this.visiblediv.style.top)-5+"px"
this.hiddendiv.style.top=parseInt(this.hiddendiv.style.top)-5+"px"
setTimeout(function(){scrollerinstance.animateup()}, 50)
}
else{
this.getinline(this.hiddendiv, this.visiblediv)
this.swapdivs()
setTimeout(function(){scrollerinstance.setmessage()}, this.delay)
}
}

// -------------------------------------------------------------------
// swapdivs()- Swap between which is the visible and which is the hidden div
// -------------------------------------------------------------------

pausescroller.prototype.swapdivs=function(){
var tempcontainer=this.visiblediv
this.visiblediv=this.hiddendiv
this.hiddendiv=tempcontainer
}

pausescroller.prototype.getinline=function(div1, div2){
div1.style.top=this.visibledivtop+"px"
div2.style.top=Math.max(div1.parentNode.offsetHeight, div1.offsetHeight)+"px"
}

// -------------------------------------------------------------------
// setmessage()- Populate the hidden div with the next message before it's visible
// -------------------------------------------------------------------

pausescroller.prototype.setmessage=function(){
var scrollerinstance=this
if (this.mouseoverBol==1) //if mouse is currently over scoller, do nothing (pause it)
setTimeout(function(){scrollerinstance.setmessage()}, 100)
else{
var i=this.hiddendivpointer
var ceiling=this.content.length
this.hiddendivpointer=(i+1>ceiling-1)? 0 : i+1
this.hiddendiv.innerHTML=this.content[this.hiddendivpointer]
this.animateup()
}
}

pausescroller.getCSSpadding=function(tickerobj){ //get CSS padding value, if any
if (tickerobj.currentStyle)
return tickerobj.currentStyle["paddingTop"]
else if (window.getComputedStyle) //if DOM2
return window.getComputedStyle(tickerobj, "").getPropertyValue("padding-top")
else
return 0
}
