const loadTool = async() =>{
    const url = ` https://openapi.programming-hero.com/api/ai/tool/01`
    const res = await fetch (url);
    const data = await res.json ();
    console.log(data.data); 
}

const displayTool = tool =>{
    const toolContainer = document.getElementById('tool-container');
    tool.forEach(tool =>{
        const toolDiv = document.createElement('div');
        toolDiv.classList.add('col');
        toolDiv.innerHTML = `
        <div class="card h-100">
              <img src="${tool.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Features</h5>
                <ul>
                  <li>Natural language processing</li>
                  <li>Contextual understanding</li>
                  <li>Text generation</li>
                </ul>
              </div>
        `;
        toolContainer.appendChild(toolDiv)
    })
}

loadTool ();