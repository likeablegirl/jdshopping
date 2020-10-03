var data=[
		{"选择":'<input type="checkbox" name="checkbox">',"商品":'<a href=""><img src="images/483fee60cceca5bd.jpg"></a><a href="">海信（Hisense）HZ50E3D 50英寸 4K超清 HDR AI智慧语音 无边全面屏 人</a>'," ":'AI语音4K无边全面屏-50E3D',"单价":'¥1499.00',"数量":'<button onclick="calc(this)">-</button><input type="text" value="1"><button onclick="calc(this)">+</button>',"小计":'¥1499.00',"操作":'<a href="javascript:void(0)">删除</a><br/><a href="javascript:void(0)">移到我的关注</a>'},
		{"选择":'<input type="checkbox" name="checkbox">',"商品":'<a href=""><img src="images/4c2361bb98649bff.png"></a><a href="">Haier/海尔 LE43M31 43吋全高清智能网络LED平板电视机'," ":'OLED全面屏线下同款-55A8</a>',"单价":'¥1099.00',"数量":'<button onclick="calc(this)">-</button><input type="text" value="1"><button onclick="calc(this)">+</button>',"小计":'¥1099.00',"操作":'<a href="javascript:void(0)">删除</a><br/><a href="javascript:void(0)">移到我的关注</a>'},
		{"选择":'<input type="checkbox" name="checkbox">',"商品":'<a href=""><img src="images/fc78be816aac7d7d.jpg"></a><a href="">惠普（HP)1112/2132/2628打印机A4家用学生作业彩色喷墨家用小型打印机</a>'," ":'【USB款】惠普 1112标配 仅支持打印 ',"单价":'¥419.00',"数量":'<button onclick="calc(this)">-</button><input type="text" value="1"><button onclick="calc(this)">+</button>',"小计":'¥419.00',"操作":'<a href="javascript:void(0)">删除</a><br/><a href="javascript:void(0)">移到我的关注</a>'},
		{"选择":'<input type="checkbox" name="checkbox">',"商品":'<a href=""><img src="images/755f63ec6f89d993.jpg"></a><a href="">飞利浦（PHILIPS）WP3928/03 颗粒活性炭除氯滤芯适配净水龙头</a>'," ":'高效除氯净水龙头滤芯 三支装',"单价":'¥98.00',"数量":'<button onclick="calc(this)">-</button><input type="text" value="1"><button onclick="calc(this)">+</button>',"小计":'¥98.00',"操作":'<a href="javascript:void(0)">删除</a><br/><a href="javascript:void(0)">移到我的关注</a>'}
	];
var data01=[
		{"name":'<a href=""><img src="images/7db323c5d3d2d536.jpg"></a><a href="#" class="title">美国净邦 （GEE·BON） 前置过滤器 反冲洗中央净水器 4分口径</a>',"att":'4分口径',"price":'¥188.00'},
		{"name":'<a href=""><img src="images/46e31a69698cd9f4.jpg"></a><a href="#" class="title">海信（Hisense）HZ50E3D-PRO 50英寸 4K超清 AI声控 MEMC防抖 无边全面屏 </a>',"att":'MEMC无边全面屏-50E3D-PRO',"price":'¥1899.00'},
		{"name":'<a href=""><img src="images/94897a333885e5ef.jpg"></a><a href="#" class="title">太阳雨(Sunrain)净水器家用厨房台上式自来水龙头前置过滤器 不用电无废水</a>',"att":'一机两芯',"price":'¥129.00'},
		{"name":'<a href=""><img src="images/ba8832b5da1ff831.jpg"></a><a href="#" class="title">中兴/ZTE 兴易每K2 老人手机 移动/联通 按键直板超长待机老年功能手机 黑</a>',"att":'彩屏',"price":'¥163.00'}
	];
function calc(btn){ //商品数量加减按扭
		var dd=btn.parentNode; //找到当前btn的父级元素并保存在变量dd中
		var input=dd.getElementsByTagName("input")[0]; //找到数量所在的input标签保存在变量input中
		var n=parseInt(input.value); //将数量input标签的value值取整保存到变量n中
		if(btn.innerHTML=="+"){ //如果btn为+
			n++; //则n递加
		}else if(n>1){ //否则如果n大于1
			n--; //n递减
		};
		input.value=n; //将n赋值给input标签的value
		var dl=dd.parentNode; //找到dd的父级元素保存到dl
		var dds=dl.getElementsByTagName("dd"); //找到dl下的所有dd标签保存到dds
		var price=parseFloat(dds[3].innerHTML.slice(1)); //找到单价的内容并截取第二位以后的所有内容转成小数保存在price
		var sum=price*n; //声明小计sum=单价*数量
		dds[5].innerHTML="&yen"+sum.toFixed(2); //将sum小数后面保留两位并加上人民币符号放入小计单元格中
		if(btn.innerHTML=="+"){ //如果btn为+
			var name=dds[0].getElementsByTagName("input")[0]; //找到当前行的第一个input标签保存在变量name中
			name.checked=true; //当前复选框改为选中状态
			dl.style.background="#fff4e8" //改变当前行的背景颜色
		};
		getTotal(); //遍历结束后调用函数，重新计算总数量和总金额
		getFreight(); //调用运费函数，计算是否免运费
};
function selectAll(th){ //全选
	var names=document.getElementsByName("checkbox"); //找到name属性值为checkbox的复选框并保存在变量names中
	var flag=th.checked; //声明变量flag为全选
	if(flag){ //如果全选
		for(var i=0,len=names.length;i<len;i++){ //遍历所有复选框names
			names[i].checked=true; //当前复选框为选中状态
			if(i!=0){ //如果不是第一个复选框
				var dl=names[i].parentNode.parentNode; //找到当前复选框的父元素的父元素保存到变量dl中
				dl.style.background="#fff4e8" //改变当前行的背景颜色为淡黄色
			}else{ //否则如果是第一个复选框
				var dl=names[i].parentNode.parentNode; //找到当前复选框的父元素的父元素保存到变量dl中
				dl.style.background="#ffffff" //改变当前行的背景颜色为白色
			};
		};
		getTotal(); //遍历结束后调用函数，重新计算总数量和总金额
		getFreight(); //调用运费函数，计算是否免运费
	}else{ //否则如果取消全选
		for(var i=0,len=names.length;i<len;i++){ //遍历所有复选框names
			names[i].checked=false; //取消当前复选框选中状态
			var dl=names[i].parentNode.parentNode; //找到当前复选框的父元素的父元素保存到变量dl中
			dl.style.background="#ffffff" //改变当前行的背景颜色为白色
		};
		getTotal(); //遍历结束后再次调用函数，重新计算总数量和总金额
		getFreight(); //调用运费函数，计算是否免运费
	};
};
function delAll(){ //指定行删除
	if(confirm("确定要删除？")){ //执行操作后先提示是否要删除，确定后执行后面操作
		var names=document.getElementsByName("checkbox"); //找到所有name属性值为checkbox的复选框保存在变量names中
		for(var i=names.length-1;i>=0;i--){ //遍历所有names复选框，从最后一个往前遍历
			if(names[i].checked){ //如果当前复选框为选中状态
				var dl=names[i].parentNode.parentNode;  //找到当前复选框的父级元素的父级元素保存在变量dl中
				dl.remove(); //删除当前行dl
			};
		};
	};
	getTotal();  //遍历结束后调用函数，总数量和总金额重新计算
	getFreight(); //调用运费函数，计算是否免运费
	getNum(); //调用购物车数量函数，重新计算购物车数量
};
function removeAll(){ //移到我的关注
	if(confirm("确定要移到关注？")){ //执行操作后先提示是否要移到关注，确定后执行后面操作
		var names=document.getElementsByName("checkbox"); //找到所有name属性值为checkbox的复选框保存在变量names中
		for(var i=names.length-1;i>=0;i--){ //遍历所有names复选框，从最后一个往前遍历
			if(names[i].checked){ //如果当前复选框为选中状态
				var dl=names[i].parentNode.parentNode;  //找到当前复选框的父级元素的父级元素保存在变量dl中
				dl.remove(); //删除当前行dl
			};
		};
	};
	getTotal();  //遍历结束后调用函数，总数量和总金额重新计算
	getFreight(); //调用运费函数，计算是否免运费
	getNum(); //调用购物车数量函数，重新计算购物车数量
};
function clearAll(){ //清除购物车
	if(confirm("您是否要清空购物车？")){ //执行操作后先提示是否要清空购物车，确定后执行后面操作
		var names=document.getElementsByName("checkbox"); //找到所有name属性值为checkbox的复选框保存在变量names中
		for(var i=names.length-1;i>=0;i--){  //遍历所有names复选框，从最后一个往前遍历
			var dl=names[i].parentNode.parentNode; //找到当前复选框的父级元素的父级元素保存在变量dl中
			dl.remove(); //删除当前行dl
		};
		getTotal();  //遍历结束后调用函数，总数量和总金额重新计算
		getFreight(); //调用运费函数，计算是否免运费
		getNum(); //调用购物车数量函数，重新计算购物车数量
	};
};
//价格和数量总计
function getTotal(){
	var names=document.getElementsByName("checkbox");  //找到name属性值为checkbox的复选框并保存在变量names中
	for(var i=1,total=0,amount=0; i<names.length; i++){ //遍历所有的复选框,并设总数量amount=0，总计total=0
		if(names[i].checked){ //如果当前复选框为选中状态
			var num=parseInt(names[i].parentNode.parentNode.lastChild.previousSibling.previousSibling.getElementsByTagName("input")[0].value); //找到当前复选框父元素的父元素dl对应的数量取整后保存在变量num中
			var sub=parseFloat(names[i].parentNode.parentNode.lastChild.previousSibling.innerHTML.slice(1)); //找到当前复选框父元素的父元素dl对应的小计转换为小数后保存在变量sub中
			amount+=num; //将数量累加到amount中
			total+=sub; //将小计累加到total中
		};
	};
	var spanSum=document.querySelector("span.sum"); //找到样式span.sum所在的标签(总数量)保存在变量spanSum中
	var spanTotal=document.querySelector("span.total"); //找到样式span.total所在的标签(总金额)保存在变量spanTotal中
	spanSum.innerHTML=amount; //将累加后的amount写入spanSum
	spanTotal.innerHTML="&yen"+total.toFixed(2); //将累加后的total加上人民币符号并保留2位小数写入到spanTotal
};
//运费计算
function getFreight(){
	var freight=document.querySelector(".freight"); //找到样式名为.freight的免运费所在标签保存到变量freight中
	var spanTotal=document.querySelector("span.total"); //找到总金额所在的标签保存到变量spanTotal中
	var total=parseFloat(spanTotal.innerHTML.slice(1)); //取出总金额并从第2个下标开始截取到尾部转为小数赋值给变量total
	if(total>0&&(total<99)){ //如果总金额大于0并且小于99时
		var money=99-total; //99减去总金额赋值给money
		freight.style.display="block"; //免运费所在标签样式改为显示状态
		freight.getElementsByTagName("span")[0].innerHTML="还差<em>&yen"+money.toFixed(2)+'</em>元免运费 <a herf="">去凑单></a>'; //免运费内容改为还差多少元免运费，去凑单
	}else if(total==0){ //如果总金额等于0
		freight.style.display="none"; //则不显示免运费内容
	}else{
		freight.style.display="block"; //否则就把免运费所在标签样式改为显示状态
		freight.getElementsByTagName("span")[0].innerHTML="已免运费"; //显示已免运费
	};
};
//计算购物车数量
function getNum(){
	var num=document.querySelector(".num"); //找到商品数量对应的标签保存在变量num
	var cartCon=document.querySelector(".cart_con"); //找到样式为.cart_con的标签保存在变量cartCon中
	var dls=cartCon.getElementsByTagName("dl"); //找到cartCon标签下的所有dl标签保存在变量dls中
	for(var i=0; i<=dls.length; i++){ //遍历所有的dl标签
		num.innerHTML=i; //把i写入总数量num
	};
};
//输入商品数量改变小计
function changeNum(){
	var cartCon=document.querySelector(".cart_con"); //找到样式为.cart_con的标签保存在变量cartCon中
	var dls=cartCon.getElementsByTagName("dl"); //找到cartCon标签下的所有dl标签保存在变量dls中
	for(var i=0,len=dls.length; i<len; i++){ //遍历所有的dl标签
		var num=parseInt(dls[i].getElementsByTagName("dd")[4].getElementsByTagName("input")[0].value); //找到当前行的商品数量的value值取整后保存在num中
		var price=parseFloat(dls[i].getElementsByTagName("dd")[3].innerHTML.slice(1)); //找到当前行的单价转换为小数后保存在price中
		var sum=num*price; //声明sum=数量*单价
		dls[i].getElementsByTagName("dd")[5].innerHTML="&yen"+sum.toFixed(2); //将sum保留2位小数加人民币符号写入到当前行小计中
	};
	getTotal(); //遍历结束后调用函数，总数量和总金额重新计算
	getFreight(); //调用运费函数，计算是否免运费
};
window.onload=function(){
	//创建商品列表头部全选行
	var span=document.createElement("span"); //创建span标签
	span.className="title"; //定义span的样式
	span.innerHTML="全部商品"; //定义span的内容
	var cartTop=document.querySelector(".cart_top"); //将样式.cart_top保存在一个变量中
	cartTop.appendChild(span); //将span标签放入样式.cart_top保存的变量中
	var span02=document.createElement("span"); //创建第二个span标签
	span02.className="num"; //定义第二个span标签的样式
	span02.innerHTML="0"; //定义第二个span标签的内容
	cartTop.appendChild(span02); //将第二个span标签放入到样式.cart_top保存的变量中
	//创建商品列表头部thead
	var div=document.createElement("div"); //创建一个div标签
	div.className="cart-store"; //定义div标签的样式
	div.innerHTML='配送至：<select><option>上海宝山区城市工业园区<option><select/>'; //定义div标签的内容
	cartTop.appendChild(div); //将div标签放入到.cart_top保存的变量中
	var dl=document.createElement("dl"); //创建dl标签
	document.querySelector(".cart_thead").appendChild(dl); //把dl标签放入到样式.cart_thead中
	for(var key in data[0]){ //遍历data中第一个对象的属性
		var dd=document.createElement("dd"); //每遍历一个对象属性创建一个空的dd标签
		dd.innerHTML=key; //将当前属性名写入dd标签中
		dl.appendChild(dd); //将标签dd放入dl标签中
	};
	var dds=dl.getElementsByTagName("dd") //找到dl标签下的所有dl保存在变量dds中
	dds[0].innerHTML='<input name="qx" type="checkbox" onclick="selectAll(this)" value="全选">全选'; //定义第一个dd标签的内容
	dds[1].style.width="156px"; //定义第二个dd标签的宽度
	dds[3].style.width="360px"; //定义第四个dd标签的宽度
	dds[3].style.textAlign="right"; //定义第四个dd标签右对齐
	dds[4].style.width="155px"; //定义第五个dd标签的宽度
	dds[5].style.width="40px"; //定义第六个dd标签的宽度
	dds[6].style.width="80px"; //定义第七个dd标签的宽度
	var div=document.createElement("div"); //创建div标签
	div.className="shop"; //定义div的样式
	div.innerHTML='<input type="checkbox" name="checkbox"><a href="">京东自营</a><div class="freight"><img src="images/icon_3.png"><span>已免运费</span></div>'; //定义div的内容
	document.querySelector(".cart_con").appendChild(div); //把div放在样式为.cart_con的标签里
	//创建商品
	for(var i=0,len=data.length; i<len; i++){ //遍历data数组中所有对象
		var dl=document.createElement("dl"); //每遍历一行，创建一个dl
		document.querySelector(".cart_con").appendChild(dl); //将dl放入样式为.cart_con的标签里
		for(var key in data[i]){ //遍历当前行的每一个属性
			var dd=document.createElement("dd"); //每遍历一个属性就在dl中创建一个dd
			dd.innerHTML=data[i][key]; //将当前属性值写入dd中
			dl.appendChild(dd); //将dd放入dl
		};
		var dds=dl.getElementsByTagName("dd"); //找到dl下所有的dd标签保存到变量dds中
		dds[1].className="item"; //定义第二个dd标签的样式
		dds[2].className="props"; //定义第三个dd标签的样式
		dds[3].className="price"; //定义第四个dd标签的样式
		dds[5].className="sum"; //定义第六个dd标签的样式
		dds[6].className="del"; //定义第七个dd标签的样式
		//输入商品数量计算小计
		var myNum=dds[4].getElementsByTagName("input")[0]; //找到第5个dd标签里的input保存在变量myNum中
		myNum.onchange=changeNum; //当myNum的value值发生改变执行changeNum函数;
		//单行删除
		var del=dds[6].getElementsByTagName("a")[0]; //找到删除的a标签保存到变量del中
		//console.log(del); 
		del.onclick=function(){ //定义删除点击事件
			var dl=this.parentNode.parentNode; //找到当前删除按扭的父元素的父元素dl
			if(confirm("确定要删除该商品吗？")){ //提示是否要删除该商品
				dl.remove(); //确定后删除当前行
			};
			getTotal(); //调用函数，总数量和价格重新计算
			getFreight(); //调用运费函数，计算是否免运费
			getNum(); //调用购物车数量函数，重新计算购物车数量
		};
		//移到我的关注
		var rem=dds[6].getElementsByTagName("a")[1]; //找到移到我的关注的a标签保存到变量rem中
		rem.onclick=function(){ //定义移到我的关注点击点件
			var dl=this.parentNode.parentNode; //找到当前删除按扭的父元素的父元素dl
			if(confirm("确定移到我的关注吗？")){ //提示是否要删除该商品
				dl.remove(); //确定后移除当前行
			};
			getTotal(); //调用函数，总数量和价格重新计算
			getFreight(); //调用运费函数，计算是否免运费
			getNum(); //调用购物车数量函数，重新计算购物车数量
		};
	};
	getNum();
	//创建商品列表底部结算行
	var div=document.createElement("div"); //创建div标签
	div.className="bot_left"; //设置div的样式为.bot_left
	var cartBot=document.querySelector(".cart_bot"); //找到样式.cart_bot并保存在变量cartBot中
	cartBot.appendChild(div); //把div标签放入样式为.cart_bot的标签内
	var span=document.createElement("span"); //再创建span标签
	span.innerHTML='<input name="qx" type="checkbox" onclick="selectAll(this)" value="全选">全选'; //定义span标签的内容
	var botLeft=document.querySelector(".bot_left"); //找到样式为.bot_left的标签并保存在变量botLeft中
	botLeft.appendChild(span); //把span标签放入样式为.bot_left的标签内
	var a=document.createElement("a"); //创建a标签
	a.innerHTML="删除选中商品"; //定义a标签的内容
	a.href="javascript:void(0)"; //定义a标签的href属性
	a.onclick=function(){  //给a标签定义一个点击事件
		delAll(); //调用指定行删除函数
	};
	botLeft.appendChild(a); //把a标签放入到样式为.bot_left的标签内
	var a=document.createElement("a"); //再创建一个a标签
	a.innerHTML="移到关注"; //定义a标签的内容
	a.onclick=function(){ //给a标签定义一个点击事件
		removeAll(); //调用指定行删除函数(没做关注功能，暂时删除处理)
	};
	a.href="javascript:void(0)"; //定义a标签的href属性
	botLeft.appendChild(a); //把a标签放入到样式为.bot_left的标签内
	var a=document.createElement("a"); //再创建一个a标签
	a.innerHTML="清理购物车"; //定义a标签的内容
	a.style.fontWeight="700"; //定义a标签的样式，字体加粗
	a.onclick=function(){  //给a标签定义一个点击事件
		clearAll(); //调用清除购物车函数
	};
	a.href="javascript:void(0)"; //定义a标签的href属性
	botLeft.appendChild(a); //把a标签放入到样式为.bot_left的标签内
	var div=document.createElement("div"); //创建一个div标签
	div.className="bot_right"; //定义div的样式
	cartBot.appendChild(div); //把div标签放入样式为.cart_bot的标签内
	var botRight=document.querySelector(".bot_right"); //找到样式为.bot_right的标签并保存在变量botRight中
	var div=document.createElement("div"); //创建一个div标签
	div.className="r_l"; //定义div标签的样式
	div.innerHTML='已经选了<span class="sum">0</span>件商品<b class="up"></b>'; //定义div标签的内容
	botRight.appendChild(div); //把div标签放入到样式为.bot_right的标签中
	var div=document.createElement("div"); //再创建一个div标签
	div.className="r_c"; //定义div标签的样式
	div.innerHTML='<p><span>总价：</span><span class="total">¥0.00</span><b class="price-tips"></b></p><p>促销：<span class="promote">-¥0.00</span></p>'; //定义div标签的内容
	botRight.appendChild(div); //把div标签放入到样式为.bot_right的标签中
	var div=document.createElement("div"); //再创建一个div标签
	div.className="r_r"; //定义div标签的样式
	div.innerHTML='<button></button>' //定义div标签的内容
	botRight.appendChild(div); //把div标签放入到样式为.bot_right的标签中
	//单行选中
	var names=document.getElementsByName("checkbox"); //找到所有的name属性值为checkbox的复选框保存到变量names中
	for(var i=1,len=names.length;i<len;i++){ //遍历所有的复选框，第一个除外，第一个是京东自营，因此i从1开始
		names[i].index=i; //把变量i赋值给当前复选框的下标
		names[i].onclick=function(){ //给当前复选框定义点击事件
			var check=names[this.index]; //把当前复选框保存在变量check中
			var getCheck=getTotal(); //把总数量和金额计算函数保存在变量getCheck中
			var dl=check.parentNode.parentNode; //找到当前复选框的父元素的父元素dl保存在dl中
			var freight=getFreight(); //把运费函数保存在变量freight
			if(check.checked){ //如果当前复选框被选中
				dl.style.background="#fff4e8" //改变当前行的背景颜色
				getCheck; //总数量和金额重新计算
				freight; //运费重新计算
			}else{
				dl.style.background="#ffffff" //否则把当前行的背景改为白色
				!getCheck; //总数量和金额不重新计算
				!freight; //运费不重新计算
			};
		};
	};
	//猜你喜欢
	var div=document.createElement("div"); //创建div标签
	div.className="like_tit" //定义div的样式
	document.getElementById("likes").appendChild(div); //将div标签放入id为likes的标签里
	var a=document.createElement("a"); //创建a标签
	a.innerHTML="猜你喜欢"; //定义a标签的内容
	div.appendChild(a); //将a标签放入到div中
	var ul=document.createElement("ul"); //创建ul标签
	document.getElementById("likes").appendChild(ul); //将ul标签放入id为likes的标签里
	for(var i=0,len=data01.length; i<len; i++){ //遍历数组data01
		var li=document.createElement("li") //创建li标签
		ul.appendChild(li); //将li标签放入ul
		var div=document.createElement("div"); //创建div标签
		div.className="like_item"; //定义div的样式
		li.appendChild(div); //将div放入li标签
		for(var key in data01[i]){  //遍历当前对象的每一个属性
			if(key!="att"){ //如果key的值不为att
				var p=document.createElement("p"); //创建p标签
				div.appendChild(p); //将p标签放入div
				p.innerHTML=data01[i][key]; //将当前对象的每一个属性值写入p标签
			};
			if(key=="price"){ //如果key的值为price
				p.className="p_price"; //那么对应的P标签的样式定义为p_price
			};
		};
		var p=document.createElement("p"); //创建p标签
		div.appendChild(p); //将p标签放入div
		var btn=document.createElement("button"); //创建button标签
		btn.innerHTML="加入购物车"; //定义button的内容
		p.appendChild(btn); //将button放入p标签
	};
	//加入购物车
	var likes=document.getElementById("likes"); //找到id为likes的标签保存在变量likes中
	var aBtn=likes.getElementsByTagName("button"); //找到likes下的button标签保存在变量aBtn中
	//console.log(aBtn);
	for(var i=0; i<aBtn.length; i++){ //遍历每一个button(加入购物车按扭)
		aBtn[i].index = i; //将i赋值给当前购物车按扭的下标
		aBtn[i].onclick=function(){ //当前按扭创建点击事件
			var dl=document.createElement("dl"); //创建dl标签
			document.querySelector(".cart_con").appendChild(dl); //将dl标签放入样式为.cart_con的标签中
			var dd=document.createElement("dd"); //创建dd标签
			var aData=data01[this.index]; //将data01的当前对象保存在变量aData中
			dd.innerHTML='<input type="checkbox" name="checkbox">'; //写入dd标签的内容
			var check=dd.getElementsByTagName("input")[0]; //找到dd标签里的第一个input标签并保存在变量check中
			check.onclick=function(){ //如果当前复选框被点击
				var getCheck=getTotal(); //把总数量和金额计算函数保存在变量getCheck中
				var freight=getFreight(); //把运费计算函数保存在变量freight中
				var dl=check.parentNode.parentNode; //找到当前复选框的父元素的父元素dl保存在dl中
				if(check.checked){ //如果当前复选框被点击
					getCheck; //总数量和金额重新计算
					freight; //运费重新计算
					dl.style.background="#fff4e8"; //改变当前行的背景颜色
				}else{
					!getCheck; //否则不重新计算总数量和金额
					!freight; //运费不重新计算
					dl.style.background="#ffffff"; //当前背景色改回白色
				};
			};
			dl.appendChild(dd); //将dd放入到dl中
			var dd=document.createElement("dd"); //再创建一个dd标签
			dd.innerHTML=aData["name"]; //把当前对象的name对应的值写入到dd标签
			dd.className="item"; //定义dd标签的样式
			dl.appendChild(dd); //将dd放放dl中
			var dd=document.createElement("dd"); //再创建一个dd标签
			dd.innerHTML=aData["att"]; //把当前对象的att对应的值写入到dd标签
			dd.className="props"; //定义dd标签的样式
			dl.appendChild(dd); //将dd放放dl中
			var dd=document.createElement("dd"); //再创建一个dd标签
			dd.innerHTML=aData["price"]; //把当前对象的price对应的值写入到dd标签
			dd.className="price"; //定义dd标签的样式
			dl.appendChild(dd); //将dd放放dl中
			var dd=document.createElement("dd"); //再创建一个dd标签
			dd.innerHTML='<button onclick="calc(this)">-</button><input type="text" value="1"><button onclick="calc(this)">+</button>'; //定义dd标签的内容
			//输入商品数量计算小计
			var myNum=dd.getElementsByTagName("input")[0]; //找到dd标签里的input保存在变量myNum中
			myNum.onchange=changeNum; //当myNum的value值发生改变执行changeNum函数;
			dl.appendChild(dd); //将dd放放dl中
			var dd=document.createElement("dd"); //再创建一个dd标签
			dd.innerHTML=aData["price"]; //把当前对象的price对应的值写入到dd标签(单价和小计的内容相同，这里直接调用了单价的内容)
			dd.className="sum"; //定义dd标签的样式
			dl.appendChild(dd); //将dd放放dl中
			var dd=document.createElement("dd"); //再创建一个dd标签
			dd.innerHTML='<a href="javascript:void(0)">删除</a><br/><a href="javascript:void(0)">移到我的关注</a>'; //定义dd标签的内容
			dd.className="del"; //定义dd标签的样式
			dl.appendChild(dd); //将dd放放dl中
			var delBtn=dd.getElementsByTagName("a")[0]; //找到删除对应的a标签保存在变量delBtn中
			//console.log(delBtn);
			delBtn.onclick=function(){ //当点击删除
				var dl=this.parentNode.parentNode; //找到当前删除标签的父元素的父元素dl保存在变量dl中
				if(confirm("确定要删除该商品吗？")){ //如果点击就提示是否要删除该商品
					dl.remove(); //确定后就删除当前行
				};
				getTotal(); //删除后调用函数，总数量和金额重新计算
				getFreight(); //调用运费函数，计算是否免运费
				getNum(); //调用购物车数量函数，重新计算购物车数量
			};
			var reMove=dd.getElementsByTagName("a")[1];
			reMove.onclick=function(){ //当点击删除
				var dl=this.parentNode.parentNode; //找到当前删除标签的父元素的父元素dl保存在变量dl中
				if(confirm("确定移到我的关注吗？")){ //如果点击就提示是否要移到我的关注
					dl.remove(); //确定后就删除当前行
				};
				getTotal(); //删除后调用函数，总数量和金额重新计算
				getFreight(); //调用运费函数，计算是否免运费
				getNum(); //调用购物车数量函数，重新计算购物车数量
			};
			getNum(); //调用购物车数量函数，重新计算购物车数量
		};
	};
};