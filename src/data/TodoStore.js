import {ReduceStore}      from 'flux/utils'
import TodoActionTypes    from './TodoActionTypes'
import TodoDispatcher     from './TodoDispatcher'
import {OrderedMap}       from 'immutable'
import Todo               from './Todo'


class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher); //по идее должен что-то наследовать от диспатчера - что?
  }

  getInitialState(){
    return OrderedMap() //что это?
  }

  reduce(state, action) {
    const {payload} = action;
    let id;
    switch (action.type) {
      case TodoActionTypes.ADD_TODO: //вот здесь ошибка - какая?
        return state.set(id = payload.data.id, new Todo({
          id,
          text: action.text,
          status: false //почему фолс
        }));

      case TodoActionTypes.GET_API_TODOS:
        return OrderedMap(payload.data.map(x => [x.id, x])) //что это
      case TodoActionTypes.DELETE_TODO:
        return state.delete(action.id)


      default:
       return state
    }
  }
}

export default new TodoStore();