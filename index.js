const express= require('express');
const exphbs=require('express-handlebars')
var logger= require('morgan');
var path =require('path')
var bodyParser=require('body-parser')

var admin = require("firebase-admin");

var serviceAccount = require("/home/babita/NodePlayground/NodeFireBase/NodeFireAuth/keys/nodefireauth-firebase-adminsdk-fzbet-230dcbcaf5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nodefireauth.firebaseio.com"
});




var app=express();
app.use(logger('dev'))


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 


//app.set('view engine',)
app.set('view engine', 'handlebars');


app.engine('handlebars', exphbs({defaultLayout: 'main', extname: '.handlebars'}));


isAuthenticated=(req,res,next)=>{

}


//app.use(express.static(__dirname + 'public'))
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{

res.render('home')

})

app.post('/',(req,res)=>{

 var a= req.body.name;
console.log(a);
 res.render('add',{name:a})


}  )

app.get('/playground',(req,res)=>{


})


var port=
process.env.PORT || 3000

app.listen(port,()=>{

console.log("App running successfully on port 3000");

})