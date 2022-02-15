# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Dad Joke Generator

We're going to use JavaScript to make a webpage that displays a random dad joke. We'll use the built-in `fetch` method to call an API that will give us jokes.

## Getting Started

* Fork and clone this repository
* Setup your HTML page, and don't forget to include links to the CSS and JS files!
* Be creative in your choice of styling. Think about all of those different CSS properties.

## Gathering Jokes

* Use the [dad joke API](https://icanhazdadjoke.com/api). 
  * Note that this requires you to send something in the request header!
  * Take a look at the [docs](https://icanhazdadjoke.com/api) and see if you can figure it out! Also check out the [fetch docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to see examples of how to add header.

<details>
<summary>Click to reveal answer!</summary>
 
```javascript
fetch('https://icanhazdadjoke.com/', {
  headers: {
    'Accept': 'application/json'
  }
})
```
</details>

## Requirements

* Using HTML, CSS, and JavaScript, create a webpage that displays a random quote on the page when a button is clicked
* Every time the button is clicked, clear the old quote and replace it with a new random quote.
* Use the `fetch` function to obtain a quote from your chosen API.

## Bonus!
  * This API also allows you to use images! If you implement this, how will it change your code?
---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
