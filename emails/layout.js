export function layout(title, content) {

return `

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<style>

body{

background:#f6f4ef;
font-family:Arial,sans-serif;
padding:40px;

}

.card{

max-width:700px;
margin:auto;
background:white;
border-radius:20px;
padding:50px;

}

.logo{

font-size:32px;
font-weight:bold;
letter-spacing:3px;
text-align:center;

}

.subtitle{

text-align:center;
margin-top:10px;
font-size:18px;
color:#777;

}

hr{

margin:40px 0;

}

.footer{

margin-top:50px;
font-size:14px;
text-align:center;
color:#777;

}

.button{

display:inline-block;
padding:15px 35px;
background:#000;
color:white;
text-decoration:none;
border-radius:12px;
margin-top:30px;

}

</style>

</head>

<body>

<div class="card">

<div class="logo">

BLINKITA MULTIVERSE

</div>

<div class="subtitle">

USTVARJALCI MOGOČEGA

</div>

<hr>

<h2>

${title}

</h2>

${content}

<div class="footer">

99 ljudi • 99 zgodb • Ena skupna vizija

<br><br>

© Blinkita Multiverse

</div>

</div>

</body>

</html>

`;

}