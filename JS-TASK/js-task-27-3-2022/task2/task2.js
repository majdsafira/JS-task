function ss() {
    sessionStorage.setItem('sub', document.getElementById('sub').value);
    sessionStorage.setItem('des', document.getElementById('des').value);
    sessionStorage.setItem('ut', document.getElementById('ut').value);
    sessionStorage.setItem('tu', document.getElementById('tu').value);
    };
    
    
    
    document.getElementById('card').innerHTML = `
      your subject is: ${localStorage.getItem('sub')} <br/>
      your project brief is: ${localStorage.getItem('des')} <br/>
      user type is: ${localStorage.getItem('ut')} <br/>
      Technology used: ${localStorage.getItem('tu')} <br/>`