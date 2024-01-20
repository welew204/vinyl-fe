import "./App.css";

let fe_test_records = [
  {
    id: 1,
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    bringer: "John Doe",
  },
  {
    id: 2,
    title: "Thriller",
    artist: "Michael Jackson",
    bringer: "Jane Smith",
  },
  {
    id: 3,
    title: "Abbey Road",
    artist: "The Beatles",
    bringer: "Bob Johnson",
  },
];

function App() {
  let records = fe_test_records.map((record) => {
    console.log(record);
    return (
      <li
        key={record.id}
        className='list-group-item d-flex justify-content-between align-items-center'>
        <span>{record.title}</span>
        <span>{record.artist}</span>
        <span>{record.bringer}</span>
      </li>
    );
  });
  return (
    <div className='App'>
      <header>records</header>
      <ul className='list-group list-group-flush border-top-0'>{records}</ul>
    </div>
  );
}

export default App;
