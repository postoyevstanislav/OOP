class Button {
  constructor(options = {}) {
    this.options = options;
    this.newButton = this.createButton(options.text);
    this.newButton.addEventListener("click", this.onClick.bind(this));
  }
  onClick(event) {
    console.log("Hello");
    this.newButton.style.position = "relative";
    this.newButton.style.transition = ".5s";
    this.newButton.style.marginTop = "-20px";
    if (this.options && typeof this.options.onClick === "function") {
      this.options.onClick(event);
    }
  }
  createButton(text = "default") {
    const newButton = document.createElement("button");
    newButton.style.width = "200px";
    newButton.style.height = "40px";
    newButton.style.background = "green";
    newButton.style.color = "white";
    newButton.style.font = "14px Helvetica";
    newButton.style.border = "none";
    newButton.style.marginTop = "10px";
    newButton.style.display = "flex";
    newButton.innerText = `${text}`;
    document.body.append(newButton);
    return newButton;
  }
}
class JumpingButton extends Button {
  constructor(options) {
    super(options);
    this.innerText = 'Catch Me!'
    this.startJumping();
  }
  startJumping() {
    this.interval = setInterval(() => {
      this.newButton.style.tansition = ".1s";
      this.newButton.style.position = "relative";
    //   const newTop = Math.random()
    //     .toString()
    //     .substring(2, 5);
    //   const newLeft = Math.random()
    //     .toString()
    //     .substring(2, 5);
    const newTop = _.random(0, window.visualViewport.height)
    const newLeft = _.random(0, window.visualViewport.width)
      this.newButton.style.top = newTop + "px";
      this.newButton.style.left = newLeft + "px";
    }, 1500);
  }
}

const button = new Button({
  text: "Click Me!",
  onClick: () => {
    console.log("clicked button");
  }
});
const button2 = new Button({
  text: "Click Me!"
});
const button3 = new JumpingButton({
  text: "Catch Me!"
});


class Icon {
    constructor(options = {
        width: 20,
        heidht: 20,
        parent: document.body
    }) {
        //src,width,height
        this.icon = this.createIcon();
        this.toggled = false;
        this.icon.src = options.src;
        this.styles(options)
        setTimeout(() =>{ 
          this.fadeIn()
        }, 200)
    }

    createIcon() {
        const icon = document.createElement('img');
        return icon
    }
    styles(options) {
        this.icon.style.margin = '10px';
        this.icon.style.opacity = '0';
        this.icon.style.transition = 'opacity .5s ease-in-out'
        this.icon.style.width = `${options.width || 50}px`;
        this.icon.style.heidht = `${options.height || 50}px`;
        if(options.parent && options.parent instanceof Node){
            options.parent.append(this.icon)
        } else {
            document.body.append(this.icon)
        }
    }

    fadeIn() {
      this.icon.style.opacity = '1';
    }
}

class ToggleIcon extends Icon {
  constructor(options){
    super(options)
    this.options = options;
    this.styles(options)
    this.icon.addEventListener('click', this.toggleIcon.bind(this))
  }
  styles(options){
    this.icon.style.cursor = 'pointer';
    super.styles(options)
  }
  toggleIcon(event){
    this.icon.src = this.toggled ? 
    this.options.srcAfter : this.options.src
    this.toggled = !this.toggled
  }
}

const icon1 = new Icon ({
    width: 30,
    heidht: 30,
    src: './img/lock.svg',
    parent: 'body'
})
const toggleIcon = new ToggleIcon({ 
  src: './img/phone.svg',
  srcAfter: './img/pin.png',
  parent : 'body'
})

