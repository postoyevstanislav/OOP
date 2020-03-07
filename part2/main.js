class Animal {

    static type = 'ANIMAL'

    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('I am Animal')
    }
}

const animal = new Animal ({
    name: 'Animal',
    age: undefined,
    hasTail: true
})

class Cat extends Animal{
    constructor(options) {
        super(options)
            this.color = options.color
    }
    voice() {
        super.voice()
        console.log('Meow')
    }

    get ageInfo() {
        return this.age * 15
    }

    set ageInfo(newAge){
        this.age = newAge
    }
}

const cat = new Cat ({
    name: 'Lola',
    age: 2,
    hasTail: true,
    color: 'grey'
})

class Component {
    constructor(selector){
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(params){
        super(params.selector)
        this.$el.style.width = this.$el.style.height = params.size + 'px'
        this.$el.style.background = params.color
    }
}

class Circle extends Box {
    constructor(params){
        super(params)
        this.$el.style.borderRadius = '50%'
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box({
    selector: '#box2',
    size: 120,
    color: 'black'
})
const circle = new Circle({
    selector: '#circle',
    size: 100,
    color: 'yellow'
})

// const button = document.createElement('button')
//     document.body.append(button)
//     button.innerText = 'On/Off'
//     button.style.margin = '10px'
//     button.addEventListener('click', )