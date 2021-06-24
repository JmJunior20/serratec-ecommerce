import React from "react";
import { Card } from "../../styles/geral-styles";

const CardHome = (props) => {

    return (
        <Card>
            <main>
                {props.main}
            </main>

            <footer>
                {props.footer}
            </footer>

            {props.children}
        </Card>

    );
}

export default CardHome;