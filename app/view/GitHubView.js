class GitHubView {

    constructor() {
        this.repos = document.querySelector('#links');
        this.reposName = document.querySelector('.title-repos');
        this.octo = document.querySelector('.octocat');
        this.octo404 = document.querySelector('.octocat404');
    }

    update(modeloUsuario) {

        modeloUsuario.forEach((element) => {

            let div = document.createElement('div');
            div.classList.add('divLinks');
            let link = `<a href="${element.html_url}">${element.name}</a><p class="icons">${element.language}</p>`;
            div.innerHTML = link;
            this.repos.appendChild(div);

            this.reposName.textContent = `Repos ${element.owner.login}`;
            console.log(element);

        });

        this.octo.classList.add('invisible');

    }

    err(){
        
        this.octo.classList.add('invisible');
        this.octo404.classList.remove('invisible');
    }
}