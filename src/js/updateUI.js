export function updateUI(data) {
    data.forEach((words)=>{
        const update = document.querySelector(".update");
        const { phonetics, word, meanings, sourceUrls } = words;
        const div = document.createElement("div");
        update.innerHTML = "";
        div.innerHTML = `
                    <div class="keyboard">
                        <div class="keyboard-title">
                            <h1 class="title">${word}</h1>
                            <h5 class="transcription">${phonetics[1].text}</h5>
                        </div>
                        <img class="play" src="./images/play.svg" alt="play">
                    </div>
                    <div class="hr">
                        <h4 class="noun">noun</h4>
                        <div class="line"><hr></div>
                    </div>
                    <h5 class="meaning">${meanings[0].definitions[0].definition}</h5>
                    <ul class="info">
                        <li class="desc item1">
                        ${meanings[2].definitions[0].definition}
                        </li>
                        <li class="desc item2">
                        ${meanings[2].definitions[2].definition}
                        </li>
                        <li class="desc item3">
                        ${meanings[2].definitions[3].definition}
                        </li>
                    </ul>
                    <h4 class="Synonyms">Synonyms <span class="span"></span></h4>
                    <div class="hr">
                        <h4 class="verb">verb</h4>
                        <div class="line"><hr></div>
                    </div>
                    <h5 class="meaning">${meanings[1].definitions[0].definition}</h5>
                    <ul class="info-list">
                        <li class="info-desc">
                            ${meanings[2].definitions[0].definition}
                        </li>
                    </ul>
                    <p class="verb-text">
                    ${meanings[2].definitions[0].example}
                    </p>
                    <hr class="footer-hr">
                  `;
        update.appendChild(div);
      
        const play = document.querySelector(".play");
        const span = document.querySelector(".span");
        const link = document.querySelector(".link");
      
        link.href = `${sourceUrls[0]}`;
        link.textContent = `${sourceUrls[0]}`;
      
        play.addEventListener("click", () => {
          const audio = new Audio(phonetics[0].audio);
          audio.play();
        });
      
        meanings[0].synonyms.forEach((synonym) => {
          span.textContent = `${synonym ? synonym : "no synonyms"}`;
        });
    })
}
