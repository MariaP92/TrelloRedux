import store from "./store";

export const addTask = (task) =>{
    const addTaskList = store.getState().cards.concat(  {
        id : store.getState().cards.length + 1  ,
        title:'',
        task: task,
        add: false
	});

	store.setState({
		cards: addTaskList
	})
    
}
export const inputPass =(e)=> {
    console.log(e.target);
    this.pass = e.target.value;
    comparePassword();
}

export const inputPassConfirm=(e)=> {
    console.log(e.target.value);
    this.passConfirm = e.target.value;
    comparePassword();
}

export const comparePassword=() =>{
    if (this.pass === this.passConfirm) {
        this.setState({
            password: true
        });
    }
    else {
        this.setState({
            password: false
        });
    }
}