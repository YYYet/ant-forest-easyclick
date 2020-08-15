/**
 * 蚂蚁森林功能模块
 * 2020 6/7
 * by  小橙子
 * QQ153680858
 *
 * @param number
 */

function function_oneAndTwoAndThree() {
    if ( schemAntForest(1)) {
//收自己 金 帮收
        OtherGiveEnergyCollect(0.5);
        gotoList_toCollectAndhelp(2);
    }else {
        toast("支付宝URL schemes失效，请联系作者修复")
    }
}

function function_TwoAndThree() {
    if ( schemAntForest(1)) {
//收金，然后帮收
        OtherGiveEnergyCollect(0.9);
        gotoList_tohelp(1);
    }else {
        toast("支付宝URL schemes失效，请联系作者修复")
    }
}

function function_OneAndthree() {
    if ( schemAntForest(1)) {
        EnergyCollect();
        gotoList_toCollectAndhelp(2);
        //收自己和列表的，然后帮收
    }else {
        toast("支付宝URL schemes失效，请联系作者修复")
    }
}

function function_OneAndtwo() {
    if ( schemAntForest(1)) {
//收自己的能量和打赏，然后收列表
        OtherGiveEnergyCollect(0.5);
        gotoList(1);

    }else {
        toast("支付宝URL schemes失效，请联系作者修复")
    }
}
function function_one() {
    if ( schemAntForest(1)) {
        EnergyCollect();
        gotoList(1);
    }else {
        toast("支付宝URL schemes失效，请联系作者修复")
    }
}
function function_two(){
    if ( schemAntForest(1)) {
        OtherGiveEnergyCollect(0.9);
    }else {
        toast("支付宝URL schemes失效，请联系作者修复")
    }
}

function function_three(){
    if ( schemAntForest(2)) {
        gotoList_tohelp(1);
    }else {
        toast("支付宝URL schemes失效，请联系作者修复")
    }
}