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


function get_XML (id){
  xmlString = localStorage.getItem(id);
  if (xmlString == null )
    {
      if(xmlString === undefined)
        xmlString = "undefined"
      else xmlString = "error"
    }
  return xmlString;
} 
// Dim xDoc As New XmlDocument;


// Dim xNode As XmlNode = xDoc.AppendChild(xDoc.CreateElement("xml"))


// Dim xAuthor As XmlNode = xNode.AppendChild(xDoc.CreateElement("author"))
// xAuthor.InnerText = "hey"
function set_form(){
  name_car =  document.getElementById("car-name").value;
  // extract all element from from 
  // to xml 
  xml_str = "<car><name>"+name_car+"</name>";


  xml_str += "</car>"
  //  then save
  set_XML(xml_str);
}

function set_XML(xmlRowString)
{
  if (typeof(localStorage) == 'undefined' ) 
  {
    alert('Your browser does not support HTML5 localStorage. Try upgrading.');
  } 
  else 
  {   
    try                          
    { 
      // alert(localStorage.length);
      localStorage.setItem(localStorage.length, xmlRowString);
    } 
    catch (e) 
    {
      alert("save failed!: "+ e);
      if (e == QUOTA_EXCEEDED_ERR) 
      {
        alert('Quota exceeded!'); //data wasn't successfully saved due to quota exceed so throw an error
      }
    }
  }
}




// START set HTML function
// set_XML();
try{
  if(window.DOMParser){
    var parser = new DOMParser() ; 
    // xmlDoc = parser.parseFormString("<root></root>", "text/xml");
  }
  else{
    xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async=false;
    xmlDoc.loadXML(localStorageRow);
  }
}catch (error){
  alert(error);
}

// START HTML DISPLAY 
function updateHTMLListe(){
  xmlString = "nulls"
  listeHTML = document.querySelector('#liste');
  for(i=0 ; i<localStorage.length ; i++)
  {
    
    xmlString = get_XML(i);

    // needs some refining
   
  
    line = document.createElement("tr");
    col1 = document.createElement("td");
    col2 = document.createElement("td");
    col3 = document.createElement("td");
    col4 = document.createElement("td");
    col5 = document.createElement("td");
    col1.innerHTML = i;
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

        supprimerButton.onclick = function(){}; // TODO  =========================

    col5.appendChild(supprimerButton);
    col5.style.width = "10px";
    line.appendChild(col1);
    line.appendChild(col2);
    line.appendChild(col3);
    line.appendChild(col4);
    line.appendChild(col5);

    listeHTML.appendChild(line);
  }
}
// set_XML("hello");
updateHTMLListe();
// END HTML DISPLAY
// END set function


// var xmlDoc = document.implementation.createDocument(null, "xmltest.xml");
var xml = "<root></root>";
// var parser = new DOMParser(),
//   xmlDoc = parser.parseFormString(xml, "text/xml");




// test if it works 
alert("donne");

 