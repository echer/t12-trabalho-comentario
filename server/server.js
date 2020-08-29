var expressClass = require("express");
var comentarios = require("./comentarios");
var posts = require("./posts");
var bodyParser = require("body-parser");

var express = new expressClass();

express.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

express.use(bodyParser.json());
express.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

express.get("/comentarios/:uuid", function (request, response) {
  var uuid = request.params["uuid"];
  var promise = new Promise((resolve, reject) => {
    resolve(
      comentarios.filter((obj) => {
        return obj.uuidPost == uuid;
      })
    );
  });
  promise.then((comentarios) => {
    console.log(JSON.stringify(comentarios));
    response.json(comentarios);
  });
});

// Get all
express.get("/posts", function (request, response) {
  response.json(posts);
});

// Create
express.post("/comentarios", function (request, response) {
  request.body["uuid"] = uuidv4();
  request.body["datahora"] = getCurrent();
  comentarios.push(request.body);
  response.json();
});

express.post("/posts", function (request, response) {
  request.body["uuid"] = uuidv4();
  request.body["datahora"] = getCurrent();
  posts.push(request.body);
  response.json();
});

express.put("/posts/:uuid", function (request, response) {
  var uuid = request.params["uuid"];
  var promise = new Promise((resolve, reject) => {
    resolve(
      posts.filter((obj) => {
        return obj.uuid == uuid;
      })[0]
    );
  });
  promise.then((post) => {
    post.likes = request.body.likes;
    response.json();
  });
});


express.listen(8888);


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function getCurrent() {
  let today = new Date();
  let dd = today.getDate();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }

  if (hours < 10)
    hours = `0${hours}`;

  if (minutes < 10)
    minutes = `0${minutes}`;

  if (seconds < 10)
    seconds = `0${seconds}`;

  return `${dd}/${mm}/${yyyy} ${hours}:${minutes}:${seconds}`;
}