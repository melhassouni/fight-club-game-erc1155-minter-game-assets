import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let allFighters = await store
        .getState()
        .blockchain.fightclubnft.methods.getAllFighters()
        .call();
      let allOwnerFighters = await store
        .getState()
        .blockchain.fightclubnft.methods.getOwnerFighters(account)
        .call();
      dispatch(
        fetchDataSuccess({
          allFighters,
          allOwnerFighters,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};



