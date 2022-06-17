//console.log("hellow world");

var Platform =navigator.platform;

var storeID = Platform.toLowerCase();

function store (){

console.log(storeID);

if (storeID == "win32" || "linux i686"){
	console.log("opening Playstore");
window.open("https://play.google.com/store?hl=en")
	
}

else if  (storeID == "macintosh" || "macIntel" || "macppc" ||"mac68k"){
	console.log("opening App store");
	window.open("https://itunes.apple.com/us/genre/ios/id36?mt=8")

}

else if (storeID == "iphone" || "ipod" 
|| "ipad" || "pike v7.6 release 92"||
"pike v7.8 release 517" ){
	console.log("opening App store");
		window.open("https://itunes.apple.com/us/genre/ios/id36?mt=8")
}

else if (storeID == "android" || "linux" || 
"null"){
	
	console.log("opening Playstore");
	window.open("https://play.google.com/store?hl=en")
	
}

else if (storeID == "blackberry"){

console.log("opening Playstore");
window.open("https://play.google.com/store?hl=en")
	
}

else {
	
	window.open("https://play.google.com/store?hl=en")
	
}
	
}
//////////////////////////////////////////////////////

function openChrome(){
	
	
window.open("https://chrome.google.com/webstore/category/apps"

);	
	
}

function openDoor(){
	
	window.open("https://play.google.com/store/apps/details?id=com.boxing.studio.games.doorbell&hl=en")
	
}

function fartOpen() {

window.open("https://play.google.com/store/apps/details?id=com.boxingstduiogames.Fart_King&hl=en");
	
}



function OpenJamaican(){
	
window.open ("https://play.google.com/store/apps/details?id=com.boxingstudiogames.jamaica_curse_words&hl=en")
	
}

function jeter(){
	

window.open("https://play.google.com/store/apps/details?id=com.boxingstudiogames.jetfighter&hl=en")	


}

function follow(){
	
window.open("https://twitter.com/sean_my")

}


function Facebook(){
	
window.open("https://www.facebook.com/boxingstudiogames?ref=bookmarks")

}















