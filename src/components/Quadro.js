	import React from 'react';
	import ReactDOM from 'react-dom';


	export default class Quadro extends React.Component{
		constructor(props){
			super(props);
			let quadrados = Array(60).fill(null);
			for(var i = 0; i<60; i++){
				quadrados[i]={
					valor: "*",
					mostrar:null,
					/*valorAparente: "X",*/
				}
			}
				for(var j = 0; j<3; j++){
				var q = getRandomIntInclusive(0,59);
				if(q===11 || q===10 || q===23 || q===22 || q===35 || q===34 || q===47 || q===46 || q===59 || q===58){
					if((quadrados[q].valor === "*") && (quadrados[q-1].valor === "*") && (quadrados[q-2].valor === "*")){
				quadrados[q] = {valor:">".toString()}; 
				quadrados[q-1] = {valor: "=".toString()};
				quadrados[q-2] = {valor: "<".toString()};
			}else{
				j--;
			}
				}else{
					if((quadrados[q].valor === "*") && (quadrados[q+1].valor === "*") && (quadrados[q+2].valor === "*")){
				quadrados[q] = {valor: "<"}; 
				quadrados[q+1] = {valor: "="};
				quadrados[q+2] = {valor: ">"};
			}else{
				j--;
				}
			}
		}

			for(j = 0; j<3; j++){
				q = getRandomIntInclusive(0,59);
				if(q-24<0){
					if((quadrados[q].valor === "*") && (quadrados[q+12].valor === "*") && (quadrados[q+24].valor === "*")){
				quadrados[q] = {valor:"^".toString()}; 
				quadrados[q+12] = {valor: "||".toString()};
				quadrados[q+24] = {valor: "V".toString()};
			}else{
				j--;
			}
				}else{
					if((quadrados[q].valor === "*") && (quadrados[q-12].valor === "*") && (quadrados[q-24].valor === "*")){
				quadrados[q] = {valor: "V"}; 
				quadrados[q-12] = {valor: "||"};
				quadrados[q-24] = {valor: "^"};
			}else{
				j--;
				}
			}
				
				
			/*this.state = {
				quadrados: Array(60),
			}*/
			
		}
		this.state = {
					quadrados:quadrados,
					pontos:0,
				};

	}

		handleClick(q){
			const quadrados = this.state.quadrados.slice();
			let pontos = this.state.pontos;
			if(quadrados[q].mostrar==null){
				if(quadrados[q].valor!="*"){
					 pontos = this.state.pontos+1;
				}
			}
			

			quadrados[q] = {mostrar: quadrados[q].valor,
				valor:quadrados[q].valor}
				console.log(pontos);
			this.setState({
				quadrados:quadrados,
				pontos:pontos,

			})
		}

		renderQuadrado(q){
			return(
				<div>
				<Quadrado valor={this.state.quadrados[q].valor} mostrar={this.state.quadrados[q].mostrar} onClick={() => this.handleClick(q) } />
				</div>
				);
		}


		render(){
		
			return(
				<div>
				<h2>{this.state.pontos} - Faltam: {18-this.state.pontos} Cliques</h2>
				<table>
				<tbody>
					{this.criarTabela()}
				</tbody>
				</table>
				</div>
				);
			
	}

		criarTabela = () => {

			const quadrados = this.state.quadrados.slice();
			console.log(quadrados);
			let tabela = [];
			let q = 0;
			for( let i = 0; i<5; i++){
				let children = [];
				
				for(let j = 0; j<12; j++){
					children.push(
						<td key={q}>
						{this.renderQuadrado(q)}
						</td>

						);
					q++;
				}
				tabela.push(<tr key={i}>{children}</tr>);
		}
		return tabela;
	}

	
}



	function Quadrado(props){
		return(
			<button className="quadrado" onClick={props.onClick}>
				{props.mostrar}
			</button>

			);
			
			
		}

Quadrado.defaultProps = {
	mostrar: null,
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
		
