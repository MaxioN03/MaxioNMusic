define(function(){
  return function(){
  	var password=prompt('Password?','Password');
	if(password=='1'){
		alert('Right password!');
		sessionStorage.setItem('pass',1);
	}
	else(alert('Wrong password!'));
	location.reload();
	}
});