let db = require('../models/');

function seeds() {

  // seeds for users
  db.user.bulkCreate([
    {
      firstname: 'donna',
      lastname: 'dumdums',
      username: 'dumdums1',
      about: "Have you seen my cat? Always running off, that one!",
      email: 'donna@dumdums.com',
      password: 'password123',
      // last_login:
      status: 'active'
    },
    {
      firstname: 'dwayne',
      lastname: 'dumz',
      username: 'dumzguy',
      about: "Hey you kids keep it down!",
      email: 'dwayne@dumz.come',
      password: 'password123',
      // last_login:
      status: 'active'
    }
  ]);

  // seeds for resources
  db.resource.bulkCreate([
    {
      author_id: 527,
      // username: "dondondumdums",
      // author_name: "Donna Dumdums",
      email: "Donna@Dumdums.com",
      title: "lawnmower for rent",
      description: "rent any weekend $20 (includes gas)",
      price: 20,
      category: "items offered",
    }, {
      author_id: 4421,
      // username: "dondondumdums",
      // author_name: "Donna Dumdums",
      email: "Donna@Dumdums.com",
      title: "celebration cakes",
      description: "I make great event cakes starting at $30.",
      price: 30,
      category: "services offered",
    },
    {
      author_id: 12,
      // username: "dondondumdums",
      // author_name: "Donna Dumdums",
      email: "Donna@Dumdums.com",
      title: "ladder needed",
      description: "time to clean the downspouts",
      price: 5,
      category: "items needed",
    }, {
      author_id: 4421,
      title: "painting gig",
      // username: "dondondumdums",
      // author_name: "Donna Dumdums",
      email: "Donna@Dumdums.com",
      description: "Someone please paint my living room.",
      price: 30,
      category: "services needed",
    }

  ]);

  // seeds for events
  db.event.bulkCreate([
    {
      author_id: "blah@gmail.com",
      title: "Yard Sale",
      description: "Everybody get out any items you wish to sell",
      category: "Sell",
      date: "2018-07-25 8:30:00",
      endDate: "2018-07-25 14:30:00",
      location: "Lot 115"
    }, {
      author_id: "catchbb14@gmail.com",
      title: "Block Party",
      description: "Party it up with the block!",
      category: "Social",
      date: "06/24/2018 19:00:00",
      endDate: "06/25/2018 02:00:00",
      location: "Seasame Street Cul-de-sac"
    }, {
      author_id: "catchbb14@gmail.com",
      title: "Cook-out",
      description: "Hamburgers and hotdogs on da grill!",
      category: "Social",
      date: "06/13/2018",
      location: "Neighboorhood Cabana"
    }, {
      author_id: "dumdum@gmail.com",
      title: "Pool Party",
      description: "Get the floaties out!",
      category: "Social",
      date: "08/13/2018",
      location: "Clubhouse/Pool"
    }, {
      author_id: "letsgo@yahoo.com",
      title: "Block Party",
      description: "It's gonna be wild!",
      category: "Social",
      date: "09/25/2018",
      location: "Seasame Street Cul-de-sac"
    }, {
      author_id: "play123@gmail.com",
      title: "Volleyball Tournament",
      description: "Serve it up!",
      category: "Sports",
      date: "09/25/2018",
      location: "Pool-side beach volleyball court",
      allDay: true
    }, {
      author_id: "admin@hoa.com",
      title: "Member-appreciation week!",
      description: "Come by the clubhouse for your treat this week!",
      category: "Community",
      date: "06/25/2018",
      endDate: "06/29/2018",
      location: "Clubhouse"
    }
  ]);

  // seeds for classifieds
  db.classifieds.bulkCreate([
    {
      author_id: 99,
      username: "BuckyBoi",
      name: "Bucky",
      email: "Bucky@gmail.com",
      phone: "9191234567",
      title: "Android",
      image: "https://www.android.com/static/2016/img/phones/assistant-ui_1x.jpg",
      price: "75",
      details: "Android phone",
      date_added: "10/10/2018",
      category: "phone",
      type: "applePhone",
      condition: "Used"
    },{
      author_id: 100,
      username: "SkaterDude89",
      name: "Bill",
      email: "SkaterDude89@gmail.com",
      phone: "9191232367",
      title: "stones shirt",
      image: "https://target.scene7.com/is/image/Target/52252380?wid=488&hei=488&fmt=pjpeg",
      price: "10",
      details: "rolling stones shirt",
      date_added: "06/18/2018",
      category: "clothes",
      type: "mensClothes",
      condition: "Like new"
    },{
      author_id: 101,
      username: "StarGazer",
      name: "Star",
      email: "StarGazer@gmail.com",
      phone: "9191234567",
      title: "title to an awesome post",
      image: "http://st.motortrend.com/uploads/sites/10/2017/12/2018-Jeep-Wrangler-JK.jpg",
      price: "4",
      details: "details about this product",
      date_added: "11/10/2018",
      category: "autos",
      type: "trucks",
      condition: "Like new"
    },{
      author_id: 102,
      username: "LukeSky",
      name: "Luke",
      email: "LukeSky@gmail.com",
      phone: "9191234567",
      title: "title to an awesome post",
      image: "http://www.lg.com/us/images/tvs/md05802269/gallery/medium01.jpg",
      price: "105",
      details: "42 inch tv",
      date_added: "12/10/2018",
      category: "electronics",
      type: "camera",
      condition: "Used"
    },{
      author_id: 103,
      username: "Lucy99",
      name: "Lucy",
      email: "Lucy99@gmail.com",
      phone: "9191234567",
      title: "title to an awesome post",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYsI1dmds6KSddD92XbeZSo3AUMjDSO5N9BwxI3m5QBHX-d2f2A",
      price: "700",
      details: "details about this product",
      date_added: "08/03/2018",
      category: "lawn",
      type: "plants",
      condition: "Used"
    },{
      author_id: 104,
      username: "Troll",
      name: "Bucky",
      email: "blah@gmail.com",
      phone: "9191234567",
      title: "Carolina Hurricanes Tickets",
      image: "https://ingersollchamber.com/wp-content/uploads/2017/07/ticket-clipart-purge-clipart-ticket-85041.jpg",
      price: "43",
      details: "Section 201 tickets!",
      date_added: "08/13/2018",
      category: "tickets",
      type: "sportsTickets",
      condition: "Used"
    },{
      author_id: 105,
      username: "DanTheMan",
      name: "Dan",
      email: "DanTheMan@gmail.com",
      phone: "9191234567",
      title: "kid clothes",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHRdVAs9jPAEuN_xczfoHShNAxsom3tbzXTUZefjfjaH125LZ",
      price: "78",
      details: "nirvana",
      date_added: "10/18/2018",
      category: "babyKid",
      type: "toys",
      condition: "Like new"
    },{
      author_id: 106,
      username: "Tazman",
      name: "Taz",
      email: "Tazman@gmail.com",
      phone: "9191234567",
      title: "Durham Bulls Tickets",
      image: "https://ingersollchamber.com/wp-content/uploads/2017/07/ticket-clipart-purge-clipart-ticket-85041.jpg",
      price: "5",
      details: "Tickets to the Durham Bulls",
      date_added: "11/22/2018",
      category: "tickets",
      type: "sportsTickets",
      condition: "Like new"
    },{
      author_id: 107,
      username: "SuzySue",
      name: "Suz",
      email: "SuzySue@gmail.com",
      phone: "9191234567",
      title: "iphone6",
      image: "https://static1.squarespace.com/static/523422d9e4b011d42dd74d71/t/525ab5bce4b018d72382e43d/1433427905193/Cleartones_Organici_Phone.jpg",
      price: "99",
      details: "details about this product",
      date_added: "10/10/2018",
      category: "phones",
      type: "androidPhone",
      condition: "Like new"
    },{
      author_id: 108,
      username: "BillyBob",
      name: "Bill bob",
      email: "BillyBob@gmail.com",
      phone: "9191875567",
      title: "Jeep Wrangler",
      image: "http://st.motortrend.com/uploads/sites/10/2017/12/2018-Jeep-Wrangler-JK.jpg",
      price: "17000",
      details: "Jeep Wrangler with 23,000 miles on it.",
      date_added: "09/03/2018",
      category: "autos",
      type: "cars",
      condition: "Like new"
    }
  ]);


}
// commenting this out as we are invoking it on server.js
// seeds();

module.exports = seeds;
