import mongoose from "mongoose";

const propertySchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    transaction: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    refNo: {
      type: Number,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    completion: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    buildUp: {
      type: Number,
      required: true,
    },
    parking: {
      type: Number,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
    features: {
      type: Array,
      required: true,
    },
    featured: {
      type: Boolean,
      required: true,
      default: false,
    },
    description: {
      type: String,
      required: true,
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
    agent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent",
    },
  },
  {
    timestamps: true,
  }
);

const Property = mongoose.model("Property", propertySchema);

export default Property;
