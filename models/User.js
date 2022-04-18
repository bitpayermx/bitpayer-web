import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: String,
  profilePic: String,
  email: String,
  strategyUsed: String,
  accessToken: String,
  token: String,
});

let User;

try {
  User = mongoose.model("users");
} catch (err) {
  User = mongoose.model("users", UserSchema);
}

export default User;
