function ImageWrapper() {

}

var image = new ImageWrapper();

/**
 * 向系统申请屏幕截图权限，返回是否请求成功。
 * <p>
 * 第一次使用该函数会弹出截图权限请求，建议选择“总是允许”。
 * </p>
 * <p>
 * 这个函数只是申请截图权限，并不会真正执行截图，真正的截图函数是captureScreen()。
 * </p>
 * 该函数在截图脚本中只需执行一次，而无需每次调用captureScreen()都调用一次。
 * <p>
 * 建议在本软件界面运行该函数，在其他软件界面运行时容易出现一闪而过的黑屏现象。
 * </P>
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 * @param timeout 超时时间，单位是毫秒
 * @param type 截屏的类型，0 自动选择，1 代表授权模式，2 代表无需权限模式（该模式前提条件：运行模式为代理模式）
 *
 * @return 布尔型 true 代表成功 false代表失败
 */
ImageWrapper.prototype.requestScreenCapture = function (timeout, type) {
    if (imageWrapper == null) {
        return;
    }
    return imageWrapper.requestScreenCapture(timeout, type);
};


/**
 * 释放截屏请求
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 */
ImageWrapper.prototype.releaseScreenCapture = function () {
    if (imageWrapper == null) {
        return;
    }
    imageWrapper.releaseScreenCapture();
};


/**
 * 截取当前屏幕并返回一个Image对象。
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 * <Br/>
 * 如果区域空或则有负数的，就会是全屏
 * @param retryNumber 重试次数，直到能截到图为止，默认是3
 * @param x 截图的起始X坐标
 * @param y 截图的起始Y坐标
 * @param w 截图的宽度，从X坐标算起
 * @param h 截图的高度，从Y坐标算起
 * @return AutoImage AutoImage对象或者null
 */
ImageWrapper.prototype.captureScreen = function (retryNumber, x, y, w, h) {
    if (imageWrapper == null) {
        return;
    }
    var uuid = imageWrapper.captureScreen(retryNumber, x, y, w, h);
    if (uuid != null) {
        return new AutoImage(uuid);
    }
    return null;
};

/**
 * 将屏幕抓取为Bitmap对象，如果中间有-1或者宽度、宽度为-1，将会是全屏
 * @param format jpg或者png，代理模式下有用
 * @param x 开始X坐标
 * @param y 开始Y坐标
 * @param w 宽度
 * @param h 高度
 * @param q 图片质量，1 - 100，代理模式下有用
 * @return Bitmap null或者bitmap对象
 */
ImageWrapper.prototype.captureScreenBitmap = function (format, x, y, w, h, q) {
    if (imageWrapper == null) {
        return;
    }
    return imageWrapper.captureScreenBitmap(format, x, y, w, h, q);
};


/**
 * 抓取全屏
 * @return {null|AutoImage}
 */
ImageWrapper.prototype.captureFullScreen = function () {
    if (imageWrapper == null) {
        return;
    }
    var uuid = imageWrapper.captureFullScreen();
    if (uuid != null) {
        return new AutoImage(uuid);
    }
    return null;
};

/**
 * 截取当前屏幕并以PNG格式保存到path中。如果文件不存在会被创建；文件存在会被覆盖。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *<Br/>
 * 如果区域空或则有负数的，就会是全屏
 * @param retryNumber 重试次数，直到能截到图为止，默认是3
 * @param x 截图的起始X坐标
 * @param y 截图的起始Y坐标
 * @param w 截图的宽度，从X坐标算起
 * @param h 截图的高度，从Y坐标算起
 * @param path 截图保存路径
 * @return 布尔型 true 截图成功 false 代表不成功
 */
ImageWrapper.prototype.captureToFile = function (retryNumber, x, y, w, h, path) {
    if (imageWrapper == null) {
        return;
    }
    return imageWrapper.captureScreenToFile(retryNumber, x, y, w, h, path);
};

/**
 * 读取在路径path的图片文件并返回一个{@link AutoImage}对象。
 * 如果文件不存在或者文件无法解码则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param path 图片路径
 * @return AutoImage AutoImage对象或者null
 */
ImageWrapper.prototype.readImage = function (path) {
    if (imageWrapper == null) {
        return;
    }
    var uuid = imageWrapper.readImage(path);
    if (uuid != null) {
        return new AutoImage(uuid);
    }
    return null;
};
/**
 * 读取在路径path的图片文件并返回一个{@link Bitmap}对象。如果文件不存在或者文件无法解码则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param path 图片路径
 * @return Bitmap android的bitmap对象或者null
 */
ImageWrapper.prototype.readBitmap = function (path) {
    if (imageWrapper == null) {
        return;
    }
    return imageWrapper.readBitmap(path);
};

/**
 * 返回图片image在点(x, y)处的像素的ARGB值。
 * <p>
 * 该值的格式为0xAARRGGBB，是一个"32位整数"
 * <p>
 * 坐标系以图片左上角为原点。以图片左侧边为y轴，上侧边为x轴。
 *
 * @param image 图片
 * @param x     要获取的像素的横坐标。
 * @param y     要获取的像素的纵坐标。
 * @return 整型
 */
ImageWrapper.prototype.pixelInImage = function (image, x, y) {
    if (imageWrapper == null || image == null) {
        return;
    }
    return imageWrapper.pixelInImage(image.uuid, x, y);
};


/**
 * 找图。在大图片image中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image     大图片
 * @param template  小图片（模板）
 * @param x         找图区域 x 起始坐标
 * @param y         找图区域 y 起始坐标
 * @param w         找图区域 w 宽度
 * @param h         找图区域 h 高度
 * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return Rect 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImage = function (image, template, x, y, w, h, threshold, limit) {
    if (imageWrapper == null || image == null || template == null) {
        return;
    }
    var res = imageWrapper.findImage(image.uuid, template.uuid, x, y, w, h, threshold, limit);
    return this.toRectList(res);
};

/**
 * 找图。在当前屏幕中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 * @param template  小图片（模板）
 * @param x         找图区域 x 起始坐标
 * @param y         找图区域 y 起始坐标
 * @param w         找图区域 w 宽度
 * @param h         找图区域 h 高度
 * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return Rect 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImageEx = function (template, x, y, w, h, threshold, limit) {
    if (imageWrapper == null || template == null) {
        return;
    }
    var res = imageWrapper.findImageCurrentScreen(template.uuid, x, y, w, h, threshold, limit);
    return this.toRectList(res);
};


/**
 * OpenCV模板匹配封装
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image         大图片
 * @param template      小图片（模板）
 * @param weakThreshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param threshold     图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param rect          找图区域。参见findColor函数关于 rect 的说明
 * @param maxLevel      默认为-1，一般而言不必修改此参数。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level参数表示金字塔的层次,
 *                      level越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return Match集合 匹配到的集合
 */
ImageWrapper.prototype.matchTemplate = function (image, template, weakThreshold, threshold, rect, maxLevel, limit) {
    if (imageWrapper == null || image == null || template == null) {
        return;
    }
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.matchTemplate(image.uuid, template.uuid, weakThreshold, threshold, drect, maxLevel, limit);
    if (res == null) {
        return null;
    }
    var d = JSON.parse(res);
    var x = [];
    for (var i = 0; i < d.length; i++) {
        x.push(new Match(d[i]));
    }
    return x;
};


/**
 * OpenCV模板匹配封装，在当前屏幕截图中进行匹配
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param template      小图片（模板）
 * @param weakThreshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param threshold     图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param rect          找图区域。参见findColor函数关于 rect 的说明
 * @param maxLevel      默认为-1，一般而言不必修改此参数。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level参数表示金字塔的层次,
 *                      level越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return Match集合 匹配到的集合
 */
ImageWrapper.prototype.matchTemplateEx = function (template, weakThreshold, threshold, rect, maxLevel, limit) {
    if (imageWrapper == null || template == null) {
        return;
    }
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.matchTemplateCurrentScreen(template.uuid, weakThreshold, threshold, drect, maxLevel, limit);
    if (res == null) {
        return null;
    }
    var d = JSON.parse(res);
    var x = [];
    for (var i = 0; i < d.length; i++) {
        x.push(new Match(d[i]));
    }
    return x;
};


/**
 * 在图片中找到颜色和color完全相等的点，；如果没有找到，则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image 图片
 * @param color     要寻找的颜色
 * @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标
 * @param y 区域的Y起始坐标
 * @param w 区域的宽度
 * @param h 区域的高度
 * @param limit 限制个数
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findColor = function (image, color, threshold, x, y, w, h, limit) {
    if (imageWrapper == null || image == null) {
        return;
    }
    var res = imageWrapper.findColor(image.uuid, color, threshold, x, y, w, h, limit);
    if (res == null) {
        return null;
    }
    var d = JSON.parse(res);
    var x1 = [];
    for (var i = 0; i < d.length; i++) {
        x1.push(new Point(d[i]));
    }
    return x1;
};


/**
 * 在图片中找到颜色和color完全相等的点，参数从JSON中获取如果没有找到，则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image 图片
 * @param jsonFileName     res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findColorJ = function (image, jsonFileName) {
    if (imageWrapper == null || image == null) {
        return;
    }
    var data = readResString(jsonFileName + ".json");
    if (data == null) {
        return null;
    }
    data = JSON.parse(data);
    var firstColor = data['firstColor'];
    var threshold = data['threshold'];
    var x = data['x'];
    var y = data['y'];
    var w = data['w'];
    var h = data['h'];
    var limit = data['limit'];

    return imageWrapper.findColor(image.uuid, firstColor, threshold, x, y, w, h, limit);
};

/**
 * 在当前屏幕中找到颜色和color完全相等的点，如果没有找到，则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param color     要寻找的颜色
 * @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标
 * @param y 区域的Y起始坐标
 * @param w 区域的宽度
 * @param h 区域的高度
 * @param limit 限制个数
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findColorEx = function (color, threshold, x, y, w, h, limit) {
    if (imageWrapper == null) {
        return;
    }
    var res = imageWrapper.findColorCurrentScreen(color, threshold, x, y, w, h, limit);
    if (res == null) {
        return null;
    }
    var d = JSON.parse(res);
    var x1 = [];
    for (var i = 0; i < d.length; i++) {
        x1.push(new Point(d[i]));
    }
    return x1;
};


/**
 * 在当前屏幕中找到颜色和color完全相等的点，参数从JSON中获取如果没有找到，则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param jsonFileName     res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findColorExJ = function (jsonFileName) {
    if (imageWrapper == null) {
        return;
    }
    var data = readResString(jsonFileName + ".json");
    if (data == null) {
        return null;
    }
    data = JSON.parse(data);
    var firstColor = data['firstColor'];
    var threshold = data['threshold'];
    var x = data['x'];
    var y = data['y'];
    var w = data['w'];
    var h = data['h'];
    var limit = data['limit'];
    return imageWrapper.findColorCurrentScreen(firstColor, threshold, x, y, w, h, limit);
};


/**
 * 多点找色，找到所有符合标准的点，类似于按键精灵的多点找色
 * <p>
 * 整张图片都找不到时返回null
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image      要找色的图片
 * @param firstColor 第一个点的颜色
 * @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
 * @param points     字符串类似这样 6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696
 * @param x 区域的X起始坐标
 * @param y 区域的Y起始坐标
 * @param w 区域的宽度
 * @param h 区域的高度
 * @param limit 限制个数
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findMultiColor = function (image, firstColor, points, threshold, x, y, w, h, limit) {
    //String image, String firstColor, String points, float threshold, int x, int y, int w, int h,int limit
    if (imageWrapper == null || image == null) {
        return;
    }
    var res = imageWrapper.findMultiColor(image.uuid, firstColor, points, threshold, x, y, w, h, limit);
    if (res == null) {
        return null;
    }
    var d = JSON.parse(res);
    var x1 = [];
    for (var i = 0; i < d.length; i++) {
        x1.push(new Point(d[i]));
    }
    return x1;
};


/**
 * 多点找色，找到所有符合标准的点，参数从JSON文件中读取，类似于按键精灵的多点找色
 * <p>
 * 整张图片都找不到时返回null
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image      要找色的图片
 * @param jsonFileName res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findMultiColorJ = function (image, jsonFileName) {
    //String image, String firstColor, String points, float threshold, int x, int y, int w, int h,int limit
    if (imageWrapper == null || image == null) {
        return;
    }
    var data = readResString(jsonFileName + ".json");
    if (data == null) {
        return null;
    }
    data = JSON.parse(data);
    var firstColor = data['firstColor'];
    var threshold = data['threshold'];
    var points = data['points'];
    var x = data['x'];
    var y = data['y'];
    var w = data['w'];
    var h = data['h'];
    var limit = data['limit'];
    return imageWrapper.findMultiColor(image.uuid, firstColor, points, threshold, x, y, w, h, limit);
};


/**
 * 多点找色，找到所有符合标准的点，自动抓取当前屏幕的图片，类似于按键精灵的多点找色
 * <p>
 * 整张图片都找不到时返回null
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param firstColor 第一个点的颜色
 * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param points     字符串类似这样 6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696
 * @param x 区域的X起始坐标
 * @param y 区域的Y起始坐标
 * @param w 区域的宽度
 * @param h 区域的高度
 * @param limit 限制个数
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findMultiColorEx = function (firstColor, points, threshold, x, y, w, h, limit) {
    //String firstColor, String points, float threshold, int x, int y, int w, int h
    if (imageWrapper == null) {
        return;
    }
    var res = imageWrapper.findMultiColorCurrentScreen(firstColor, points, threshold, x, y, w, h, limit);
    if (res == null) {
        return null;
    }
    var d = JSON.parse(res);
    var x1 = [];
    for (var i = 0; i < d.length; i++) {
        x1.push(new Point(d[i]));
    }
    return x1;
};


/**
 * 多点找色，找到所有符合标准的点，自动抓取当前屏幕的图片,参数从JSON文件中读取，类似于按键精灵的多点找色
 * 整张图片都找不到时返回null
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param jsonFileName res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findMultiColorExJ = function (jsonFileName) {
    if (imageWrapper == null) {
        return;
    }
    var data = readResString(jsonFileName + ".json");
    if (data == null) {
        return null;
    }
    data = JSON.parse(data);
    var firstColor = data['firstColor'];
    var threshold = data['threshold'];
    var points = data['points'];
    var x = data['x'];
    var y = data['y'];
    var w = data['w'];
    var h = data['h'];
    var limit = data['limit'];
    return imageWrapper.findMultiColorCurrentScreen(firstColor, points, threshold, x, y, w, h, limit);
};


/**
 * 取得宽度
 * @param img 图片对象
 * @return int
 */
ImageWrapper.prototype.getWidth = function (img) {
    if (img == null) {
        return 0;
    }
    return imageWrapper.getWidth(img.uuid);
};

/**
 * 取得高度
 * @param img 图片对象
 * @return int
 */
ImageWrapper.prototype.getHeight = function (img) {
    if (img == null) {
        return 0;
    }
    return imageWrapper.getHeight(img.uuid);
};

/**
 * 保存到文件中
 * @param img 图片对象
 * @param path 路径
 * @return bool true代表成功，false 代表失败
 */
ImageWrapper.prototype.saveTo = function (img, path) {
    if (img == null) {
        return 0;
    }
    return imageWrapper.saveTo(img.uuid, path);
};
/**
 * 转成base64的字符串
 * @param img 图片对象
 * @return string
 */
ImageWrapper.prototype.toBase64 = function (img) {
    if (img == null) {
        return null;
    }
    return javaString2string(imageWrapper.toBase64(img.uuid));
};
/**
 * 剪切图片
 * @param img 图片对象
 * @param x x起始坐标
 * @param y y起始坐标
 * @param w 宽度
 * @param h 高度
 * @return AutoImage 对象或者null
 */
ImageWrapper.prototype.clip = function (img, x, y, w, h) {
    if (img == null) {
        return null;
    }
    var xd = imageWrapper.clip(img.uuid, x, y, w, h);
    if (xd != null) {
        return new AutoImage(javaString2string(xd));
    }
    return null;
};
/**
 * 取得图片的某个点的颜色值
 * @param img 图片对象
 * @param x x坐标点
 * @param y y坐标点
 * @return int 颜色值
 */
ImageWrapper.prototype.pixel = function (img, x, y) {
    if (img == null) {
        return 0;
    }
    return imageWrapper.pixel(img.uuid, x, y);
};

/**
 * 取得Bitmap图片的某个点的颜色值
 * @param bitmap 图片对象
 * @param x x坐标点
 * @param y y坐标点
 * @return int 颜色值
 */
ImageWrapper.prototype.getPixelBitmap = function (bitmap, x, y) {
    if (imageWrapper == null) {
        return;
    }
    return imageWrapper.getPixelBitmap(bitmap, x, y);
};
/**
 * 取得Bitmap图片的某个区域点的颜色值，等同于 Bitmap.getPixels
 * @param bitmap 图片对象
 * @param arraySize 要返回的区域数组的大小
 * @param offset      写入到pixels[]中的第一个像素索引值
 * @param stride      pixels[]中的行间距个数值(必须大于等于位图宽度)。可以为负数
 * @param x          　从位图中读取的第一个像素的x坐标值。
 * @param y           从位图中读取的第一个像素的y坐标值
 * @param width    　　从每一行中读取的像素宽度
 * @param height 　　　读取的行数
 * @return int 颜色值数组
 */
ImageWrapper.prototype.getPixelsBitmap = function (bitmap, arraySize, offset, stride, x, y, width, height) {
    if (imageWrapper == null) {
        return;
    }
    return imageWrapper.getPixelsBitmap(bitmap, arraySize, offset, stride, x, y, width, height);
};

/**
 * 是否被回收了
 * @param img 图片对象
 * @return bool true代表已经被回收了
 */
ImageWrapper.prototype.isRecycled = function (img) {
    if (img == null) {
        return false;
    }
    return imageWrapper.isRecycled(img.uuid);
};

/**
 * 回收图片
 * @param img 图片对象
 * @return {*}
 */
ImageWrapper.prototype.recycle = function (img) {
    if (img == null) {
        return false;
    }
    return imageWrapper.recycle(img.uuid);
};


ImageWrapper.prototype.toRectList = function (res) {
    if (res == null) {
        return null;
    }
    var ps = JSON.parse(res);
    if (ps == null) {
        return null;
    }
    var d = [];
    for (var i = 0; i < ps.length; i++) {
        d.push(new Rect(ps[i]));
    }
    return d;
};