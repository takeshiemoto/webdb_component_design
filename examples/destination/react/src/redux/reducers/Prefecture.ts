/**
 * 宛先の都道府県に関するReducer
 */
import { typeState, typePrefecturePayload } from "destination";

export const selectPrefectureAction = (
  state: typeState,
  payload: typePrefecturePayload
) => {
  if (!payload.choice) return Object.assign({}, state);

  const prefecture = payload.choice;

  const editDestination = {
    ...state.editDestination,
    prefecture
  };

  return Object.assign({}, state, { editDestination });
};
