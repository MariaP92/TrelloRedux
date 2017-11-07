import createStore from 'redux-zero'
let Cards = [
    {
        id:0,
        title: '',
        tarea:'',
        addTask: false
    }
]

let User =[
    {
        id:0,
        userName:'',
        userLastName:'',
        password:'',
        email:''
    }
]
const initialState = {
    cards: Cards,
    users: User,
    selectedItem : -1, 
}

const store = createStore(initialState)
export default store