function sayInfo(age) {
    console.log("name:"+this.name)
    console.log("age:"+age)
  }
    var user = {
      name: "zzx"
    } 
  Function.prototype.call2 = function(obj,age){
      
    return this.apply(obj,[age])
   
  }
  sayInfo.call2(user,100)


