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

var per1 = new Personne("oussama" ,"description" ,300);
// change html part
ligne = document.getElementById("ligne");
ligne.children[0].innerHTML = per1.getName();
ligne.children[1].innerHTML = per1.description;

var xmlDoc = document.implementation.createDocument(null, "xmltest.xml");
var xml = "<root><Personne><nom>oussma</nom><description>hello this is me</description><salary>1783</salary></Personne></root>";
// var parser = new DOMParser(),
//   xmlDoc = parser.parseFormString(xml, "text/xml");
// alert(xmlDoc.getElementsByTagName("nom")firstchild());
alert(node);
alert(xmlDoc);

alert("hey");






