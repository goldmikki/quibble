var Storage = function(params){
// save
// loadGameSession
// isAvailableForLoad
// loadLast	
	var self = this;
	// this.pjs;
	// this.config;

	this.matrixSave = function(){
		this.serialObj = JSON.stringify(field.matrix); 
		localStorage.setItem("matrix", this.serialObj); 
		// console.log("matrix saving done!");
	}

	this.matrixLoad = function(){
		this.restoredMatrix = JSON.parse(localStorage.getItem("matrix"));
		// console.log("matrix is loaded");
		return this.restoredMatrix;
	}

	this.bestScoreSave = function(){
		this.serialObj = JSON.stringify(data.bestScore); 
		localStorage.setItem("bestScore", this.serialObj);
		// console.log("bestScore saving done!");
	}

	this.bestScoreLoad = function(){
		this.restoredBestScore = JSON.parse(localStorage.getItem("bestScore"));
		// console.log("bestScore is loaded");
		return this.restoredBestScore;
	}

	this.delKey = function(key){ // del value according to key (not used now)
		delete localStorage[key];
	}
	
	this.delAll = function(key){ // not  used now
		localStorage.clear();
	}	
}

