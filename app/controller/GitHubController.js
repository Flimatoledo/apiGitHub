class GitHubController{

    constructor(){

        this.usuarioGitHub = document.querySelector('[data-usuario-github]');
        this.gitView = new GitHubView();
    }

    buscaUsuarios(event){

        event.preventDefault();
        GithubModel.buscar( this.usuarioGitHub.value);

    }

    recebeUsuario(usuarioModelo){
        this.gitView.update(usuarioModelo);
    }

    error404(){
        console.log('1')
        this.gitView.err()
    }

}