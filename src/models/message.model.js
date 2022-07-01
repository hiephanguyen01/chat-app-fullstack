// import mongoose from "mongoose";
// let Schema = mongoose.Schema;

// let messageSchema = new Schema({
//   sender: {
//     id: String,
//     username: String,
//     avatar: String,
//   },
//   receiver: {
//     id: String,
//     username: String,
//     avatar: String,
//   },
//   text: String,
//   file: {
//     data: Buffer,
//     contentType: String,
//     fileName: String,
//   },
//   createAt: { type: Number, default: Date.now },
//   updateAt: { type: Number, default: null },
//   deleteAt: { type: Number, default: null },
// });

// module.exports = mongoose.model("message", messageSchema);

module.exports = (mongoose) => {
  const Message = mongoose.model(
    "message",
    mongoose.Schema({
      sender: {
        id: String,
        username: String,
        avatar: String,
      },
      receiver: {
        id: String,
        username: String,
        avatar: String,
      },
      text: String,
      file: {
        data: Buffer,
        contentType: String,
        fileName: String,
      },
      createAt: { type: Number, default: Date.now },
      updateAt: { type: Number, default: null },
      deleteAt: { type: Number, default: null },
    })
  );
  return Message;
};

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      sender: {
        id: String,
        username: String,
        avatar: String,
      },
      receiver: {
        id: String,
        username: String,
        avatar: String,
      },
      text: String,
      file: {
        data: Buffer,
        contentType: String,
        fileName: String,
      },
      createAt: { type: Number, default: Date.now },
      updateAt: { type: Number, default: null },
      deleteAt: { type: Number, default: null },
    }
  );
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Message = mongoose.model("message", schema);
  return Message;
};
