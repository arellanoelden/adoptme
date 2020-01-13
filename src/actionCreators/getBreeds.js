import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

// must return thunk
export default function getBreeds() {
  return function getBreedsThunk(dispatch, getState) {
    const { animal } = getState();
    if (animal) {
      petfinder.breed
        .list({ animal })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            dispatch({
              type: "SET_BREEDS",
              payload: data.petfinder.breeds.breed
            });
          }
        })
        .catch(console.error);
    } else {
      this.setState({ breeds: [] });
      dispatch({
        type: "SET_BREEDS",
        payload: []
      });
    }
  };
}
