let url = location.href.replace(/\/$/, '');

if (location.hash) {
  const hash = url.split('#');
  $('#tab-collapse a[href="#'+hash[1]+'"]').tab('show');
  url = location.href.replace(/\/#/, '#');
  history.replaceState(null, null, url);
  setTimeout(() => {
    $(window).scrollTop(0);
  }, 400);
}

$('#tab-collapse a[data-toggle="pill"]').on('click', function() {
    let newUrl;
    const hash = $(this).attr('href');
    newUrl = url.split('#')[0] + hash;
    newUrl += '/';
    history.replaceState(null, null, newUrl);
});
