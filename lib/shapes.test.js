const {Triangle,Circle,Square} = require('./shapes');

describe('Triangle',()=>{
    test('creates a triangle svg',()=>{
        const triangle = new Triangle('red','white','bob');
        const svg = triangle.display();
        expect(svg).toEqual(
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" /> <text x="150" y="125" font-size="40" text-anchor="middle" fill="white">bob</text></svg>`
        )

    })
})

describe('Circle',()=>{
    test('creates a circle svg',()=>{
        const circle = new Circle('red','white','bob');
        const svg = circle.display();
        expect(svg).toEqual(
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">bob</text></svg>`
        )

    })
})

describe('Square',()=>{
    test('creates a squre svg',()=>{
        const square = new Square('red','white','bob');
        const svg = square.display();
        expect(svg).toEqual(
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect  x="90" y="40" width="120" height="120" fill="red" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">bob</text></svg>`
        )

    })
})