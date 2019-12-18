import jpg from './assets/irelia.jpg'

export default function lazy() {
  const div = document.getElementById('app')
  div.innerHTML = `
  <img src="${jpg}">
`
  console.log(jpg) // 得到dist中图片文件的路径
}