window.onscroll = function() {
    scrollEffect();
};

function scrollEffect() {
    const header = document.querySelector('header');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.padding = '0.5em';
        header.style.background = '#555';
    } else {
        header.style.padding = '1em';
        header.style.background = '#333';
    }
}

function toggleInfo() {
    const moreInfo = document.getElementById('moreInfo');
    const btnMoreInfo = document.querySelector('.btn-more-info');

    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        btnMoreInfo.textContent = 'Read Less';
    } else {
        moreInfo.style.display = 'none';
        btnMoreInfo.textContent = 'Read More';
    }
}