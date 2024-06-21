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
export const fetchpostOffice = async (dispatch, getState) => {
  try {
    const response = await fetch("https://api.postalpincode.in/pincode/531055");
    const data = await response.json();
    dispatch({ type: "fetched_data", payload: data });
  } catch (err) {}
};
