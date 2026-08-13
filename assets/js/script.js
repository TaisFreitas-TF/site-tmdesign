const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

if(btnMenu && menu){

    btnMenu.addEventListener("click",()=>{

        menu.classList.toggle("ativo");

        btnMenu.innerHTML = menu.classList.contains("ativo")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

    });

    document.querySelectorAll("#menu a").forEach(link=>{

        link.addEventListener("click",()=>{

            menu.classList.remove("ativo");
            btnMenu.innerHTML='<i class="fas fa-bars"></i>';

        });

    });

}