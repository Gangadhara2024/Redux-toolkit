const delay = () => {
  return new Promise((res) => {
    setTimeout(res, 3000);
  });
};

export const asyncIncCount = async (dispatch, getState) => {
  await delay();
  console.log(getState());
  dispatch({ type: "inc", payload: 5 });
};


