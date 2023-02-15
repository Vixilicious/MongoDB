import mongoose from "mongoose";
import { swamp, faker } from 'fongus';

const carSchema = new mongoose.Schema({
    color: String,
    model: String,
    brand: String,
    hp: Number,
})

const Car = mongoose.model('cars', carSchema)

async function main(){
    mongoose.set('strictQuery', false);
    await mongoose.connect(
        'mongodb+srv://vixi:vixi@cluster0.plxlpeb.mongodb.net/?retryWrites=true&w=majority'
    )

    // await swamp({
    //     count: 10,
    //     fields: {
    //       color: faker.color.human,
    //       model: faker.vehicle.model,
    //       brand: faker.vehicle.manufacturer,
    //       hp: faker.random.numeric,
    //     },
    //     path: Car,
    //   });
      const cars = await Car.find({hp: {$gt: 5} }, {model: 0})
      console.log(cars);
    }
    main();