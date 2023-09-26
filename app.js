var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var dotenv = require('dotenv');
var multer = require('multer');
var helmet = require('helmet');
const connectDB = require('./app_server/model/db');

var indexRouter = require('./app_server/routes/posts');
var usersRouter = require('./app_server/routes/users');

const { verifyToken } = require('./middleware/auth');
const {createPost} = require('./app_server/controller/posts');
var app = express();

// view engine setup
app.set('views', path.join(__dirname,'app_server', 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'./client/build')));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(logger("common"));
dotenv.config();
app.use(cors());




// FILE STORAGE
const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,"public/assets");
  },
  filename: (req,file,cb)=>{
    cb(null,file.originalname);
  }
});
const upload = multer({storage})
app.use(multer({ storage }).single('picture'));
app.post("/posts", createPost);

app.use('/', indexRouter);
app.use('/users', usersRouter);



//Database connection
const start = async () =>{
  try{
    await connectDB(process.env.MONGO_URL);
  
  } catch(error){
      console.log(error);
  }
}
start();
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
