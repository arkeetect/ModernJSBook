//var val1 = Math.round(3/2);
//console.log(val1);

function OrderedArray(val) {
    this.ordArray = val;
    this.result = null;
}
//console.log(OrderedArray);
OrderedArray.prototype.getArray = function() {
    return this.ordArray;
}

OrderedArray.prototype.insertElement = function(element){
    //var start = this.ordArray.length % 2;
    //if ()
    let insertIndex = this.ordArray.length;
    for (let i = 0; i < this.ordArray.length; i++) {
        //console.log(this.ordArray[i]);
        if (this.ordArray[i] > element) {
            insertIndex = i;
            break;
        }

    }
    //console.log(i);
    //insertIndex = i -1;
    //let tempArr = this.ordArray.slice(0, insertIndex);
    //let tempArr2 = this.ordArray.slice(insertIndex,this.ordArray.length);
    //this.ordArray = [...tempArr, element, ...this.ordArray.slice(insertIndex + 1, this.ordArray.length)];
    //this.ordArray = [...tempArr, element, ...tempArr2];

    this.ordArray = [...this.ordArray.slice(0, insertIndex), element, ...this.ordArray.slice(insertIndex,this.ordArray.length)];

}
OrderedArray.prototype.addElement = function(element) {
    if ((this.ordArray.length)  === 0){
        //console.log('in special case first element');
        this.ordArray.push(element);
    } else {
        //console.log('about to call insertElement');
        this.insertElement(element);
    }
}

OrderedArray.prototype.search = function(start, 
                                end, //(this.ordArray.length - 1), 
                                searchVal) {
    //let nextEnd = end;
    //let nextStart = start; 
    console.log(searchVal);
    console.log(end);
    console.log(this.ordArray[Math.round(end/2)]);  

    if(this.ordArray[end] == searchVal) {
            return end;
    } else {
            
        if (this.ordArray[start + Math.floor((end - start)/2)] > searchVal) {
            end = start + Math.floor((end - start)/2);
            console.log(`end ${end} value ${this.ordArray[end]}`);
            // first check if hit the jak pot at the next half way point
            if(this.ordArray[end] == searchVal)
                return end;
                if(this.ordArray[start] == searchVal)
                return start;
                console.log(`before next search lower half start ${start} end ${end}`);
                this.search(start, end, searchVal);
        } else  {
            start = start + Math.floor((end - start)/2);
            console.log(`upper half start ${start} end ${end} value with start ${this.ordArray[start]} sarchValue ${searchVal}`);
            if(this.ordArray[start] == searchVal) {
                console.log(`found it! ${start}`);
                this.result = start;
                return this.ordArray[start];
            }
                
            if(this.ordArray[end] == searchVal)
                return end;
            console.log(`before next search start ${start} end ${end}`);
            this.search(start, end, searchVal);
        }
        //else {
        //    start = Math.round(end/2);
        //    if(this.ordArray[start] === searchVal)
        //        return start;
            //console.log(start, end);
        //    this.search(start, end, searchVal);
        //}
    }

}


let myArr = new OrderedArray([]);
myArr.addElement(1);
myArr.addElement(5);
myArr.addElement(6);
myArr.addElement(7);
myArr.addElement(2);
myArr.addElement(3);
myArr.addElement(4);
myArr.addElement(10);
myArr.addElement(100);
myArr.addElement(58);
myArr.addElement(17);

var newElement = 3;

//console.log([...myArr.getArray().slice(0,2), newElement, ...myArr.getArray().slice(2)] );
console.log(myArr.getArray());

let start = 0;
let end = myArr.getArray().length-1;
console.log(myArr.search(start, end, 7));
//const result = Number.parseInt(myArr.search(start, end, 7));
console.log (myArr.result);

