type Item = {
  nome: string;
  descricao: string;
  valor: number;
};

type Cartao = {
  numero: number;
  validade: string;
  nome: string;
  cvv: number;
};

type Carrinho = {
  item: Item;
  qtd: number;
  desconto: number;
  frete: number;
  tipoTransacao: "credito" | "Debito";
  cartao: Cartao;
};

type Endereco = {
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
};

//Tipo de interseção (intersection type)
type NovoCarrinho = Omit<Carrinho, "tipoTransacao"> & {
  endereco: Endereco;
  tipoTransacao: Lowercase<Carrinho["tipoTransacao"]>;
};

// forma que funciona mais não é a melhor
// type NovoCarrinho = {
//   item: Item;
//   qtd: number;
//   desconto: number;
//   frete: number;
//   tipoTransacao: Lowercase<"credito" | "Debito">;
//   cartao: Cartao;
//   endereco: Endereco;
// };

const carrinho: NovoCarrinho = {
  item: {
    nome: `string`,
    descricao: `string`,
    valor: 12,
  },
  qtd: 122,
  desconto: 22,
  endereco: {
    cep: "string",
    rua: "string",
    bairro: "string",
    cidade: "string",
  },
  frete: 4231,
  tipoTransacao: "debito",
  cartao: {
    numero: 123,
    validade: `string`,
    nome: `string`,
    cvv: 123,
  },
};
