module.exports = function(sequelize, Sequelize) {
  const Pet = sequelize.define('pet', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    author_id: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    username: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.TEXT,
      notEmpty: true
    },
    image: {
      type: Sequelize.STRING
    },
    type: {
      type:Sequelize.TEXT,
      notEmpty: true
    },
    dob: {
      type: Sequelize.DATE
    },
    favoriteFood: {
      type: Sequelize.STRING
    },
    favoriteTreat: {
      type: Sequelize.STRING
    },
    details: {
      type: Sequelize.TEXT,
      notEmpty: true,
      validate: {
        len: [1,1000]
      }
    },
    signUpDate: {
      type: Sequelize.DATE
    },
    lastFed: {
      type: Sequelize.DATE
    },
    lastTreat: {
      type: Sequelize.DATE
    },
    lastOutside: {
      type: Sequelize.DATE
    },
    lastBath: {
      type: Sequelize.DATE
    },
    lastGrooming: {
      type: Sequelize.DATE
    },
    lastLitterScoop: {
      type: Sequelize.DATE
    },
    lastBrushing: {
      type: Sequelize.DATE
    },
    lastNailClip: {
      type: Sequelize.DATE
    },
    lastInteractedWith: {
      type: Sequelize.STRING
    },
    lastWalk: {
      type: Sequelize.DATE
    },
    lastMedicine: {
      type: Sequelize.DATE
    },
    associateSelectOne: {
      type: Sequelize.STRING
    },
    associateSelectTwo: {
      type: Sequelize.STRING
    },
    associateSelectThree: {
      type: Sequelize.STRING
    },
    vetName: {
      type: Sequelize.STRING
    },
    vetPhone: {
      type: Sequelize.STRING
    },
    vetWebsite: {
      type: Sequelize.STRING
    }
  });

  return Pet;
}

