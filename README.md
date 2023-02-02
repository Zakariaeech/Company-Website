# Company Website

You can run the website at : [https://incomparable-starship-65c5a6.netlify.app/](https://incomparable-starship-65c5a6.netlify.app/)

I used the Netlify to deploy the website (the maps do not work when I deploy the website using Netlify you can see it here)

![map in widescreen](/issues/Capture1.JPG "map in widescreen").
![map in mobile screen](/issues/Capture2.JPG "map in mobile screen").
![map in normal screen](/issues/Capture3.JPG "map in normal screen").




In this project I used HTML5 and CSS and some JavaScript, JQuery to create this website.

In this project I worked with the modern CSS flexbox to align the different boxes for example:

```css
#navbar {
  display: flex;
  position: sticky;
  top: 0;
  background: #333;
  justify-content:space-between;
  align-items: center;
  z-index: 1;
  padding: 1rem;
}

#navbar ul {
  display: flex;
  list-style: none;
}
```

I reset the margin and padding to 0 and the box-sizing to border-box

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```
I used font-family from the fonts.google.com:
```css
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
  body { font-family: 'Mulish', sans-serif; }
```

I used a script form [https://fontawesome.com/](https://fontawesome.com/) to get the icons used in this project : 

```html
<script src="https://kit.fontawesome.com/40cf33b90c.js" crossorigin="anonymous"></script>
```

```html
<i class="fa fa-book-reader fa-2x"></i>
```

I used a BING API to get the bing maps in my website you can find more details in code:

```html
<script type='text/javascript'
            src='http://www.bing.com/api/maps/mapcontrol?callback=GetMap' async defer></script>
```

You can run this website in different screen (widescreen, Tablet, mobile..?) it's responsive you can find the details in widescreen.css and mobile.css:

I used media queries to get my website responsive in mobiles
```css
@media(max-width: 560px) {
  }
```

```html
<link rel="stylesheet" media="screen and (max-width: 768px)" href="/css/mobile.css">
  <link rel="stylesheet" media="screen and (min-width: 1100px)" href="/css/widescreen.css">
```

In mobile.css you may wonder why I did this :

```css
#navbar {
  top: -55px;
}
```

It make the logo disappear when you scroll down I think it's make the website cool :)

For smooth scrolling I used js : (-65 to get the boxes align with the nav perfectly and 1000 for the speed)

```javascript
$(document).ready(function(){
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 65
      },
     1000
    );
  }
});
});
```

No back-end in this website so the form don't send your data.

I hope you like it, Thank you for reading
if you have any questions you can contact me, have a good day :)

Zakariae ech-chayeb