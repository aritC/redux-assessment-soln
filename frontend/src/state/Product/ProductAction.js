import * as ActionTypes from "../actionTypes";
import axios from "axios";

export const AddProductToStore = (product) => {
  return {
    type: ActionTypes.AddProductToStore,
    payload: product,
  };
};

export const AddProductToDB = (product) => {
  return (dispatchEvent) => {
    axios
      .post("http://localhost:5000/api/product", product)
      .then((response) => {
        console.log("Action Log: ", response);
        dispatchEvent(AddProductToStore(response.data));
      })
      .catch((error) => {
        console.log("Error saving product:", error);
      });
  };
};
