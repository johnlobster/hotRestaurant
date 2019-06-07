// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// Variables to hold the data
const tableData = [
    {
        name: "Bobby Smith",
        email: "bobby@test.com",
        phone: "999-999-9999",
        id: "bobby"
    }
];
const waiting = [
    {
        name: "Bobby Jones",
        email: "@testj.com",
        phone: "999-999-9999",
        id: "bobbyJ"
    }
];

// Routes 
app.get("/", function (req, res) {
    //show home page
    res.sendFile(__dirname + '/public/index.html');
});

app.get("/reserve", function (req, res) {
    //show reservation page
    res.sendFile(__dirname + '/public/reserve.html');
});

app.get("/list", function (req, res) {
    //show reservation page
    res.sendFile(__dirname + '/public/list.html');
});

// Displays all tables
app.get("/api/tables", function (req, res) {
    return res.json(JSON.stringify([tableData,waiting]));
});

// Displays a single table, or returns false
app.get("/api/tables/:table", function (req, res) {
    var i = req.params.table;
    return res.json(tableData[i-1]);
});

// Create New Reservation - takes in JSON input
app.post("/api/tables", function (req, res) {
    // console.log("Post Success");
    // console.log(req.body);
    // console.log("tableData");
    // console.log(tableData);
    tableData.push(req.body);
    res.json(true);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

