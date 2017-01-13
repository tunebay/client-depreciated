import './styles/test.css';
import jumboBackground from '../assets/images/jumbo-background.jpg';

console.info('Like looking under the hood? Why not check out our developers page for all things technical. https://developers.tunebay.com');

const image = document.createElement('img');
image.src = jumboBackground;

document.body.appendChild(image)
