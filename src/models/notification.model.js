// // import mongoose from "mongoose";
// // let Schema = mongoose.Schema;

// // let notificationSchema = new Schema({
// //   sender: {
// //     id: String,
// //     username: String,
// //     avatar: String,
// //   },
// //   receiver: {
// //     id: String,
// //     username: String,
// //     avatar: String,
// //   },
// //   content: String,
// //   type: String,
// //   isRead: { type: Boolean, default: false },
// //   createAt: { type: Number, default: Date.now },
// // });

// // module.exports = mongoose.model("notification", notificationSchema);

// module.exports = (mongoose) => {
//   const Notification = mongoose.model(
//     "notification",
//     mongoose.Schema({
//       sender: {
//         id: String,
//         username: String,
//         avatar: String,
//       },
//       receiver: {
//         id: String,
//         username: String,
//         avatar: String,
//       },
//       content: String,
//       type: String,
//       isRead: { type: Boolean, default: false },
//       createAt: { type: Number, default: Date.now },
//     })
//   );
//   return Notification;
// };

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
      content: String,
      type: String,
      isRead: { type: Boolean, default: false },
      createAt: { type: Number, default: Date.now },
    }
  );
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Notification = mongoose.model("notification", schema);
  return Notification;
};

