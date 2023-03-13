import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button, Comp1, Comp2, Comp3, Comp4, Comp5, Input, TableRow } from './components';

const userData = [
  {
    no: 1,
    name: 'Syahrizal',
    age: '21',
    status: 'Student',
  },
  {
    no: 2,
    name: 'Dominic',
    age: '31',
    status: 'Mechanic',
  },
  {
    no: 3,
    name: 'Toretto',
    age: '29',
    status: 'Racer',
  },
]

function App() {
  // const [state, setState] = useState({
  //   no: 1,
  //   name: '',
  //   age: '',
  //   status: '',
  // })

  // const { no, name, age, status } = state;

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [status, setStatus] = useState('')

  const addData = (e) => {
    userData.push(e)
  }

  const updateState = (update) => setState({ ...state, ...update });
  return (
    <div className='app'>
      <div className="form">
        <Input label='Name' placeholder='Your name...' onChange={e => setName(e.target.value)} />
        {/* <Input label='Age' placeholder='Your age...' onChange={e => setState({ age: e.target.value })} />
        <Input label='Status' placeholder='Your status...' onChange={e => setState({ status: e.target.value })} /> */}
        <div />
        <Button label='Submit' onClick={() => {
          // console.log("onClick")
          console.log(name, age, status)
        }} />
      </div>

      <div className="table">
        <table class="styled-table">
          <thead>
            <TableRow />
          </thead>
          <tbody>
            {
              userData.map((e) => <TableRow {...e} />)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
