// JavaScript Document
function endM(){
	//Function handler to end the video
	intitialCss(2);
	$("#videopg").fadeOut("fast");
	
}

function intitialCss(pos){
	//Function setting the initial settings for the video display
	if (pos == 1)
	{
		$(".main, .header, .footer").css("min-width","0");
	}
	else if (pos == 2)
	{
		$(".main, .header, .footer").css("min-width","630px");
	}
	
}

function checkURL(){ //returns 1 if "v=old" is in the URL else returns 0
	if (location.href.match("v=old"))
	{
		return 1;
	}
	else
	{
		return 0;
	}
}
		
	

$(document).ready(function($) {	
	
	//Function testing the compatibility of the browser, displaying the video and starting it.
	
	"use strict";
	if(checkURL()) // test if the page is opended new, if not exit
	{
		return 0;
	}
	else
	{
		var oldIE;
		if ($('html').is('.ie6, .ie7, .ie8')) {
			oldIE = true;
		}else{
			oldIE = false;
		}
		
		if(oldIE == false)
		{
			intitialCss(1);
			$("#videopg").css("visibility" ,"visible"); //<--- visible
			var myVideo=document.getElementById("video")
			myVideo.addEventListener('ended',endM,false);
			myVideo.play();
		}
	}

});

