# 计划
## 全局状态管理 pinia
## css sass UnoCss

# 国际化
大概是用i18n 如果说有样式需求使用:lang() &  [lang="zh"] { }  实现 ？
# 踩坑记录
## 1. 关于在vite 中使用 sass
在vite使用css预处理无需安装额外的依赖，只需要安装主要依赖即可。
<br/>
（坑）关于sass的两种后缀文件.sass和.scss 
<br/>
原因: 使用scss语法去写sass文件，vite编译的时候嘎嘎报错。也怪自己压根没有好好的看过文档。这对一个初级cv来说是一个大忌
<br/>
scss与大多数的预处理语法类似，基本上写过css的人就可以立即上手。
sass缩进的语法类似python,对缩进有严格的要求。这个也是我python从入门到放弃的原因
<br/>
```css
// example
// scss文件语法
html {
    color: red；
}

// sass文件语法
html 
    color: red
```


