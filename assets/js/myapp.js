function openForm(){
	document.getElementById("addform").style.top = "22px";

}

function closeForm(){
	document.getElementById("addform").style.top = "-3000px";
  // reset form
  document.getElementById("form").reset();
}

// change html part
// START boucle for in here
localStorage_lenght = localStorage.length

function get_XML (id){
  xmlString = localStorage.getItem(id);
  if (xmlString == null )
    {
      if(xmlString === undefined)
        xmlString = "undefined"
      else xmlString = "error"
    }
  parser = new DOMParser();
  xmlDoc = parser.parseFromString(xmlString,"text/xml");
  // return xmlString;
  return xmlDoc;
} 

function supprimer(id_c){
  var line_elem =  document.getElementById(id_c);
  line_elem.parentNode.removeChild(line_elem);
  
  localStorage.clear();
  set_local();
}

function set_local()
{
  j = 0;
  for (i=0; i<localStorage.length; i++)
  {
    (function(index, ind){
      try{
        name = document.getElementById(index+'_car').childNodes[0].innerHTML;
        name_car =  document.getElementById(index+'_car').childNodes[0].innerHTML;
        model_car =  document.getElementById(index+'_car').childNodes[1].innerHTML;
        date_car =  document.getElementById(index+'_car').childNodes[2].innerHTML;
        mileage_car =  document.getElementById(index+'_car').childNodes[3].innerHTML;

        bgcolor_car =  document.getElementById(index+'_car').childNodes[4].innerHTML;

        xml_str = "<car><make>"+name_car+"</make>";
        xml_str += "<model>"+ model_car+ "</model>";
        xml_str += "<date>"+ date_car+ "</date>";
        xml_str += "<bgcolor>"+bgcolor_car+"</bgcolor>"
        xml_str += "<mileage>"+ mileage_car+ "</mileage>";

        xml_str += "</car>"
        alert(xml_str+" \n\t =>"+j);
        save_XML(j, xml_str);
        j += 1;
      }catch(err){

      }
    })(i)
  }
  // localStorage.removeItem(i);

}

function modifier(id_c)
{ 
  openForm();

  // get line id 
  line_id = id_c+"_car";
  // get xmlDom
  xml_dom = get_XML(id_c);
  //  update form
  document.getElementById("Form_h2").innerHTML = "Modifier";
  document.getElementById("car-name").value = xmlDOM.getElementsByTagName("car")[0].childNodes[0].textContent; // make
  document.getElementById("car-model").value = xmlDOM.getElementsByTagName("car")[0].childNodes[1].textContent;
  document.getElementById("car-date").value = xmlDOM.getElementsByTagName("car")[0].childNodes[2].textContent;
  document.getElementById("car-bgcolor").value = xmlDOM.getElementsByTagName("car")[0].childNodes[3].textContent;
  document.getElementById("car-mileage").value = parseInt(xmlDOM.getElementsByTagName("car")[0].childNodes[4].textContent);

  document.getElementById('submit').onclick = function(){

    name_car =  document.getElementById("car-name").value;
    model_car =  document.getElementById("car-model").value;
    date_car =  document.getElementById("car-date").value;
    bgcolor_car =  document.getElementById("car-bgcolor").value;
    mileage_car =  document.getElementById("car-mileage").value;
    // create xml string
    xml_str = "<car><make>"+name_car+"</make>";
    xml_str += "<model>"+ model_car+ "</model>";
    xml_str += "<date>"+ date_car+ "</date>";
    xml_str += "<bgcolor>"+bgcolor_car+"</bgcolor>";
    xml_str += "<mileage>"+mileage_car+"</mileage>";

    xml_str += "</car>"
    // SAVE in local storage
    save_XML(id_c, xml_str);
    document.getElementById("Form_h2").value = "Form";
    document.getElementById('submit').onclick = function (){ set_form() };
  };

}


function set_form()
{
  name_car =  document.getElementById("car-name").value;
  model_car =  document.getElementById("car-model").value;
  date_car =  document.getElementById("car-date").value;
  bgcolor_car =  document.getElementById("car-bgcolor").value;
  mileage_car =  document.getElementById("car-mileage").value;

  // extract all element from from  html
  // to xml  
  // <th>Make</th> <th>Model</th> <th>Year</th> <th>mileage</th>   <th>Exterior Color</th>

  xml_str = "<car><make>"+name_car+"</make>";
  xml_str += "<model>"+ model_car+ "</model>";
  xml_str += "<date>"+ date_car+ "</date>";
  xml_str += "<bgcolor>"+bgcolor_car+"</bgcolor>";
  xml_str += "<mileage>"+mileage_car+"</mileage>";

  xml_str += "</car>"
  //  then save
  save_XML(localStorage.length, xml_str);  
}

function save_XML(pos, xmlRowString)
{
  if (typeof(localStorage) == 'undefined' ) 
  {
    alert('Your browser does not support HTML5 localStorage. Try upgrading.');
  } 
  else 
  {   
    try                          
    { 
           
      localStorage.setItem(pos, xmlRowString);
      
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

function updateHTMLListe()
{
  xmlDOM = "";
  listeHTML = document.querySelector('#liste');
  for(i=0 ; i<localStorage.length ; i++)
  {
      xmlDOM = get_XML(i);
     
      line = document.createElement("tr");
      line.id = i+"_car";
      line.class = "car";
      col1 = document.createElement("td");
      col2 = document.createElement("td");
      col3 = document.createElement("td");
      col4 = document.createElement("td");
      col5 = document.createElement("td");
      col6 = document.createElement("td");
      col7 = document.createElement("td");

      col1.innerHTML = xmlDOM.getElementsByTagName("car")[0].childNodes[0].textContent;
      col2.innerHTML = xmlDOM.getElementsByTagName("car")[0].childNodes[1].textContent;
      col2.style.width = "300px"
      col3.innerHTML = xmlDOM.getElementsByTagName("car")[0].childNodes[2].textContent;
      col4.innerHTML = xmlDOM.getElementsByTagName("car")[0].childNodes[4].textContent;
      col5.innerHTML = xmlDOM.getElementsByTagName("car")[0].childNodes[3].textContent;

      col6.style.width = "10px";
          modifierButton = document.createElement("button");
          modifierButton.class = "button primary small";
          modifierButton.id = i;
          modifierButton.innerHTML = "modifier";

    col7.style.width = "10px";
          supprimerButton = document.createElement("button");
          supprimerButton.class = "button small";
          supprimerButton.innerHTML = "supprimer";

    (function(index, id){
          modifierButton.onclick = function(){ 
            modifier(index);
          ; }; 

          supprimerButton.onclick = function(){
            supprimer(id);
          }; // TODO  =========================

    })(i, line.id)

    col6.appendChild(modifierButton);

    col7.appendChild(supprimerButton);

    line.appendChild(col1);
    line.appendChild(col2);
    line.appendChild(col3);
    line.appendChild(col4);
    line.appendChild(col5);
    line.appendChild(col6);
    line.appendChild(col7);

    listeHTML.append(line);
  }
}

// END shit chat


updateHTMLListe();

// test if it works 
alert("donne");

 