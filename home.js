const careerElement = document.getElementById('career');
const workElement = document.getElementById('work');
const skillElement = document.getElementById('skill');
const profileElement = document.getElementById('profile');
const homeElement = document.getElementById('home');

navCareerClick = () => {
    careerElement.scrollIntoView({  
        behavior: 'smooth'  
    });
}
navWorkClick = () => {
    workElement.scrollIntoView({  
        behavior: 'smooth'  
    });
}
navSkillClick = () => {
    skillElement.scrollIntoView({  
        behavior: 'smooth'  
    });
}
navProfileClick = () => {
    profileElement.scrollIntoView({  
        behavior: 'smooth'  
    });
}
navHomeClick = () => {
    homeElement.scrollIntoView({  
        behavior: 'smooth'  
    });
}