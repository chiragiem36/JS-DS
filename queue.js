function Queue(){
	this.items = [];
}

Queue.prototype = {
	constructor: Queue,
	enqueue : function(item){
		this.items.push(item);
	},

	dequeue : function(){
		return this.items.shift()
	},

	size : function(){
		console.log(this.items.length);
	},

	print : function(){
		console.log(this.items.toString());
	},

	front : function(){
		console.log(this.items[0]);
	},

	clear : function(){
		this.items = [];
	}
}
