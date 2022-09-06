
// login signup full data here
    //LogIn
let login = document.querySelector('#loginFull');
let loginForm = login.querySelector('#logInForm')
let Lemail = login.querySelector('#email');
let Lpassword = login.querySelector('#password');
let showAler = document.querySelector('#alert-Text');
let showAlers = document.querySelector('#alert-Texts');
let ancor = login.querySelector('a')


    // sign Up
let signUp = document.querySelector('#signUp');
let signUpForm = signUp.querySelector('#signUpForm');
let sfirstName = signUp.querySelector('#firstName');
let slastName = signUp.querySelector('#lastName');
let semail = signUp.querySelector('#email');
let spassword = signUp.querySelector('#password');
let info = [];
console.log(slastName)

// signup work here
// all function

ancor.addEventListener('click', function(){
    login.classList.add('d-none');
    signUp.classList.remove('d-none');
});

function showMessageAlert(message, adding){
    showAler.textContent = message;
    showAler.classList.add(adding)
}
function infoDataReceive(){
    let dataFind = {
        fNames : sfirstName.value,
        lnames : slastName.value,
        emails : semail.value,
        epassword : spassword.value
    }
    info.push(dataFind)
    storeData()
}
function elearFieldss(){
    sfirstName.value = '',
    slastName.vlaue = '',
    semail.value = '',
    spassword.value = ''
}
function storeData(){
    showAlers.textContent = 'create accounr please wait for login'
    showAlers.classList.add('success')
    elearFieldss()
  
    setTimeout(()=>{
        localStorage.setItem('info', JSON.stringify(info))
        login.classList.remove('d-none');
        signUp.classList.add('d-none');
    }, 2000)
    
}

signUpForm.addEventListener('submit', function(e){
    infoDataReceive()
    e.preventDefault()
});

// login function
loginForm.addEventListener('submit', function(e){
    let tEmail = 0;
    for(let i = 0; i < info.length; i++){
        if(Lemail.value  ===  info[i].emails && Lpassword.value === info[i].epassword){
            tEmail++
            selfName.textContent = `${info[i].fNames}  ${info[i].lnames}`;
            console.log(info[i].lnames)
            login.classList.add('d-none');
            mainBody.classList.remove('d-none')
        }
    };
    if(tEmail == 0){
        showMessageAlert('please Enter correct email and password', 'danger')
    } 
    e.preventDefault()
});
  

(()=>{
    info = JSON.parse(localStorage.getItem('info')) || [];
    // console.log(info) 
})()

/* ====================================== Login sign Up page end ===================================*/

// all javascript coed here
let mainBody = document.querySelector('#main-body')
let container = document.querySelector('.crudProgramming');
let idText = container.querySelector('#idText');
let studentsForm = container.querySelector('#studentsForma');
let contentShow = container.querySelector('#mainContent');
let idNo = container.querySelector('#Id');
let alertText = container.querySelector('#alertText');
let firstName = container.querySelector('#firstName');
let lastName = container.querySelector('#lastName');
let rollNumber = container.querySelector('#number');
let dateOfBirth = container.querySelector('#dataOf');
let dataHere = [];
let data = []
let selfName = document.querySelector('#selfName');
/*

// all function here
    // alert function
    function alertFunction(text, classes){
        alertText.textContent = text;
        alertText.classList.add('p-2');
        alertText.classList.add(classes);
        setTimeout(()=>{
            alertText.textContent = '';
            alertText.classList.remove('p-2');
            alertText.classList.remove(classes);
        }, 2000)
    }
    // receive data
    function receiveDate(){
       
        dataHere.push({
            Id : id,
            firstName: firstName.value,
            lastName: lastName.value,
            rollNumber: rollNumber.value,
            dateOfBirth: dateOfBirth.value
        });

        localStorage.setItem('dataHere', JSON.stringify(dataHere))

        alertFunction('Information Successfully Add', 'alert-success');
        addData()
        clearFieles()
    }
    // clear fields
    function clearFieles(){
        id++
        idNo.value = id;
        firstName.value = '';
        lastName.value = '';
        rollNumber.value = '';
        dateOfBirth.value = '';
    }
    // screen on data
    function addData(){
       
        contentShow.innerHTML = '';
        dataHere.map((x,y)=>{
            return (
                contentShow.innerHTML += `
                <tr id="${y}">
                    <td>${x.Id}</td>
                    <td>${x.firstName}</td>
                    <td>${x.lastName}</td>
                    <td>${x.rollNumber}</td>
                    <td>${x.dateOfBirth}</td>
                    <td>
                        <a onclick="editInformation(this)" class="btn btn-warning" href="#">Edit</a>
                        <a onclick="deleteInformation(this); addData()" class="btn btn-danger" href="#">Delete</a>
                    </td>
                </tr>
                `
            )
        });
       
    }

    function deleteInformation(e){
        e.parentElement.parentElement.remove()
        dataHere.splice(e.parentElement.parentElement.id, 1)
        localStorage.setItem('dataHere', JSON.stringify(dataHere))
        alertFunction('Data Delete Successfully', 'alert-danger')
    }
    function editInformation(e){

        console.log(e.parentElement.parentElement)
        let list = e.parentElement.parentElement;
        console.log(list.children)
        idNo.value = list.children[0].textContent;
        firstName.value = list.children[1].textContent;
        lastName.value = list.children[2].textContent;
        rollNumber.value = list.children[3].textContent;
        dateOfBirth.value = list.children[4].textContent;
        
        e.parentElement.parentElement.remove()
        alertFunction('data Editing', 'alert-warning')
        // localstorage update data
        dataHere.splice(e.parentElement.parentElement.id, 1)
        localStorage.setItem('dataHere', JSON.stringify(dataHere))
    }
// all event listner
studentsForm.addEventListener('submit', function(e){
   if(firstName.value === '' || lastName.value === '' || dateOfBirth.value === ''){
    alertFunction('Please Fillup All the Files', 'alert-danger')
   }else{
    receiveDate()
   }
    e.preventDefault()
});
// inbook this function
(()=>{
    dataHere = JSON.parse(localStorage.getItem('dataHere')) || [];
    addData()
})();

*/


// all classs

class studentInfo{
    constructor(fname, lname, roll, dob){
        this.firstName = fname,
        this.lastName = lname,
        this.rollNo = roll,
        this.birth = dob
    }
}
class allfunction{
   static customMessage(content, classes){
        alertText.textContent = content,
        alertText.classList.add('p-2')
        alertText.classList.add(classes)
        setTimeout(()=>{
            alertText.textContent = '',
            alertText.classList.remove('p-2')
            alertText.classList.remove(classes)
        }, 3000);
    }
    static receiveData(){
            let students = new studentInfo(firstName.value, lastName.value, rollNumber.value, dateOfBirth.value);
            data.push(students)
            localStorage.setItem('taskadd', JSON.stringify(data));
            console.log(data)
            allfunction.customMessage('data Added', 'alert-success')
            this.showData()
    }
    static showData(){
        // serial number show
        idNo.value = data.length + 1;
        
        contentShow.innerHTML = '';
        data.map((x,y)=>{
            return (
                contentShow.innerHTML += `
                <tr id='${y}'>
                    <td>${y+1}</td>
                    <td>${x.firstName}</td>
                    <td>${x.lastName}</td>
                    <td>${x.rollNo}</td>
                    <td>${x.birth}</td>
                    <td>
                        <a onclick="allfunction.editInformation(this)" class="btn btn-warning" href="#">Edit</a>
                        <a onclick="allfunction.deleteInformation(this)" class="btn btn-danger" href="#">Delete</a>
                    </td>
                </tr>
            `
            )
        })
        this.clearFiled()
    }
    
        static deleteInformation(e){
        e.parentElement.parentElement.remove()
        data.splice(e.parentElement.parentElement.id, 1)
        this.showData()
        this.localStorageCheck()
    }
    static editInformation(e){
        let edit = e.parentElement.parentElement.children
        firstName.value = edit[1].textContent;
        lastName.value = edit[2].textContent;
        rollNumber.value = edit[3].textContent;
        dateOfBirth.value = edit[4].textContent;
        data.splice(e.parentElement.parentElement.id, 1)
    }
    static clearFiled(){
        firstName.value = '', 
        lastName.value = '', 
        rollNumber.value = '', 
        dateOfBirth.value = ''
    }
    static localStorageCheck(){
        // serial number show
        idNo.value = data.length + 1;
        localStorage.setItem('taskadd', JSON.stringify(data));
    }
};

studentsForm.addEventListener('submit', function(e){
    if(firstName.value =='' || lastName.value =='' || rollNumber.value == '' || dateOfBirth.value ==''){
        allfunction.customMessage('please fillup all the gap', 'alert-danger')
    }else{
        allfunction.receiveData()
    }
    e.preventDefault();
});


(()=>{
    data = JSON.parse(localStorage.getItem('taskadd')) || [];
    allfunction.showData()
})()