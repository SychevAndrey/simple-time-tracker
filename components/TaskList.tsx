import React, { useEffect, useState } from 'react'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'

function TaskList(): JSX.Element {
  const [name, setName] = useState('');

  useEffect(() => {
    const getData = async() => {
      const res = await axios.get(`${baseUrl}/api/tasks`);
      setName(res.data.name);
    }
    getData();
  }, [])

  return (
    <>
      <h3>Hello, {name}</h3>
      <div>List</div>
    </>
  )
}

export default TaskList;