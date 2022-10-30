const mongoose = require('mongoose');

const requests =[
  {
    _id: mongoose.Types.ObjectId('6348f4b474d2ff0c59256a82'),
    pricePaid:100,
    revenueId: mongoose.Types.ObjectId('6328154870f4db24d575756b'),
    gameId: mongoose.Types.ObjectId('6328103cef14fe2140b50213'),
    brandId: mongoose.Types.ObjectId('6347bfdce30259acc1411b2f'),
    currency:'USD',
    fromPlayerId: mongoose.Types.ObjectId('6347c65dcfa96b7acb460302'),
    toPlayerId: mongoose.Types.ObjectId('6348f4970344863c588e36cc'),
    brandShare:2.5,
    geerShare:2.5,
    productId: mongoose.Types.ObjectId('6328154870f4db24d5757566'),
    transferDate:{ $date: '2022-04-14T06:00:59.606Z' },
    isBlockChainUpdated:false,
    __v: 0,
    createdAt: { $date: '2022-04-14T05:55:33.390Z' },
    updatedAt: { $date: '2022-04-14T06:07:04.300Z' }
  }
]



module.exports = {
  async up(db, client) {
    await db.collection('transferitems').insertMany(requests);
  },

  async down(db, client) {
    await db.collection('transferitems').deleteMany({});
  }
}