// Якщо клітинка дорівнює 1 то це зафарбований корабель білим
// 2 - підбитий корабель
// 3 - пуста клітинка
// 4 - прихований корабель

class Sea_battle{
	constructor(){
		this.isFirstPlayerStep = true;
		this.isDark = false;
		this.game_end = false;
		this.field1 = [];
		this.field2 = [];
	 	// alert("Об\'єкт гри створено")
	 	// alert("Об\'єкт гри створено")
	 	this.Fill_fields();
	 	this.Print_fields();

	}
	Print_fields(){
		let canvas = document.getElementById("canvas");
	 	this.pen = canvas.getContext("2d");
	 	this.pen.fillRect(0, 0, 500, 500);
		let cell_w = 50;
		for (let i = 0; i < this.field1.length;i++) {
			for(let j = 0;j < this.field1[i].length;j++){
				if(this.isDark){
					this.pen.fillStyle = "#453120";
				}
				else{
					this.pen.fillStyle = "#DEA057";
				}
				if (this.field1[i][j] == 1) {
					this.pen.fillStyle = "#fff"
				}
				else if (this.field1[i][j] == 2) {
					this.pen.fillStyle = "#ab0202"
				}
				else if (this.field1[i][j] == 3) {
					this.pen.fillStyle = "#ababab"
				}
				this.pen.strokeStyle = "#000";
				this.pen.fillRect(j * cell_w,i * cell_w, cell_w, cell_w);
				this.pen.strokeRect(j * cell_w,i * cell_w, cell_w, cell_w);
			}
		}



		let canvas2 = document.getElementById("canvas2");
	 	this.pen = canvas2.getContext("2d");
	 	this.pen.fillStyle = "#DEA057";
	 	this.pen.fillRect(0, 0, 500, 500);
		// let cell_w = 50;
		for (let i = 0; i < this.field2.length;i++) {
			for(let j = 0;j < this.field2[i].length;j++){
				if(this.isDark){
					this.pen.fillStyle = "#453120";
				}
				else{
					this.pen.fillStyle = "#DEA057";
				}
				
				if (this.field2[i][j] == 1) {
					this.pen.fillStyle = "#fff"
				}
				else if (this.field2[i][j] == 2) {
					this.pen.fillStyle = "#ab0202"
				}
				else if (this.field2[i][j] == 3) {
					this.pen.fillStyle = "#ababab"
				}
				this.pen.strokeStyle = "#000";
				this.pen.fillRect(j * cell_w,i * cell_w, cell_w, cell_w);
				this.pen.strokeRect(j * cell_w,i * cell_w, cell_w, cell_w);
			}
		}
	}
	Fill_fields(){
		for (let i = 0; i < 10; i++){
			let temp_arr1 = [];
			let temp_arr2 = [];
			for (let j = 0; j < 10; j++) {								
				temp_arr1.push(0)
				temp_arr2.push(0)
			}
			this.field1.push(temp_arr1)
			this.field2.push(temp_arr2)
		}
	}
	Put_warship1(x,y){
		this.field1[y][x] = 1;


	}
	Put_warship2(x,y){
		this.field2[y][x] = 1;


	}
	Play1(){
		for (var y = 0; y < this.field1.length; y++) {
			for (var x = 0; x < this.field1[y].length; x++) {
				if (this.field1[y][x] == 1) {
					this.field1[y][x] = 4
				}
			}
		}
		this.Print_fields()	
		// $("#canvas").click(function(e){
		// 	var x = e.pageX - e.target.offsetLeft;
		//     var y = e.pageY - e.target.offsetTop;
		//     x = parseInt(x / 50)
		//     y = parseInt(y / 50)
		//     if(this.field1[y][x] == 4){
		//     	this.field1[y][x] = 2 
		//     }
		// });
	}
	Play2(){
		for (var y = 0; y < this.field2.length; y++) {
			for (var x = 0; x < this.field2[y].length; x++) {
				if (this.field2[y][x] == 1) {
					this.field2[y][x] = 4
					}
			}
		}
		this.Print_fields()		
	}
}
$(document).ready(function(){
	let game1 = new Sea_battle();
	let ships1 = 0;
	let score1 = 0;
	let score2 = 0;
	$("#canvas").click(function(e){
		if(ships1<10){
			ships1++
			var x = e.pageX - e.target.offsetLeft;
		    var y = e.pageY - e.target.offsetTop;
		    x = parseInt(x / 50)
		    y = parseInt(y / 50)
		    game1.Put_warship1(x,y)
		    game1.Print_fields()
		}
	});

	let ships2 = 0;
	$("#canvas2").click(function(e){
		if(ships2<10){
			ships2++
			var x = e.pageX - e.target.offsetLeft;
		    var y = e.pageY - e.target.offsetTop;
		    x = parseInt(x / 50)
		    y = parseInt(y / 50)
		    game1.Put_warship2(x,y)
		    game1.Print_fields()
		}  
	});	

	$('#start_game1').click(function(){
		game1.Play1()
		$("#canvas").click(function(e){
			if (game1.game_end) {return}
			if(!game1.isFirstPlayerStep){
				alert("Зараз крок іншого гравця.")
				return}
			var x = e.pageX - e.target.offsetLeft;
		    var y = e.pageY - e.target.offsetTop;
		    x = parseInt(x / 50)
		    y = parseInt(y / 50)
		    if(game1.field1[y][x] == 4){
		    	game1.field1[y][x] = 2
		    	score1++
		    }
		    else if(game1.field1[y][x] == 0){
		    	game1.field1[y][x] = 3;
		    	game1.isFirstPlayerStep = !game1.isFirstPlayerStep
		    }
		    if(score1 == 10){
				alert("Перший гравець виграв!")
				game1.game_end = true

			}
			game1.Print_fields()
		});
	})

	$('#start_game2').click(function(){
		game1.Play2()
		$("#canvas2").click(function(e){
			if (game1.game_end) {return}
			if(game1.isFirstPlayerStep){
				alert("Зараз крок іншого гравця.")
				return}
			var x = e.pageX - e.target.offsetLeft;
		    var y = e.pageY - e.target.offsetTop;
		    x = parseInt(x / 50)
		    y = parseInt(y / 50)
		    if(game1.field2[y][x] == 4){
		    	game1.field2[y][x] = 2
		    	score2++ 
		    	if(score2 == 10){
					alert("Другий гравець виграв!")
					game1.game_end = true
				}
		    }
		    else if(game1.field2[y][x] == 0){
		    	game1.field2[y][x] = 3; 
		    	game1.isFirstPlayerStep = !game1.isFirstPlayerStep
		    }
			game1.Print_fields()
		});
	})
	$('#dark_mode').click(function(e){
		$("body").toggleClass("dark");
		game1.isDark = !game1.isDark;
		game1.Print_fields()
	})
})
	 