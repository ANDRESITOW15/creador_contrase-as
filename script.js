document.addEventListener('DOMContentLoaded', () => {
    const generatePasswordBtn = document.getElementById('generatePassword');
    const generateEmailBtn = document.getElementById('generateEmail');
    const passwordOutput = document.getElementById('passwordOutput');
    const emailOutput = document.getElementById('emailOutput');

    generatePasswordBtn.addEventListener('click', generatePassword);
    generateEmailBtn.addEventListener('click', generateEmail);

    function generatePassword() {
        const length = document.getElementById('passwordLength').value;
        const includeUppercase = document.getElementById('includeUppercase').checked;
        const includeNumbers = document.getElementById('includeNumbers').checked;
        const includeSymbols = document.getElementById('includeSymbols').checked;

        let charset = 'abcdefghijklmnopqrstuvwxyz';
        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeNumbers) charset += '0123456789';
        if (includeSymbols) charset += '!@#$%^&*()_+{}[]|:;<>,.?/~';

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        passwordOutput.value = password;
    }

    function generateEmail() {
        const domain = document.getElementById('emailDomain').value;
        const randomString = Math.random().toString(36).substring(2, 10);
        const email = randomString + domain;
        emailOutput.value = email;
    }
});

