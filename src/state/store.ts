import { createStore, createTypedHooks } from "easy-peasy";
import { composeWithDevTools } from "remote-redux-devtools";
import model, { IStoreModel } from "./index";

const { useActions, useStore, useDispatch } = createTypedHooks<IStoreModel>();
export { useActions, useDispatch, useStore };

let store;
if (process.env.NODE_ENV === "development") {
  store = createStore(model, {
    compose: composeWithDevTools({
      realtime: true,
      trace: true,
      hostname: "192.168.1.100",
      port: 8000,
    })
  });
}
else {
  store = createStore(model);
}

export default store;