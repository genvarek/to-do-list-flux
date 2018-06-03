import AppView from '../views/AppView'
import {mount, shallow} from 'enzyme'
import React from 'react'
import {Header, Main, Footer} from '../views/AppView'
import {OrderedMap} from 'immutable'
import Immutable from 'immutable'

describe('AppView', () => {
  it('AppView', () => {
    const wrapper = shallow(< AppView/>)
    expect(wrapper.contains(
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )).toBe(true)
  })
  it('Header', () => {
    const props = {
      onCreateTodo: jest.fn(),
    }
    const wrapper = mount(<Header {...props}/>)
    wrapper.find('input').node.value = 'test'
    wrapper.find('form').simulate('submit')
    expect(props.onCreateTodo.mock.calls).toEqual([['test']])
  })

  it('Main', () => {
    const store = Immutable.Map({todos:{
      text:'test',
      id:123,
      status:false
    }})
    const props = {
      todos: store,
      onDeleteTodo: jest.fn()
    }
    const wrapper = mount(<Main {...props}/>)
    wrapper.find('#btn').simulate('click')
    expect(props.onDeleteTodo.mock.calls.length).toEqual(1)
  })

  it('Footer', () => {
    const store = Immutable.Map({todos:{
      text:'test',
      id:123,
      status:false
    }})
    const props = {
      todos: store,
      onGetTodos: jest.fn()
    }
    const wrapper = mount(<Footer {...props}/>)
    wrapper.find('#btn-all').simulate('click')
    expect(props.onGetTodos.mock.calls.length).toEqual(1)
  })
})