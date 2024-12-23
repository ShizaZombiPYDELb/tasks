document.addEventListener('DOMContentLoaded', () => {
    const submit = document.querySelector('#submit');

    submit.addEventListener('click', (e) => {
        e.preventDefault();

        const name = document.querySelector('#name').value.trim();
        const mess = document.querySelector('#mess').value.trim();
        const tell = document.querySelector('#tell').value.trim();
        const email = document.querySelector('#email').value.trim();

        let isValid = true;

        document.querySelector(`#name_err`).value = '';
        document.querySelector(`#mess_err`).value = '';
        document.querySelector(`#email_err`).value = '';
        document.querySelector(`#tell_err`).value = '';

        if (!name) {
            document.querySelector(`#name_err`).innerText = 'GDE IMY?';
            isValid = false;

            setTimeout(() => {
                document.querySelector(`#name_err`).innerText = '';
            }, 2000);
        }
        if (mess.length < 5) {
            document.querySelector(`#mess_err`).innerText = 'nada Bolbhe chem 5 simvolov!!!';
            isValid = false;

            setTimeout(() => {
                document.querySelector(`#mess_err`).innerText = '';
            }, 2000);
        }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.querySelector(`#email_err`).innerText = 'Vot primer => hallo@gmail.com';
            isValid = false;

            setTimeout(() => {
                document.querySelector(`#email_err`).innerText = '';
            }, 2000);
        }
        if (tell.length < 13 || !/^\+380\d{9}$/.test(tell)) {
            document.querySelector(`#tell_err`).innerText = 'normalbno zapishi telephone!';
            isValid = false;

            setTimeout(() => {
                document.querySelector(`#tell_err`).innerText = '';
            }, 2000);
        }
        else {
            console.log({name, mess, email, tell});
            alert("PRACYE!");
            document.querySelector(`#form`).reset();
        }
    });
});