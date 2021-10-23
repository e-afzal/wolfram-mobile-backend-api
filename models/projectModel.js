import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    developer: {
      type: String,
      default: "-",
    },
    category: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    pricePerSqFt: {
      type: String,
      default: "Request for price",
    },
    status: {
      type: String,
      required: true,
    },
    deliveryDate: {
      type: String,
      required: true,
      default: "-",
    },
    units: {
      type: Number,
      required: true,
      default: 0,
    },
    bedrooms: {
      type: String,
      required: true,
      default: "-",
    },
    description: {
      type: String,
      default: "-",
    },
    amenities: {
      type: Array,
    },
    planBooking: {
      type: Number,
      default: 0,
    },
    planHandover: {
      type: Number,
      default: 0,
    },
    planComplete: {
      type: Number,
      default: 0,
    },
    map: {
      long: {
        type: Number,
        default: 0,
      },
      lat: {
        type: Number,
        default: 0,
      },
      latDelta: {
        type: Number,
        default: 0.009,
      },
      longDelta: {
        type: Number,
        default: 0.009,
      },
      link: {
        type: String,
        default: "",
      },
    },
    area: {
      type: String,
    },
    city: {
      type: String,
    },
    carouselImg: [String],
    logoImg: String,
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
