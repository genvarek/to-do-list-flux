import TodoActionTypes    from './TodoActionTypes'
import TodoDispatcher     from './TodoDispatcher'
import axios              from 'axios'
const Actions = {

  addTodo(text) {
    console.log(text)
    axios({
        method: 'POST', //почему нет id?
        url: 'http://localhost:3002/spisok',
        data: {
          text: text,
          status: false,
          fdsfdsfd: 'sdfsdfsd'
        }
      })
      .then((response) => { //что такое response?
        TodoDispatcher.dispatch({
          type: TodoActionTypes.ADD_TODO,
          payload: response,
          text,
        });
      })
  },
  getApiTodos() {
    axios({
        method: 'GET',
        url: 'http://localhost:3002/spisok',
      })
      .then((response) => { 
        console.log(response)
        TodoDispatcher.dispatch({
          type: TodoActionTypes.GET_API_TODOS,
          payload: response,
        });
      })
  },

  deleteTodo(id) {
    axios.delete('http://localhost:3002/spisok/'+ id)
    .then((response) =>{
      TodoDispatcher.dispatch({
        type: TodoActionTypes.DELETE_TODO,
        id,
      });
    })
  },
};

export default Actions;