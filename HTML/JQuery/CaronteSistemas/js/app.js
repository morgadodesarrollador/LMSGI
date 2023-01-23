let doc = $(document);
doc.ready(iniciar);


function iniciar(){
    console.log ('iniciando');
    let opcion = $("header #header-content nav#principal a");
    $(opcion).on('click', cargar);
    $("header #navicon").on('click', mostrarmenu);
}

function mostrarmenu(){
    $("header #principal").slideToggle();

}

function cargar(){
    let id = $(this).attr('id');
    let estilo = '<link rel="stylesheet" type="text/css" href="css/'+id+'.css">';
    $("head").children().last().remove();
    $("head").append(estilo);
    console.log(estilo);
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    
    let ruta = "html/"+id+".html";
    console.log(ruta);
    $("main section").load(ruta);

}