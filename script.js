const allQuestions = [
  {
        question: "מהו מדד ת״א 35?",
        options: [
            "מדד המכיל את 35 החברות הגדולות בבורסה הישראלית",
            "מדד המכיל את 35 החברות הרווחיות ביותר",
            "מדד המכיל את 35 החברות עם הדיבידנד הגבוה ביותר",
            "מדד המכיל את 35 החברות הצומחות ביותר"
        ],
        correct: 0,
        level: 1
    },
    {
        question: "מהי קרן נאמנות?",
        options: [
            "השקעה ישירה במניות",
            "השקעה משותפת המנוהלת על ידי מנהל מקצועי",
            "חשבון חיסכון בבנק",
            "הלוואה בנקאית"
        ],
        correct: 1,
        level: 1
    },
    {
        question: "מהו דיבידנד?",
        options: [
            "סוג של אגרת חוב",
            "עמלת קנייה ומכירה",
            "חלוקת רווחים לבעלי המניות",
            "הנפקת מניות חדשה"
        ],
        correct: 2,
        level: 1
    },
    {
        question: "מהי אסטרטגיית Buy and Hold?",
        options: [
            "קנייה ומכירה תכופה של מניות",
            "קניית מניות והחזקתן לטווח ארוך",
            "השקעה רק במניות דיבידנד",
            "השקעה בקרנות נאמנות בלבד"
        ],
        correct: 1,
        level: 1
    },
    {
        question: "מהו מסחר בחסר (Short)?",
        options: [
            "מכירת נכס שאין ברשותך",
            "קניית מניות לטווח קצר",
            "השקעה בחברות קטנות",
            "מסחר בשעות מוקדמות"
        ],
        correct: 0,
        level: 2
    },
    {
        question: "מהו P/E?",
        options: [
            "יחס בין מחיר המניה לרווח למניה",
            "יחס בין נכסים להתחייבויות",
            "אחוז הצמיחה השנתי",
            "שווי שוק החברה"
        ],
        correct: 0,
        level: 2
    },
    {
        question: "מהי ריבית דריבית?",
        options: [
            "ריבית על ההלוואה הראשונית",
            "ריבית על הריבית שהצטברה",
            "ריבית קבועה",
            "ריבית משתנה"
        ],
        correct: 1,
        level: 1
    },
    {
        question: "מהו ETF?",
        options: [
            "קרן נאמנות סגורה",
            "קרן המשקיעה רק במניות",
            "קרן סל הנסחרת בבורסה",
            "קרן גידור"
        ],
        correct: 2,
        level: 2
    },
    {
        question: "מהו פיזור השקעות?",
        options: [
            "השקעה במניה אחת בלבד",
            "השקעה במספר נכסים שונים להקטנת הסיכון",
            "השקעה רק באגרות חוב",
            "השקעה בשוק ההון בלבד"
        ],
        correct: 1,
        level: 1
    },
    {
        question: "מהי נזילות?",
        options: [
            "היכולת למכור נכס במהירות ללא פגיעה במחיר",
            "כמות הכסף בחשבון הבנק",
            "רווח מהשקעה",
            "הפסד מהשקעה"
        ],
        correct: 0,
        level: 1
    },
    {
        question: "מהו מדד המעוף?",
        options: [
            "מדד המודד את התנודתיות בשוק",
            "מדד המודד את הצמיחה במשק",
            "מדד המודד את האינפלציה",
            "מדד המודד את הריבית במשק"
        ],
        correct: 0,
        level: 2
    },
    {
        question: "מהי אג״ח קונצרנית?",
        options: [
            "אגרת חוב ממשלתית",
            "אגרת חוב שמנפיקה חברה",
            "אגרת חוב מוניציפלית",
            "אגרת חוב בינלאומית"
        ],
        correct: 1,
        level: 1
    },
    {
        question: "מהו ניתוח טכני?",
        options: [
            "ניתוח דוחות כספיים",
            "ניתוח מגמות מחירים וגרפים",
            "ניתוח כלכלי של החברה",
            "ניתוח של הענף"
        ],
        correct: 1,
        level: 2
    },
    {
        question: "מהו ניתוח פונדמנטלי?",
        options: [
            "ניתוח גרפים",
            "ניתוח מחזורי מסחר",
            "ניתוח נתונים כלכליים של החברה",
            "ניתוח טכני"
        ],
        correct: 2,
        level: 2
    },
    {
        question: "מהי הנפקה ראשונית (IPO)?",
        options: [
            "מכירת מניות לציבור בפעם הראשונה",
            "הנפקת אגרות חוב",
            "חלוקת דיבידנד",
            "מכירת החברה"
        ],
        correct: 0,
        level: 1
    }
];
];

let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let timer;
let timeLeft;
let currentLevel = 1;

function selectQuestionsForLevel(level) {
    const levelQuestions = allQuestions.filter(q => q.level === level);
    const shuffled = shuffleArray([...levelQuestions]);
    return shuffled.slice(0, 10);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.quiz-container').classList.add('active');
    currentQuestions = selectQuestionsForLevel(currentLevel);
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function startTimer() {
    timeLeft = 30;
    updateTimer();
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function updateTimer() {
    const timerElement = document.querySelector('.timer');
    timerElement.textContent = `${timeLeft} שניות`;
    if (timeLeft <= 5) {
        timerElement.classList.add('warning');
    } else {
        timerElement.classList.remove('warning');
    }
}

function showQuestion() {
    clearInterval(timer);
    startTimer();
    
    selectedAnswer = null;
    const question = currentQuestions[currentQuestion];
    document.querySelector('.question').textContent = question.question;
    document.querySelector('.question-number').textContent = `שאלה ${currentQuestion + 1} מתוך 10`;
    
    const optionsContainer = document.querySelector('.options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });

    updateProgress();
}

function selectOption(index) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[index].classList.add('selected');
    selectedAnswer = index;
}

function nextQuestion() {
    clearInterval(timer);

    if (selectedAnswer !== null && selectedAnswer === currentQuestions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion >= currentQuestions.length) {
        showResults();
    } else {
        showQuestion();
    }
}

function updateProgress() {
    const progress = (currentQuestion / currentQuestions.length) * 100;
    document.querySelector('.progress-bar').style.width = `${progress}%`;
}

function getEmoji(percentage) {
    if (percentage >= 90) return '🏆';
    if (percentage >= 80) return '🌟';
    if (percentage >= 70) return '😊';
    if (percentage >= 50) return '🤔';
    return '😢';
}

function showResults() {
    document.querySelector('.quiz-container').classList.remove('active');
    document.querySelector('.result-screen').style.display = 'block';
    
    const percentage = (score / currentQuestions.length) * 100;
    document.querySelector('.score').textContent = `${percentage}%`;
    document.querySelector('.emoji').textContent = getEmoji(percentage);
    
    let message = '';
    if (percentage >= 90) {
        message = 'מצוין! יש לך ידע מעמיק בשוק ההון';
    } else if (percentage >= 70) {
        message = 'טוב מאוד! יש לך הבנה טובה בשוק ההון';
    } else if (percentage >= 50) {
        message = 'יש לך ידע בסיסי בשוק ההון. כדאי להמשיך ללמוד';
    } else {
        message = 'מומלץ ללמוד יותר על שוק ההון לפני שמתחילים להשקיע';
    }
    
    document.querySelector('.message').textContent = message;
    
    const nextLevelBtn = document.querySelector('.next-level');
    if (percentage >= 70) {
        nextLevelBtn.style.display = 'block';
    } else {
        nextLevelBtn.style.display = 'none';
    }
}

function startNextLevel() {
    currentLevel++;
    document.querySelector('.result-screen').style.display = 'none';
    startQuiz();
}

function restartQuiz() {
    document.querySelector('.result-screen').style.display = 'none';
    startQuiz();
}
