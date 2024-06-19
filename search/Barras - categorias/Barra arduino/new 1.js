const searchWrapper = document.querySelector(".search");
const inputBox = searchWrapper.querySelector("input");
const sugestBox = searchWrapper.querySelector(".list");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //dados inseridos pelo usuário
    let emptyArray = [];

    if (e.key === 'Enter'){
        if(userData){
            window.open(`https://www.youtube.com/results?search_query=arduino+${userData.replace(' ', '+')}`, '_blank');
        }
    }

    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.youtube.com/results?search_query=arduino+${userData.replace(' ', '+')}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtrando valores do array e caracteres do usuário para minúsculas e retornando apenas as palavras que começam com os caracteres inseridos pelo usuário
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passando os dados retornados dentro da tag li
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //mostra a caixa de sugestões
        showSuggestions(emptyArray);
        let allList = sugestBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            // adicionando o atributo onclick em todas as tags li
            allList[i].setAttribute("onclick", "select(this)");
        }

        if (e.key === 'Escape'){
            searchWrapper.classList.remove("active");
        }
    } else {
        searchWrapper.classList.remove("active"); //esconde a caixa de sugestões
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.youtube.com/results?search_query=arduino+${selectData.replace(' ', '+')}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    console.log(!list.length);
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
        listData = list.join('');
    }
    sugestBox.innerHTML = listData;
}
