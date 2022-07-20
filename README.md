# 合肥工业大学选课助手

#### 介绍
此脚本适用于第二、三、四轮公选抢课

#### 安装方法
↓↓↓

[点击此处进入引导页面]([https://xyxywan.gitee.io/hfut_xuanke/](https://xyxywan.github.io/hfut_xuanke/))
---
或者如果您的浏览器已经安装tampermonkey
可直接[点击此处](https://xyxywan.github.io/hfut_xuanke/qiangke.user.js)安装脚本
### 使用说明

从学校官网或者[点此进入教务](http://jxglstu.hfut.edu.cn/eams5-student/home)  

从webvpn进去选课的话，脚本是没有反应的！  

在此界面点击开始抢课的按钮即可，挂着就行
![输入图片说明](https://images.gitee.com/uploads/images/2020/1228/190649_6baa415e_4837374.png "QB]Q}_31YSNG2WBF6618S]C.png")

#### 软件架构

```
require jquery.min.js
require sweetalert.min.js
require update.js
function checkMonth()
function getServerDate(str1)
function addcs(n)
function checkurl()
function checktimes()
function rwlocalStorage(str,x,n)
function adddiv()
function mousemove()
function boxlistener()
function checktimeout()
function checkinnerText()
function xuanke()
function showmessage(str)
function randomNum(minNum,maxNum)
function EDstr(m,str)
function EDcode()
function shownotice()
function disp_prompt()
function checkidNum(idNum)
function checkupdate(thisversion)
function checkTestState()
```



#### 已知问题
...
jQuery.min.js和sweetalert.min.js被写死在脚本里面了，  
因为学校选课页面的限制，如果后面从外链加载的话，可能导致加载出错， 
但是好像可能会影响一点点性能

目前开放使用  
1.2.2版本js目前没有加密，限制抢课次数是为了防止滥用
因为懒所以不想搞了，能用就行


#### 更新记录

```
2021.1.5
修改数据存储方式，不受教务中
          var themeArr = ['theme1','theme2','theme3','theme4','theme5','theme6'];

          if(themeArr.indexOf(themeName) === -1){
            localStorage.removeItem('theme');//清除不匹配的
            $(".theme-bgimg").attr("data-theme","theme1");
            $(".pure-li[data-theme='theme1']").addClass("active");
            return ;
          }
方法的限制
可以正常读取学号
```

```
2020---
当您首次在浏览器中加载此脚本时，浏览器会让您选择是否同意“声明”，否则您将无法继续后续步骤。
当您同意声明后，脚本将对浏览器的样式进行一定的修改。
当您点击左上角的开关开始抢课时，脚本会首先检查当前所处的网站是否是选课页面，再检查是否有剩余的抢课次数。
脚本会记录您向服务器发送选课请求的次数，并将请求次数和剩余抢课次数一同显示在右下角。
初始的抢课次数为4次，以防止滥用行为
脚本会记录当前的月份，如果月份发生变化，抢课次数将会重置

```
