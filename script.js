
import n from './name.js';
import {sAge} from './stuDetail.js';
import {class_s} from './stuDetail.js';

btn.addEventListener("click",function(){
    let stuName = document.querySelector(".nameC1")
    stuName.innerHTML= `${n.stuName}`
    let stuAge = document.querySelector(".ageC")
    stuAge.innerHTML= `${sAge.age}`
    let stuClass = document.querySelector(".classC")
    stuClass.innerHTML= `${class_s}`
})