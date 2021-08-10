



	//create USSR ship


	let ussrShip = {

		hull:20,
		
		firepower: 5,

		accuracy: .7

	}



	// this for creating the alienship class
	class AlienShips {
		constructor( hull , firepower, accuracy){

			this.hull = hull;

			this.firepower =firepower;

			this.accuracy = accuracy;
		

		}


	}




	var enempyShips = [];

	for(let i=1; i < 6 ; i++) {

		 let hull = Math.floor(Math.random()* 4) +3

		 let =firepower = Math.floor(Math.random() * 3) + 2;

		 let accuracy = Math.floor(Math.random() * 3) + 6 /10;

		var Enemies = new AlienShips(hull, firepower, accuracy);

		enempyShips.push(Enemies);


		}


	
		var attackShip=() =>{
			//This function will be used to create an attack 


		if(

	
		}



	console.log(ussrShip);
	console.log(enempyShips);


	//this will create the array of enemy ships the from the alien ships class. 


	/*
	for(let i = 0; i < 6; i++) {


	}

	*/
