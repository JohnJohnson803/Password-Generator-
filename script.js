// Assignment Code
var generateBtn = document.querySelector("#generate");


var alphabet = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var special_characters = ['!','@','#','$','%','&','*'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

  var include_uppercase = false;
  var include_lowercase = false;
  var include_numeric = false;
  var include_special_characters = false;
  var num_of_entries = 0
  var password = "";
  length_of_password = 0

  while(length_of_password < 8)
  {  length_of_password = prompt("Choose a password length between 8-128 characters: ")
  if (length_of_password < 8 || length_of_password > 128){
    window.alert("Error: Please select a password length between 8-128 characters")
  }}


  if (confirm("Press Ok to include uppercase characters in your password")){
      include_uppercase = true;
      num_of_entries += 1
  }
  if (confirm("Press Ok to include lowercase characters in your password")){
    include_lowercase = true;
    num_of_entries += 1
  }
  if (confirm("Press Ok to include numeric characters in your password")){
    include_numeric = true;
    num_of_entries += 1
  }
  if (confirm("Press Ok to include special characters in your password")){
    include_special_characters = true;
    num_of_entries += 1
  }

is_on = true

if(include_lowercase || include_uppercase || include_numeric || include_special_characters){
while(is_on == true){
  if(include_uppercase){
      if(password.length < length_of_password){
        random_character = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
      password += random_character
      console.log(password)
    }else {
      is_on = false;
    }
   
  }

  if(include_lowercase){
      if(password.length < length_of_password){
        random_character = alphabet[Math.floor(Math.random() * alphabet.length)];
      password += random_character
      console.log(password)
    }else {
      is_on = false;
    }
   
  }

  if(include_numeric){
      if(password.length < length_of_password){
        random_character = numbers[Math.floor(Math.random() * numbers.length)];
      password += random_character
      console.log(password)
    }else {
      is_on = false;
    }
   
  }
  if(include_special_characters){
      if(password.length < length_of_password){
        random_character = special_characters[Math.floor(Math.random() * special_characters.length)];
      password += random_character
      console.log(password)
    }else {
      is_on = false;
    }
   
  }

 

console.log(password.length)
  }}
 return (shuffleWord(password))
}

// Function to shuffle password
function shuffleWord (word){
  var shuffledWord = '';
  word = word.split('');
  while (word.length > 0) {
    shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
  }
  return shuffledWord;
}
