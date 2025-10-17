let test = '{"sites":[' + '{"name":"Runoob", "url":"www.runoob.com"},' + '{"name":"Google", "url":"www.google.com"},' + '{"name":"Taobao", "url":"www.taobao.com"}]}'

let obj = JSON.parse(test)

console.log(obj.sites[1].name + " " + obj.sites[1].url);

// JSON字符串转为JS对象