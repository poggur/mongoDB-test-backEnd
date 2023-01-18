import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema ({
    username: {type: String},
    password: {type: String, minLength: 8}
});

export default mongoose.model("User", UserSchema);