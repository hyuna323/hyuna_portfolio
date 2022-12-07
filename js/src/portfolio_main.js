window.addEventListener('scroll', function() {
  const posY = this.window.pageYOffset;
  const portfolio = this.document.querySelector('#portfolio').getBoundingClientRect().top;
  const about = this.document.querySelector('#about').getBoundingClientRect().top;
  const skills = this.document.querySelector('#skills').getBoundingClientRect().top;
  const project = this.document.querySelector('#project').getBoundingClientRect().top;
  const contact = this.document.querySelector('#contact').getBoundingClientRect().top;

  const portfolioTop = posY + portfolio;
  const aboutTop = posY + about;
  const skillsTop = posY + skills;
  const projectTop = posY + project;
  const contactTop = posY + contact;

  let totalHeight = document.body.scrollHeight - this.window.innerHeight -1;

  if(posY >= portfolioTop && posY < aboutTop) {

  } else if(posY >= aboutTop && posY < skillsTop) {

  } else if(posY >= skillsTop && posY < projectTop) {

  } else if(posY >= projectTop && posY <= contactTop) {

  } else if(posY >= contactTop && posY <= totalHeight) {

  } else {

  }
});