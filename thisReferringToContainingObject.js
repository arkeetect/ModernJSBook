var obj = {
    a: 1,
    b: 2,
    andAndPrint: function(){
        let result = this.a + this.b;
        console.log(result);
    }
}
obj.andAndPrint();