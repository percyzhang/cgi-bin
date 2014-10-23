<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <script type="text/javascript" src="<?=base_url()?>weixin/jquery-1.9.11ec5f7.js"></script>
    </head>
    <body>
        <style>
            .test {
               height:40px; width:200px;
               background-image: url('<?=  base_url()?>/weixin/bg_logo1e7c60.png') ;
                   
            }
        </style>
        
        <div class="test"></div>
        <script src="<?=base_url()?>weixin/highchart/highcharts.js"></script>
        
        <a href="#" id="btn_sure">点我 </a>
        <div id="chartContainer" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
        <script>
           var chart;

var options = {
    credits: { enabled:false },
    chart: {
       renderTo: 'chartContainer',
       type:'area'
    },
    chartType: "area",
    title: {
        text: '',
        x: -20 //center
    },
    xAxis: {
        events : {afterSetExtremes : loadDate },
        categories : [ ]
       
    },
     legend: {
            borderWidth: 0,
            itemStyle:{"background-image": "url('<?=  base_url()?>/weixin/bg_logo1e7c60.png')"},
            color:"#44b549",
            labelFormatter: function () {
                return this.name + ' (click to hide)';
            }
        },
    yAxis: {
    	title: { text: '' },
         gridLineWidth:0.3,
         tickInterval:50,
        min:0,
        plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
    },

     plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#44b549',
                lineWidth: 2,
                fillOpacity:0.02,
                marker: {
                    lineWidth: 1,
                    lineColor: '#44b549'
                }
            }
        },
     tooltip: {
            shared: true, //是否共享提示，也就是X一样的所有点都显示出来
            useHTML: true, //是否使用HTML编辑提示信息
            backgroundColor: '#555556',
            borderColor: '#555556',
            headerFormat: '<span style=" background:#555556; color: #fff; font-size:12px;font-family: Tahoma, "microsoft yahei", 微软雅黑, 宋体;  position: absolute; white-space: nowrap; margin: 0px; left: 8px; top: 8px;padding:8px;"><div style="padding:5px;"><b>{point.key}</b></div><table style=" width: 150px;line-height: normal;text-align: left;color: #fff;">',
            pointFormat: '<tr><td style="padding: 2px 5px; font-size:12px;"">{series.name}: </td>' +
            '<td style="text-align: right;padding-left:15px1;font-size:12px;">{point.y}</td></tr>',
            footerFormat: '</table></span>',
            valueDecimals: 0 
        }
};

$(document).ready(function(){
	// 获取测点数据
	//loadSensor();
	
//	var series = {
//		data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 29.6],
//		name: "新关注人数"
//	};
//		
//	chart = new Highcharts.Chart(options);
//	chart.addSeries(series);
        loadDate();
         $("#btn_sure").click(function(){
		loadDate();
	});
        
        
});

// 获取数据
    function loadDate() {
        //var sensor = $.trim($("#sensor").val());
        //chart.showLoading('正在加载数据...');
        
        $.ajax({
            url : '<?=site_url()?>report/getUserAnalyzeData',
            type : 'POST',
            dataType : 'json',
            contentType: "application/x-www-form-urlencoded; charset=utf-8", 
            success : function(data) {
                       // alert(typeof(data.data1));
                        //document.write(data.data1);
                       var seriesNew = {
                   // yAxis: 0,
                                color:"#44b549",
                                //color:'rgba(135, 179, 212, 0.05)',
                    name: '新关注人数',
                                 marker:{
                                   // fillColor:'rgba(135, 179, 212, 0.05)'
                                 },
                                dataFormat: 1,
                                 type:'area',
                               // data: JSON.parse("[" + data + "]") 
                                //data: JSON.parse("[" + data.series + "]") 
                                data : data.series
                };//加载数据的时候把之前的覆盖掉
                       var    xAxisNew = {
                           // events : {afterSetExtremes : loadDate },
                            //categories : JSON.parse("[" + data.categories + "]") 
                            tickInterval:4,
                            categories :data.categories
                        };
                          options.xAxis =   xAxisNew;
                chart = new Highcharts.Chart(options);
                chart.addSeries(seriesNew);
                        //  chart.addAxis (xAxisNew);
//                        var seriesNew = {
//                                        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 0.6],
//                                        name: "默认测点"
//                                };
//                                seriesNew.data=data.data1;
                               // chart = new Highcharts.Chart(options);
                                //chart.addSeries(seriesNew);
            }
        });
    }


        </script>
    </body>
</html>
