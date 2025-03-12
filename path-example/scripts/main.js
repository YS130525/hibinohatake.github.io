const myHeading = document.querySelector('h1')
myHeading.textContent = '山梨から「そのまんまの野菜」をあなたの食卓へ。';
document.querySelector("div").addEventListener("click", ()=>{
    alert("野菜を買う")
});
const myImage = document.querySelector('img');
myImage.onclick =()=>{
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/9.png') {
        myImage.setAttribute('src','images/7.png');
    } else {
        myImage.setAttribute('src', 'images/9.png');
    }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    const myAddress = prompt('ご住所を入力してください。');
    localStorage.setItem('address', myAddress);
    myHeading.textContent = '山梨から「そのまんま野菜」を${myAddress}へ。';
}

if (!localStorage.getItem('address')){
    setUserName();
} else {
    const storedAddress = localStorage.getItem('address');
    myHeading.textContent = '山梨から「そのまんま野菜」を ${storedAddress}へ。';
}

myButton.onclick = () => {
    setUserName();
}