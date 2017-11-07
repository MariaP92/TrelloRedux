import createStore from 'redux-zero'
let Cards = [
    {
        id:0,
        title: 'To Do',
        task:'Tarea 1',
        add: false
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