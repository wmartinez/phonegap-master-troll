// Global variable that will tell us whether PhoneGap is ready var
isPhoneGapReady = false;

// Default all phone types to false
var isIpad = false; 
// Store the device's 
var deviceUUID;

//Store the current network status
var isConnected = false;
var isHighSpeed = false;

//After the first click show the info
var showInfo = false;

function init() {
  	// Add an event listener for deviceready
  	document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() { 
	// set to true 
	isPhoneGapReady = true;
	$(" .info").addClass("hide");
	console.log('The device is now ready'); 
	deviceUUID = device.uuid;	
	//$("#infoForm").on("submit",showResults);
	console.log("show info " + showInfo);
}

function showResults() {
	if (device.platform.substring(0,4) == "iPad") {
		isIpad = true;
	}	
	$(" .info").removeClass("hide");
	// detect for network access
	networkDetection();
	if (isIpad) {
		console.log("yeahhh, it is an ipad");
		document.getElementById("isIpad").innerHTML = "yes";
	} else {
		console.log("Nope, it is not");
		document.getElementById("isIpad").innerHTML = "nope";
	}
	if (isConnected) {
		document.getElementById("isConnected").innerHTML = "yes";
	} else {
		document.getElementById("isConnected").innerHTML = "nope";
	}
	if (isHighSpeed) {
		document.getElementById("isHighSpeed").innerHTML = "yes";
	} else {
		document.getElementById("isHighSpeed").innerHTML = "nope";
	}
	console.log(deviceUUID);
	if (deviceUUID != '') {
		document.getElementById("deviceUUID").innerHTML = "yes, It's "+deviceUUID;
	} else {
		document.getElementById("deviceUUID").innerHTML = "nope";
	}
	showInfo = true;
}

function networkDetection() {
	console.log("networkDetection");
	if (isPhoneGapReady) {
		// as long as the connection type is not none,
		// the device should have Internet access
		if (navigator.network.connection.type != Connection.NONE) {
			isConnected = true; 
		}
		console.log("after getting the connection's status II");
		console.log(navigator.network.connection.type);
		//determine wheter this connection is high-speed
		switch (navigator.network.connection.type) {
			case Connection.UNKNOWN:
			case Connection.CELL_2G:
				isHighSpeed = false;
				break;
			default:
				isHighSpeed = true;
				break;
		}
		console.log("after the switch");
	} 	
	console.log("inside networkDetection finishing");
}
