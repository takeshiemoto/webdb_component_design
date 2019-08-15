/**
 * 宛先の住所（市区町村・番地以下）に関するReducer
 */
import { typeState } from "../../types/State";
import { typeCityStreetPayload } from "../../types/CityStreet";

export const writeCityStreetAction = (
  state: typeState,
  payload: typeCityStreetPayload
) => {
  if (!payload.cityStreet) return Object.assign({}, state);

  const cityStreet = payload.cityStreet;

  const editDestination = {
    ...state.editDestination,
    cityStreet
  };

  return Object.assign({}, state, { editDestination });
};
