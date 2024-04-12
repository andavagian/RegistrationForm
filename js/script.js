let currentPage = 1;
const totalPages = 4;
let reg1 = /^[a-z ,.'-]+$/i;
let reg2 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let reg3 = /^[\+]?[(]?[0-9]{1,5}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{4,6}$/;
let reg5 = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
let reg6 = /[A-Za-z0-9'\.\-\s\,]/
let text;
let text1;
let text3;
let text4;
let text5;
let text6;
let text7;
let text8;
let text9;

function slide(direction, event) {
    event.preventDefault()
    let nameValid = reg1.test(name1.value);
    let emailValid = reg2.test(email.value);
    let phoneValid = reg3.test(phone.value);
    let countryValid = true;
    let cityValid = true;
    let addressValid = true;
    let postalValid = true;
    let imageValid = true;
    let aboutValid = true;
    if (direction === 'next' && currentPage < totalPages) {
        if (currentPage == 1){
            if (!nameValid) {
                text = "Name is not valid";
                error1.style.display = 'block';
                error1.innerHTML = text;
            } else {
                error1.style.display = 'none';
            }
            if (!emailValid) {
                text1 = "Email is not valid";
                error2.style.display = 'block';
                error2.innerHTML = text1;
            } else {
                error2.style.display = 'none';
            }
            if (!phoneValid){
                text3 = "Phone number is not valid"
                error3.style.display = 'block';
                error3.innerHTML = text3;
            } else {
                error3.style.display = 'none';
            }
        }
        else if (currentPage == 2){
            cityValid = reg5.test(city.value);
            addressValid = reg6.test(address.value);
            if (country.value == 'Select your country'){
                text4 = "Select your country"
                error4.style.display = 'block';
                error4.innerHTML = text4;
                countryValid = false
            } else {
                error4.style.display = 'none';
                countryValid = true
            }
            if (!cityValid) {
                text5 = "City input is not valid"
                error5.style.display = 'block';
                error5.innerHTML = text5;
            } else {
                error5.style.display = 'none';
            }
            if (!addressValid) {
                text6 = "Address input is not valid"
                error6.style.display = 'block';
                error6.innerHTML = text6;
            } else {
                error6.style.display = 'none';
            }
            if (postal.value == ''){
                text7 = "Postal code is not valid"
                error7.style.display = 'block';
                error7.innerHTML = text7;
                postalValid = false
            } else {
                error7.style.display = 'none';
                phoneValid = true
            }
        }
        else if (currentPage == 3){
            if (image.value == ""){
                text8 = "Choose an image"
                error8.style.display = 'block';
                error8.style.top = '54px'
                error8.innerHTML = text8;
                imageValid = false
            } else {
                error8.style.display = 'none';
                imageValid = true
            }
            if (about.value == ""){
                text9 = "This area can not be empty"
                error9.style.display = 'block';
                error9.style.top = '155px'
                error9.innerHTML = text9;
                aboutValid = false
            } else {
                error9.style.display = 'none';
                aboutValid = true
            }
        }
        // else if (currentPage == 4){
        //     if (agree.checked){
        //         send.disabled = false
        //         send.style.cursor = 'pointer'
        //     }
        // }
        if (nameValid && emailValid && phoneValid && countryValid && cityValid && addressValid && postalValid && imageValid && aboutValid) {
            currentPage++;
        }
    } else if (direction === 'back' && currentPage > 1) {
        currentPage--;
    }
    showPage(currentPage);
    buttons(currentPage);
    circles(currentPage)
    }

function showPage(currentPage) {
    for (let i = 1; i <= totalPages; i++) {
        const container = document.getElementById(`inp_div_container${i}`);
        if (i === currentPage) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    }
}

function buttons(currentPage){
    if(currentPage == 1){
        back.disabled = true
        next.disabled = false
        send.disabled = true
        back.style.cursor = 'default'
        next.style.cursor = 'pointer'
        send.style.cursor = 'default'
    } else if (currentPage == 2){
        back.disabled = false
        next.disabled = false
        send.disabled = true
        back.style.cursor = 'pointer'
        next.style.cursor = 'pointer'
        send.style.cursor = 'default'
    } else if (currentPage == 3){
        back.disabled = false
        next.disabled = false
        send.disabled = true
        back.style.cursor = 'pointer'
        next.style.cursor = 'pointer'
        send.style.cursor = 'default'
    } else if (currentPage == 4){
        back.disabled = false
        next.disabled = true
        back.style.cursor = 'pointer'
        next.style.cursor = 'default'
    }
}

function circles(currentPage){
    if(currentPage == 1){
        circle1.style.color = '#479C4F'
        circle2.style.color = 'black'
        circle3.style.color = 'black'
        circle4.style.color = 'black'
    } else if(currentPage == 2){
        circle1.style.color = 'black'
        circle2.style.color = '#479C4F'
        circle3.style.color = 'black'
        circle4.style.color = 'black'
    } else if(currentPage == 3){
        circle1.style.color = 'black'
        circle2.style.color = 'black'
        circle3.style.color = '#479C4F'
        circle4.style.color = 'black'
    } else if(currentPage == 4){
        circle1.style.color = 'black'
        circle2.style.color = 'black'
        circle3.style.color = 'black'
        circle4.style.color = '#479C4F'
    }
}

function toggle(){
    if(agree.checked){
        send.disabled = false
        send.style.cursor = 'pointer'
        // isChecked = false
    } else {
        send.disabled = true
        send.style.cursor = 'default'
        // isChecked = true
    }
}
