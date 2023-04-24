const express = require('express');

//used in 11 line path.join
const path = require('path');
const port = 8000;

const app = express();

//Set EJS as templating engine
app.set('view engine', 'ejs');
//looks for folder views in current directory
app.set('views', path.join(__dirname, 'views'));

var contactList = [{
        name: "a",
        phone: "123"
    },
    {
        name: "a2",
        phone: "1232"
    },
    {
        name: "a3",
        phone: "12322"
    }
]

app.get('/', function (req, res) {
    //returning index.ejs file feom view folder
    return res.render("index", {
        title: "my contacts-list",
        contact_List:contactList
    });
})


app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(port);
})