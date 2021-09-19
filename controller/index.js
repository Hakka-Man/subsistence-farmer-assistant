var isAuthenticated = false;
var image = null;
var displayName = null;
var Produce = require('../models/produce.js')

exports.index = async function(req, res, next) {
  if(req.isAuthenticated()){
    displayName = req.user.displayName;
    isAuthenticated = true;
    image = req.user.image;
  }else{
    displayName = null;
    isAuthenticated = false;
    image = null;
  }
  Produce.sync({
       force:false,
  })
  var produce = await Produce.findAll();
  res.render('index', {
    loggedin: isAuthenticated,
    name: displayName,
    image: image,
    produce: produce,
  });
}

exports.profile = function(req, res, next) {
    if(req.isAuthenticated()){
      displayName = req.user.displayName;
      isAuthenticated = true;
      image = req.user.image;
    }else{
      displayName = null;
      isAuthenticated = false;
      image = null;
    }
    res.render('userInfo', {
      loggedin: isAuthenticated,
      name: displayName,
      image: image,
    });
}

exports.post = function(req, res, next) {
    if(req.isAuthenticated()){
      displayName = req.user.displayName;
      isAuthenticated = true;
      image = req.user.image;
    }else{
      displayName = null;
      isAuthenticated = false;
      image = null;
    }
    res.render('post/viewpost', {
      loggedin: isAuthenticated,
      name: displayName,
      image: image,
    });
}

exports.enterData = function(req, res, next) {
    if(req.isAuthenticated()){
      displayName = req.user.displayName;
      isAuthenticated = true;
      image = req.user.image;
    }else{
      displayName = null;
      isAuthenticated = false;
      image = null;
    }
    res.render('enterData', {
      loggedin: isAuthenticated,
      name: displayName,
      image: image,
    });
}
exports.editUser = function(req, res, next) {
    if(req.isAuthenticated()){
      displayName = req.user.displayName;
      isAuthenticated = true;
      image = req.user.image;
    }else{
      displayName = null;
      isAuthenticated = false;
      image = null;
    }
    res.render('editUser', {
      loggedin: isAuthenticated,
      name: displayName,
      image: image,
    });
}
exports.orders = function(req, res, next) {
    if(req.isAuthenticated()){
      displayName = req.user.displayName;
      isAuthenticated = true;
      image = req.user.image;
    }else{
      displayName = null;
      isAuthenticated = false;
      image = null;
    }
    res.render('orders', {
      loggedin: isAuthenticated,
      name: displayName,
      image: image,
    });
}
exports.dashboard = function(req, res, next) {
    if(req.isAuthenticated()){
      displayName = req.user.displayName;
      isAuthenticated = true;
      image = req.user.image;
    }else{
      displayName = null;
      isAuthenticated = false;
      image = null;
    }
    res.render('buyerDashboard', {
      loggedin: isAuthenticated,
      name: displayName,
      image: image,
    });
}
exports.about = function(req, res, next) {
    if(req.isAuthenticated()){
      displayName = req.user.displayName;
      isAuthenticated = true;
      image = req.user.image;
    }else{
      displayName = null;
      isAuthenticated = false;
      image = null;
    }
    res.render('about', {
      loggedin: isAuthenticated,
      name: displayName,
      image: image,
    });
}
