import React from 'react';
import Card from "../../components/cards/CardHome";
import "../../styles/styles.css"
import Button from '@material-ui/core/Button';

const Home = () => {
    let numeros = ["Tênis", "Casaco", "Blusão", "Sapato", "Sobretudo", "Topper", "Body", "Colã", "Moletom"];

    return (
        <div id="cardsContainer">
            {numeros.map(numero => (
                <Card titulo="Numeros">
                    <main>
                        <h1>{numero}</h1>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <h3>{"Um lindo " +numero}</h3>
                        <br></br><br></br>
                        <Button variant="contained" color="primary">Comprar</Button>
                    </main>
                </Card>
            ))}
        </div>
    );
}

export default Home;