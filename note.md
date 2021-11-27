日志：
1.为了引入时忽略文件扩展名
    新增依赖
        eslint-import-resolver-webpack
    来源：
        https://www.jianshu.com/p/fe96234d01cc
    
    结果： 问题已解决
2.路径别名设置
    修改文件
        vue.config.js
    来源
        https://blog.csdn.net/MCQq123321/article/details/83348119
    意外情况
        上述来源中最后一步设置webpack配置是错的，导致本来正常的跳转失效，现通过来源2
        设置回默认自动应用node_modules的webpack.config.js解决问题，但是并未使用具体路径
        ，而是使用默认查找路径
    来源2
        https://blog.csdn.net/qq_37274323/article/details/100206842

3.发现问题： Module is not installed
    webstorm的webpack设置原因， setting里面设置配置文件即可
    来源：
        https://blog.csdn.net/qq_37274323/article/details/100206842
    
