$(document).ready(function(){
	update_tril();
	setInterval(function(){
		update_tril();
	}, 60000);
});

var update_tril = function(){
		var trilost = parseInt($("#trilost").html().replace("$", "").split(",").join(""));
		var change = (Math.random() + 1) / 100;
		var randBool = Math.random()<.5;
		if (randBool){
			change = change * -1;
		}
		trilost += change * trilost;
		$("#trilost").html(numeral(trilost).format('$0,0'));	
};