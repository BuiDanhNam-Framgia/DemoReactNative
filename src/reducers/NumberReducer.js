let stateNumber = {
  number: 1
};

export const numberReducer = (state = stateNumber, action) => {
  switch (action.type) {
    case "ADD":
      return { number: state.number + 1 };

    case "SUB":
      return { number: state.number - 1 };
  }

  return state;
};

// export  numberReducer;
