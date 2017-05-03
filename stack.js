function Stack(){
	this.items = [];
}

Stack.prototype = {
	constructor: Stack,
	insert : function(item){
		this.items.push(item);
	},

	remove : function(){
		this.items.pop();
	},

	clear : function(){
		this.items = [];
	},

	size : function(){
		return this.items.length;
	},

	print : function(){
		console.log(this.items[this.items.length-1]);
	}
}
