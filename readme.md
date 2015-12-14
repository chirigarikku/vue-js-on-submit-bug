# vue-js-on-submit-bug
A replication of on-submit *bug*. [Demo](https://srph-playground.github.io/vue-js-on-submit-bug)

### Track 
Track https://github.com/vuejs/vue/issues/2017.

**Update**: [0efdd80](https://github.com/vuejs/vue/commit/0efdd8080721b5288f086b8c7d6bd8bce4f4af5a) fixes this. Thanks to [yyx990803](https://github.com/yyx990803).

### Elaboration
Clicking "enter" on an input (this triggers the `on:submit` event) does not remove the data from the input, while clicking the `submit` button does.

![preview](preview.gif)

### Expected

The input (in the create form) will become blank when I submit the form.

### Actual

The input only becomes empty when I click the click the "create" button. When I try to press the `enter` key, everything works except that the input is emptied (which is intended).

### Replicating

1.) Click on the "create a new task" button
2.) Fill the input with characters (anything)
3.) Press the enter key.
4.) Click "create a new task" button, you should be able to see the input filled with the last value you filled it with (broken; unintended).
4.) Repeat steps 1-2.
5.) This time, click the "create" button.
6.) Click "create a new task" button, you should be able to see an empty input (actual; expected). 

-----

Thanks for the response! If any clarification needs to be made, please feel free to ask.

### Running
```bash
npm install
npm run build # or npm run watch
open index.html
```

### Note
Hello, I wrote this while being awake for around 18 hours (because Vue suddenly caused an *itch*). That said, I did a lot of patterns which I did not understand.

Feel free to point them out.
