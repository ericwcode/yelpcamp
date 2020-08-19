let express = require("express");
let app = express();
let bodyparser = require("body-parser");



app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req,res) => {
	res.render("landing");
});

var campgrounds = [
	{name: "Salmon Creek", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350"},
	{name: "Granite Hill", image: "https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&h=350"},
	{name: "Stony Point", image: "https://images.pexels.com/photos/1309584/pexels-photo-1309584.jpeg?auto=compress&cs=tinysrgb&h=350"}
];

app.get("/campgrounds", (req,res) => {
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", (req,res) => {
	res.render("new");
});

app.post("/campgrounds", (req,res) => {
	// get data from form and add to campgrounds array
	let name = req.body.name;
	let image = req.body.image;
	let newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	//redirect back to campgrounds page
	res.redirect("/campgrounds");
});

app.listen(3000, function(){
	console.log("YelpCamp server listening on port 3000");	
});