import { ActionInterface } from './reducersInterface';

const reducers = {
  default: (state:number) => state,
  ADD_TO_COUNT: (state:number, payload:number) => state + payload,
  SUBSTRACT_FROM_COUNT: (state:number, payload:number) => state - payload,
};

export const countReducer = (state=0, action:{state:number,payload:number,type:string}):any => (reducers[action.type]
  || reducers.default)(state, action.payload);
