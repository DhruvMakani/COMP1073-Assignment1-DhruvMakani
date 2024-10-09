const wordList1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const wordList2 = ["Sat on", "Danced with", "Saw", "Doesn't like", "Kissed"];
const wordList3 = ["A funny", "A scary", "A goofy", "A slimy", "A barking"];
const wordList4 = ["Goat", "Monkey", "Cow", "Frog", "Bug", "Worm"];
const wordList5 = ["On the moon", "On the chair", "In my spaghetti", "In my soup", "On the grass", "In my shoes"];

let word1Index = 0;
let word2Index = 0;
let word3Index = 0;
let word4Index = 0;
let word5Index = 0;

let btnWord1Pressed = false;
let btnWord2Pressed = false;
let btnWord3Pressed = false;
let btnWord4Pressed = false;
let btnWord5Pressed = false;

document.getElementById("Word1").addEventListener("click", () => updateWord(1));
document.getElementById("Word2").addEventListener("click", () => updateWord(2));
document.getElementById("Word3").addEventListener("click", () => updateWord(3));
document.getElementById("Word4").addEventListener("click", () => updateWord(4));
document.getElementById("Word5").addEventListener("click", () => updateWord(5));

document.getElementById("generate").addEventListener("click", buildSentence);
document.getElementById("reset").addEventListener("click", resetAll);
document.getElementById("random").addEventListener("click", randomSentence);

function updateWord(btnNumber) {
    switch (btnNumber) {
        case 1:
            document.getElementById("Word1").textContent = wordList1[word1Index++];
            btnWord1Pressed = true;
            if (word1Index === wordList1.length) word1Index = 0;
            break;
        case 2:
            document.getElementById("Word2").textContent = wordList2[word2Index++];
            btnWord2Pressed = true;
            if (word2Index === wordList2.length) word2Index = 0;
            break;
        case 3:
            document.getElementById("Word3").textContent = wordList3[word3Index++];
            btnWord3Pressed = true;
            if (word3Index === wordList3.length) word3Index = 0;
            break;
        case 4:
            document.getElementById("Word4").textContent = wordList4[word4Index++];
            btnWord4Pressed = true;
            if (word4Index === wordList4.length) word4Index = 0;
            break;
        case 5:
            document.getElementById("Word5").textContent = wordList5[word5Index++];
            btnWord5Pressed = true;
            if (word5Index === wordList5.length) word5Index = 0;
            break;
    }
}

function buildSentence() {
    if (!btnWord1Pressed || !btnWord2Pressed || !btnWord3Pressed || !btnWord4Pressed || !btnWord5Pressed) {
        alert("Please select all the words.");
        return;
    }

    const sentence = [
        document.getElementById("Word1").textContent,
        document.getElementById("Word2").textContent,
        document.getElementById("Word3").textContent,
        document.getElementById("Word4").textContent,
        document.getElementById("Word5").textContent
    ].join(" ") + ".";

    document.getElementById("storyBox").textContent = sentence;
}

function resetAll() {
    document.getElementById("Word1").textContent = "One";
    document.getElementById("Word2").textContent = "Two";
    document.getElementById("Word3").textContent = "Three";
    document.getElementById("Word4").textContent = "Four";
    document.getElementById("Word5").textContent = "Five";
    document.getElementById("storyBox").textContent = "Craft your message and watch it shine!";
    word1Index = word2Index = word3Index = word4Index = word5Index = 0;
    btnWord1Pressed = btnWord2Pressed = btnWord3Pressed = btnWord4Pressed = btnWord5Pressed = false;
}

function randomSentence() {
    const randomSentence = [
        wordList1[Math.floor(Math.random() * wordList1.length)],
        wordList2[Math.floor(Math.random() * wordList2.length)],
        wordList3[Math.floor(Math.random() * wordList3.length)],
        wordList4[Math.floor(Math.random() * wordList4.length)],
        wordList5[Math.floor(Math.random() * wordList5.length)]
    ].join(" ") + ".";

    document.getElementById("storyBox").textContent = randomSentence;
}
