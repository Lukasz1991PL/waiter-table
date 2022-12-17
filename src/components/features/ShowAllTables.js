import React from 'react';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesReducer';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export const ShowAllTables = () => {
  const tables = useSelector(getAllTables);
  return (
    <Table striped bordered hover>
      <tbody>
        {tables.map((table) => (
          <tr key={table.id}>
            <td>
              <b>Table {table.id}</b>
            </td>
            <td>Status: {table.status}</td>
            <td>
              <NavLink to={'/table/' + table.id}>
                <Button variant='primary'>Show more</Button>
              </NavLink>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ShowAllTables;

//tutaj nic zaskakujacego oprocz <NavLink to={'/table/' + table.id}>

//1. najpierw fetch danych
//2. selektor z dostepem do danych
//3. wykorzystanie danych w komponencie
//4. stworzenie roota do linki i lnka
