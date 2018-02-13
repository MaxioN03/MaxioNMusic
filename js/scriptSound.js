
function showContent(){
	

		//Считываем через getJSON
    	$.getJSON('json/songs.json', function(data) {
    			//Считываем и записываем в таблицу
    			/*$('#users').append('<tr><td>Дата основания</td><td>Сайт</td><tr>'); 
    			$('#users').append('<tr><td>' + data.found + "</td><td><a href='http://www." + data.site + "'> "+ data.site +" </a></td>"); */

    			//Считываем и записываем в список
    			for(var i=0;i<data.songs.length;i++){
                console.log(data.songs.length);
                $('.lmenu').append('<li>' + data.songs[i].title + ', <b>'+data.songs[i].album+'</b><br>'+ data.songs[i].genre +','+data.songs[i].duration+'<br> <audio controls><source src="../resource/sound/'+data.songs[i].link +'" type="audio/mpeg"></audio><br><br><br></li>');
                }   
    		});
    
    
    
		
		var cont = document.getElementById('contentBody');
		var loading = document.getElementById('loading');
		
		//Считываем и записываем в id="par"
		$("#contentBody").html($("#loading").html());
		$("#par").html(name);


		var http = createRequestObject();					// создаем ajax-объект
		if( http ) {
			http.open('GET', link);							// инициируем загрузку страницы
			http.onreadystatechange = function () {			// назначаем асинхронный обработчик события
				if(http.readyState == 4) {
					cont.innerHTML = http.responseText;		// присваиваем содержимое					
				}
			}
			http.send(null);    
		} else {
			document.location = link;	// если ajax-объект не удается создать, просто перенаправляем на адрес
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