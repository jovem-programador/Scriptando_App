// Crie uma instância do objeto provedor do Google
var provider = new firebase.auth.GoogleAuthProvider();

// Usa o idioma do navegador no Firebase
firebase.auth().useDeviceLanguage();

// Variável global com os dados do usuário
var user = {};

// Roda a aplicação ao carregar o documento
$(document).ready(authApp);

// Aplicação principal -- Observar eventos
function authApp() {

    // Observador de usuários
    firebase.auth().onAuthStateChanged(userStatus);

    // Monitora cliques no login
    $(document).on('click', '.login', login);

    // Monitora cliques no logout
    $(document).on('click', '.logout', Logout);
}

// Altera o status do usuário
function userStatus(userData) {

    if (userData) {

        // Função que chama se o usuário estra logado
        isLoged(userData);

    } else {

        // Quando não estiver logado
        notLoged();
    }
}

// Faz login do usuário
function login() {

    // Login usando pop-up
    firebase.auth().signInWithPopup(provider);

    // Redirecionar home
    $.get('pages/home.html', '', function (data) {
        $('#main').html(data);
    });

    // (Opcional) Oculta o menu principal
    hideMenu();
}

// Faz logout do usuário
function Logout() {

    if (confirm('Tem certeza que deseja sair')) {
        // Faz Logout
        firebase.auth().signOut();

        // Redirecionar home
        $.get('pages/home.html', '', function (data) {
            $('#main').html(data);
        });

        // (Opcional) Oculta o menu principal
        hideMenu();
    }
}

function isLoged(userData) {

    //Fazer isso quando alguem está logado

    // Atribuir dados ao usuário
    user = userData;

    // limita o nome do usuário
    var displayName = user.displayName.substr(0, 12);

    // Mostra a opção de logout
    var out = `
        <img src="${user.photoURL}" alt="${user.displayName}">
        <span>&nbsp;${displayName}</span>
        <a href="#user" class="logout"><i class="fas fa-fw fa-sign-out-alt"></i>
        `;

    //Atualiza o DOM
    $('#usermenu').html(out);

    // Mostra botão do perfil no menu principal
    $('#perfil').css('display', 'block');

}


function notLoged() {

    // Fazer isso quando não tem usuário logado

    // Mostra opção de login
    var out = `
        <i class="fas fa-fw fa-user-circle"></i>
        <span>&nbsp;Logar-se...</span>
        <a href="#user" class="login"><i class="fas fa-fw fa-sign-in-alt"></i></a>
        `;

    // Atualiza o DOM
    $('#usermenu').html(out);

    // Ocultar botão do perfil no menu principal
    $('#perfil').css('display', 'none');

    // Carrega o documento
    $.get('pages/home.html', '', function (data) {

        // Grava o documento na tag <main>
        $('#main').html(data);

        // Oculta o menu
        //hideMenu();

    });
}