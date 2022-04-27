const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*     var commentSchema = new Schema({
        comment:String,
        user:{
            type:Schema.Types.ObjectId,
            ref:'user'
        }
    }) */

var newsSchema = new Schema(
  {
    image: [String],
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    categories: {
      type: String,
      enum: ["business", "politics", "lifestyle", "travel"],
    },

    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

var roomModel = mongoose.model("new", newsSchema);

module.exports = roomModel;
