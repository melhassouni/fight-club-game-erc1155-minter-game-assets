// constants
import Web3 from "web3";
import FightClubNft from "contracts/FightClubGameNft.json";

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    if (window.ethereum) {
      let web3 = new Web3(window.ethereum);
      try {
        const permissions = await window.ethereum.request({ 
            method: "wallet_requestPermissions",
            params: [
              {
                eth_accounts: {},
              },
            ],
          })
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        const networkId = await window.ethereum.request({
          method: "net_version",
        });
        const fightclubnftNetworkData = await FightClubNft.networks[networkId];
        if(fightclubnftNetworkData){
          const fightclubnft = new web3.eth.Contract(
            FightClubNft.abi,
            fightclubnftNetworkData.address
          );
          dispatch(
            connectSuccess({
              account: accounts[0],
              fightclubnft: fightclubnft,
              web3: web3,
            })
          );
          console.log("Account :::>>>>>", accounts[0]) 
          window.ethereum.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
        } else {
          dispatch(connectFailed("Change network to Rinkeby testnet."));
        }
      } catch (err) {
        dispatch(connectFailed("Something went wrong."));
      }
    } else {
      dispatch(connectFailed("Install Metamask."));
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
  };
};