import React from 'react';
import {Card3} from '../../styles/geral-styles';
import Card4 from '../../components/models/CardMain2';
import { DivPersonalizada6 } from "../../styles/geral-styles";
import { Link } from 'react-router-dom';

import { Button } from '../../styles/forms-styles';

const Composicao2 = () => {
    return (
        <div>
            <h1>Meu Carrinho</h1>
            <DivPersonalizada6>
                <Card3>
                        <p>Imagem</p>
                        <p>Descrição</p>
                        <p>Quantidade</p>
                        <p>Entrega</p>
                        <p>Preço</p>
                        
                </Card3>

                <Card4 >
                        {/* <div>
                            <p>Qtd em estoque: {produto.quantidadeEmEstoque}
                            </p>
                        </div> */}


                        <div>
                            <br></br>
                            <label>Calcular frete:</label>
                        </div>

                        <Link to={"/pagamento"}>
                            <Button>Finalizar Compra</Button>
                        </Link>
                    

                </Card4>
            </DivPersonalizada6>

        </div>
    )

}
export default Composicao2;