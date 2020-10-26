const products_db = {
  'hdj5fr8d': {
    title: 'Adidas XZ', 
    image: 'media/images/zx_2k_boost.png',
    image_bg: 'linear-gradient( to right, rgba(245, 70, 66, 0.75), rgba(8, 83, 156, 0.75) )',
    sizes: [39, 40, 42, 43],
    description: 'The best shoe to discover the enegrie that you have.'
  },
  'fr6hibm': {
    title: 'Adidas Lxcon', 
    image: 'media/images/lxcon.png',
    image_bg: '#ff5734b8',
    sizes: [39, 40, 42, 43],
    description: 'Shoe than compine between sport and luxury.'
  },
  'ju86trh': {
    title: 'Adidas Nite jogger', 
    image: 'media/images/nite_jogger.png',
    image_bg: '#51ea6bb3',
    sizes: [39, 40, 42, 43],
    description: 'Awesome shoe.'
  },
  'm9wZ7WGk': {
    title: 'Adidas Superstar', 
    image: 'media/images/superstar.png',
    image_bg: 'linear-gradient( to right, #f4aad7bf, #01dbf0ab )',
    sizes: [39, 40, 42, 43],
    description: 'To be a unique superstar.'
  },
};

function Products() {
  const [products, setProducts] = useProducts();

  useEffect(() => {
    setProducts(products_db);
  })

  return (
    <div id='products-container'>
      {
        Object.keys(products).map(id => {
          const {title, image, image_bg} = products[id];
          return (
            <Product 
              id={id}
              title={title} 
              image={image}
              image_bg={image_bg}
            />
          )
        })
      }
    </div>
  );
}
