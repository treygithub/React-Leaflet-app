import axios from "axios";

//ACTION TYPE
const GET_BIKE_LOCATIONS = "GET_BIKE_LOCATIONS";
const REMOVE_BIKES = "REMOVE_BIKES";
const MAKE_CLUSTERED = "MAKE_CLUSTERED";

const initialState = {
  bikes: null,
  error: null,
  loading: false,
  clustered: false,
  zoom: 2
};

export const getBikes = () => {
  return {
    type: GET_BIKE_LOCATIONS,
    payload: axios.get('https://bikewise.org:443/api/v2/locations/markers?proximity_square=99999999999999&limit=250')
  };
};

export const removeBikes = () => {
  return {
    type: REMOVE_BIKES,
  }
};

export const makeClustered = () => {
  return {
    type: MAKE_CLUSTERED
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_BIKE_LOCATIONS}_PENDING`:
      return { ...state, loading: true, zoom: 2 };
    case `${GET_BIKE_LOCATIONS}_FULFILLED`:
      return { ...state, bikes: action.payload.data, loading: false, zoom: 3 };
    case `REMOVE_BIKES`:
      return { initialState }
    case `MAKE_CLUSTERED`:
      return { ...state, clustered: !state.clustered };
      default:
      return state;
  }
}