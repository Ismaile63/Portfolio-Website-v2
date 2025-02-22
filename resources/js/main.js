document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('#home'); 
    const backgrounds = ['#0d103c', '#fffee7', '#191c4b', '#3e3f4e'];
    const largeNums = [60, 65, 70, 80]; 
    const smallNums = [8, 9, 10, 11];
    
    const coordinates = {
        x: undefined, 
        y: undefined 
    }

    const generateNumber = () => { 
        return Math.floor(Math.random() * 4);
    }

    const createRandomNumbers = () => {
        const width = generateNumber(); 
        const height = generateNumber(); 
        const color = generateNumber(); 
        return [width, height, color]; 
    }

    const configureWideElement = (newEle) => {
        const [width, height, color] = createRandomNumbers(); 
        newEle.style.width = largeNums[width] + 'px'; 
        newEle.style.height = smallNums[height] + 'px'; 
        newEle.style.backgroundColor = backgrounds[color];
        newEle.classList.add('line', 'line-wide');
        
    }

    const configureTallElement = (newEle) => {
        const [width, height, color] = createRandomNumbers(); 
        newEle.style.width = smallNums[width] + 'px'; 
        newEle.style.height = largeNums[height] + 'px'; 
        newEle.style.backgroundColor = backgrounds[color];
        newEle.classList.add('line', 'line-high');

    }

    const addElement = () => {
        const newEle = document.createElement('div');
        const typeNum = Math.round(Math.random()); //returns 0 or 1;  

        if(typeNum === 0) { 
            configureWideElement(newEle);
        } else {
            configureTallElement(newEle); 
        }

        console.log(newEle); 

        newEle.style.left = coordinates.x + 'px'; 
        newEle.style.top = coordinates.y + 'px'; 
        header.appendChild(newEle); 

    }

    const updateCoordinates = e => { 
        if(coordinates.x === undefined || coordinates.y === undefined){
            coordinates.x = e.x; 
            coordinates.y = e.y;
            addElement(); 
        }

        if(Math.abs(coordinates.x - e.x) > 50 || Math.abs(coordinates.y - e.y) > 50) {
            coordinates.x = e.x; 
            coordinates.y = e.y;
            addElement(); 
        } 
    }

    header.addEventListener('mousemove', e => {
        updateCoordinates(e); 
    });
}); 

window.onload = function () {
    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 100) {
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}