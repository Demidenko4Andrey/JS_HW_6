$(function () {

    /**  CAROUSEL PLUGIN  **/

    $('.carousel').jqueryCarousel({
    });


    /**  TEMPLATE  **/


    var html = $('#template').html();
    var myPage = {
        headerTitle: 'Demidenko Andrey',
        headerLogo: 'img/logo.jpg',
        headerContent: '���������',
        contentTitle: '���� ����� ��������, ���� ��',
        contentListItem_1: '��� ������ ������� �������� ���� ����� �����',
        contentListItem_2: '����� ��������� � ������ � ������ ����',
        contentListItem_3: '� ��������� ������� ��� �������� ���� ����',
        contactTitle: '̳� ���������� �������',
        phoneNumber: '+38093 333 90 13',
        contactSocialNetworkTitle: 'Facebook profile',
        contactSocialNetworkLink: 'https://www.facebook.com/andrey.demidenko.756',
        contactSocialNetworkLinkName: 'facebook.com',
        footerTitle: '̳� ������',
        footerContent: 'Hospitality ��� ����'
    };

    var content = tmpl(html, myPage);


    $('body').append(content);


});