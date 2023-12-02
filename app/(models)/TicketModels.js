import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URL);
mongoose.Promise = global.Promise;

// Check if the model already exists before defining it
const Ticket = mongoose.models.my_tickets || mongoose.model("my_tickets", new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
));

export default Ticket;
