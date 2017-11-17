var request = require('request'),
    json = {},
	_SmartPlug;

exports.init = function(){

    _SmartPlug = { 	IP: Config.modules.maginon.IP,
					User: Config.modules.maginon.User,
				    Password: Config.modules.maginon.Password
				};
			
}


exports.action = function(data, callback){

	// table of actions
	var tblCommand = {
		switchOn : function() {setPlug("GpioForCrond+1"); },
		switchOff : function() {  setPlug("GpioForCrond+0");}					
	};

	tblCommand[data.action.command]();
	callback();

}


var setPlug = function (state, callback) {

	var url = 'http://' + _SmartPlug.User + ':' + _SmartPlug.Password + '@' 
				+ _SmartPlug.IP + '/goform/SystemCommand?command=' + state;
	info(url);
	request({ 'uri' : url }, function ( err, response, body ){
		if (err || response.statusCode != 200) if (callback) return callback();
		if (callback) callback();
    });
}  


var getState = function (data, callback) {

	var url = 'http://' + _SmartPlug.User + ':' + _SmartPlug.Password + '@' 
				+ _SmartPlug.IP + '/goform/SystemCommand?command=' + data.shift();

    request({ 'uri' : url }, function ( err, response, body ){
       if (err || response.statusCode != 200) return callback(false);
        scrap(body);
        data.length ? getState(data,callback) : callback(true);
    });
}


var scrap = function(body) {
    if (body.match(/[^[\]]+(?=])/g)) json.state = tab[body.match(/[^[\]]+(?=])/g)];
    if (body.match(/01I00 (.*)/)) json.amp = +body.match(/01I00 (.*)/)[1];
    if (body.match(/01W00 (.*)/)) json.watt = +body.match(/01W00 (.*)/)[1]/100;
    if (body.match(/01V00 (.*)/)) json.volt = +body.match(/01V00 (.*)/)[1]/1000;
    if (body.match(/01E00 (.*)/)) json.volt = +body.match(/01E00 (.*)/)[1];
    json.watt > 0.07 || json.amp > 50 ? json.state = "On" : json.state = "Off";
}
