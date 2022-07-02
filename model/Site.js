import Mongoose from "mongoose";

const websiteSchema = Mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    url: {
        type:String,
        required:true
    },
    github: {
        type:String,
    },
    imageUrl:{
        type:String,
        rerquired:true
    }
});

const website = Mongoose.model("website", websiteSchema);

export default website;
