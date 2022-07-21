(async () => {
    const database = require('./db');
    const Produto = require('./produto');
    await database.sync();

    const novoCreate = await Produto.create({
        nome: 'mouse',
        preco: 10,
        descricao: 'Um mouse USB '
    })
    console.log(novoCreate);

    const produtos = await produto.findAll();
    console.log(produtos);
})();