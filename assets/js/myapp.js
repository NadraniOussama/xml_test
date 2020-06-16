function openForm(){
	document.getElementById("addform").style.top = "22px"

}
function closeForm(){
	document.getElementById("addform").style.top = "-3000px"

}


// this is a OOP version and this is everything that relate to our function
// alert("heyo");
function Personne(nom , desciption , salary) 
{

// proprties of the class 

  this.nom = nom;
  this.description = desciption; 
  this.salary = salary;

// methodes of the classe 
  this.salutation = function() 
  {
    alert('Bonjour ! Je m\'appelle ' + this.nom + ', description :' + this.description + ' .');
  };

// setters 
  this.setnom = function(nom) 
  {
  		this.nom = nom;
  };

  this.setDesciption = function(description)
  {
  		this.description = description;
  };

  this.getName =function(){
    return this.nom;
  }
}

// change html part
// START boucle for in here


function get_XML ( ){
  return localStorage.getItem("xml")
} 
// Dim xDoc As New XmlDocument;


// Dim xNode As XmlNode = xDoc.AppendChild(xDoc.CreateElement("xml"))


// Dim xAuthor As XmlNode = xNode.AppendChild(xDoc.CreateElement("author"))
// xAuthor.InnerText = "hey"
function set_XML(){
  
localStorage.setItem("xml", "xml_doc_change");  
}

// START set HTML function
set_XML()
xmlString = get_XML()
listeHTML = document.querySelector('#liste');
for(i=0 ; i<10 ; i++)
{
    line = document.createElement("tr");
    col1 = document.createElement("td");
    col2 = document.createElement("td");
    col3 = document.createElement("td");
    col4 = document.createElement("td");
    col5 = document.createElement("td");
    col1.innerHTML = xmlString;
    col2.innerHTML = xmlString + " description";
    col2.style.width = "300px"
    col3.innerHTML = "hey";

        modifierButton = document.createElement("button");
        modifierButton.class = "button primary small";
        modifierButton.innerHTML = "modifier";
        modifierButton.onclick = function(){}; // TODO  =========================
    col4.appendChild(modifierButton);
    col4.style.width = "10px";
        supprimerButton = document.createElement("button");
        supprimerButton.class = "button small";
        supprimerButton.innerHTML = "supprimer";

        supprimerButton.onclick = "something usfull"; // TODO  =========================
    col5.appendChild(supprimerButton);
    col5.style.width = "10px";
    line.appendChild(col1);
    line.appendChild(col2);
    line.appendChild(col3);
    line.appendChild(col4);
    line.appendChild(col5);

    listeHTML.appendChild(line);
}
// END set function

// first test
// ligne = document.getElementById("ligne");
// ligne.children[0].innerHTML = per1.getName();
// ligne.children[1].innerHTML = per1.description;
// ligne.children[4].class = "button small";

// var xmlDoc = document.implementation.createDocument(null, "xmltest.xml");
var xml = "<root></root>";
// var parser = new DOMParser(),
//   xmlDoc = parser.parseFormString(xml, "text/xml");
set_XML();
alert("hey");

 