define(function(){
  return function(){
		var http = createRequestObject();					// создаем ajax-объект
		if( http ) {
			http.open('GET', 'loadpages/aboutText.html');							// инициируем загрузку страницы
			http.onreadystatechange = function () {			// назначаем асинхронный обработчик события
				if(http.readyState == 4) {
					$("#text").html(http.responseText);		// присваиваем содержимое					
				}
			}
			http.send(null);    
		} else {
			document.location = 'loadpages/aboutText.html';	// если ajax-объект не удается создать, просто перенаправляем на адрес
		}

	}
});