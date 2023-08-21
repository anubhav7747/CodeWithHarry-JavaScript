setInterval(()=>{
    let date = new Date();
    let options = {
      weekday: 'short', year: 'numeric', month: 'long',
      day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
  
    let d = date.toLocaleTimeString('en-us', options);
    time.innerHTML = d;
}, 1000);