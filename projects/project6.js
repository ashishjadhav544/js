  const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  let a;
  const c = function(){
    if(!a){
      a = setInterval(changeBgColor, 1000);
    }
    function changeBgColor(){
      // document.body.style.backgroundColor ="#ff0000";
      document.body.style.backgroundColor = randomColor();
      console.log(randomColor());
    }
  };
  const d = function(){
    clearInterval(a);
    a= null;
  }

  document.querySelector('#start').addEventListener('click', c)
  document.querySelector('#stop').addEventListener('click', d)
