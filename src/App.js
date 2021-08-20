function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          { process.env.REACT_APP_PAGE_SIZE }
        </p>
      </header>
    </div>
  );
}

export default App;
