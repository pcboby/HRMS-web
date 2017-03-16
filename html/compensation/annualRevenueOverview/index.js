$(function() {
    $('.list-navmenu').find('li').each(function(idx,e){
        // alert(e);
        $(e).click(function(){
            $(this).addClass('active').siblings('li').removeClass('active');
        })
    })
    $('.list-columntree').each(function(idx,e){
        $(e).find('ul').width($(e).find('li').length*40)
        // .scrollbar();
    })
    $('.list-scrollBar').find('a').each(function(idx, e) {
        $(e).not('.goTop').click(function(){
            $(this).parent().addClass('active').siblings().removeClass('active');
            // $('html,body').animate({
            //     scrollTop: $($(this).attrs('href')).offset().top
            // }, 2000);
            // return false
        })
    });
    $('#chartAnnual').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            spacing: [20, 0, 0, 0]
        },
        title: {
            floating: true,
            text: '年度总收入'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                colors: ['#54bc9b', '#348faa', '#8562a4', '#f14946', '#f58d36'],
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
                point: {
                    events: {
                        // mouseOver: function(e) { // 鼠标滑过时动态更新标题
                        //     // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                        //     chart.setTitle({
                        //         text: e.target.name + '\t' + e.target.y + ' %'
                        //     });
                        // }// , 
                        click: function(e) { // 同样的可以在点击事件里处理
                            chart.setTitle({
                                text: e.point.name+ '\t'+ e.point.y + ' %'
                            });
                        }
                    }
                },
            }
        },
        series: [{
            type: 'pie',
            innerSize: '65%',
            name: '比例',
            data: [{
                name: '工资',
                y: 15.0,
                sliced: true,
                selected: true
            }, {
                name: '津贴补助',
                y: 30
            }, {
                name: '奖金',
                y: 45
            }, {
                name: 'TUP',
                y: 6
            }, {
                name: '福利',
                y: 4
            }]
        }]
    }, function(c) {
        // 环形图圆心
        var centerY = c.series[0].center[1],
            titleHeight = parseInt(c.title.styles.fontSize);
        c.setTitle({
            y: centerY + titleHeight / 2
        });
        chart = c;
    });
})
