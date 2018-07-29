var mongoose = require('mongoose');

var Schema = mongoose.Schema

var ImageSchema = new Schema({
    imageId: String,
    description: String
});

var Image = mongoose.model('Image', ImageSchema);

module.exports = Image;