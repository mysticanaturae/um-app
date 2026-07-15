export function emailLayout(title, content) {
return `
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

body{
    margin:0;
    padding:0;
    background:#f8f7f3;
    font-family:Arial,Helvetica,sans-serif;
}

.wrapper{
    width:100%;
    padding:40px 20px;
}

.container{

    max-width:700px;
    margin:auto;
    background:#ffffff;
    border-radius:24px;
    overflow:hidden;
    box-shadow:0 12px 40px rgba(0,0,0,.08);

}

.header{

background:linear-gradient(
135deg,
#1ab7d8,
#7d5cff,
#ff9d5c
);

padding:60px 40px 50px;
text-align:center;
color:white;

}

.logo img{

max-width:220px;
width:100%;
height:auto;
display:block;
margin:0 auto 30px auto;

}

.brand{

font-size:34px;
font-weight:700;
letter-spacing:3px;
margin-bottom:10px;

}

.subtitle{

font-size:18px;
opacity:.95;
margin-top:12px;

}

.tagline{

margin-top:22px;
font-size:15px;
letter-spacing:2px;
opacity:.92;

}

.content{

padding:50px;
color:#333;
line-height:1.8;
font-size:17px;

}

.content h2{

color:#5b46d6;
margin-top:0;
margin-bottom:30px;
font-size:30px;

}

.card{

background:#fafafa;
border-radius:18px;
padding:26px;
margin:35px 0;
border:1px solid #ececec;

}

.button{

display:inline-block;
margin-top:30px;
padding:16px 34px;

background:linear-gradient(
90deg,
#1ab7d8,
#7d5cff,
#ff9d5c
);

color:white !important;
text-decoration:none;
border-radius:50px;
font-weight:bold;
font-size:16px;

}

.divider{

height:1px;
background:#ececec;
margin:50px 0;

}

.footer{

padding:40px;
text-align:center;
font-size:14px;
color:#777;

}

.footer strong{

display:block;
font-size:18px;
margin-bottom:10px;
color:#333;

}

.footer a{

color:#1ab7d8;
text-decoration:none;

}

</style>

</head>

<body>

<div class="wrapper">

<div class="container">

<div class="header">

<div class="logo">

<img
src="https://blinkita.com/email/BLINKITA-MULTIVERSE-LOGO.png"
alt="Blinkita Multiverse">

</div>

<div class="brand">
BLINKITA MULTIVERSE
</div>

<div class="subtitle">

Where the Impossible Becomes Possible.

</div>

<div class="tagline">

Living Time • Living Consciousness • Living Creation

</div>

</div>

<div class="content">

<div class="card">

✨ Dobrodošel/a v prostoru, kjer se srečujejo
<strong>čas, zavest in ustvarjanje.</strong>

<br><br>

Vsak član Blinkita Multiverse soustvarja prihodnost,
kjer nemogoče postaja mogoče.

</div>

<h2>${title}</h2>

${content}

<div class="divider"></div>

</div>

<div class="footer">

<strong>🌈 Blanka Thomas</strong>

Founder of Blinkita Multiverse

<br><br>

Where the Impossible Becomes Possible.

<br><br>

Living Time • Living Consciousness • Living Creation

<br><br>

<a href="https://blinkita.com">
www.blinkita.com
</a>

</div>

</div>

</div>

</body>

</html>

`;
}