function calculateGrade(){

let name=document.getElementById("name").value;

let m1=parseInt(document.getElementById("m1").value);
let m2=parseInt(document.getElementById("m2").value);
let m3=parseInt(document.getElementById("m3").value);
let m4=parseInt(document.getElementById("m4").value);
let m5=parseInt(document.getElementById("m5").value);

let total=m1+m2+m3+m4+m5;
let avg=total/5;

let grade;

if(avg>=90) grade="A+";
else if(avg>=75) grade="A";
else if(avg>=60) grade="B";
else if(avg>=50) grade="C";
else grade="Fail";

document.getElementById("gradeResult").innerHTML=
"Name: "+name+
"<br>Total: "+total+
"<br>Average: "+avg+
"<br>Grade: "+grade;

}

function checkPalindrome(){

let word=document.getElementById("word").value;
let rev="";

for(let i=word.length-1;i>=0;i--){
rev+=word[i];
}

if(word==rev)
document.getElementById("palResult").innerHTML="Palindrome";
else
document.getElementById("palResult").innerHTML="Not Palindrome";

}

function analyzeNumber(){

let num=parseInt(document.getElementById("number").value);
let result="";

if(num%2==0)
result+="Even ";
else
result+="Odd ";

if(num>0)
result+="Positive";
else if(num<0)
result+="Negative";
else
result+="Zero";

document.getElementById("numResult").innerHTML=result;

let loop="";

for(let i=1;i<=num;i++){
loop+=i+" ";
}

document.getElementById("loopResult").innerHTML=loop;

}

function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user=="ranjitha" && pass=="ranju@123")
document.getElementById("loginResult").innerHTML="Login Successful";
else
document.getElementById("loginResult").innerHTML="Invalid Credentials";

}