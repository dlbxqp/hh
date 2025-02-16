const cTel = document.querySelectorAll('input[type="tel"]')
cTel && Array.from(cTel).forEach((tel) => {
 IMask(
  tel,
  {mask: "+{7}(000)000-00-00"}
 )
})


fetch(`//dlbxqp.myjino.ru/hh/rest.php`, {
 method: 'get',
})
.then(response => response.text())
.then((response) => {
 console.log('response', response)
})
.catch((error) => console.log('error', error))