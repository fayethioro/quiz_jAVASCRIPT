const quizData = [
    {
        question: "Qu'est-ce qu'un doctype ?",
        a: "Un document type",
        b: "Déclarer le type de document aux normes du W3C",
        c: "Permet de déclarer le type d'affichage du CSS utilisé.",
        d: "Permet de déclarer le type d'affichage du JS utilisé.",
        correct: "b",
    },
    {
        question: "Est-ce que tous les navigateurs affichent de la même manière les pages html ?",
        a: "Non",
        b: "Oui",
        c: "Selon le nombre de page",
        d: "aucun",
        correct: "a",
    },
    {
        question: "Quel langage est dit 'dynamique' ?",
        a: "CSS",
        b: "HTML",
        c: "PHP",
        d: "C",
        correct: "c",
    },
    {
        question: "Qu'est-ce que ajax ?",
        a: "Une norme européene pour la conception de pages web",
        b: "Un produit ménager",
        c: "Un ensemble de langages constituant la norme web 2. 0",
        d: "Les trois",
        correct: "c",
    },
    {
        question: "De quelle manière ne peut-on pas intégrer des feuilles de style CSS ? ?",
        a: "En externe",
        b: "En exportant",
        c: "En interne",
        d: "les trois",
        correct: "b",
    },
    {
        question: "Que permet la commande onkeypress ?",
        a: "De déclencher une action par un clic",
        b: "D'envoyer un message vocal",
        c: "D'effacer le contenu d'une page",
        d: "D'afficher le contenu d'une page",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const reponseEls = document.querySelectorAll('.reponse')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let QuizSuivant = 0
let score = 0


loadQuiz()

function loadQuiz()
 {

     deselectreponses()

    const QuizSuivantData = quizData[QuizSuivant]

    questionEl.innerText = QuizSuivantData.question
    a_text.innerText = QuizSuivantData.a
    b_text.innerText = QuizSuivantData.b
    c_text.innerText = QuizSuivantData.c
    d_text.innerText = QuizSuivantData.d
}

function deselectreponses() 
{
    reponseEls.forEach(reponseEl => reponseEl.checked = false)
}

function getSelected() 
{
    let reponse
    reponseEls.forEach(reponseEl => {
        if(reponseEl.checked) 
        {
            reponse = reponseEl
        }
    })
    return reponse
}


submitBtn.addEventListener('click', () => {
    const reponse = getSelected()
    if(reponse)
     {
       if(reponse === quizData[QuizSuivant].correct)
        {
           score++
        }

       QuizSuivant++

       if(QuizSuivant < quizData.length) 
       {
           loadQuiz()
       } else 
       {
           quiz.innerHTML = `
           <h2>Vous avez repondu ${score}/${quizData.length} questions correctement</h2>

           <button onclick="location.reload()">Rejouez</button>
           `
       }
    }
})