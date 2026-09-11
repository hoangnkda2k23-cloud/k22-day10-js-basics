let email = "an@gmail.com"

let parts = email.split("@");
let nameChars = parts[0].split("");

if ( nameChars.length > 4 ){
    for ( let i=2 ; i<nameChars.length-2 ; i++ ){
        nameChars[i] = '*';
    }
} else {
    for ( let i=1 ; i<nameChars.length ; i++ ){
        nameChars[i] = '*';
    }
}
parts[0] = nameChars.join("")
email = parts.join("@");
console.log(email);