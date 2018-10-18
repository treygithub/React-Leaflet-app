import axios from "axios";

//ACTION TYPE
const GET_BIKE_LOCATIONS = "GET_BIKE_LOCATIONS";
const REMOVE_BIKES = "REMOVE_BIKES";

const initialState = {
  bikes: null,
  error: null,
  loading: false
};

export const getBikes = () => {
  return {
    type: GET_BIKE_LOCATIONS,
    payload: axios.get('https://bikewise.org/api/v2/locations/markers?proximity_square=100')
  };
};

export const removeBikes = () => {
  return {
    type: REMOVE_BIKES,
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_BIKE_LOCATIONS}_PENDING`:
      return { ...state, loading: true };
    case `${GET_BIKE_LOCATIONS}_FULFILLED`:
      return { ...state, bikes: action.payload.data, loading: false };

    case `REMOVE_BIKES`:
      return { initialState }
      default:
      return state;
  }
}