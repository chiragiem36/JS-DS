function linkedList(){
	this.head = null;
	this.length = 0;
	Node = function(element){
		this.element = element;
		this.next = null;
	}
}

	linkedList.prototype = {
		constructor: linkedList,
		isEmpty : function(){
			if(this.length === 0){
				return true;
			} else {
				return false;
			}
		},

		append : function(element){
			var node = new Node(element);
			var current;
			if(this.head === null){
				this.head = node;
			} else {
				current = this.head;
				while(current.next){
					current = current.next;
				}
				current.next = node;
			}
			this.length++ ;
		},

		insert : function(i,element){
			var node = new Node(element);
			if(i>-1 && i<this.length){
				current = this.head;
				if(i === 0){
					node.next = this.head ;
					this.head = node;
				} else {
					var n = 0;
					var previous;
					while(n< i ){
						previous = current;
						current = current.next;
						n++ ;
					}
					node.next = current;
					previous.next = node;
				}
				this.length++ ;
				return true;
			} else {
				return false;
			}
		},

		pop : function(){
			current = this.head;
			var previous;
			if(this.length>1){
				while(current.next){
				previous = current;
				current = current.next;
			}

			previous.next = null;
			this.length-- ;

			return true;

			} else if(this.length < 1 ){
				return false;
			} else {
				this.head = null;
				this.length = 0;
			}
		},

		removeAt : function(i){
				current = this.head;
				var previous;
				n = 0;
				if(i>0 && i<this.length){
					if(i === 0){
						this.head = current.next;
					} else {
						while(n<i){
							previous = current;
							current = current.next;
							n++ ;
						}
						previous.next = current.next;
						this.length-- ;
					}
				}
		},

		indexOf : function(item){
					var n = 0;
					current = this.head;
					while(current.element != item){
						current = current.next;
						n++ ;
					}
					if(n<this.length){
						return n;
					} else {
						return false;
					}
			},

			size : function(){
					return this.length;
			},

			toArray : function(){
					var listArray = [];
					current = this.head;
					if(!this.head){
						return [];
					}
					while(listArray.length< this.length ){
						listArray.push(current.element);
						current = current.next;
					}
					return listArray;
			}
	}
