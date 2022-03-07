import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    // String rather than string
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

new User({
  email: 'test@test.com',
  password: '123124',
});

export { User };
