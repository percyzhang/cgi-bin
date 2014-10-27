<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<title>添加用户</title>
<script  type="text/javascript"  src="<?=  base_url()?>weixin/jquery-1.9.11ec5f7.js"></script>
 <script type="text/javascript">
     
	function jsonToString (obj){   
        var THIS = this;    
        switch(typeof(obj)){   
            case 'string':   
                return '"' + obj.replace(/(["\\])/g, '\\$1') + '"';   
            case 'array':   
                return '[' + obj.map(THIS.jsonToString).join(',') + ']';   
            case 'object':   
                 if(obj instanceof Array){   
                    var strArr = [];   
                    var len = obj.length;   
                    for(var i=0; i<len; i++){   
                        strArr.push(THIS.jsonToString(obj[i]));   
                    }   
                    return '[' + strArr.join(',') + ']';   
                }else if(obj==null){   
                    return 'null';   
  
                }else{   
                    var string = [];   
                    for (var property in obj) string.push(THIS.jsonToString(property) + ':' + THIS.jsonToString(obj[property]));   
                    return '{' + string.join(',') + '}';   
                }   
            case 'number':   
                return obj;   
            case false:   
                return obj;   
        }   
    }
	
	 function getJsonData(){
		var groupingNameArr = [];
		var groupingArr = [];
		$('input[name=group]').each(function(key,val){
			groupingArr[key]= parseInt($(val).val());
		});
		
		$('input[name=groupingName]').each(function(key,val){
			groupingNameArr[key]= $(val).val();
		});
		var jsonObj= {};
		
		for(var i =0;i<groupingNameArr.length;i++){
			//var tmpKey = key + i;
			//var tmpVal = val +i;
			jsonObj[groupingNameArr[i]] = groupingArr[i];
		}
		return  jsonObj;
	}
  
  
	function getRandom(n){
		var x= parseInt((Math.random()+1)*(n - 1));				//if()
		return Math.floor(Math.random()*n+1);
         }
				function GetRandomNum(Min,Max)
				{   
					var Range = Max - Min;   
					var Rand = Math.random();   
					return(Min + Math.round(Rand * Range));   
			}   
  
  ////////添加一行、删除一行封装方法///////
  /**
   * 为table指定行添加一行
   *
   * tab 表id
   * row 行数，如：0->第一行 1->第二行 -2->倒数第二行 -1->最后一行
   * trHtml 添加行的html代码
   *
   */
  function addTr(tab, row, trHtml){
     //获取table最后一行 $("#tab tr:last")
     //获取table第一行 $("#tab tr").eq(0)
     //获取table倒数第二行 $("#tab tr").eq(-2)
     var $tr=$("#"+tab+" tr").eq(row);
     if($tr.size()==0){
        alert("指定的table id或行数不存在！");
        return;
     }
     $tr.after(trHtml);
  }
   
  function delTr(ckb){
     //获取选中的复选框，然后循环遍历删除
     var ckbs=$("input[name="+ckb+"]:checked");
     if(ckbs.size()==0){
        alert("要删除指定行，需选中要删除的行！");
        return;
     }
           ckbs.each(function(){
              $(this).parent().parent().remove();
           });
  }
   
  /**
   * 全选
   * 
   * allCkb 全选复选框的id
   * items 复选框的name
   */
  function allCheck(allCkb, items){
   $("#"+allCkb).click(function(){
      $('[name='+items+']:checkbox').attr("checked", this.checked );
   });
  }
   
  ////////添加一行、删除一行测试方法///////
  $(function(){
   //全选
   allCheck("allCkb", "ckb");
  });
  
  function sum(arr){
	var tmp =0;
	for(var i =0;i<arr.length;i++){
		tmp +=arr[i];
	}
	return tmp;
  
  }
   
   
  function addTr2(tab, row){
	var tmp = $("tr").size()-1;
    var trHtml="<tr align='center'><td width='30%'><input type='checkbox' name='ckb'/></td><td width='30%'>"+
	'<input type ="text" dataType="group" value="未分组'+tmp+'" name="groupingName">'
	+"</td><td width='30%'><input type='text' value ='' name ='group'></td></tr>";
     addTr(tab, row, trHtml);
	
	setGroupData();
	calcCount();
	
	//document.write(jsonToString(getGroupingData()));
  }
   function calcCount(){
       var testTmp =0 ;
	$('input[name=group]').each(function(key,val){
		testTmp += parseInt($(val).val());
	});
	$('#countSpanTmp').text(testTmp);
        return testTmp;
   }
   
   function setGroupData(){
	var tmpArr=[];
	var count =parseInt($('#countSpan').text());
	//alert(count);
	var size = $('input[name=group]').size();
	for(var i = 0;i<size;i++){
		if(size ===1){
			tmpArr[i] = count;	
			break;
		}
		if(i === 0){
			tmpArr[i] =getRandom(count);
		}
		else{
			if(i <size-1) {
				if(sum(tmpArr)>=count){
					tmpArr[i] = 0;
				}
				else {
					tmpArr[i] =getRandom(count - sum(tmpArr));
				}
			}
			else{
				tmpArr[i]  =count - sum(tmpArr) >=0?count - sum(tmpArr):0;
				//alert(tmpArr[i]);
			}
		}
	}
	
	$('input[name=group]').each(function(key,val){
		$(val).val(tmpArr[key]);
	});
   }
   function setNewGroupData(count){
	var tmpArr=[];
//	var count =parseInt($('#countSpan').text());
	//alert(count);
	var size = $('input[name=group][datachanged!=changed]').size();
	for(var i = 0;i<size;i++){
		if(size ===1){
			tmpArr[i] = count;	
			break;
		}
		if(i === 0){
			tmpArr[i] =getRandom(count);
		}
		else{
			if(i <size-1) {
				if(sum(tmpArr)>=count){
					tmpArr[i] = 0;
				}
				else {
					tmpArr[i] =getRandom(count - sum(tmpArr));
				}
			}
			else{
				tmpArr[i]  =count - sum(tmpArr) >=0?count - sum(tmpArr):0;
				//alert(tmpArr[i]);
			}
		}
	}
	
	$('input[name=group][datachanged!=changed]').each(function(key,val){
		$(val).val(tmpArr[key]);
	});
   }
   
  function delTr2(){
     delTr('ckb');
  }
  
  function reCalc(){
        //未固定的值
        var unFixedCount = 0 ;
        $('input[name=group][datachanged!=changed]').each(function(key,val){
		unFixedCount += parseInt($(val).val());
        });
        //固定值
        var fixedCount =0 ;
        $('input[name=group][datachanged=changed]').each(function(key,val){
		fixedCount += parseInt($(val).val());
        });
        $("#info").empty();
//        $("<p>随机值 ==>" +unFixedCount+"</p>").appendTo('#info');
        $("<p>固定值:==>" +fixedCount + "</p>").appendTo('#info');
        if(calcCount() === parseInt($("#fansCount").val())){
            return;
        }
        if(fixedCount > $("#fansCount").val()){
            alert("你的固定值已经超过了总粉丝数了,No zuo no die , 系统已自动为你重新生成了.");
            setGroupData();
            calcCount();
        }
        else{
            //待分配数值
           var newToAssigne = $("#fansCount").val() - fixedCount;
            $("<p>待分配数值 ==>" +newToAssigne+"</p>").appendTo('#info');
            setNewGroupData(newToAssigne);
            calcCount();
        }
  }
  
  function testGet(){
	 //document.write(jsonToString(getJsonData()));
         $("#groupingData").val(jsonToString(getJsonData()));
         alert($("#groupingData").val());
  }
    $(function(){
        $("#fansCount").on('input',function(e){
         // alert($(this).val());
          $("#countSpan").text($(this).val());
             setGroupData();
            calcCount();
        });
        
        $(document).on("input","input[name=group]",function(e){
            $(this).attr('datachanged','changed');
            
        });
        
        $("#submitBtn").click(function(){
            
        });
    });
      
    
  </script>
</head>
<body>

<?php echo $error;?>

        <?php echo form_open_multipart('user/do_upload');?>
    <fieldset>
             <legend>添加用户</legend>
            用户名:<input type ="text" name ="userid"> <br>
            店名:<input type ="text" name ="username"> <br>
            密码: <input type ="text" name ="pwd"> <br>
            头像:<input type="file" name="userfile" size="20" /> * 只能是"gif|jpg|png" 其中的一种 <br> 
            总粉丝数:<input type="text" name ="fansCount" id ="fansCount" value='100'><br>
            类型:<input type="radio" value="1" name="type">订阅号
            <input type="radio" value="2" name ="type" checked="checked">服务号
            <input type="radio" value="3" name ="type" disabled="disabled"> 企业号 </br>
            添加分组:<input type='radio' name="grouping" id='grouping' checked="checked"> 是 <input type='radio' name="grouping" id='noGrouping'> 否 
            <fieldset>
            <legend>添加分组</legend>
                <span id ="countSpan">100</span>
               
                <span id ="countSpanTmp"></span>
              <table border="1px #ooo" id="tab" cellpadding="0"
               cellspacing="0" width="30%">
               <tr align="center">
                   <td width="30%"><input id="allCkb" type="checkbox"/></td>
                <td width="30%">分组名</td>
                <td width="30%">总数</td>
               </tr>
               <tr align="center">
                   <td width="30%"></td>
                <td width="30%"><input type ='text'  value ='未分组' name='groupingName'></td>
                <td width="30%"><input type ='text'  value ='100' name ='group'></td> 
               </tr>
              </table>
                <input type="button" onclick="addTr2('tab', -1)" value="添加分组">
                <input type="button" onclick="delTr2()" value="删除分组"></br>
                <p> <input type="button"  onclick="reCalc();" value ="如果手动输入过分组中的数据，点我重新计算"></br></p>
                <p>
                 <input type  = "button"  onclick="testGet();" value = '如果需要分组数据，请一定在点击提交前点击我!!~~~'>
                 </p>
             </fieldset>
            <input type='hidden' name ='groupData' id ='groupingData'>
            
            <input type="submit"  id ="submitBtn" value="提交" />
</fieldset>
</form>
    <div id ="info"> </div>
</body>
</html>
