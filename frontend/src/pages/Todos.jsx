import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Spinner from '../components/Spinner';
import { useGetTodosQuery } from '../features/todo/todoApi';
import { BsCalendarEvent } from 'react-icons/bs';
import TextInput from '../components/TextInput';
import TodoItem from '../components/TodoItem';

export default function Todos() {
  const navigate = useNavigate();
  const [loggedUser] = useLocalStorage('user');
  const { isLoading, data } = useGetTodosQuery();
 
  useEffect(() => {
    console.log(loggedUser);
    if (!loggedUser) navigate('/login');
  }, [loggedUser, navigate]);

  // Временно
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading)
    return (
      <div className="d-flex justify-content-center">
        <Spinner />
      </div>
    );

  return (
    <div className="list-group w-auto">
      {data.map(item => (<TodoItem key={item._id} todo={item} />))}
      <TextInput />
    </div>
  );
}
