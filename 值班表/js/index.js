console.log(`
优点
1.每节课值班干事由不同班级组成
2.随机排班，点击刷新可重新排班
缺点
1.值班人数不平衡
2.没有后端接口支持，不能保存数据
3.每次需要手动获取没课信息
4.数据安全性差，不能上线
`)

//学生数据
const uname1 = [//23造价301
'李沅睿（权)',
'毛俊伟（权)',
'刘吉(生）',
'黄菊(生）',
'余永焜(生）',
'佘继鑫(生）',
'石玉茹(生）',
'余鑫阳(生）',
'陈钰(生）',
'罗浩(生）',
'雷双琴(生）',
'李诗妤(生）',
'刁潾蕊(生）',
'付凌霜（新）',
'王诗影（新）',
'杨美玲（新）',
'黄诗怡（新）',
'李思漫（新）',
'郑远钖（学）',
'肖六兵（学）',
'吴雨航（学）',
'汪钦旅（组）',
'王彬宇（文）',
'宋家诚（文）',
'杨佳（文）',
]
const uname2 = [//23造价302
'郭鼎伟(办)',
'陈海林(办)',
'董知非(办)',
'向文林(办)',
'孙瑜霞（青）',
'吴芳芳（权)',
'刘翔（权)',
'姚青青（权)',
'江浩嘉（权)',
'方芳（权)',
'蒋元佳（权)',
'丁晓娅（学）',
'曹俊莉（组）',
'郭燕苏（组）',
'向杰（组）',
'陈建霖（文）',
'高旭（文）',
'颜骞璇（文）',
'徐长春（青）',
'朱明馨（办）',
'林诗颖（生）',
]
const uname3 = [//23造价303
'李思怡（权)',
'严欣(生）',
'徐春燕（学）',
'邓雅雯（文）',
'冯欣欣（文）',
'钟沁男（文）',
'罗泽民（文）',
'杨甜（文）',
'叶家鑫（文）',
'张元赫（文）',
'魏麟義（文）',
'周末（文）',
'周正晴（文）',
'张凤（文）',
'唐瑜（文）',
]
const uname4 = [//23造价304
'赵一航(办)',
'张嘉訸(办)',
'梁宇光(办)',
'张艺潇(办)',
'成守渝(办)',
'王枫(办)',
'梁爽(办)',
'陈晓蓉(办)',
'曹雅茹(办)',
'邓兴川（青）',
'袁宇（青）',
'胡羽（青）',
'肖旭婧（青）',
'乐洪菲（青）',
'张誉严（权)',
'金蔷薇（文）',
'陈定涛（文）',
]
const uname5 = [//23路桥301
'潘家海（青）',
'张宇芬（青）',
'吴文广（青）',
'符铭洋（青）',
'杨烨烽（学）',
'蒲松（组）',
'柯秋杰（组）',
'罗平（组）',
'邓洪天（组）',
'姜圆（组）',
'方涛（组）',
'颜邓超（组）',
'万豪（组）',
'冉浩（学）',
]
const uname6 = [//23路桥302
'余俊毅（青）',
'何净松（学）',
'马章凯（学）',
'罗佳勇（学）',
'李俊豪（学）',
'吴君科（学）',
'高琪（文）',
'姚浩（学）',
'敖奇(办)',
'青俊成（文）',
]
const uname7 = [//23智建301
'王志富(生）',
'韩悠然（新）',
'贺吴慢（新）',
'周婷（青）',
'陈思宇（组）',
'冉玉贞（组）',
'龚正江（组）',
'黄丹（组）',
'叶佳（组）',
'韦少君（组）',
'周春杰（青)',
]
const uname8 = [//23建筑301
'胡阳波(办)',
'冯桂川（青）',
'杨镇瑜(生）',
'谷胜山(生）',
'罗铁军(生）',
'周涛(生）',
'陈泓文(生）',
'淳址竣(生）',
'唐银(生）',
'袁豪(生）',
'张江鹏(生）',
'朱明明（学）',
'付发（组）',
'罗芳（新）',
]
const uname9 = [//23建筑302
'胡蕃(办)',
'许潇(办)',
'陈军睿（青）',
'张垒（青）',
'廖瀚文（青）',
'冉国明（青）',
'练容凯（青）',
'王浩宇（权)',
'梁恒（权)',
'吕海洋(生）',
'朱粤炫(生）',
'魏峰（新）',
'向叙峰（学）',
'谭见接（组）',
'王笑涵（学）',
]
const haveClass1 = [1,2,3,7,8,10,12,13,14,15,17,19,20]//23造价301
const haveClass2 = [1,2,3,4,5,6,7,8,9,10,12,15,16,17,18,20]//23造价302
const haveClass3 = [1,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,20]//23造价303
const haveClass4 = [1,2,3,4,5,8,10,11,13,14,15,16,17,18,19,20]//23造价304
const haveClass5 = [1,2,3,6,7,8,9,15,16,17,18,20]//23路桥301
const haveClass6 = [1,3,8,9,10,11,12,13,15,18,19,20]//23路桥302
const haveClass7 = [1,2,3,4,5,6,7,14,15,16,19,20]//23智建301
const haveClass8 = [1,2,3,4,5,7,8,9,12,13,15,17,18,19,20]//23建筑301
const haveClass9 = [1,2,3,4,5,6,7,9,10,11,12,14,15,17,19,20]//23建筑302

//随机数





//输入没课

/* const haveClass = []
while (true) {
    let c = +prompt('输入0退出')
    haveClass.push(c)
    if(c === 0){
        haveClass.pop()
        break
    }
}
console.log(haveClass)
 */





//解释代码
/* function getSchedule() {

   //第一次循环

    for (let i = 0; i < haveClass1.length; i++){
        document.querySelectorAll('td')[haveClass1[i]-1].innerHTML = `<br>${uname1[0]}`
            console.log(uname1[0])
            uname1.shift()
    } 
    
   //第二次判断循环

    const a = uname1.length
    if (uname1.length > haveClass1.length){
        for (let i = 0; i < haveClass1.length; i++){
            document.querySelectorAll('td')[haveClass1[i]-1].innerHTML = document.querySelectorAll('td')[haveClass1[i]-1].innerHTML + `<br>${uname1[0]}`
                uname1.shift()
        } 
    } else {
        for (let i = 0; i <a; i++){
            document.querySelectorAll('td')[haveClass1[i]-1].innerHTML = document.querySelectorAll('td')[haveClass1[i]-1].innerHTML + `<br>${uname1[0]}`
                uname1.shift()
        } 
    }
    
    //第三次判断循环

    const b = uname1.length
    if (uname1.length > haveClass1.length){
        for (let i = 0; i < b; i++){
            document.querySelectorAll('td')[haveClass1[i]-1].innerHTML = document.querySelectorAll('td')[haveClass1[i]-1].innerHTML + `<br>${uname1[0]}`
                uname1.shift()
        } 
    } else {
        for (let i = 0; i < uname1.length; i++){
            document.querySelectorAll('td')[haveClass1[i]-1].innerHTML = document.querySelectorAll('td')[haveClass1[i]-1].innerHTML + `<br>${uname1[0]}`
            console.log(uname1[0])
            uname1.shift()
        } 
    }
}
getSchedule() */


function getSchedule(X,Y) {


    function getRandom(arr) {
        for(let i = 0, len = Y.length;i < len; i++){
            let random = Math.floor(Math.random() * Y.length)
            let arr = Y[random]
            Y[random] = Y[i]
            Y[i] = arr
        }
        return arr
    }
    getRandom()

    if (X.length > Y.length) {
        for (let i = 0; i < Y.length; i++){
            document.querySelectorAll('td')[Y[i]-1].innerHTML = document.querySelectorAll('td')[Y[i]-1].innerHTML + `<br>${X[0]}`
                console.log(X[0])
                X.shift()
        } 
    } else {
        for (let i = 0; i < X.length; i++){
            document.querySelectorAll('td')[Y[i]-1].innerHTML = document.querySelectorAll('td')[Y[i]-1].innerHTML + `<br>${X[0]}`
                console.log(X[0])
                X.shift()
        } 

    }

    
    const a = X.length
    if (X.length > Y.length){
        for (let i = 0; i < Y.length; i++){
            document.querySelectorAll('td')[Y[i]-1].innerHTML = document.querySelectorAll('td')[Y[i]-1].innerHTML + `<br>${unamex[0]}`
            X.shift()
        } 
    } else {
        for (let i = 0; i <a; i++){
            document.querySelectorAll('td')[Y[i]-1].innerHTML = document.querySelectorAll('td')[Y[i]-1].innerHTML + `<br>${X[0]}`
            X.shift()
        } 
    }
    const b = X.length
    if (X.length > Y.length){
        for (let i = 0; i < b; i++){
            document.querySelectorAll('td')[Y[i]-1].innerHTML = document.querySelectorAll('td')[Y[i]-1].innerHTML + `<br>${X[0]}`
            X.shift()
        } 
    } else {
        for (let i = 0; i < X.length; i++){
            document.querySelectorAll('td')[Y[i]-1].innerHTML = document.querySelectorAll('td')[Y[i]-1].innerHTML + `<br>${X[0]}`
            console.log(X[0])
            X.shift()
        } 
    }
}

getSchedule(uname1,haveClass1)
getSchedule(uname2,haveClass2)
getSchedule(uname3,haveClass3)
getSchedule(uname4,haveClass4)
getSchedule(uname5,haveClass5)
getSchedule(uname6,haveClass6)
getSchedule(uname7,haveClass7)
getSchedule(uname8,haveClass8)
getSchedule(uname9,haveClass9)



/* let inp = prompt('ll')
const mysql = require('mysql')
const db = mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'85714326',
  database:'hufan'
}) */
/*  db.query('select * from user order by losal',(err,results)=>{
  if(err) return console.log(err.message)
  console.log(results)
})  */

/* const user = {grade:10,losal:500,hisa:1000} */

/* const sqltr = `insert into user values(${inp})`
db.query(sqltr,(err,results) => {
  if (err) return console.log(err.message)
  if(results.affectedRows === 1)console.log('插入成功')
}) */


const timer = document.querySelector('.timer')
function getDate() {
    const date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    h = h< 10 ? '0' + h: h
    m = m< 10 ? '0' + m: m
    s = s< 10 ? '0' + s: s
    return `<span style="font-size: 18px;" >生成日期：</span>${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日${h}:${m}:${s}`
}
timer.innerHTML = getDate()

/* setInterval(function(){
    timer.innerHTML = getDate()
},1000)


function getRandom(N,M){
    return Math.floor(Math.random() * (M-N) + N)
}
function colorRandom() {
    let r = getRandom(250,255)
    let g = getRandom(220,240)
    let b = getRandom(230,250)
    return `rgb(${r},${g},${b})`
}
setInterval(function(){
    document.querySelector('body').style.backgroundColor = colorRandom()
    console.log(colorRandom())
    
},1000)
 */







