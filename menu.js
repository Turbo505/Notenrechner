window.onload = function() {
  menuAnzeigen();
};

function menuAnzeigen(){
	document.getElementById("menu").innerHTML = "<a href=\"http://fag-informatik.de/index.html\"> <div class = \"menuPunkt\">   Startseite  </div></a>  "   + 
		"<a href=\"http://fag-informatik.de/1920/Geschichte/geschichte.html\"><div class = \"menuPunkt\">    Schulgeschichte </div></a>"                                 +
		"<a href=\"http://fag-informatik.de/1920/Geschichte/archiv.html\"><div class = \"menuPunkt\">    Schuldokumente zur NS-Diktatur </div></a>"                                 +
		"<a href=\"http://fag-informatik.de/1920/Quiz/quiz.html\"> <div class = \"menuPunkt\">     Quiz </div> </a> "                                           +
		" <a href=\"http://fag-informatik.de/1819/Ur-Final.html\"><div class = \"menuPunkt\">    Ur – Wirtschaftsspiel  </div></a>"       +
		"<a href=\"http://fag-informatik.de/impressum/impressum.html\"><div class = \"menuPunkt\">  Impressum und Datenschutz    </div></a>" 				                                                                                                	
}