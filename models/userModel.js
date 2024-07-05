const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
  },
  googleId: {
    type: String,
  },
  facebookId: {
    type: String,
  },
  name: {
    type: String,
    
  },
  institution: {
    type: String,
    
  },
  role: {
    type: String,
    default:'user',
    
  },
  course: {
    type: String,
    
  },
  profile_pic: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const otpSchema = new mongoose.Schema({
    phone: {
      type: String,
      required: true
    },
    otp: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      index: { expires: 120 }
    }
  });
  



const sessionSchema = new mongoose.Schema({
  _id: String, 
  session: {
    cookie: {
      originalMaxAge: Number,
      expires: Date,
      secure: Boolean,
      httpOnly: Boolean,
      path: String
    },
    passport: {
      user: {
        id: String, 
        phone: String 
      }
    }
  }
});

const Session = mongoose.model('Session', sessionSchema);
  const User = mongoose.model('User', userSchema);
  const Otp = mongoose.model('Otp', otpSchema);
  
  module.exports = {
    User,
    Otp,
    Session
  };