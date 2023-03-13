import React from 'react'

const TableRow = ({ no = 'No', name = 'Name', age = 'Age', status = 'Status' }) => {
  return (
    <tr>
      <td>{no}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{status}</td>
    </tr>
  )
}

export default TableRow