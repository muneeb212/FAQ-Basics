let box1 = [ document.getElementsByClassName('box1')[0],document.getElementsByClassName('box1')[1] , document.getElementsByClassName('box1')[2],document.getElementsByClassName('box1')[3] , document.getElementsByClassName('box1')[4] ];
let isClick = [false,false,false,false,false];
let box2 = [document.getElementsByClassName('box2')[0],document.getElementsByClassName('box2')[1] , document.getElementsByClassName('box2')[2],document.getElementsByClassName('box2')[3] , document.getElementsByClassName('box2')[4]];
for(let i = 0; i < 5; i++) {
    box1[i].addEventListener('click', () => {
        if(isClick[i] == false) {
            box2[i].style.display = 'block';
            isClick[i] = true;
        } else {
            box2[i].style.display = 'none';
            isClick[i] = false;
        }
    });
    box2[i].addEventListener('click' , ()=>{
        box2[i].style.display = 'none';
        isClick[i] = false;
    });
}
