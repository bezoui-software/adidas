function Product({id, title, image, image_bg}) {
  return (
    <Link to={`adidas/product/${id}`} class='product-container'>
      <div id='image-container' style={{background: `${image_bg}`}}>
        <img id='image' src={image}/>
      </div>
      <div id='title'> {title} </div>
    </Link>
  );
}
