window.onload = function() {
  menuAnzeigen();
};

function menuAnzeigen(){
	document.getElementById("menu").innerHTML =	"<a href=\"index.html\"> <div class = \"menuPunkt\">   Hauptseite	  </div></a>  "   + 
		"<a href=\"disclaimer.html\"> <div class = \"menuPunkt\">   Disclaimer  </div></a>  "                                 +
		"<a href=\"impressum.html\"><div class = \"menuPunkt\">   Impressum  </div></a>"                                 +
		"<a href=\"http://fag-informatik.de/1920/Quiz/quiz.html\"> <div class = \"menuPunkt\">     Quiz </div> </a> "                                           +
		" <a href=\"http://fag-informatik.de/1819/Ur-Final.html\"><div class = \"menuPunkt\">    Ur – Wirtschaftsspiel  </div></a>"       +
		"<a href=\"http://fag-informatik.de/impressum/impressum.html\"><div class = \"menuPunkt\">  Impressum und Datenschutz    </div></a>" 				                                                                                                	
}