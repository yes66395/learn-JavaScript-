var o = {           //物件 o

    m:function(){             //物件的方法 m
 
    var self = this;               //將this值存在一個變數中
 
         console.log(this === o);         //印出 "true" : this 為 o
 
          f(); 
          function f(){ //巢狀function f

            console.log(this === o); //印出 "false":this為全域物件或undefined
            
            console.log(self === o ); //"true": self是外層的this值
            
            }
            
            }
            
            };
            
            o.m(); //在物件 o上調用方法m                                          