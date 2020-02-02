var projetosListados = {
    dados : 
    [
        {
            titulo : "Projeto LogQuest - TCC (Grupo)",
            nome: "LogQuest",
            foco : "Web e Unity",
            descricao : "Para desenvolver a capacidade de lógica em programação.",
            tecnologias:[
                "Unity 2D",
                "Asp.NET MVC",
                "MySQL",
                "WebService XML Asp.net",
                "Javascript",
                "CSS -> Bootstrap",
                "HTML"
            ],
            site: "https://logquest.com.br/",
            logo: "LogoLogQuest.png"
        },
        {
            titulo : "Co-projeto EsquizoBook - TCC Enfermagem",
            nome: "EsquizoBook",
            foco : "Web",
            descricao : "Rede Social/Fórum para portadores de Esquizofrênia.",
            tecnologias:[
                "PHP MVC (Casca)",
                "MySQL-> Business Layer",
                "WebService XML Asp.net",
                "Javascript",
                "Jquery",
                "Ajax",
                "CSS -> Bootstrap",
                "Ckeditor; SweetAlert2",
                "HTML"
            ],
            site: "https://esquizobook.000webhostapp.com/",
            logo: "LogoEB.svg"
        },
        {
            titulo : "Projeto Dr. Sgar - Engenharia Biomédica (Grupo)",
            nome: "Dr. Sgar",
            foco : "Web e Unity",
            descricao : "Serious Game para auxiliar no tratamento de doenças respiratórias",
            tecnologias:[
                "Unity 2D",
                "Asp.NET MVC/NodeJS",
                "MySQL",
                "Api: Banco, backend, frontend",
                "Javascript",
                "Jquery",
                "CSS -> Bootstrap",
                "HTML"
            ],
            site: "https://drsgar.ga/",
            logo: "drSgar.svg"
        },
        {
            titulo : "Metal 2027 (Grupo)",
            nome: "Metal 2027",
            foco : "Android/Unity",
            descricao : "Jogo shooter de plataforma ",
            tecnologias:[
                "Unity",
                "MSSQL",
                "Nodejs (API em ExpressJS)",
                "CSS -> Bootstrap",
            ],
            site: "https://api-metal2027.herokuapp.com/",
            logo: "metal.jpg"
        },
        {
            titulo : "Projeto Sustentando - Gestão da Inovação (Grupo)",
            nome: "Sustentando",
            foco : "Web",
            descricao : "Plataforma para divulgação e localização de eventos e economia criativa da Cidade Criativa de Santos, feito pela Unisanta com parceria da Prefeitura de Santos",
            tecnologias:[
                "NodeJS (ExpressJS)",
                "MySQL",
                "Front: Javascript/CSS/HTML",
                "Jquery/Ajax",
                "Google Devs(Maps, Places, Login, Markers)"
            ],
            site: "https://sustentando.herokuapp.com/",
            logo: "sustentando.PNG"
        }
    ],
    setar: () =>{
        let html = ``;
        projetosListados.dados.forEach(projeto =>{
            let htmlProvisorio = ``;
            htmlProvisorio += 
            `<div class="row">
                <div class="col-md-7">
                        <img class="img img-fluid " src="img/${projeto.logo}" alt="${projeto.nome}">							
                </div>
                <div class="col-md-5">
                    <h3 class="h2">${projeto.titulo}</h3>
                    <h4>${projeto.foco}</h4>
                    <p>
                        ${projeto.descricao}
                        <ul>Técnologias Utilizadas até o momento:`;
                            projeto.tecnologias.forEach(tecnologia =>{
                                htmlProvisorio += `<li>${tecnologia}</li>`;
                            })
            htmlProvisorio +=     `</ul>
                        Acesse:	<button value="${projeto.site}" class="site btn btn-link" style="color:black">${projeto.nome}</button>
                    </p>
                </div>
            </div>`;
            html = htmlProvisorio + html;
        });
        document.querySelector("#projetosDIV").innerHTML = html;
    }
}
$(function(){
    projetosListados.setar();
    $(".site").click(function(){
        $('#siteModal').modal('show');
        $("#frameworkurl").attr("src", $(this).val());
    })
})

