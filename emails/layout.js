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

    background:white;

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

padding:60px 40px;

text-align:center;

color:white;

}

.logo{

font-size:44px;

margin-bottom:10px;

}

.brand{

font-size:34px;

font-weight:700;

letter-spacing:3px;

}

.subtitle{

margin-top:14px;

font-size:18px;

opacity:.95;

}

.tagline{

margin-top:22px;

font-size:15px;

letter-spacing:2px;

opacity:.9;

}

.content{

padding:50px;

color:#333;

line-height:1.8;

font-size:17px;

}

.card{

background:#fafafa;

border-radius:18px;

padding:24px;

margin:30px 0;

border:1px solid #ececec;

}

.button{

display:inline-block;

margin-top:30px;

padding:16px 34px;

background:#1ab7d8;

color:white !important;

text-decoration:none;

border-radius:50px;

font-weight:bold;

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

</style>

</head>

<body>

<div class="wrapper">

<div class="container">

<div class="header">

<div class="logo">⭐</div>

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

<h2>${title}</h2>

${content}

</div>

<div class="footer">

<strong>🌈 Blanka Thomas</strong>

Founder of Blinkita Multiverse

<br><br>

Where the Impossible Becomes Possible.

<br><br>

www.blinkita.com

</div>

</div>

</div>

</body>

</html>
`;
}