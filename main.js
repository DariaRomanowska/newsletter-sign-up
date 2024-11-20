const form = document.getElementById('form');

const handleSubmit = (e) => {
    e.preventDefault(e);
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const data = Object.fromEntries(new FormData(e.target));
    if(!regex.test(data.email)){
        document.querySelector('.error').textContent = 'Valid email required!';
        document.querySelector('input').classList.add('error-input');
        setTimeout(() => {
            document.querySelector('.error').textContent = ''
            document.querySelector('input').classList.remove('error-input')
        }, 3000)
    } else{
        document.getElementById('add-email').textContent = `${data.email}`
        document.querySelector('main').classList.add('confirm-main')
        document.querySelector('.left').classList.add('hidden')
        document.querySelector('.right-bg').classList.add('hidden')
        document.querySelector('.success').classList.remove('hidden')
    }
}

form.addEventListener('submit', handleSubmit)

document.getElementById('close').addEventListener('click', () => {
    document.querySelector('main').classList.remove('confirm-main');
    document.querySelector('.left').classList.remove('hidden');
    document.querySelector('.right-bg').classList.remove('hidden');
    document.querySelector('.success').classList.add('hidden');
   const input = document.querySelector('input');
   input.value = '';
})