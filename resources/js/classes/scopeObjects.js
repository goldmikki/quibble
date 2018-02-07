// GameObjects was be renamed to scopeObjects

var ScopeObjects = function(params){
	var self = this;
	this.pjs;
	this.screen;
	this.config;
	giveMeParamsFromObject(this, params);

	this.gameName = self.pjs.game.newTextObject({
		text: config.gameName,
		font: "Verdana",
		color: "#C62828",
		size: self.screen.w / 20
	});

	this.generateMenuItems = function(){
		for(var i in self.config.gameMenu){
			self[i] = self.pjs.game.newTextObject({
				text: self.config.gameMenu[i],
				font: "Verdana",
				color: "#C62828",
				size: self.screen.w / 30
			});
		}
	}

	self.generateMenuItems();
}