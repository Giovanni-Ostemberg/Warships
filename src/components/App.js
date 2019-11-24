import React from 'react';

import Quadro from './Quadro';

export default class App extends React.Component{
render(){
	return(
		<div>
		<div>
		<h1>Encontre os Barcos</h1>
		<Quadro />
		</div>

		<div>
		<h1>Jogador 2</h1>
		<Quadro />
		</div>
		</div>
		);
}

}