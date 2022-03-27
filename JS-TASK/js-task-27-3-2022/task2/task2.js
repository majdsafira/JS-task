function ss() {
    localStorage.setItem('sub', document.getElementById('sub').value);
    localStorage.setItem('des', document.getElementById('des').value);
    localStorage.setItem('ut', document.getElementById('ut').value);
    localStorage.setItem('tu', document.getElementById('tu').value);
    };
    
    
    
    document.getElementById('card').innerHTML = `
      your subject is: ${localStorage.getItem('sub')} <br/>
      your project brief is: ${localStorage.getItem('des')} <br/>
      user type is: ${localStorage.getItem('ut')} <br/>
      Technology used: ${localStorage.getItem('tu')} <br/>`