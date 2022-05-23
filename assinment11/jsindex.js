function identify(){
    var  given= document.getElementById('in').value;



    document.getElementById('biryani').style.display = 'none';
    document.getElementById('fish').style.display = 'none';
    document.getElementById('paneertikka').style.display = 'none'; 
    document.getElementById('idli').style.display = 'none'; 
    document.getElementById('dosa').style.display = 'none'; 

  
    
    if(given=="biryani"){
      document.getElementById('biryani').style.display = 'block'; 
      
    }
    else if(given=="fish"){
      document.getElementById('fish').style.display = 'block'; 
    }
    else if(given=="paneertikka"){
      document.getElementById('paneertikka').style.display = 'block'; 
    }

    else if(given=="dosa"){
      document.getElementById('dosa').style.display = 'block'; 
    }

    else if(given=="idli"){
      document.getElementById('idli').style.display = 'block'; 
    }

  }