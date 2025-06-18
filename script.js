// let - o'zgaruvchi, faqat lokal (mahalliy) scope da ishlaydi
// var - eski usul, global scope ga ega bo'lishi mumkin
// const - o'zgarmas qiymatli o'zgaruvchi

// Misollar (kommentda):
// let name = 'Sharof tok'
// var username = 'ibrohim tentak 💩'
// const studentname = 'kamrok eshak miya'

// let surname = username = 'ibrohim yaxshi bola'
// let sharofname = name = 'sharof gazanda'

// Asosiy ish bajaruvchi kodlar:
let username = prompt("Ismingizni kiriting");  // foydalanuvchidan ism so'raladi

// Konkatenatsiya (qo‘shish):
alert("Tentak seni isming: " + username);

confirm("Mayli, sen bilan bir yozilashay dedimda " + username + 
        "\nSenga savol bermoqchiydim, jiddiy javob berolasanmi?");

alert("Sen tentakmisan? 😂");