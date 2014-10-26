/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('a.page_first').click(function () {
    $('label#currentPageIndex').text('1');
});

//下一页
$('a.page_next').click(function () {
//    $('label#currentPageIndex').text(pageCount);
    var pageIndex = parseInt($('label#currentPageIndex').text()) + 1;
    //groupid = -1 代表所有用户组
    var groupURL = 'message?t=message/list&action=&keyword=&frommsgid=204060105&pageidx='+pageIndex+'&offset='+((pageIndex-1)*5)+'&count=5&day=7&filterivrmsg=1&token=136862885&lang=zh_CN';
    window.location.href = groupURL;
});

$('a.page_prev').click(function () {
    var pageIndex = parseInt($('label#currentPageIndex').text()) - 1;
    //groupid = -1 代表所有用户组
    var groupURL = 'message?t=message/list&action=&keyword=&frommsgid=204060105&pageidx='+pageIndex+'&offset='+((pageIndex-1)*5)+'&count=5&day=7&filterivrmsg=1&token=136862885&lang=zh_CN';
    window.location.href = groupURL;
});

$('a.page_go').click(function () {
    var toPageIndex = $('span.goto_area input').val();
    //$('label#currentPageIndex').text($('span.goto_area input').val());
    var groupURL = 'message?t=message/list&action=&keyword=&frommsgid=204060105&pageidx='+toPageIndex+'&offset='+((toPageIndex -1)*5)+'&count=5&day=7&filterivrmsg=1&token=136862885&lang=zh_CN';
    window.location.href = groupURL;
});