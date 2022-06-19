const { AuthenticationError } = require('apollo-server-express');
const { User, Spots, Reviews } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // Query to do to display data to the profile page or anything to do with the logged in user
    me: async(parent, args, context) => {
      if(context.user) {
        const userData = await User.findOne({_id: context.user._id })
        .select('-__v -password')

        return userData;
      }
      throw new AuthenticationError('Not Logged In')
    },
    spots: async(parent, args, context) => {
      if(context.user) {
        const params = email ? { email } : {};
        return Spots.find(params).sort({ createdAt: -1 });
      }
      throw new AuthenticationError('Not Logged In')
    },
    spot: async (parent, { spotId }) => {
      return Spots.findOne({ _id: spotId });
    },
    spotReviews:async () => {
      return await Spots.find({}).populate('reviews');
    },
     users: async () => {
      return User.find().populate('spots');
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('spots');
    },
    reviews: async () => {
      return await Reviews.find({}).populate('spots');
    },

  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async(parent, {email, password}) => {
      const user = await User.findOne({ email });
      console.log(user)
      if(!user) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const correctPw = await user.isCorrectPassword(password);
      if(!correctPw) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const token = signToken(user);
      return {token, user};
    },
    addSpot: async (parent, { title }, context) => {
      if (context.user) {
        const spot = await Spots.create({
          title,
          explorers: context.user.email,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { spots: spot._id } }
        );

        return spot;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    saveSpot: async (parent, { bookData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { spots: bookData } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeSpot: async (parent, { spotId }, context) => {
      if (context.user) {
        const spot = await Spots.findOneAndDelete({
          _id: spotId,
          explorers: context.user.email,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { spots: spot._id } }
        );

        return spot;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updateSpot: async (parent, {spots, id},context) => {
      console.log("you made it")
      if(context.user) {
        //first curly is what i'm looking for
        //second curly is what I want to change
        const user= await User.findOneAndUpdate({_id: id},
          {spots: spots},
          {new:true})
          const token = signToken(user);
          return {token, user};
      }
      
    },

  },
};

module.exports = resolvers;
