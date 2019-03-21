"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index){
  return item - index;
});





console.log(newArr);


const decrepitoss = ['danonel', 'joao', 'mordz'];

const boga = decrepitoss.reduce(function(total, next){
  return total + next;
});

console.log(boga);


const find = arr.find(function(item){
  return item === 4;
});

console.log(find);

const filter = arr.filter(function(item){
  return item % 2 === 0;
});
console.log(filter);



class List{
  constructor(){
    this.data = [];
  }
  add(data){
    this.data.push(data);
    console.log(this.data);
  }
}


class TodoList extends List{
  constructor(){
      super();
      this.usuario = 'Rafa';
  }

  mostaUsuario(){
    console.log(this.usuario);
  }
}




const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
  MinhaLista.add('Novo todo');
}
*/

/*
 const newArr = arr.map((item, index) =>{
   return index + 1;
 });


 const arr = [1, 3, 4, 5, 6];
 const newArr = arr.map(index => index + 1);
console.log(newArr);
*/

/*
const somar = (a,b) => a + b;

console.log(somar(5,8));
*/

/*
const usuario = {
  nome: 'Rafael',
  idade: 26,
  endereço: {
    cidade: 'Belém',
    estado: 'Pará',
  },
};

const { nome, idade, endereço: {cidade} } = usuario;
console.log(nome);


function mostraNome({nome, idade}){
  console.log(nome, idade);
}
 mostraNome(usuario);

const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereço.cidade;
console.log(cidade);
*/
var usuario = {
  nome: 'Rafael',
  idade: 26,
  empresa: 'Freelancer'
};

var nome = usuario.nome,
    rest = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome);
