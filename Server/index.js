import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  birthday: Date,
},
{
    timestamps: true,
}
);

const Product = mongoose.model("Products", productSchema);

async function main() {
    await mongoose.connect(
        'mongodb+srv://vixi:vixi@cluster0.plxlpeb.mongodb.net/?retryWrites=true&w=majority'
)
await Product.create({ name: "Test Product", price: 20 });
const products = await Product.find();
console.log(products);
}

main();