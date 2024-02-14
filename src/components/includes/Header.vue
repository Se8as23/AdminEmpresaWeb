<template>
    <div class="header">
        <a href="#" class="header__logo"></a>

        <ul class="header__menu">
            <li class="header__menu__item">
                <a :href="'inicioSecion.vue'" class="header__menu__item__link">
                    Iniciar sesión
                </a>
            </li>
            <li class="header__menu__item">
                <a href="Registro.vue" class="header__menu__item__link">
                    Registrarse
                </a>
            </li>
        </ul>
    </div>
    <div class="header2">
           <a href="#" class="header2__logo"> <img src="data:image/png;base64,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" alt="Logo de UPS" style="height: 50px;"> </a>

        <ul class="header2__menu">
            <li class="header2__menu__item">
                <a href="#" class="header2__menu__item__link">
                    Catalogo de servicios
                </a>
            </li>
            <li class="header2__menu__item">
                <a href="#" class="header2__menu__item__link">
                    Catalogo de emprendedores
                </a>
            </li>
        </ul>

    </div>
    <div class="header3">
           <a href="#" class="header3__logo"></a>

        <ul class="header3__menu">
            <li class="header2__menu__item">
                <a href="#" class="header3__menu__item__link">
                    
                </a>
            </li>
            <li class="header3__menu__item">
                <a href="#" class="header3__menu__item__link">
                    
                </a>
            </li>
        </ul>

    </div>
</template>

<script>
export default{
    name: 'Header'
}
</script>

<style lang="scss" scoped>

.header{
    background-color: #003772;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
   
    &__logo {
        color: #ffffff;
        
        font-size: 24px;
        text-decoration: none;
    }
    &__menu {
        display: none;
        display: flex;
        list-style: none;
        padding: 0px;
        margin: 0px;
        &__item {
            margin: 5px;
            &__link {
                display: block;
                padding: 5px 10px;
                color: #ffffff;
                text-decoration: none;
                
            }
        }
    }
    
}

//Segundo header

.header2{
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
   
    &__logo {
        color: #000000;
        
        font-size: 24px;
        text-decoration: none;
    }
    &__menu {
        display: none;
        display: flex;
        list-style: none;
        padding: 10px;
        margin: 0px;
        &__item {
            margin: 5px;
            
            &__link {
                display: block;
                padding: 5px 10px;
                color: #000000;
                text-decoration: none;
                
            }
        }
    }
}


//Tercer header

.header3{
    background-color: #003772;
}
</style>