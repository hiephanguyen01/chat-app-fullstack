//  import mongoose from "mongoose";
// // let Schema = mongoose.Schema;

// // let contactSchema = new Schema({
// //   userId: String,
// //   contactId: String,
// //   status: {
// //     type: Boolean,
// //     default: false,
// //   },
// //   createAt: { type: Number, default: Date.now },
// //   updateAt: { type: Number, default: null },
// //   deleteAt: { type: Number, default: null },
// // });

// // module.exports = mongoose.model("contact", contactSchema);

// module.exports = (mongoose) => {
//   const Contact = mongoose.model(
//     "contact",
//     mongoose.Schema({
//       userId: String,
//       contactId: String,
//       status: {
//         type: Boolean,
//         default: false,
//       },
//       createAt: { type: Number, default: Date.now },
//       updateAt: { type: Number, default: null },
//       deleteAt: { type: Number, default: null },
//     })
//   );

//   return Contact;
// };

module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    userId: String,
    contactId: String,
    status: {
      type: Boolean,
      default: false,
    },
    createAt: { type: Number, default: Date.now },
    updateAt: { type: Number, default: null },
    deleteAt: { type: Number, default: null },
  });
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Contact = mongoose.model("contact", schema);
  return Contact;
};
