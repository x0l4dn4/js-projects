const url = document.querySelectorAll('.dl-row__url')
const text = [...url].map(link => link.href).join('\n');
console.log(text);