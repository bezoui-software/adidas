document.body.addEventListener('DOMSubtreeModified', flipCardByMouse);


function flipCardByMouse() {
  const card_container = document.getElementById('card-container');
  if (!card_container) return;

  const childs = card.childNodes;
  card_container.addEventListener('mousemove', e => {
    const x = ((window.innerWidth/2) - e.pageX) / 5;
    const y = ((window.innerHeight/2) - e.pageY) / 5;
    const card = document.getElementById('card');
    card.style.transition = 'none';
    card.style.transform = `rotateY(${x}deg) rotateX(${360-y}deg)`;

    let childs = card.childNodes;
    childs.forEach( (child, i) => {
      let grandChilds = child.childNodes;
      if (grandChilds) {
        grandChilds.forEach( (grandChild, j) => {
          grandChild.style.transform = `translateZ(${(i + j) * 30}px)`;  
        })
      } else {
        child.style.transform = `translateZ(${i * 100 + 100}px)`;
      }
    })
  });

  card_container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.3s ease';
    card.style.transform = `rotateY(0) rotateX(0)`;

    let childs = card.childNodes;
    childs.forEach( (child, i) => {
      let grandChilds = child.childNodes;
      if (grandChilds) {
        grandChilds.forEach( (grandChild, j) => {
          grandChild.style.transform = `translateZ(0)`;  
        })
      } else {
        child.style.transform = `translateZ(0)`;
      }
    })
  });
}