let contador = 0;

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $("#add").click(agregando);
    
      });

var agregando = function(){
    let $tar =$("<div/>", { "class": "contactoAgregado" });
    let $nom =$("<h5/>", { "class":"nombreContacto" });
    let $tel =$("<p/>", {"class":"telefono"});
    let $contactos =$("#contactos");
     $nom.text($("#icon_prefix").val());
    $tel.text($("#icon_telephone").val());
    
    $tar.append($nom);
    $tar.append($tel);
    
    $contactos.append($tar);
    
    contador ++;
    
    $("span").text(contador);
}


    
   /* let $tar =$("<div/>", { "class": "contactoAgregado" });
    let $nom =$("<h5/>", { "class":"nombreContacto" });
    let $tel =$("<p/>", {"class":"telefono"});
    let $contactos =$("#contactos");
    let $botonagregar =$("#add");
    
    $nom.text($("#icon_prefix").val());
    $tel.text($("#icon_telephone").val());
    
    $tar.append($nom);
    $tar.append($tel);
    
    $contactos.append($tar);
    
    contador ++;
    
    $("span").text(contador);
    
    
    //AGREGAR NOMBRE :
    
    */
