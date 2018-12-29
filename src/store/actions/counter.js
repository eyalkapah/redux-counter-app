import * as actionType from "./actionsTypes";

export const increment = () => {
  return { type: actionType.INCREMENT };
};
export const decrement = () => {
  return { type: actionType.DECREMENT };
};

export const add = value => {
  return { type: actionType.ADD, value };
};
export const subtract = value => {
  return { type: actionType.SUBTRACT, value };
};
