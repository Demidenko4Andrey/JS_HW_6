$(function () {

    /**  CAROUSEL PLUGIN  **/

    $('.carousel').jqueryCarousel({
    });


    /**  TEMPLATE  **/


    var html = $('#template').html();
    var myPage = {
        headerTitle: 'Demidenko Andrey',
        headerLogo: 'img/logo.jpg',
        headerContent: 'Экономист',
        contentTitle: 'Хочу вчити фронтенд, тому що',
        contentListItem_1: 'Мою роботу зможуть побачити сотні тисяч людей',
        contentListItem_2: 'Можна працювати з людьми з усього світу',
        contentListItem_3: 'Є можливість кожного дня дізнатись щось нове',
        contactTitle: 'Мій контактний телефон',
        phoneNumber: '+38093 333 90 13',
        contactSocialNetworkTitle: 'Facebook profile',
        contactSocialNetworkLink: 'https://www.facebook.com/andrey.demidenko.756',
        contactSocialNetworkLinkName: 'facebook.com',
        footerTitle: 'Мій фідбек',
        footerContent: 'Hospitality под ключ'
    };

    var content = tmpl(html, myPage);


    $('body').append(content);


});