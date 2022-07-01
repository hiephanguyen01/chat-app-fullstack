// module.exports = (mongoose) => {
//   const User = mongoose.model(
//     "user",
//     mongoose.Schema({
//       username: String,
//       gender: { type: String, default: "male" },
//       phone: { type: Number, default: null },
//       address: { type: String, default: null },
//       avatar: { type: String, default: "avatar-default.png" },
//       role: { type: String, default: "user" },
//       local: {
//         email: { type: String, trim: true },
//         password: String,
//         isActive: { type: Boolean, default: false },
//         verifyToken: String,
//       },
//       facebook: {
//         uid: String,
//         token: String,
//         email: { type: String, trim: true },
//       },
//       google: {
//         uid: String,
//         token: String,
//         email: { type: String, trim: true },
//       },
//       createAt: { type: Number, default: Date.now },
//       updateAt: { type: Number, default: null },
//       deleteAt: { type: Number, default: null },
//     })
//   );
//   return User;
// };

module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    username: String,
    gender: { type: String, default: "male" },
    phone: { type: Number, default: null },
    address: { type: String, default: null },
    avatar: { type: String, default: "avatar-default.png" },
    role: { type: String, default: "user" },
    local: {
      email: { type: String, trim: true },
      password: String,
      isActive: { type: Boolean, default: false },
      verifyToken: String,
    },
    facebook: {
      uid: String,
      token: String,
      email: { type: String, trim: true },
    },
    google: {
      uid: String,
      token: String,
      email: { type: String, trim: true },
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
  const User = mongoose.model("User", schema);
  return User;
};
