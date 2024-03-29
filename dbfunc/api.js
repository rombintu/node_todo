var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');


module.exports = {
    create: function(title){
        let sql = db.prepare("INSERT INTO todo (title) VALUES(?)")
        sql.run(title)
        sql.finalize()
        // console.log(title)
    },

    delete_all: function(){
        let sql = db.prepare("DELETE FROM todo")
        sql.run()
        sql.finalize()
    },

    select: function(){
        data = []
        db.each("SELECT * FROM todo", function(err, row) {
            if (err){
                throw err
            } else {
                data.push(row)
            }
        })
        return data
    },

    completed: function(status, id){
        let sql = db.prepare("UPDATE todo SET completed=? WHERE id=?")
        sql.run(status, id)
        sql.finalize()
    }
}
