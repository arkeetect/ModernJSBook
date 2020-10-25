function LinkedList() {
    this.head = null;
    this.tail = null;
  
  };
  
  class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
};
  
  LinkedList.prototype.addToHead = function(value){
    var newNode = new Node(value, this.head, null);
    if (this.head) {
      this.head.prev = newNode;
    }
    else {
      this.tail = newNode;
    }
    this.head = newNode;
  };
  
  LinkedList.prototype.addToTail = function(value){
    var newNode = new Node(value, null, this.tail);
    if (this.tail) {
      this.tail.next = newNode;
    }
    else {
      this.head = newNode;
    }
    this.tail = newNode;
  };
  
  LinkedList.prototype.removeHead = function(){
    if (this.head) {
      var val = this.head.value;
      this.head = this.head.next;
      if (this.head){ 
        this.head.prev = null;
      } else {
        this.tail =  null;
      }
      return val;
    }
  }
  
  
  LinkedList.prototype.removeTail = function(){
    if (this.tail) {
      var val = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail){ 
        this.tail.next = null;
      } else {
        this.head = null;
      }
      return val;
    }
  }
  
  LinkedList.prototype.search = function(filter) {
    var currNode = this.head;
    while (currNode) {
        if (currNode.value === filter){
          return currNode;
        }
        currNode = currNode.next;
    }
  }
  
  var ll = new LinkedList();
  
  ll.addToHead('one');
  ll.addToHead('two');
  ll.addToHead('three');
  
  //console.log(ll);
  //ll.removeTail();
  console.log(ll.search('two'));
  
  //ll.addToHead(100);
  
  //console.log(ll.tail.prev.prev.prev);