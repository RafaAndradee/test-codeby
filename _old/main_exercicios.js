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

*/


//BÁSICO DE POO

//como era feito no JS anterior ao es6+
// espaco de nomes global

/*
function Pessoa(nome, idade) { //
  this.Nome = nome;
  this.idade = idade;
}

var pessoa = new Pessoa("mords",26); //um objeto no caso é a pessoa com suas propriedades


console.log(pessoa);



class IntegranteDegrobito {
  constructor(integrante) {
    this.integrante = integrante;
  }
  falar(bordao){
    console.log(this.bordao = bordao);
  }
}

const integrante1 = new IntegranteDegrobito('mords');
const integrante2 = new IntegranteDegrobito('Joao');

integrante1.falar("vo fala mai nada nao");
integrante2.falar("rapidaço");


document.getElementById('novotodo').onclick = function(){
  integrante1.falar("vo fala mai nada nao");
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


//REST
/*
const usuario = {
  nome: 'Rafael',
  idade: 26,
  empresa: 'Freelancer'
}


const { nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

const arr = [1,2,3,4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//function soma(a, b){
//  return a + b + c;
//}

function soma(...params){
  return params.reduce((total, teste) => total - teste);
}

console.log(soma(1,2,3,4));
*/


//SPREAD
/*
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario = {
  nome: 'Rafael',
  idade: 26,
  empresa: 'Freelancer'
}

const usuario1 = { ...usuario, nome: 'Antonio'};

console.log(usuario1);
*/


//TEMPLATE LITERALS

/*
const usuario = {
  nome: 'Rafa',
  idade: 26
}

//console.log('meu nome é ' +  usuario.nome);
console.log(`meu nome é ${usuario.nome}`);
*/


///EXERCICIOs////



const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];


//map
/*
const cadaIdade = usuarios.map(function(item){
  return item.idade;
});

console.log(cadaIdade);
*/

//filter
/*
const filtro = usuarios.filter((item) => {
  return item.empresa === 'Rocketseat' && item.idade >= 18;
});

console.log(filtro);
*/

//find
/*
const searchGoogle = usuarios.find(item => item.empresa === 'Google' );
console.log(searchGoogle);
*/

//years old multpliyed
/*
const calculo = usuarios
  .map(usuario => ({...usuario, idade: usuario.idade * 2}))
  .filter(usuario => usuario.idade <= 50);

console.log(calculo);
*/

//Arrow functions
/*
const arr = [1, 2, 3, 4, 5];

arr.map(item => {
  return item + 10;
});
*/

/*
const usuario = {nome: 'Diego', idade: 23 };

const mostraIdade = (usuario) => {usuario.idade};

console.log(mostraIdade);
*/

/*
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade});


console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
*/

/*
const promise = () => new Promise(resolve, reject) => resolve());
*/

/*
const empresa = {
  nome: 'Rocketseat',
  endereco: {
  cidade: 'Rio do Sul',
  estado: 'SC',
  }
};

const {
  nome,
  endereco: { cidade, estado }
} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
*/

/*
function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}

mostraInfo({ nome: "Diego", idade: 23 });
*/

/*
const arr = [1, 2, 3, 4, 5, 6]

const  [x, ...y] = arr;

console.log(x);
console.log(y);
*/

/*
function soma(...nums){
  return nums.reduce((a, b) => a + b);
}
console.log(soma(1,2,3,4));
*/

/*
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario2 = {...usuario, nome: "Gabriel"};
console.log(usuario2);
*/

const usuario = "Rafael";
const idade = 26;

console.log(`ò usuario ${usuario} possui ${idade} anos`);
