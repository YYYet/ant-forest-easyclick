/**
 * 蚂蚁森林循环模块
 * 2020 6/7
 * by  小橙子
 * QQ153680858
 *
 * @param number
 */

function gotoList(num) {
    sleep(1000);
    schemAntForest(2)?forfindcolor(num):toastError();
//偷列表
}

function gotoList_tohelp(num) {
    sleep(1000);
forfindcolortohelp(num);
//列表帮收
}

function gotoList_toCollectAndhelp(num) {
    sleep(1000);
   forfindcolortoCollectAndHelp(num);
//列表帮收+偷
}
function toastError() {
toast("跳转失败")
}

function forfindcolortohelp(num) {

    while (true){
        findPkingImageByColor(HELP_COLOR,HELP_OFFSET,null,null,num)
    }
}
function forfindcolor(num) {

    while (true){
        findPkingImageByColor(PICKING_COLOR,PICKING_OFFSET,null,null,num)
    }
}

function forfindcolortoCollectAndHelp(num) {

    while (true){
        findPkingImageByColor(PICKING_COLOR,PICKING_OFFSET,HELP_COLOR,HELP_OFFSET,2)
    }
}


function loopModel() {
    checkFunction();
}


