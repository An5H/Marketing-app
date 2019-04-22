
const Alert = () => {
   let input = document.getElementById("email").value;
   if(input){
       alert("Thankyou for subscribing.");
       document.getElementById("email").value = ``;
   }
   else {
       alert("Please fill in the email before entering submit.");
   }
}

const Submit = () => {
    let inputEmail = document.getElementById("email2").value;
    let inputPassword = document.getElementById("password").value;
    if((inputEmail === !NULL) && (inputPassword === !NULL)){
        alert("Welcome to the family!!");
        document.getElementById("email2").value = ``;
        document.getElementById("password").value = ``;
    }
    else {
        alert("Please fill in the all the credentials !!");
    }
}

const onSubmit = () => {
    let inputName = document.getElementById("name").value;
    let inputEmail = document.getElementById("email3").value;
    let inputComments = document.getElementById("comments").value;
    if(inputName&&inputEmail&&inputComments){
        alert("Thankyou for your feedback.We will get back to you!");
        document.getElementById("name").value = ``;
        document.getElementById("email3").value = ``;
        document.getElementById("comments").value = ``;
    }
    else {
        alert("Please fill in all the required forms.");
    }
}

const setCustomerBudget = (form) => {
    let name = form.nameinform.value;
    let getBudgetLower = parseInt(form.budgetlower.value);
    let getBudgetUpper = parseInt(form.budgetupper.value);
    let tvAds, banners, socmedads, newspaperads, money;
    if(getBudgetUpper == 0){
        alert("You need to enter a valid upper range.");
    }
    if(getBudgetLower > getBudgetLower){
        alert("Your lower limit cannot be greater than your upper limit.");
    }
    if(((0 <= getBudgetLower)||(getBudgetLower > 0))&&(getBudgetUpper > 0)) {
        money = getBudgetUpper - getBudgetLower;
        document.getElementById("money").value = money + `$`;
        tvAds = getBudgetUpper/200;
        document.getElementById("tvads").value = Math.round(tvAds);
        banners = getBudgetUpper/140;
        document.getElementById("bannerads").value = Math.round(banners);
        socmedads = getBudgetUpper/30;
        document.getElementById("socialmediaads").value = Math.round(socmedads);
        newspaperads = getBudgetUpper/45;
        document.getElementById("newspaperads").value = Math.round(newspaperads);
        document.getElementById("displayuser").innerHTML = name +`, these are the results, suiting best to your budget.`;
    }
}