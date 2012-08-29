(function(){
    var db = openDatabase('todo','1.0','ToDoList',2*1024*1024);
 
    var add = function (){
      console.log('add...');
        var date = new Date().getDate(),
            text = document.getElementById('J_text').value;
        db.transaction(function(tx){
            tx.executeSql('create table if not exists list (date TEXT, text TEXT)', []);
        });
 
        db.transaction(function(tx){
            tx.executeSql('insert into list values(?,?)',[date, text], function(tx,rs){
                console.log(rs);
            }, function(tx, err){
                console.log(err);
            });
        });
    };

    var searchAll = function(){
      console.log('searchAll...');
        var ul = document.getElementById('J_list');
        //ul.innerHTML = '';
        db.transaction(function(tx){
            tx.executeSql('select * from list', [], function(tx, rs){
                for(var i = 0, l = rs.rows.length; i < l; i += 1){
                    var li = document.createElement('li');
                    li.innerHTML = rs.rows.item(i).text;
                    ul.appendChild(li);
                }
            });
        });
    };
 
    var init = function(){
      console.log('init...');
        searchAll();
        document.getElementById('J_add').addEventListener('click',function(e){
            add();
            searchAll();
        });
    };
 
    init();
})();