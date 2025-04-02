document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao document.getElementById('aumentar-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })
})
//Código omitido

<script src="script.js"></script>

//Código omitido
document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao document.getElementById('aumentar-fonte');
    const diminuiFonteBotao document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

})
<body>

    <header class=" p-5">
        
        <nav class="container d-flex justify-content-between align-items-center" >
            <img src="img/logo.png" class="nav-img" loading="lazy">
            <ul class="nav mt-5">
                <li class="nav-item"><a class="nav-link" href="#inicio">Início</a></li>
                <li class="nav-item"><a class="nav-link" href="#galeria">Galeria</a></li>
                <li class="nav-item"><a class="nav-link" href="#contato">Contato</a></li>
            </ul>
                <div id="acessibilidade">
                    <button id="aumentar-fonte" class="btn btn-primary fw-bold">A+</button>
                    <button id="diminuir-fonte" class="btn btn-primary fw-bold">A-</button>
                </div>
        </nav>
</header>

//Código omitido