function showMore() {
    document.getElementById('short-text').style.display = 'block';
    document.getElementById('full-text').style.display = 'block';
    document.getElementById('show-more-btn').style.display = 'none';
    document.getElementById('show-less-btn').style.display = 'inline';
}

function showLess() {
    document.getElementById('short-text').style.display = 'block';
    document.getElementById('full-text').style.display = 'none';
    document.getElementById('show-more-btn').style.display = 'inline';
    document.getElementById('show-less-btn').style.display = 'none';
}
