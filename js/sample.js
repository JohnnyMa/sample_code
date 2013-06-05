function fn() {
  console.log(a);
  console.log(b);
  
  a = 123;
  var b = 123;
}



(function() {

        var a = 1, b = c = 0;

        function x(n){n = n + 1;}

        b = x(a);

        function x(n){n = n + 3;}

        c = x(a);

        //你认为a, b, c是多少呢?
        console.log('result:', a, b, c);

})();



//简单变一下，答案略有改动，同时也给出了上面的那道题如果出错了的同学的原因。

(function() {

        var a = 1, b = c = 0;

        function x(n){return n + 1;}

        b = x(a);

        function x(n){return n + 3;}

        c = x(a);

        //你认为a, b, c是多少呢?
        console.log('result:', a, b, c);

})();


(function() {

        var a = 1, b = c = 0;

        function x(n){return n + 1;}

        b = x(a);

        function x(n){return n + 3;}

        c = x(a);

        //你认为a, b, c是多少呢?
        console.log('result:', a, b, c);

})();

//再综合考察一下，这段代码会有什么问题。
//提示，javascript预编译会将要声明的变量初始化为undefined。

(function() {

        console.log(typeof(x));

        x();

        function x(){console.log('#1 is Loaded.');}

        console.log(typeof(y))

        y();

        var y = function(){console.log('#2 is Loaded.');}

})();

//最后就是这两段代码运行结果是否相同

(function() {

        console.log(typeof(x));

        function x(){return;}

        var x = '';

        console.log(typeof(x))

})();


(function() {

        console.log(typeof(x));

        var x = '';

        function x(){return;}

        console.log(typeof(x))

})();
