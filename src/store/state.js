export default () => ({
    categoriaArticulos: [
      "Todos", "Gorras", "Camisetas", "Gorros", "Busos"
    ],
    articulos: [],
    articulosFiltrados: [],
    id: '',
    carrito: {},
    
    //AUTH
    user: null,
    error: {tipo: null, mensaje: ''},

    //InfoUsuario
    infoUsuario: null,
    infoUsuarioCompra: [],

    //Controlar Vista anterior
    ultimaUrl: null
})