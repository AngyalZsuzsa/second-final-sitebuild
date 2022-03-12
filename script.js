function movies(data, index) {
    return `
        
        <main data-index="${index+1}" class="data-card">
            <h2>${data.title}</h2>
            <h4>${data.sub}</h4>
            <h5>${data.text}</h5>
            <button>Watch</button>
        </main>`
}


function loadEvent() {
    const rootElement = document.getElementById("root");

    for (let i = 0; i < datas.length; i++) {
        const data = datas[i];
        rootElement.insertAdjacentHTML("beforeend", movies(data, i))
    }

    
}




window.addEventListener("load", loadEvent);