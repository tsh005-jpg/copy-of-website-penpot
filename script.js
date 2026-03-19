function switchTab(index) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-image').forEach(i => i.classList.remove('active'));

    document.querySelectorAll('.tab')[index].classList.add('active');
    document.querySelectorAll('.tab-image')[index].classList.add('active');
}

