var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name:{type:String,required:true},
    username:{type:String,unique:true},
    email:{type:String,unique:true},
    address:{
      city:{type:String},
      state:{type:String},
      country:{type:String},
      pin:{type:Number}
    }
},{timestamps:true});



// Q2. Create an article Schema with fields

// - title
// - description
// - tags[String]

// 1. Add multikey indexes on tags which is an array of strings
// 2. Add text indexes on title as users will search for texts present in an article's title.
// 3. Update text indexes to include descriptions as well. Implement text indexes on both title and description.

var articleSchems = new Schema({
    title:{type:String},
    description:{type:String},
    tags:[String]
})

articleSchems.index({title:"text",description:"text"});

var Article = mongoose.model('Article',articleSchems);
module.exports = Article;

var User = mongoose.model('User',userSchema);
module.exports = User;
