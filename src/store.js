import createStore from 'redux-zero'
let Cards = [
    {
        id:0,
        title: '',
        tarea:'',
        addTask: false
    }
]

const initialState = {
    cards: Cards,
    selectedItem : -1, 
}

const store = createStore(initialState)
export default store