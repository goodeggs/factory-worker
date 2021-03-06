var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;
var Profile = mongoose.model('Profile', ProfileSchema);
var ProfileSchema = new Schema({
  username        : String,
  first_name      : String,
  last_name       : String
});

var Profile = mongoose.model('Profile', ProfileSchema);

var Factory = require('factory-worker');

Factory.define('profile', Profile, {
  "username":"Coolguy123",
  "first_name":"Cool",
  "last_name":"Guy"
})

object = Factory.create('profile')
object2 = Factory.build('profile', { "username": "Anotherguy" })