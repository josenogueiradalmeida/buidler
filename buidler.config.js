usePlugin("@nomiclabs/buidler-truffle5");

// This is a sample Buidler task. To learn how to create your own go to
// https://buidler.dev/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await web3.eth.getAccounts();

  for (const account of accounts) {
    console.log(account);
  }
});

module.exports = {
  defaultNetwork: "rinkeby", //"buidlerevm"
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/",
      host: "vrt1281", // Connect to geth on the specified
      port: 9545,
      from: "0xd636349f5d7e03037e0f224c9b1ac3ccf104f4a5", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 6952388  // Gas limit used for deploys
    },
    ropsten: {
      url: "https://ropsten.infura.io/",
      host: "localhost",  //geth --testnet --fast --rpc --rpcapi eth,net,web3,personal
      port:  8545,
      from: "0x5a2a2ba72133d6667a9abcc1bc882125904cb88a", // owner BNDESToken na Ropsten
      network_id: 3,
      gas: 4612388
    }    
  }
};
