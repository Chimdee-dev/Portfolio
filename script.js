document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    console.log ('buren achaallaj baina ');
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
        console.log('Dark mode is true');

    } else {
    
        console.log('Dark mode is false');
    }

    toggleButton.addEventListener('click', () => {
        const assanEseh = document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', assanEseh);
        if (assanEseh) {
            console.log('Dark mode is now enabled');
        }
        else {
            console.log('Dark mode is now disabled');
        }
    });
});

const PASSWORD = "123";
const loginBtn = document.getElementById('login-button');
const loginSection = document.getElementById('login-section');
const adminPanel = document.getElementById('admin-panel');
const loginError = document.getElementById('login-error');

loginBtn.addEventListener('click', () => {
    const password = document.getElementById('admin-password').value;

    if (password === PASSWORD) {
        loginSection.style.display = 'none';
        adminPanel.style.display = 'block';
        console.log('Нэвтрэлт амжилттай');
    } else {
        loginError.textContent = 'Нууц үг буруу байна';
        console.log('Нэвтрэлт амжилтгүй');
    }
});


const enableEditBtn = document.getElementById('enable-edit-mode');
const saveBtn = document.getElementById('save-all');
enableEditBtn.addEventListener('click', () => {
const about = document.getElementById('about-text');
    about.setAttribute('contenteditable', 'true');


const project1 = document.querySelectorAll('#project-1');
project1.forEach(element => {
    element.setAttribute('contenteditable', 'true');
});



    const project2 = document.querySelectorAll('project-2');
    project2.forEach(element => {
        element.setAttribute('contenteditable', 'true');
    });
    const project3 = document.querySelectorAll('project-3');
    project3.forEach(element => {
        element.setAttribute('contenteditable', 'true');
    });


    saveBtn.style.display = 'inline-block';
    alert('Засварлах горим идэвхжлээ. Хүссэн зүйлээ засварлаж, хадгалаарай.');
    saveBtn.addEventListener('click', () => {
        const aboutText = document.getElementById('about-text').textContent.trim();
        localStorage.setItem('aboutText', aboutText);
        const project1Text = document.getElementById('project-1').textContent.trim();
        localStorage.setItem('project1Text', project1Text);
        const project2Text = document.getElementById('project-2').textContent.trim();
        localStorage.setItem('project2Text', project2Text);
        const project3Text = document.getElementById('project-3').textContent.trim();
        localStorage.setItem('project3Text', project3Text);
        alert('Хадгалалт амжилттай боллоо.');
    });

// Load saved content from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedAboutText = localStorage.getItem('aboutText');
    if (savedAboutText) {
        document.getElementById('about-text').textContent = aboutText;
    }
    const project1Text = localStorage.getItem('project1Text');
    if (savedProject1Text) {
        document.getElementById('project-1').textContent = project1Text;
    }
    const project2Text = localStorage.getItem('project2Text');
    if (savedProject2Text) {
        document.getElementById('project-2').textContent = project2Text;
    }
    const project3Text = localStorage.getItem('project3Text');
    if (savedProject3Text) {
        document.getElementById('project-3').textContent = project3Text;
    }
}
    );
}
);
