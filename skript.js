// GERMANY IMAGE FADING OUT
$(".germany_img").hide();
$("#wrongx").hide();
$("#correctx").hide();



// SLIDESHOW
var slideIndex = 0;


// function showSlides() {
// 	var i;
// 	var slides = document.getElementsByClassName("mySlides");
// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";
// 	}
// 	slideIndex++;
// 	if (slideIndex > slides.length) {slideIndex = 1};
	
// 	slides[slideIndex-1].style.display = "block";
// 	setTimeout(showSlides,8000 );
// 	};

// Current year
const year = document.querySelector("#year");
let d = new Date();
let currentYear = d.getUTCFullYear();
year.innerHTML = currentYear;

const ownWordsButton = document.querySelector(".own-words-button");
const ownWords = document.querySelector(".own-words");

ownWordsButton.addEventListener("click", () => {
	if (ownWords.style.display === "none") {
		ownWords.style.display = "block";
	}
	else {
		ownWords.style.display = "none";
	}
})

const burger = document.querySelector(".burger");
const dropdown = document.querySelector(".dropdown-content");

burger.addEventListener("click", () => {
	if (dropdown.style.display === "none") {
		dropdown.style.display = "block";
	}
	else {
		dropdown.style.display = "none";
	}
})


// ADDING OWN WORDS
var vlastnewords = [];
var words = [];
var body = 0;

function add_word() {
	window.new_word = document.getElementById("own_words").value;
	window.words.push(new_word);
	document.getElementById("own_words").value='';
	document.getElementById("lektion").innerHTML = words;
	$("#correctx").show('fast').delay(100).hide('fast');
}

function start_own() {
	window.body = 1;
	window.poradie = Math.floor(Math.random() * words.length ); 
	window.slovo = words[poradie];
	window.final = slovo.substr(4,63);
	document.getElementById("test_word").innerHTML = final;
	words = words.filter(e => e !== slovo);
	document.getElementById("lecPoints").innerHTML = "/" + (words.length + 1).toString() ;
}


// TESTING WORDS 
const lektion = document.querySelector("#lektion");
const testWord = document.querySelector("#test_word");

	function lektion_1() {
		window.body = 1;
		document.getElementById("cislo_points").innerHTML = 0;
		lektion.innerHTML = "Lektion 1";

		window.words = ["der Monat",
						"die Nähe","die E-mail",
						"das Alter", "das Hobby", "das Handy"];

		window.pocet_slov = words.length;				
		window.poradie = Math.floor(Math.random() * words.length );  
		window.slovo = words[poradie];
		window.final = slovo.substr(4,63); //GERMAN LONGEST WORD = 63 LETTERS
		testWord.innerHTML = final;	
		words = words.filter(e => e !== slovo);
		document.getElementById("lecPoints").innerHTML = "/" + (words.length + 1).toString() ;
	}
	
	function lektion_2() {
		window.body = 1;
		document.getElementById("cislo_points").innerHTML = 0;
		lektion.innerHTM = "Lektion 2";

		window.words= ["die Band", "die Lehrerin","die Moderatorin", "die Popsängerin", "die Schweiz", "die Songwriterin", "die Studentin", "die Trikot-Nummer", "die Tschechin",
		 "die TV-Serie", "die Eltern", "die Engländerin", "die Herkunft", "die Idee", "die Lehrerin", "die Mutter", "die PR-Assistentin", "die Slowakei", "die Sommerferien", "die Sprache",
		 "die Türkei", "die Türkin", "die Winterferien", "die Person", "die Schweiz", "die Verkäuferin",
					   "der Film","der Vater", "der Eishockeyspieler", "der Fußballspieler","der Mittelfeldspieler", "der Popsänger", "der Schauspieler", "der Spitzname", "der Student", 
		 "der Tscheche","der Beruf", "der Vater", "der Mensch", "der Slowake", "der Türke", "der Euro", "der Schweizer",
					   "das Eishockey", "das Model", "das Nationaltheater", "das Jahr", "das Sprachinstitut", "das Türkisch", "das Ungarisch"];

		window.poradie = Math.floor(Math.random() * words.length );  
		window.slovo = words[poradie];
		window.final = slovo.substr(4,63); //GERMAN LONGEST WORD = 63 LETTERS
		testWord.innerHTML = final;	
		words = words.filter(e => e !== slovo);
		document.getElementById("lecPoints").innerHTML = "/" + (words.length + 1).toString() ;

	}

	function lektion_3() {
		window.body = 1;
		document.getElementById("cislo_points").innerHTML = 0;
		lektion.innerHTM= "Lektion 3";
		window.words = ["der Cousin", "das Einzelkind", "die Person","der Sohn", "das Aussehen", "der Hamster"];
		window.poradie = Math.floor(Math.random() * words.length );  
		window.slovo = words[poradie];
		window.final = slovo.substr(4,63); //GERMAN LONGEST WORD = 63 LETTERS
		testWord.innerHTML = final;	
		words = words.filter(e => e !== slovo);
		document.getElementById("lecPoints").innerHTML = "/" + (words.length + 1).toString() ;
	}

	function lektion_4() {
		window.body = 1;
		document.getElementById("cislo_points").innerHTML = 0;
		lektion.innerHTM = "Lektion 4"
		window.words = ["das Kino", "die Kreuzung", "der Moment","die Seite", "die Zeit","das Bett","die Fahrkarte", "das Geld" ];
		window.poradie = Math.floor(Math.random() * words.length );  
		window.slovo = words[poradie];
		window.final = slovo.substr(4,63); //GERMAN LONGEST WORD = 63 LETTERS
		testWord.innerHTML = final;	
		words = words.filter(e => e !== slovo);
		document.getElementById("lecPoints").innerHTML = "/" + (words.length + 1).toString() ;
	}

	function lektion_5() {
		window.body = 1;
		document.getElementById("cislo_points").innerHTML = 0;
		lektion.innerHTM = "Lektion 5"
		window.words = ["das Besteck", "das Fleisch", "das Ei", "der Hunger", "der Kuchen", "das Messer", "die Wurst", "die Gabel"];
		window.poradie = Math.floor(Math.random() * words.length );  
		window.slovo = words[poradie];
		window.final = slovo.substr(4,63); //GERMAN LONGEST WORD = 63 LETTERS
		testWord.innerHTML = final;	
		words = words.filter(e => e !== slovo);
		document.getElementById("lecPoints").innerHTML = "/" + (words.length + 1).toString() ;
	}

	function lektion_6() {
		window.body = 1;
		document.getElementById("cislo_points").innerHTML = 0;
		lektion.innerHTM = "Lektion 6"
		window.words = ["der Abend", "der Bus", "die Haltestelle", "das Geschäft", "der Keks", "der Kunde", "die Nacht", "das Rad" ];
		window.poradie = Math.floor(Math.random() * words.length );  
		window.slovo = words[poradie];
		window.final = slovo.substr(4,63); //GERMAN LONGEST WORD = 63 LETTERS
		testWord.innerHTML = final;	
		words = words.filter(e => e !== slovo);
		document.getElementById("lecPoints").innerHTML = "/" + (words.length + 1).toString() ;
	}

	function lektion_7() {
		window.body = 1;
		document.getElementById("cislo_points").innerHTML = 0;
		lektion.innerHTM = "Lektion 7";
		window.words = ["die Clique", "der Computer", "die Ferien", "die Geschichte", "die Homepage", "das Internet", "das Material", "der Programmierer"];
		window.poradie = Math.floor(Math.random() * words.length );  
		window.slovo = words[poradie];
		window.final = slovo.substr(4,63); //GERMAN LONGEST WORD = 63 LETTERS
		testWord.innerHTML = final;	
		words = words.filter(e => e !== slovo);
		document.getElementById("lecPoints").innerHTML = "/" + (words.length + 1).toString() ;
	}

	function lektion_8() {
		window.body = 1;
		document.getElementById("cislo_points").innerHTML = 0;
		lektion.innerHTM = "Lektion 8"
		window.words = ["der Plan", "der See", "der Tanzkurs", "die Apotheke", "die Bäckerei", "der Markt", "der Schuh", "der Dom","der Eintritt" ];
		window.poradie = Math.floor(Math.random() * words.length );  
		window.slovo = words[poradie];
		window.final = slovo.substr(4,63); //GERMAN LONGEST WORD = 63 LETTERS
		testWord.innerHTML = final;	
		words = words.filter(e => e !== slovo);
		document.getElementById("lecPoints").innerHTML = "/" + (words.length + 1).toString() ;
	}





		
	function click_der() {
		window.check_der = slovo.includes("der") || vlastnewords.includes("der");
		window.checkclick_der = true;

		if (check_der && checkclick_der) {
			$("#wrongx").hide();
			$("#correctx").show('fast').delay(100).hide('fast');
			document.getElementById("cislo_points").innerHTML = body++;
			window.poradie = Math.floor(Math.random() * words.length );  
			window.slovo = words[poradie];
			window.final = slovo.substr(4,63); //GERMAN LONGEST WORD = 63 LETTERS
			document.getElementById("test_word").innerHTML = final;	
			words = words.filter(e => e !== slovo);
		
		}
		else if (!check_der && checkclick_der) {
			$("#correctx").hide();
			$("#wrongx").show('fast').delay(100).hide('fast');
			window.poradie = Math.floor(Math.random() * words.length );  
			window.slovo = words[poradie];
			window.final = slovo.substr(4,63); //GERMAN LONGEST WORD = 63 LETTERS
			document.getElementById("test_word").innerHTML = final;	
			words = words.filter(e => e !== slovo);
			
					}

		if (words.length == 0) {
				$("#test_word").text("Your points: " + (body-1) + " / " + pocet_slov);
			} 
		
	};

	function click_die() {
		window.check_die = slovo.includes("die") || vlastnewords.includes("die");
		window.checkclick_die = true;		

		if (check_die && checkclick_die) {
			$("#wrongx").hide();
			$("#correctx").show('fast').delay(100).hide('fast');
			document.getElementById("cislo_points").innerHTML = body++;
			window.poradie = Math.floor(Math.random() * words.length );  
			window.slovo = words[poradie];
			window.final = slovo.substr(4,63); //GERMAN LONGEST WORD = 63 LETTERS
			document.getElementById("test_word").innerHTML = final;	
			words = words.filter(e => e !== slovo);
		
		}
		else if (!check_die && checkclick_die) {
			$("#correctx").hide();
			$("#wrongx").show('fast').delay(100).hide('fast');
			window.poradie = Math.floor(Math.random() * words.length );  
			window.slovo = words[poradie];
			window.final = slovo.substr(4,63); //GERMAN LONGEST WORD = 63 LETTERS
			document.getElementById("test_word").innerHTML = final;	
			words = words.filter(e => e !== slovo);
												}

		if (words.length == 0) {
				$("#test_word").text("Your points: " + (body-1) + " / " + pocet_slov);
			} 
												
		
	};

	function click_das() {
		window.check_das = slovo.includes("das") || vlastnewords.includes("das");
		window.checkclick_das = true;

		if (check_das && checkclick_das){
			$("#wrongx").hide();
			$("#correctx").show('fast').delay(100).hide('fast');
			document.getElementById("cislo_points").innerHTML = body++;
			window.poradie = Math.floor(Math.random() * words.length );  
			window.slovo = words[poradie];
			window.final = slovo.substr(4,63); //GERMAN LONGEST WORD = 63 LETTERS
			document.getElementById("test_word").innerHTML = final;	
			words = words.filter(e => e !== slovo);
		}
		else if (!check_das && checkclick_das) {
			$("#correctx").hide();
			$("#wrongx").show('fast').delay(100).hide('fast');
			window.poradie = Math.floor(Math.random() * words.length );  
			window.slovo = words[poradie];
			window.final = slovo.substr(4,63); //GERMAN LONGEST WORD = 63 LETTERS
			document.getElementById("test_word").innerHTML = final;	
			words = words.filter(e => e !== slovo);
			
					}
		
		if (words.length == 0) {
			
				$("#test_word").text("Your points: " + (body-1) + " / " + pocet_slov);
			} 
	}	




var rotation = 180;
$(".enter-own").click(function(){
		var OwnWords = $(".own_words");
		OwnWords.slideToggle(400);
		$(".more").css({'-webkit-transform' : 'rotateX('+ rotation +'deg)',
                 '-moz-transform' : 'rotateX('+ rotation +'deg)',
                 '-ms-transform' : 'rotateX('+ rotation +'deg)',
                 'transform' : 'rotateX('+ rotation +'deg)'});
		rotation+=180;

	});

$(document).ready(function() {
	$(".burger").click(function(){
		$(".dropdown-content").slideToggle(400);
		rotation+=180;
		$(this).css({'-webkit-transform' : 'rotateX('+ rotation +'deg)',
                 '-moz-transform' : 'rotateX('+ rotation +'deg)',
                 '-ms-transform' : 'rotateX('+ rotation +'deg)',
                 'transform' : 'rotateX('+ rotation +'deg)'});
	});
});
