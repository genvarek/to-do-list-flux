import React from 'react';


function AppView(props) {
  return (
    <div>
      <Header {...props} />
      <Main   {...props} />
      <Footer {...props} />
    </div>
  );
}

export function Header(props) {
  let input
  
  return (
    <div>
      <header id="header">
      <h1>To do:</h1>
      <form onSubmit={function(e){
          e.preventDefault()
          props.onCreateTodo(input.value)
           input.value = ''
        }}>
        <input
          ref={node => { //что такое ref и node????
            input = node
          }}
          />
           <button id="items" type="submit" >
          ADD TODO
        </button>
      </form>
    </header>
    </div>
  );
}

export function Main(props) {
  return (
    <div>
    <section id="main">
      <ul id="todos">
        {props.todos.valueSeq().reverse().map(todo => { //печатаетт список с элементами с нумерацией задом наперёд?
          return (
            <li key={todo.id}>
             
                <span>{todo.text}</span>
              <button id="btn" onClick={function(e){
                  e.preventDefault()
                  props.onDeleteTodo(todo.id)
                }}>
                {'X'}
              </button>
            </li>
          )
        })
      }
      </ul>
    </section>
    </div>
  );
}

export function Footer(props) {


  return (
    <div>
    <footer id="footer">
      <div>
        <button id="btn-all" onClick={() => props.onGetTodos()}> 
          GET TODOS
        </button>
       
      </div>
      <div id="items">
      </div>
    </footer>
    </div>
  );
}

export default AppView;