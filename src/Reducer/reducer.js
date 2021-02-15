

const reducer = (state = {  user: '', data: [] }, action) => {

    switch (action.type) {
       
        case 'USER':
            return {
                ...state,
                user: action.payload

            }
        case 'FETCH':
            return {
                ...state,
                data: [...state.data, action.payload],

            }
        case 'DELETE_LIST':
            const arr = [...state.data]
          
            const index = action.payload //array.indexOf(5);
            if (index > -1) {
                arr.splice(index, 1);
            }
            return{
                ...state,
                data:arr
            }

        case 'UPDATE':
            const arr1 = [...state.data]
            arr1[action.payload]=action.value;

            return{
                ...state,
                data:arr1
            }

        default:
            return state
    }
}
export default reducer