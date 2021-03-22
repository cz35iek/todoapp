import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  let [inputValue, setInputValue] = useState('')
  let [todos, setTodos] = useState([]);

  const onDone = (index) => {
    todos[index].isDone = true;
    setTodos([...todos]);
  }

  const onRemove = (index) => {
    if (index > -1) {
      todos.splice(index, 1);
    }
    setTodos([...todos]);
  }

  const addTodo = () => {
    if (inputValue) {
      const newTodo = { value: inputValue, isDone: false }
      setTodos([newTodo, ...todos])
      setInputValue('');
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <input value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} />
        <button onClick={addTodo}> add new</button>

        <ul>
          {todos.map((t, i) =>
            <li key={i}>
              {t.isDone ? <del>{t.value}</del> : t.value}{' '}
              <span>
                <button onClick={() => onDone(i)}>v</button>
                <button onClick={() => onRemove(i)}>x</button>
              </span>
            </li>

          )}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
