const cube = document.querySelector('.cube');
const cubeSection = document.querySelector('.cube-section');
let isMouseInCubeSection = false;

// Track when the mouse enters and leaves the cube section
cubeSection.addEventListener('mouseenter', () => {
  isMouseInCubeSection = true;
});

cubeSection.addEventListener('mouseleave', () => {
  isMouseInCubeSection = false;
});

// Cube rotation based on cursor movement only when in the left (cube) section
document.addEventListener('mousemove', (e) => {
  if (isMouseInCubeSection) {
    const xAxis = (e.pageX - window.innerWidth / 2) / 5; // Adjust rotation speed
    const yAxis = (e.pageY - window.innerHeight / 2) / 5;
    cube.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  }
});

// Rotate to specific face when a button is clicked
const buttons = document.querySelectorAll('.controls button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const face = button.getAttribute('data-face');
    rotateToFace(face);
  });
});

function rotateToFace(face) {
  let rotateX = 0;
  let rotateY = 0;

  switch (face) {
    case 'front':
      rotateX = 0;
      rotateY = 0;
      break;
    case 'back':
      rotateX = 0;
      rotateY = 180;
      break;
    case 'left':
      rotateX = 0;
      rotateY = -90;
      break;
    case 'right':
      rotateX = 0;
      rotateY = 90;
      break;
    case 'top':
      rotateX = 90;
      rotateY = 0;
      break;
    case 'bottom':
      rotateX = -90;
      rotateY = 0;
      break;
  }

  // Apply the rotation to the cube
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}
