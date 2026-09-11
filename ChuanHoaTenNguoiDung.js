let fullName = "   nguyen khOng    duy hoang";

fullName = fullName.trim();

while (fullName !== fullName.replaceAll("  ", " ")) fullName = fullName.replaceAll("  ", " ");

fullName = fullName.toLowerCase();

let char = fullName.split(" ");

for (let i = 0; i < char.length; i++) char[i] = char[i][0].toUpperCase() + char[i].slice(1);

fullName = char.join(" ");

console.log(fullName);
