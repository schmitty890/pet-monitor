let db = require('../models/');

function seeds() {

//   // seeds for users
  // db.user.bulkCreate([
  //   {
  //     username: 'schmitty890',
  //     email: 'schmitty890@gmail.com',
  //     password: '$2a$08$CpZPiTLfqzf.RdpY/MVHjeJxy2oBIRO.9q6/YN2wIatetFLWvX6TW',
  //     // last_login:
  //     status: 'active'
  //   }
  // ]);

  // seeds for events
  // db.pet.bulkCreate([
  //   {
  //     author_id: 1,
  //     username: "schmitty890",
  //     name: "Harley",
  //     image: "http://i12.photobucket.com/albums/a237/jlskate/DSC_0077-1.jpg",
  //     type: "cat",
  //     dob: "2009-05-01 12:00:00",
  //     favoriteFood: "fancy feast",
  //     favoriteTreat: "cat nip",
  //     details: "a sweet fun lovin' tabby.",
  //     signUpDate: "2018-06-15 14:32:21",
  //     createdAt: "2018-06-15 14:32:21",
  //     updatedAt: "2018-06-15 14:32:21"
  //   }
  // ]);

// //   // seeds for resources
//   db.resource.bulkCreate([
//     {
//       author_id: 527,
//       // username: "dondondumdums",
//       // author_name: "Donna Dumdums",
//       email: "Donna@Dumdums.com",
//       title: "lawnmower for rent",
//       description: "rent any weekend $20 (includes gas)",
//       price: 20,
//       category: "items offered",
//     }, {
//       author_id: 4421,
//       // username: "dondondumdums",
//       // author_name: "Donna Dumdums",
//       email: "Donna@Dumdums.com",
//       title: "celebration cakes",
//       description: "I make great event cakes starting at $30.",
//       price: 30,
//       category: "services offered",
//     },
//     {
//       author_id: 12,
//       // username: "dondondumdums",
//       // author_name: "Donna Dumdums",
//       email: "Donna@Dumdums.com",
//       title: "ladder needed",
//       description: "time to clean the downspouts",
//       price: 5,
//       category: "items needed",
//     }, {
//       author_id: 4421,
//       title: "painting gig",
//       // username: "dondondumdums",
//       // author_name: "Donna Dumdums",
//       email: "Donna@Dumdums.com",
//       description: "Someone please paint my living room.",
//       price: 30,
//       category: "services needed",
//     }

//   ]);

//   // seeds for classifieds
//   db.classifieds.bulkCreate([
//     {
//       author_id: 99,
//       username: "BuckyBoi",
//       name: "Bucky",
//       email: "Bucky@gmail.com",
//       phone: "9191234567",
//       title: "Android",
//       image: "https://www.android.com/static/2016/img/phones/assistant-ui_1x.jpg",
//       price: "75",
//       details: "Android phone",
//       date_added: "10/10/2018",
//       category: "phone",
//       type: "applePhone",
//       condition: "Used"
//     },{
//       author_id: 100,
//       username: "SkaterDude89",
//       name: "Bill",
//       email: "SkaterDude89@gmail.com",
//       phone: "9191232367",
//       title: "stones shirt",
//       image: "https://target.scene7.com/is/image/Target/52252380?wid=488&hei=488&fmt=pjpeg",
//       price: "10",
//       details: "rolling stones shirt",
//       date_added: "06/18/2018",
//       category: "clothes",
//       type: "mensClothes",
//       condition: "Like new"
//     },{
//       author_id: 101,
//       username: "StarGazer",
//       name: "Star",
//       email: "StarGazer@gmail.com",
//       phone: "9191234567",
//       title: "title to an awesome post",
//       image: "http://st.motortrend.com/uploads/sites/10/2017/12/2018-Jeep-Wrangler-JK.jpg",
//       price: "4",
//       details: "details about this product",
//       date_added: "11/10/2018",
//       category: "autos",
//       type: "trucks",
//       condition: "Like new"
//     },{
//       author_id: 102,
//       username: "LukeSky",
//       name: "Luke",
//       email: "LukeSky@gmail.com",
//       phone: "9191234567",
//       title: "title to an awesome post",
//       image: "http://www.lg.com/us/images/tvs/md05802269/gallery/medium01.jpg",
//       price: "105",
//       details: "42 inch tv",
//       date_added: "12/10/2018",
//       category: "electronics",
//       type: "camera",
//       condition: "Used"
//     },{
//       author_id: 103,
//       username: "Lucy99",
//       name: "Lucy",
//       email: "Lucy99@gmail.com",
//       phone: "9191234567",
//       title: "title to an awesome post",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYsI1dmds6KSddD92XbeZSo3AUMjDSO5N9BwxI3m5QBHX-d2f2A",
//       price: "700",
//       details: "details about this product",
//       date_added: "08/03/2018",
//       category: "lawn",
//       type: "plants",
//       condition: "Used"
//     },{
//       author_id: 104,
//       username: "Troll",
//       name: "Bucky",
//       email: "blah@gmail.com",
//       phone: "9191234567",
//       title: "Carolina Hurricanes Tickets",
//       image: "https://ingersollchamber.com/wp-content/uploads/2017/07/ticket-clipart-purge-clipart-ticket-85041.jpg",
//       price: "43",
//       details: "Section 201 tickets!",
//       date_added: "08/13/2018",
//       category: "tickets",
//       type: "sportsTickets",
//       condition: "Used"
//     },{
//       author_id: 105,
//       username: "DanTheMan",
//       name: "Dan",
//       email: "DanTheMan@gmail.com",
//       phone: "9191234567",
//       title: "kid clothes",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHRdVAs9jPAEuN_xczfoHShNAxsom3tbzXTUZefjfjaH125LZ",
//       price: "78",
//       details: "nirvana",
//       date_added: "10/18/2018",
//       category: "babyKid",
//       type: "toys",
//       condition: "Like new"
//     },{
//       author_id: 106,
//       username: "Tazman",
//       name: "Taz",
//       email: "Tazman@gmail.com",
//       phone: "9191234567",
//       title: "Durham Bulls Tickets",
//       image: "https://ingersollchamber.com/wp-content/uploads/2017/07/ticket-clipart-purge-clipart-ticket-85041.jpg",
//       price: "5",
//       details: "Tickets to the Durham Bulls",
//       date_added: "11/22/2018",
//       category: "tickets",
//       type: "sportsTickets",
//       condition: "Like new"
//     },{
//       author_id: 107,
//       username: "SuzySue",
//       name: "Suz",
//       email: "SuzySue@gmail.com",
//       phone: "9191234567",
//       title: "iphone6",
//       image: "https://static1.squarespace.com/static/523422d9e4b011d42dd74d71/t/525ab5bce4b018d72382e43d/1433427905193/Cleartones_Organici_Phone.jpg",
//       price: "99",
//       details: "details about this product",
//       date_added: "10/10/2018",
//       category: "phones",
//       type: "androidPhone",
//       condition: "Like new"
//     },{
//       author_id: 108,
//       username: "BillyBob",
//       name: "Bill bob",
//       email: "BillyBob@gmail.com",
//       phone: "9191875567",
//       title: "Jeep Wrangler",
//       image: "http://st.motortrend.com/uploads/sites/10/2017/12/2018-Jeep-Wrangler-JK.jpg",
//       price: "17000",
//       details: "Jeep Wrangler with 23,000 miles on it.",
//       date_added: "09/03/2018",
//       category: "autos",
//       type: "cars",
//       condition: "Like new"
//     }
//   ]);


}
//// commenting this out as we are invoking it on server.js
//// seeds();

module.exports = seeds;
