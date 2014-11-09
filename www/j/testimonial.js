var TESTIMONIALS = new Array();
var CURRENT_TESTIMONIAL;

function loadTestimonials() {
  var theHolder = document.getElementById("testimonials");
  for(var i=0; i<theHolder.childNodes.length; i++) {
    var cn = theHolder.childNodes[i];
	if(cn.nodeType == 1 && cn.className && cn.className == "testimonial") 
	  TESTIMONIALS[TESTIMONIALS.length] = cn.innerHTML;
  }
}

/** will display one testimonial
    if no argument is provided, a random integer 
	between 0 - array.length will be picked
**/
function renderTestimonial(aNum, aDivId) {
  if(aDivId == null || aDivId == "")
    aDivId = "curTestimonial";
  if(aNum == null)
    aNum = getRandQuote();
  var curTestimonialHolder = document.getElementById(aDivId);
  curTestimonialHolder.innerHTML = TESTIMONIALS[aNum];
  CURRENT_TESTIMONIAL = aNum;
}

function getRandQuote() {
  var len=TESTIMONIALS.length-1;
  var i=Math.round(Math.random()*len);
  return i;
}

function showNextQ() {
  var i = CURRENT_TESTIMONIAL+1;
  if(i >= TESTIMONIALS.length)
    i=0;
  renderTestimonial(i);
  var pre_link = document.getElementById("quote_pre");
  if(pre_link.className && pre_link.className != "") {
    pre_link.className = "";
  }
}

function showPreQ(anObj) {
  if(anObj.className && anObj.className == "grayout")
    return false;
  var i = CURRENT_TESTIMONIAL-1;
  if(i < 0)
    i=TESTIMONIALS.length-1;
  renderTestimonial(i);
}