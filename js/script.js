


function auth(){
        require(['auth', 'jquery'], function(auth, $){
        auth();
        });
}

function addRecord()
{
  if($("input[id='name']").val()==""){
    $("input[id='name']").css("background" , "#B20A0A");
    alert("Enter name!"); 
    return false;
    
    }
  if($("textarea[id='comment']").val()==""){
    alert("Enter comment!");
    $("textarea[id='comment']").css("background" , "#B20A0A"); 

    return false;}

    


  db.transaction(function(tx) {
  tx.executeSql("SELECT COUNT(*) FROM Comments", [], function (result) {}, function (tx, error) {
  tx.executeSql("CREATE TABLE Comments (name TEXT, comment TEXT,date TEXT)", [], null, null);
  })});

    var d=new Date();
	var day=d.getDate();
	var month=d.getMonth() + 1;
	var year=d.getFullYear();
	var hours=d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	if(hours<10){hours='0'+hours;}
	if(minutes<10){minutes='0'+minutes;}
	if(seconds<10){seconds='0'+seconds;}
	var date = day + "." + month + "." + year;
	var time = hours + ":" + minutes + ":" + seconds;
    var dateTime=date+", "+time;
    console.log(dateTime);

  //Записываем в таблицу...
  db.transaction(function(tx) {
  tx.executeSql("INSERT INTO Comments (name, comment, date) values(?, ?, ?)", [$("input[id='name']").val(), $("textarea[id='comment']").val(),dateTime], null, null);
  });

}

function showRecords(){


$("#showTable").html('');
$("#showTable").css('border', '3px solid black');  
$("#showTable").append( $('<tr><td><a class="tooltip" href="#">Name<span class="classic">Name of commentator</span></a></td><td><a class="tooltip" href="#">Comment<span class="classic">Directly comment</span></a></td><td><a class="tooltip" href="#">Time<span class="classic">Commenting time</span></a></td></tr>'));
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM Comments", [], function(tx, result) {
for(var i = 0; i < result.rows.length; i++) {
$("#showTable").append( $('<tr><td>'+ result.rows.item(i)['name'] +'</td><td>'+result.rows.item(i)['comment']+'</td><td>'+result.rows.item(i)['date']+'</td></tr>'));
}}, null)}); 

$( "#showcomm" ).bind( "click", function() {
alert( "Results already show!");
});    
   

}

