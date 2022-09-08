import axios from 'axios';
import {useState} from 'react';
import 'bulma/css/bulma.min.css';

const App = () => {
        const [data, setData] = useState();
        const styles = {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#201F1F'
          };

        const getData = async () => {
                try {
                        const response = await axios.get('https://fiuber-gateway.herokuapp.com/');
                        setData(response.data);
                } catch (err) {
                        console.log(err);
                }
        }

        return (
                <>
                <div style={styles}>
                        <div>
                        <button className="button is-primary is-light is-large"  onClick={getData}>Pegarle al gateway</button>
                        {data ? 
                         <p style={{ color: '#FEFAFA' }}>Mensaje del gateway: {JSON.stringify(data)}</p>
                        : <p style={{ color: '#FEFAFA' }}>No hay mensaje del gateway todavía</p>
                        }
                        </div>
                </div>
                </>
        );
}

export default App;
