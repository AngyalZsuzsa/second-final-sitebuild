function movies(data, index) {
    return `
        
        <main data-index="${index+1}" class="data-card">
            <h4>${data.title}</h4>
            <h2>${data.sub}</h2>
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