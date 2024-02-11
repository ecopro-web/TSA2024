$(".title > span").each(function(index){
    $(this).css({
        'animation-delay' : 0.2+0.05*(1+index) + 's'
    });
});

document.getElementById('homeLink').addEventListener('click', function() {
    window.location.href = 'https://packagefreeshop.com';
});

document.getElementById('autoLink').addEventListener('click', function() {
    window.location.href = 'https://www.tesla.com';
});

document.getElementById('commercialLink').addEventListener('click', function() {
    window.location.href = 'https://www.zerowaste.com';
});


document.getElementById('exploreMoreLink').addEventListener('click', function() {
    window.location.href = 'https://www.earthhero.com';
});

document.getElementById('solarLink').addEventListener('click', function() {
    window.location.href = 'https://www.thisoldhouse.com/solar-alternative-energy/reviews/best-solar-companies';
});

document.getElementById('heatLink').addEventListener('click', function() {
    window.location.href = 'https://www.hvacinformed.com/insights/hvac-industry-addressing-climate-change-sustainability-co-1570804656-ga-co-1581682229-ga-co-1592321964-ga-co-1598629327-ga-off.1601288089.html';
});

document.getElementById('waterLink').addEventListener('click', function() {
    window.location.href = 'https://banyanwater.com/';
});

document.getElementById('exploreMore2Link').addEventListener('click', function() {
    window.location.href = 'https://gridx.com/';
});