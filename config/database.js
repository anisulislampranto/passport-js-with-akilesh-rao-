const mongoose = require("mongoose");

//  database connection with mongoose
exports.connectMongoose = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gcyyo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

const userSchema = mongoose.Schema({
  username: String,
  password: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
