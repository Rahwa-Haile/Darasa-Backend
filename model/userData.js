const mongoose = require("mongoose");
const User = require('./user')

const UserDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: User,
    required: true
  },
  avatar: {
    type: String,
    default: "none",
  },
  coverPhoto: {
    type: String,
    default: "none",
  },
  location: {
    type: String,
    required: [true, "please provide your location"],
    enum: [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
  },
  organization: {
    type: String,
  },
  title: {
    type: String,
  },
  expertiseArea: {
    type: Array,
    items: {
      enum: [
        "Technology",
        "Finance",
        "Healthcare",
        "Education",
        "Business",
        "Engineering",
        "Marketing",
        "Science",
        "Art",
        "Design",
        "Law",
        "Hospitality",
        "Media",
        "Entertainment",
        "Sports",
        "Environment",
        "Social Sciences",
        "Politics",
        "Culinary",
        "Fashion",
        "Automotive",
        "Agriculture",
        "Architecture",
        "Music",
      ],
    },
  },
  bio: {
    type: String,
  },
  LinkedInURL: {
    type: String,
    match: [
      /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/,
      "provide valid linkedIn url",
    ],
  }
  
});

module.exports = mongoose.model("UserData", UserDataSchema);
