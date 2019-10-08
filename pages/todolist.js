import { Provider } from 'mobx-react'
import Layout from '../components/common/layout'
import { fetchInitialStoreState, TodoList } from '../stores/Todo'

import TodoListView from '../components/todo-list-view'

const store = new TodoList()

export default () => (
  // <Provider store={store}>
    <Layout>
      <TodoListView store={store} />
    </Layout>
  // </Provider>
)
