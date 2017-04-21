module.exports={
    hello:function(req,res){
        // res.send('hello man!');
        var obj = {
            name: 'huaqiuqiu',
            age: 18
        }
        setTimeout(function(){
            res.send(obj);
        },1000)
        // res.view({data:{name:'test123'}})							//该方式会默认去找views/user/hello.ejs文件
		// res.view('hello',{data:{name:'test123'}})			  	//指定页面views/hello.ejs
    }
}