// models/Room.jsx
import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide room name"],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide room description"],
    },
    price: {
      type: Number,
      required: [true, "Please provide room price"],
    },
    capacity: {
      type: Number,
      required: [true, "Please provide room capacity"],
    },
    amenities: [
      {
        type: String,
      },
    ],
    images: [
      {
        type: String,
      },
    ],
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Room || mongoose.model("Room", RoomSchema);
