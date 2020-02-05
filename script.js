function generatePassword() {
  
  var length = 0;
  
  while (length < 8 || length > 128) {
      
      length = prompt("Enter your desired length of your password", "Between 8-128 Characters");
      if (length < 8 || length > 128) {
          alert("Enter a number between 8 and 128");
      }}

   var lowerCase = confirm("Would you like to include lower case letters?");
   var upperCase = confirm("Would you like to include upper case letters?");
   var symbols = confirm("Would you like to include symbols?");
   var numbers = confirm("Would you like to include numbers?");

  
  var password = "";
 var character = "";

  
  var includesSymbols = false;
  var includesLowerCase = false;
  var includesUpperCase = false;
  var includesNumbers = false;

  if (lowerCase && upperCase && symbols && numbers) {
      var charset = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@%+/\\'!#$^?:,(){}[]~-_.`");
      console.log(charset.length)
      
      for (var i = 0; i < length; i++) {
          var index = Math.floor(Math.random() * 86);

          if (index < 26) {
              includesLowerCase = true;
          } else if (index > 25 && index < 52) {
              includesUpperCase = true;
          } else if (index > 51 && index < 62) {
              includesNumbers = true;
          } else {
              includesSymbols = true;
          }

        
          if (i === (length - 4) && includesLowerCase === false) {
              index = Math.floor(Math.random() * 26);
              console.log(character)
          } else if (i === (length - 3) && includesUpperCase === false) {
              index = 26 + Math.floor(Math.random() * 26);
          } else if (i === (length - 2) && includesNumbers === false) {
              index = 52 + Math.floor(Math.random() * 10);
          } else if (i === (length - 1) && includesSymbols === false) {
              index = 62 + Math.floor(Math.random() * 24);
          } else {
              console.log(index)
          }

          character = charset.charAt(index)
          password = password + character;
      }
 
  } else if (lowerCase && upperCase && symbols && !numbers) {
      var charset = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@%+/\\'!#$^?:,(){}[]~-_.`");
      for (var i = 0; i < length; i++) {
          var index = Math.floor(Math.random() * 76);

          if (index < 26) {
              includesLowerCase = true
          } else if (index > 25 && index < 52) {
              includesUpperCase = true;
          } else {
              includesSymbols = true;
          }

          if (i == length - 3 && includesLowerCase == false) {
              index = Math.floor(Math.random() * 26);
          } else if (i == length - 2 && includesUpperCase == false) {
              index = 26 + Math.floor(Math.random() * 26);
          } else if (i == length - 1 && includesSymbols == false) {
              index = 52 + Math.floor(Math.random() * 24);
          }

          character = charset.charAt(index);
          password = password + character;

          }
  // Charset without symbols
  } else if (lowerCase && upperCase && !symbols && numbers) {
          var charset = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
          for (var i = 0; i < length; i++) {
              var index = Math.floor(Math.random() * 62);

              if (index < 26) {
                  includesLowerCase = true;
              } else if (index > 25 && index < 52) {
                  includesUpperCase = true;
              } else {
                  includesNumbers = true;
              }

              if (i == length - 3 && includesLowerCase == false) {
                  index = Math.floor(Math.random() * 26);
              } else if (i == length - 2 && includesUpperCase == false) {
                  index = 26 + Math.floor(Math.random() * 26);
              } else if (i == length - 1 && includesNumbers == false) {
                  index = 52 + Math.floor(Math.random() * 10)
              }

              character = charset.charAt(index);
              password = password + character;
          }
      // Charset without upper case
      } else if (lowerCase && !upperCase && symbols && numbers) {
          var charset = ("abcdefghijklmnopqrstuvwxyz1234567890@%+/\\'!#$^?:,(){}[]~-_.`");
          for (var i = 0; i < length; i++) {
              var index = Math.floor(Math.random() * 60);

              if (i == length - 3 && includesLowerCase == false) {
                  index = Math.floor(Math.random() * 26);
              } else if (i == length - 2 && includesNumbers == false) {
                  index = 26 + Math.floor(Math.random() * 10);
              } else if (i == length - 1 && includesSymbols == false) {
                  index = 36 + Math.floor(Math.random() * 24);
              }

              character = charset.charAt(index);
              password = password + character;
          }
      // Charset without lower case letters
      } else if (!lowerCase && upperCase && symbols && numbers) {
          var charset = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@%+/\\'!#$^?:,(){}[]~-_.`");
          for (var i = 0; i < length; i++) {
              var index = Math.floor(Math.random() * 60);

              if (index < 26) {
                  includesUpperCase = true;
              } else if (index > 25 && index < 36) {
                  includesNumbers = true;
              } else {
                  includesSymbols = true;
              }

              if (i == length - 3 && includesUpperCase == false) {
                  index = Math.floor(Math.random() * 26);
              } else if (i == length - 2 && includesNumbers == false) {
                  index = 26 + Math.floor(Math.random() * 10);
              } else if (i == length - 1 && includesSymbols == false) {
                  index = 36 + Math.floor(Math.random() * 24);
              }

              character = charset.charAt(index);
              password = password + character;
          }
      // Charset without symbols or numbers
      } else if (lowerCase && upperCase && !symbols && !numbers) {
          var charset = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
          for (var i = 0; i < length; i++) {
              var index = Math.floor(Math.random() * 52);

              if (index < 26) {
                  includesLowerCase = true;
              } else {
                  includesUpperCase = true;
              }

              if (i == length - 2 && includesLowerCase == false) {
                  index = Math.floor(Math.random() * 26);
              } else if (i == length - 1 && includesUpperCase == false) {
                  index = 26 + Math.floor(Math.random() * 26);
              }

              character = charset.charAt(index);
              password = password + character;
          }
      // Charset without upper case letters and numbers
      } else if (lowerCase && !upperCase && symbols && !numbers) {
          var charset = ("abcdefghijklmnopqrstuvwxyz@%+/\\'!#$^?:,(){}[]~-_.`");
          for (var i = 0; i < length; i++) {
              var index = Math.floor(Math.random() * 50);

              if (index < 26) {
                  includesLowerCase = true;
              } else {
                  includesSymbols = true
              }

              if (i == length - 2 && includesLowerCase == false) {
                  index = Math.floor(Math.random() * 26)
              } else if (i == length - 1 && includesSymbols == false) {
                  index = 26 + Math.floor(Math.random() * 24);
              }

              character = charset.charAt(index);
              password = password + character;
          }
      // Charset without lower case letters or numbers
      } else if (!lowerCase && upperCase && symbols && !numbers) {
          var charset = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ@%+/\\'!#$^?:,(){}[]~-_.`");
          for (var i = 0; i < length; i++) {
              var index = Math.floor(Math.random() * 50);

              if (index < 26) {
                  includesUpperCase = true;
              } else {
                  includesSymbols = true;
              }

              if (i == length - 2 && includesUpperCase == false) {
                  index = Math.floor(Math.random() * 26);
              } else if (i == length - 1 && includesSymbols == false) {
                  index = 26 + Math.floor(Math.random() * 24);
              }

              character = charset.charAt(index);
              password = password + character;
          }
      
      } else if (!lowerCase && upperCase && !symbols && numbers) {
          var charset = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
          for (var i = 0; i < length; i++) {
              var index = Math.floor(Math.random() * 36);

              if (index < 26) {
                  includesUpperCase = true;
              } else {
                  includesNumbers = true;
              }

              if (i == length - 2 && includesUpperCase == false) {
                  index = Math.floor(Math.random() * 26);
              } else if (i == length - 1 && includesNumbers == false) {
                  index = 26 + Math.floor(Math.random() * 10);
              }

              character = charset.charAt(index);
              password = password + character;
          }
      
      } else if (!lowerCase && !upperCase && symbols && numbers) {
          var charset = ("1234567890@%+/\\'!#$^?:,(){}[]~-_.`");
          for (var i = 0; i < length; i++) {
              var index = Math.floor(Math.random() * 34);

              if (index < 10) {
                  includesNumbers = true;
              } else {
                  includesSymbols = true;
              }

              if (i == length - 2 && includesNumbers == false) {
                  index = Math.floor(Math.random() * 10);
              } else if (i == length - 1 && includesSymbols == false) {
                  index = 10 + Math.floor(Math.random() * 24);
              }

              character = charset.charAt(index);
              password = password + character;
      
      }
       
      console.log(password);
      
      var passwordDisplay = document.querySelector("#password");
      console.log(passwordDisplay);

      passwordDisplay.value = password;
  }
  
  
//   function copyToClipboard() {
//       document.getElementById("password");
//       body{
//         background-image: url("./assets/carrots-food-fresh-fre");
//         background-blend-mode: soft-light;
//         background-repeat: no-repeat;
//         background-size: cover;
//     }.select();
//       document.execCommand("copy");
//       document.getElementById("password").textcontent = "";
//       alert("Copied your password");
//     };
  

}