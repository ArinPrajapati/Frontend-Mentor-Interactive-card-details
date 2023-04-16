# Frontend-Mentor-Interactive-card-details
This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow



### What I learned



```html

```
```css
:root {
  --col--Neutral-light--100: hsl(0, 0%, 100%);
  --col--Neutral-light--120: hsl(300, 1%, 81%);
  --col--Neutral-dark--500: hsl(279, 6%, 55%);
  --col--Neutral-dark--900: hsl(278, 68%, 11%);

  --font-size--base: 0.8rem;
}



```
```js

let cardNum = e.target.value;
    cardNum = cardNum.replace(/\D/g, '');
    cardNum = cardNum.replace(/(.{4})/g, '$1 ');
    cardNumber.textContent = cardNum.trim();


```
