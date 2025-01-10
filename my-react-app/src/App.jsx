import Card from './Card.jsx'

import MockApi from './assets/mock_tcaster_api.json'

function App() {
  return(
    MockApi.map(record => {
      return (
        <div key={record.id}>
          <Card record={record}/>
        </div>
      )
    })
  );
}

export default App
