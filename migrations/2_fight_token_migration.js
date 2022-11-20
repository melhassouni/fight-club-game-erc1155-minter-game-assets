const FightClubToken = artifacts.require("FightClubToken");
const FightClubGameNft = artifacts.require("FightClubGameNft");






module.exports = async(deployer) => {

  deployer.deploy(FightClubToken).then(async () => {
    // get JS instance of deployed contract
    const instance = await FightClubToken.deployed(); 
    // pass its address as argument for Contract1's constructor
    await deployer.deploy(FightClubGameNft, instance.address, "https://gateway.pinata.cloud/ipfs/QmeKrN4aafy3Wqf4zzE1eUSp1WB7429G6gMo1GTPm83e6t/"); 

  });

  // let token = await deployer.deploy(fightclubgame);
  // let tokenAddress = await token.address;
  // let nft = await deployer.deploy(FightClubNft, tokenAddress,"ipfs//");
  // // deployer.deploy(fightclubgame).then(
  // //   DeployedContract =>{
  // //   deployer.deploy(FightClubNft,DeployedContract.address,"ipfs//");
  //   // }
};
