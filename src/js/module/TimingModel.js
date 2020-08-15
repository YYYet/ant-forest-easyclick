/**
 * 蚂蚁森林定时模块
 * 2020 6/7
 * by  小橙子
 * QQ153680858
 *
 * @param number
 */


function timingModel() {
    flag_stopScroll=1;
    checkTimeFunction();
}

function checkTimeFunction() {
    switch (flag_num) {
        case 0:
            toast("请选择功能");
            break;
        case -8:
            logi("定时执行———>收能量（收自己+偷）")
            function_one();
            break;
        case -4:
            logi("定时执行———>收金球（收别人浇的水）")
            function_two();
            break;
        case 2:
            logi("定时执行———>帮收（帮别人收快消失的能量）")
            function_three();
            break;
        case -2:
            logi("定时执行———>收能量+收金球（收完自己的偷列表）")
            function_OneAndtwo();
            break;
        case 5:
            logi("定时执行———>收能量+帮收（偷列表的同时帮收列表）")
            function_OneAndthree();
            break;
        case 8:
            logi("定时执行———>收金球+帮收（收完自己的金球帮收列表）")
            function_TwoAndThree();
            break;
        case 10:
            logi("定时执行———>收能量+收金球+帮收（收完自己偷列表帮收列表）")
            function_oneAndTwoAndThree();
            break;
    }
}