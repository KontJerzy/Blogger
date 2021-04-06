const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "owlsymcl_KontJerzy",
    host: "127.0.0.1",
    password: "KontJerzy1!",
    database: "owlsymcl_blogcrew",
})
app.post("/create", (req,res) =>{
    const ctid = req.body.ctid;
    const mname = req.body.mname;
    const mlink = req.body.mlink;
    const mdate = req.body.mdate;
    db.query(
        "INSERT INTO media (ctid, mname, mlink, mdate) VALUES (?,?,?,?)", 
        [ctid, mname, mlink, mdate], 
        (err,result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.get("/media", (req, res) => {
    db.query("SELECT * FROM media", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})


app.listen(3001, () => {
    console.log("3001 works");
})