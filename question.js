// Questions
const questions = [
    {
        "question": "1. วันนี้เป็นวันที่อากาศร้อนมาก คุณจะทำอะไร?",
        "answer1": "นอนเปิดแอร์เย็นสุดขั้วอยู่ในห้อง",
        "answer2": "ไปว่ายน้ำอาบแดดกันดีกว่า",
        "answer3": "ไปนั่งในสวนเย็นๆชมวิวชิวๆ",
        "answer4": "นั่งรับลมอยู่หน้าบ้าน",
    },
    {
        "question": "2. มีจานผลไม้ตั้งอยู่หน้าคุณ คุณจะเลือกกินอันไหน?",
        "answer1": "แอปเปิ้ล",
        "answer2": "อินผาลัม",
        "answer3": "ทุเรียน",
        "answer4": "เบอร์รี่",
    },
    {
        "question": "3. ถ้าคุณได้รับเลือกให้ทำหน้าที่เป็นผู้ดูแลสวนสัตว์ คุณอยากดูแลสัตว์ชนิดใด?",
        "answer1": "สิงโต",
        "answer2": "เรนเดียร์",
        "answer3": "อัลปาก้า",
        "answer4": "นกหัวขวาน",
    },
    {
        "question": "4. วันนี้คุณจะออกไปข้างนอก คุณจะเลือกแต่งตัวแบบไหน?",
        "answer1": "เสื้อเชิ้ตสีขาวโปร่งสบาย",
        "answer2": "เสื้อยืดตัวโปรด",
        "answer3": "เสื้อหนังสัตว์สุดเท่ๆ",
        "answer4": "เสื้อฮู้ดสุดเก๋",
    },
    {
        "question": "5. พรุ่งนี้คุณต้องเตรียต้นไม้เพื่อไปนำเสนอในงานจัดสวน คุณจะเลือกต้นไม้อะไร?",
        "answer1": "กระบองเพชร",
        "answer2": "ต้นเมเปิล",
        "answer3": "ต้นปาล์มๆ",
        "answer4": "ต้นเฟอร์",
    },
    {
        "question": "6. คุณได้ตั๋วฟรีได้ไปท่องเที่ยว 1 ที่ คุณอยากไปที่ไหน?",
        "answer1": "สโตนเฮจน์",
        "answer2": "พีระมิดแห่งกีซา",
        "answer3": "ทุ่งซาฟารี",
        "answer4": "น้ำตกไนเองการ่า",
    }
    ,
    {
        "question": "7. หากคุณเลือกเข้างานเทศกาลได้ 1 งาน คุณจะเลือกอะไร?",
        "answer1": "เทศกาลรีดนมวัว",
        "answer2": "เทศกาลจับปลา",
        "answer3": "เทศกาลสงกรานต์",
        "answer4": "เทศกาลฮาโลวีน",
    }
    ,
    {
        "question": "8. บ้านหลังไหนที่คุณอยากเข้าไปอยู่?",
        "answer1": "บ้านไม้ริมทะเลสาบ",
        "answer2": "บ้านเล็กๆที่มีลานกว้าง",
        "answer3": "บ้านต้นไม้แสนร่มรื่น",
        "answer4": "บ้านสไตล์โมเดิร์นแสนอบอุ่น",
    }
]

// Variables
let currentQuestion = 0;
const totalQuestions = questions.length;
const questionText = document.querySelector('#qstn');
const choice1 = document.querySelector('#button1');
const choice2 = document.querySelector('#button2');
const choice3 = document.querySelector('#button3');
const choice4 = document.querySelector('#button4');

// Generate Question and Answers
function generateQuestions(index) {
    const question = questions[index];
    questionText.innerHTML = `${question.question}`
    choice1.innerHTML = `${question.answer1}`
    choice2.innerHTML = `${question.answer2}`
    choice3.innerHTML = `${question.answer3}`
    choice4.innerHTML = `${question.answer4}`
}

// Go to the next question
function loadNextQuestion() {
    // Go to map if it's the last question
    if(currentQuestion == totalQuestions - 1) {
        document.location='map2.html';
        return;
    }
    currentQuestion++;
    generateQuestions(currentQuestion);
}

// Execute the main function
generateQuestions(currentQuestion);

// Load the next question when a button is clicked
button1.addEventListener('click', loadNextQuestion);
button2.addEventListener('click', loadNextQuestion);
button3.addEventListener('click', loadNextQuestion);
button4.addEventListener('click', loadNextQuestion);