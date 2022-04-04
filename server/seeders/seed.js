const db = require('../config/connection');
const { User, Spots } = require('../models');
const userSeeds = require('./userSeeds.json');
const spotSeeds = require('./spotSeeds.json');

db.once('open', async () => {
  try {
    await Spots.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < spotSeeds.length; i++) {
      const { _id, explorers } = await Spots.create(spotSeeds[i]);
      const user = await User.findOneAndUpdate(
        { email: explorers },
        {
          $addToSet: {
            spots: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
