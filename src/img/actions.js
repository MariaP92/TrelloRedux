import store from "./store";

export const AddTask =(index)=>{
    const task = [...store.getState().cards];
    task[index].addTask = true;
    store.setState({
        cards:task
    })
}