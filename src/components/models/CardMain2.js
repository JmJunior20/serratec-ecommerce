import React from "react";
import {Card4} from "../../styles/geral-styles";

const CardMain2 = (props) => {

    return (
        <Card4>

            <main>
                {props.header}
                {props.main}
                {props.main2}
                {props.main3}
            </main>


            <footer>

                {props.footer}
                {props.footer2}
            </footer>


            {props.children}
        </Card4>
    );
}

export default CardMain2;