const {Wallet} = require('../lib/models');

const seedTheDatabase = async () => {
    let currentWallet = await Wallet.findAll({});

    if(currentWallet.length == 0){
        await Wallet.create({value: 1000000});
    }

};

seedTheDatabase()