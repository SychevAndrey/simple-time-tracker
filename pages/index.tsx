import Head from 'next/head'
import TaskList from '../components/TaskList'
import 'semantic-ui-css/semantic.min.css'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Simple Time Tracker</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to Simple Time Tracker.
      </h1>
      <TaskList />
    </main>

    <footer>
      2020
    </footer>
  </div>
)

export default Home
