const tasks = [
    {
        code: `def question():
    x = 6 * 9
    return x

print(question())`,
        answer: 42  
    },
    {
        code: `import math

result = int(math.sqrt(1764))
print(result)`,
        answer: 42  
    },
    {
        code: `def calculate():
    return (10 * 4) + (5 - 3)

print(calculate())`,
        answer: 42 
    },
    {
        code: `a = 21
b = 2
print(a * b)`,
        answer: 42 
    },
    {
        code: `def func(x):
    return x * 2 + 10

print(func(16))`,
        answer: 42 
    },
    {
        code: `numbers = [8, 12, 7, 15]
total = sum(numbers)
print(total)`,
        answer: 42
    },
    {
        code: `result = 100 - 58
print(result)`,
        answer: 42 
    },
    {
        code: `import random
random.seed(42)
value = random.randint(40, 44)
print(value)`,
        answer: 42 
    },
    {
        code: `def mystery():
    return 14 * 3

print(mystery())`,
        answer: 42  
    },
    {
        code: `binary = '101010'
print(int(binary, 2))`,
        answer: 42  
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const codeBlock = document.getElementById('codeBlock');
    const answerInput = document.getElementById('answerInput');
    const submitBtn = document.getElementById('submitBtn');
    const errorMsg = document.getElementById('errorMsg');
    
    const task = tasks[Math.floor(Math.random() * tasks.length)];
    codeBlock.textContent = task.code;
    
    submitBtn.addEventListener('click', checkAnswer);
    answerInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') checkAnswer();
    });
    
    function checkAnswer() {
        const userAnswer = parseInt(answerInput.value);
        
        if (userAnswer === 42) {
            const params = new URLSearchParams(window.location.search);
            const ref = params.get('ref') || 'none';
            window.location.href = `success.html?ref=${ref}`;
        } else {
            errorMsg.classList.remove('hidden');
            answerInput.value = '';
            answerInput.focus();
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }
});