let produtos = [];
let nextId = 1;

const listar = (req, res) => {
  res.status(200).json(produtos);
};

const buscarPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find((p) => p.id === id);

  if (!produto) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  res.status(200).json(produto);
};

const criar = (req, res) => {
  const { nome, descricao, preco, categoria, estoque } = req.body;

  if (!nome || nome.length < 3) {
    return res.status(400).json({ erro: "O campo 'nome' é obrigatório e deve ter no mínimo 3 caracteres", campo: 'nome' });
  }
  if (!descricao || descricao.length < 10) {
    return res.status(400).json({ erro: "O campo 'descricao' é obrigatório e deve ter no mínimo 10 caracteres", campo: 'descricao' });
  }
  if (preco === undefined || preco === null || typeof preco !== 'number' || preco <= 0) {
    return res.status(400).json({ erro: "O campo 'preco' deve ser um número maior que zero", campo: 'preco' });
  }
  const categoriasValidas = ['equipamento', 'servico', 'acessorio'];
  if (!categoria || !categoriasValidas.includes(categoria)) {
    return res.status(400).json({ erro: "O campo 'categoria' deve ser: 'equipamento', 'servico' ou 'acessorio'", campo: 'categoria' });
  }
  if (estoque === undefined || estoque === null || typeof estoque !== 'number' || !Number.isInteger(estoque) || estoque < 0) {
    return res.status(400).json({ erro: "O campo 'estoque' deve ser um inteiro maior ou igual a zero", campo: 'estoque' });
  }

  const agora = new Date().toISOString();

  const novoProduto = {
    id: nextId++,
    nome,
    descricao,
    preco,
    categoria,
    estoque,
    ativo: true,
    criado_em: agora,
    atualizado_em: agora,
  };

  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
};

const atualizar = (req, res) => {
  const id = parseInt(req.params.id);
  const index = produtos.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  const { nome, descricao, preco, categoria, estoque, ativo } = req.body;

  if (!nome || nome.length < 3) {
    return res.status(400).json({ erro: "O campo 'nome' é obrigatório e deve ter no mínimo 3 caracteres", campo: 'nome' });
  }
  if (!descricao || descricao.length < 10) {
    return res.status(400).json({ erro: "O campo 'descricao' é obrigatório e deve ter no mínimo 10 caracteres", campo: 'descricao' });
  }
  if (preco === undefined || preco === null || typeof preco !== 'number' || preco <= 0) {
    return res.status(400).json({ erro: "O campo 'preco' deve ser um número maior que zero", campo: 'preco' });
  }
  const categoriasValidas = ['equipamento', 'servico', 'acessorio'];
  if (!categoria || !categoriasValidas.includes(categoria)) {
    return res.status(400).json({ erro: "O campo 'categoria' deve ser: 'equipamento', 'servico' ou 'acessorio'", campo: 'categoria' });
  }
  if (estoque === undefined || estoque === null || typeof estoque !== 'number' || !Number.isInteger(estoque) || estoque < 0) {
    return res.status(400).json({ erro: "O campo 'estoque' deve ser um inteiro maior ou igual a zero", campo: 'estoque' });
  }

  const produtoAtualizado = {
    id: produtos[index].id,
    nome,
    descricao,
    preco,
    categoria,
    estoque,
    ativo: ativo !== undefined ? ativo : produtos[index].ativo,
    criado_em: produtos[index].criado_em,
    atualizado_em: new Date().toISOString(),
  };

  produtos[index] = produtoAtualizado;
  res.status(200).json(produtoAtualizado);
};

const remover = (req, res) => {
  const id = parseInt(req.params.id);
  const index = produtos.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  produtos.splice(index, 1);
  res.status(204).send();
};

module.exports = { listar, buscarPorId, criar, atualizar, remover };
