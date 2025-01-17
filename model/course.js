const mongoose = require("mongoose");
const User = require("./user");

const courseSchema = new mongoose.Schema(
  {
    courseTitle: {
      type: String, 
      required: [true, "Please provide course title"],
    },
    courseSubtitle: {
      type: String,
      required: [true, "Please provide course sub-title"],
    },                                                    
    courseDescription: {
      type: String,
      required: [true, "Please provide course description"],
    },
    objectives: {
      type: Array,
      items: {
        type: String,
        required: [true, "Please provide objectives"],
      },
    },
    prerequistes: {
      type: Array,
      items: {
        type: String,
        required: [true, ["Please provide prerequiste"]],
      },
    },

    lesson: {
      type: Array,
      items: {
        type: Object,
        properties: {
          completed: {
            type: Boolean,
            default: false,
          },
          lessonTitle: {
            type: String,
            required: [true, "Please provide lesson title"],
          },
          startDate: {
            type: Date,
            reqired: [true, "Please provide the start date"],
          },
        },
      },
    },
    price: {
      type: Number,
      required: [true, "Please provide the price"],
    },
    duration: {
      type: Object,
      properties: {
        year: {
          type: Number,
          required: [true, "Please provide the year number"],
        },
        month: {
          type: Number,
          required: [true, "Please provide the month number"],
        },
        day: {
          type: Number,
          required: [true, "Please provide the day number"],
        },
      },
    },
    targetStudents: {
      type: String,
      required: [true, "Please provide your target students"],
    },
    courseImage: {
      type: String,
      required: true
    },
    promoVideo: {
      type: String,
      required: true
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: User,
      required: true,
    },
    appointment: {
      required: true,
      type: Array,
      items: {
        type: Object,
        properties: {
          day: {
            enum: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
          },
          startHour: Number,
          startHourPeriod: {
            type: String,
            enum: ["PM", "AM"],
            // default: "PM",
          },
          endHour: Number,
          endHourPeriod: {
            type: String,
            enum: ["PM", "AM"],
            // default: "PM",
          },
          enrolled: {
            students: {
              type: Array,
              items: {
                type: Object,
                properties: {
                  studentId: {
                    type: mongoose.Types.ObjectId,
                    ref: User,
                  },
                  status: {
                    enum: ['pending', 'rejected', 'accepted'],
                    default: 'pending'
                  },
                  rating: {
                    type: Number,
                    default: 0
                  }
                },
              },
            },
          },
        },
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
