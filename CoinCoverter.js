var toCoins = function(n,arr) {
    if(n === 0) {
      return [];
    }
    else {
      if(n >= arr[0]) {
        var t = n - arr[0];
        //console.log("[arr[0]].concat(toCoins(t,arr))"+[arr[0]].concat(toCoins(t,arr)));
        return [arr[0]].concat(toCoins(t,arr));
      }
      else {
        if(n < 10) 
        {
          //console.log("n:"+n);
          return n;
        }
        else
        {
          arr.shift();
          console.log("toCoins(n,arr);"+toCoins(n,arr));
          return toCoins(n,arr);
        } 
      } 
    }
  }
  
  let p200 = 0;
  let p100 = 0;
  let p50 = 0;
  let p30 = 0;
  let p10 = 0;
  
  var niceOutput = function() {
    var result = toCoins(562,[200,100,50,30,10]);
    result.forEach((x)=>{
      if(x==200)
      {
        p200++;
      }
      else if(x==100)
      {
        p100++;
      }
      else if(x==50)
      {
        p50++;
      }
      else if(x==30)
      {
        p30++;
      }
      else if(x==10)
      {
        p10++;
      }
    })
    return result + "";
  }
  
  console.log(niceOutput());
  console.log("200: " + p200);
  console.log("100: " + p100);
  console.log("50: " + p50);
  console.log("30: " + p30);
  console.log("10: " + p10);