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




const usuario = {
  nome: 'Rafael',
  idade: 26,
  empresa: 'Freelancer'
}


const { nome, ...rest} = usuario;

console.log(nome);
