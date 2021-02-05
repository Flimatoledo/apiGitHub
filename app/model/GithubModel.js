class GithubModel {

    constructor() {

        throw new Error('Esta classe não pode ser instanciada, acesse diretamente os métodos!');
        
    }

    static buscar(usuario) {

        const buscarUsuario = new XMLHttpRequest();
        buscarUsuario.open('GET', `https://api.github.com/users/${usuario}/repos`);
        
        const userOBJ = new GitHubController();
        buscarUsuario.addEventListener('load', () => {

            try {
                if (buscarUsuario.status == 200) {

                    const usuarioSTR = buscarUsuario.responseText;
                    const usuarioOBJ = JSON.parse(usuarioSTR);

                   
                    userOBJ.recebeUsuario(usuarioOBJ);
                    
                } else {
                    
                    userOBJ.error404();
                    throw new Error('Alguma coisa errada nao esta certa!');

                }
            } catch (e) {

                console.log(e);

            }
            
        });

        buscarUsuario.send();

    };

}
