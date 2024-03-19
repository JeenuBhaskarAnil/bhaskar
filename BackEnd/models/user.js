import mongoose from "mongoose";

const schema = mongoose.Schema

const itemSchema = new schema({
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  });
  
const billSchema = new schema({
  username: {
    type: String, 
    required: true,
  },
  tableno: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  }
})
  const userSchema = new schema({
    items: {
      type: [itemSchema],
      required: true,
    },
    billDetails: {
      type: [billSchema],
      required: true
    },
  });
  
  export default mongoose.model('orderslist', userSchema);