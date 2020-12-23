import logo from "./logo.svg";
import "./App.css";
/* code from functions/todos-delete-batch.js */
// import faunadb from 'faunadb'
// import getId from './utils/getId'

// const q = faunadb.query
// const client = new faunadb.Client({
//   secret: process.env.FAUNADB_SECRET
// })

// exports.handler = (event, context, callback) => {
//   const data = JSON.parse(event.body)
//   console.log('data', data)
//   console.log("Function `todo-delete-batch` invoked", data.ids)
//   // construct batch query from IDs
//   const deleteAllCompletedTodoQuery = data.ids.map((id) => {
//     return q.Delete(q.Ref(`classes/todos/${id}`))
//   })
//   // Hit fauna with the query to delete the completed items
//   return client.query(deleteAllCompletedTodoQuery)
//   .then((response) => {
//     console.log("success", response)
//     return callback(null, {
//       statusCode: 200,
//       body: JSON.stringify(response)
//     })
//   }).catch((error) => {
//     console.log("error", error)
//     return callback(null, {
//       statusCode: 400,
//       body: JSON.stringify(error)
//     })
//   })
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
