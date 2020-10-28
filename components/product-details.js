

function ProductDetails(url) {
  const [id, setId] = useState();
  const [image, setImage] = useState();
  const [image_bg, setImageCircleBg] = useState();
  const [sizes, setSizes] = useState([]);
  const [description,  setDescription] = useState();
  const [title, setTitle] = useState();
  const [products, setProducts] = useProducts();

  useEffect(() => {
    setId(url.match.params.id)
  }, [])
  
  useEffect(() => {
    if (!id) return;
    let product = products[id];
    setTitle(product.title);
    setImage(product.image);
    setImageCircleBg(product.image_bg);
    setSizes(product.sizes);
    setDescription(product.description);
  }, [id])

  return (
    <div id='card-container'>
      <div id='card'>
        <div class='product-image-container'>
          <div class='product-image-circle-bg' style={{ background: `${ image_bg }` }}></div>
          <img class='product-image' src={image} />
        </div>
        <div class='product-details'>
          <div class='product-title'> { title } </div>
          <div class='product-description'> { description } </div>
          <div class='product-size-container'>
            <label> Size: </label>
            <select id='product-size'>
              {
                sizes.map(size => (
                  <option class='product-size-option'> { size } </option>
                ))
              }
            </select>
          </div>
          <button class='purchase-btn'>Purchase</button>
        </div>
      </div>
    </div>
  );
}
