

function showAbout() {		
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

	// создание ajax объекта
	function createRequestObject() {
		try { return new XMLHttpRequest() }
		catch(e) {
			try { return new ActiveXObject('Msxml2.XMLHTTP') }
			catch(e) {
				try { return new ActiveXObject('Microsoft.XMLHTTP') }
				catch(e) { return null; }
			}
		}
	}