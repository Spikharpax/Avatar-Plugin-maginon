'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../../node_modules/ava-ia/lib/helpers');

exports.default = function (state) {
	
	return new Promise(function (resolve, reject) {
		
		for (var rule in Config.modules.maginon.rules) {
			  var match = (0, _helpers.syntax)(state.sentence, Config.modules.maginon.rules[rule]); 
			  if (match) break;
		}
		
		 setTimeout(function(){ 			
			if (match) {
				if (state.debug) info('ActionMaginon'.bold.yellow, 'action:', rule.yellow);
				
					state.action = {
						module: 'maginon',
						command: rule,
						value: "c'est fait|d'accord",
						tts: true		
					};
			}		
				
			resolve(state);	
		}, 500);	
	});
};
