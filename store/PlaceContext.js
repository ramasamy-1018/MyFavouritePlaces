import { createContext,useReducer } from "react";

export const PlaceContext = createContext({
    places: [],
    addPlace: ({title, image, description}) => {},
    // editPlace: (id, {title, image, description})=> {},
    deletePlace: (id) => {}
})

const PlaceContextProvider = ({children}) => {
    const initialState = {
        places: []
    }

    const placeReducer = (state=initialState,action) => {
        switch(action.type) {
            case "ADD_PLACE": {
                const id = Math.random().toString();
                return {...state,places:[{...action.payload, id: id}, ...state.places]}
            }
            case "DELETE_PLACE": {
                return {...state,places: state.places.filter((place) => place.id !== action.payload )}
            }
            case "EDIT_PLACE": {
                const editablePlaceIndex = state.places.findIndex((place) => place.id === action.payload.id)
                const editablePlace = state.places[editablePlaceIndex]
                const updatedPlace = {...editablePlace,...action.payload}
                const updatedPlaces = [...state.places]
                updatedPlaces[editablePlaceIndex] = updatedPlace
                return {...state,places: [...updatedPlaces]}
            }
        }
    }

    const [placeState, dispatch] = useReducer(placeReducer, initialState)

    function addPlace(place) {
        dispatch({type:"ADD_PLACE",payload:place})
    }

    function editPlace(place) {
        dispatch({type:'EDIT_PLACE',payload:place})
    }
    
    function deletePlace(id) {
        dispatch({type:"DELETE_PLACE",payload:id})
    }

    const contextValue = {
        places: placeState.places,
        addPlace: addPlace,
        editPlace: editPlace,
        deletePlace: deletePlace,
    }
    return(
        <PlaceContext.Provider value={contextValue}>{children}</PlaceContext.Provider>
    )

}

export default PlaceContextProvider