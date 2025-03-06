let flag = false;

export const getFlag = () => flag;

export const setFlagTrue = () => {
  flag = true;
  console.log("flag was set to true");
};

export const ensureFlagIsTrue = () => {
  if (!flag) {
    throw new Error("Expected flag to be true");
  } else {
    console.log("checked flag. it was true");
  }
};
