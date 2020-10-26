function Product({id, title, image, image_bg}) {
  return (
    <Link to={`product/${id}`}>
      <div class='product-container'>
        <div id='image-container' style={{background: `${image_bg}`}}>
          <img id='image' src={image}/>
        </div>
        <div id='title'> {title} </div>
      </div>
    </Link>
  );
}