import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTodos } from 'redux/home/actions';
import TodoCard from './TodoCard';

const Home = () => {
  const dispatch = useDispatch();
  const GET_TODO = () => dispatch(getTodos());

  const { loading, data, err } = useSelector(({ todos }) => todos);

  useEffect(() => {
    GET_TODO();
  }, []);

  if (loading) return <div>loading...</div>;
  if (err) {
    return (
      <button type="button" onClick={GET_TODO}>
        try again?
      </button>
    );
  }

  const todo = data?.map((t) => <TodoCard key={t.id} title={t.title} />);
  return (
    <div>
      <h1>Todos</h1>

      {todo}
    </div>
  );
};

export default Home;
