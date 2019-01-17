import locationsList from './data/locations';

export default function(state = { locations: locationsList }, action) {
  switch (action.type) {
    default:
      return state;
  }
}
