import React, { useState, useEffect } from "react";
import Image from "../../pages/home/Image";
import apiUsuarios from "../../services/usuario-api";
import utilStorage from "../../utils/storage";

const Pagamento = () => {


    return (
        <div>
            <h1>Pagamento</h1>
        
            <center>
                <h2>Aqui faríamos o pagamento</h2>
                {/* <Image>
                    <img src="../../utils/image/image_grupo6.jpeg"></img>
                    <img src='../../utils/image/image_grupo6.jpeg' />
                </Image> */}
            </center>
        </div>
    );
}

export default Pagamento;