<!--
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function onloadFunction() {

  MM_preloadImages('../i/profile_on.gif','../i/testimonials_on.gif','../i/contact_on.gif','../i/home_on.gif');

}

function show(anObjId) {
  var theObj = document.getElementById(anObjId);
  theObj.style.visibility = 'visible';
  theObj.style.display = 'block';
}

function hide(anObjId) {
  var theObj = document.getElementById(anObjId);
  theObj.style.visibility = 'hidden';
  theObj.style.display = 'none';
}

function send_contact() {
  show('response');
  setTimeout('hide("response")',25000);
}

function validate(aForm) {
  var responseDiv = document.getElementById("response");
  var errorCnt = 0;
  for(var i=0, item='', len=aForm.length; i<len; i++) {
    item = aForm[i];
    //alert("name: "+item.name+"\nvalue:'"+item.value+"'\nclass: "+item.className);
    if(/required/.test(item.className)) {
      //alert(item.name + " is required");
      if(item.value == '') {
        item.className += ' error';
        errorCnt++;
      } else {
        item.className = 'required';
      }
    }
  }
  if(errorCnt < 1) {
    //alert("send this form");
    responseDiv.innerHTML = '';
    getParam(aForm);
  } else {
    //alert("don't send");
    responseDiv.innerHTML = 'Please fill in the required (highlighted) fields';
  }
  return false;

  /*
  for(var i=0; i<aForm.length; i++) {
	if(aForm[i].value == "" && aForm[i].name != "comments") {
	  alert("Please fill in your " + aForm[i].name + ".");
	  aForm[i].focus();
	  return false;
	}
  }
  send_contact();
  return true;
  */
}

//Gets the browser specific XmlHttpRequest Object 
function getXmlHttpRequestObject() {
 if (window.XMLHttpRequest) {
    return new XMLHttpRequest(); //Mozilla, Safari ...
 } else if (window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP"); //IE
 } else {
    //Display our error message
    alert("Your browser doesn't support the XmlHttpRequest object.");
 }
}

//Our XmlHttpRequest object
var receiveReq = getXmlHttpRequestObject();

//Initiate the AJAX request
function makeRequest(url, param) {
//If our readystate is either not started or finished, initiate a new request
 if (receiveReq.readyState == 4 || receiveReq.readyState == 0) {
   //Set up the connection to captcha_test.html. True sets the request to asyncronous(default) 
   receiveReq.open("POST", url, true);
   //Set the function that will be called when the XmlHttpRequest objects state changes
   receiveReq.onreadystatechange = updatePage; 

   //Add HTTP headers to the request
   receiveReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   receiveReq.setRequestHeader("Content-length", param.length);
   receiveReq.setRequestHeader("Connection", "close");

   //Make the request
   receiveReq.send(param);
 }   
}

//Called every time our XmlHttpRequest objects state changes
function updatePage() {
  //alert(receiveReq.readyState);
 //Check if our response is ready
 if (receiveReq.readyState == 4) {
   //Set the content of the DIV element with the response text
   var responseDiv = document.getElementById('response');
   responseDiv.innerHTML = receiveReq.responseText;
   //alert(receiveReq.responseText);
   //responseDiv.innerHTML = 'testingdsaf ad';
   //Get a reference to CAPTCHA image
   var img = document.getElementById('imgCaptcha'); 
   //Change the image
   img.src = '/includes/create-image.php?' + Math.random();
 }
}

//Called every time when form is perfomed
function getParam(theForm) {
 //Set the URL
 var url = '/includes/captcha.php';
 //Set up the parameters of our AJAX call
 //var postStr = theForm.txtCaptcha.name + "=" + encodeURIComponent( theForm.txtCaptcha.value );
 var postStr = '';
 for(var i=0, item='', len=theForm.length; i<len; i++) {
   item = theForm[i];
   postStr += item.name + '=' + encodeURIComponent(item.value) + "&";
 }
 postStr.replace(/&$/, '');
 //Call the function that initiate the AJAX request
 makeRequest(url, postStr);
}


//-->