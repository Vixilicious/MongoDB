import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
});

const User = mongoose.model("users", userSchema);

async function main() {
  mongoose.set("strictQuery", false);
  mongoose.connect(
    "mongodb+srv://vixi:vixi@cluster0.plxlpeb.mongodb.net/?retryWrites=true&w=majority"
  );

  const users = await User.insertMany([
    { name: "Gilbert", age: 5, city: "Stockholm" },
    { name: "Adam", age: 19, city: "Stockholm" },
    { name: "Emma", age: 12, city: "Kalmar" },
    { name: "Fredrik", age: 45, city: "Malmö" },
    { name: "Mia", age: 29, city: "Göteborg" },
    { name: "Vici", age: 24, city: "Hudiksvall" },
    { name: "Alicia", age: 20, city: "Stockholm" },
  ]);
  //   const mapusers = await User.find({ city: "Stockholm" });
  //   //   console.log(mapusers);
  //   const users = await User.find();

  console.log(users);
}

main();
