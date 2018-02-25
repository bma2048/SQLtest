
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '12345',
    database : 'usbasepaystructure'
});

//connect
/*db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL connected....');
});*/


function data() {
    db.connect((err) => {
        if(err){
            throw err;
        }
        console.log('MySQL connected....');
    });
    
    db.connect(function(e1){
        if(e1) throw e1;
        var SQLquery = "Select * from by_work_location";
        db.query(SQLquery,function(e2,result){
            if(e2) throw e2;
            for(var i = 0; i < result.length; i++)
            {
                console.log(result);
                $("#SQL").text() = result;
            }

        });
    })
}

data();