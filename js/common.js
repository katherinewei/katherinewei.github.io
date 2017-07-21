/**
 * Created by Administrator on 2017/3/15.
 */
//头部

function getHeader(){
    var menu = [
            {
                title:'首页',
                href:'index.html'
            },
            {
                title:'产品中心',
                href:'product.html'
            },
            {
                title:'管理后台',
                href:'manageSys.html'
            },
            {
                title:'关于我们',
                href:'aboutUs.html'
            }

        ],
        menuH=[];
    var logo_url = 'images/logo.png';
    if($('.header').hasClass('header_white')){
        logo_url = 'images/logo_white.png';
    }
    var lp = location.pathname.split('/');
    console.log(location.pathname,lp)

    if(!lp[1]){
        menu[0].href = '';
        menu[0].active = 'active';
    }

    $.each(menu,function(i,item){
       // item.active ='';
        if(new RegExp(item.href).test(location.pathname)){
            item.href = '';
            item.active = 'active';
        }

         //console.log(location.pathname.split('/'))
        // if(location.pathname.test('')){
        //     menu[0].href = '';
        //     menu[0].active = 'active';
        // }
        menuH.push('<li class="'+item.active+'"><a href="'+item.href+'">'+item.title+'</a></li>');
    })

    //$('.header').append('<div class="w1200"><div class="logo"><img src="images/logo.png"/></div><nav>'+menuH.join('')+'</nav> <a href="login.html" class="loginBtn">登录</a> </div>');
    $('.header').append('<div class="w1200"><nav class="navbar navbar-inverse"> <div class="container-fluid"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <div class="logo"><a href="index.html"> <img src="'+logo_url+'"/></a></div> </div> <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> <ul class="nav navbar-nav">'+menuH.join('')+' </ul> <div class="nav navbar-nav navbar-right"> <a href="http://mall.saiyaoyun.com" target="_blank" class="loginBtn">登录后台</a> </div> </div> </div> </nav></div>');
}
function getFooter() {
    var foot=[
        {
            title:'解决方案',
            data:[
                {

                    name:'支付系统解决方案'
                },
                {

                    name:'订单管理系统解决方案'
                },
                {

                    name:'售货机购物系统解决方案'
                },{

                    name:'数据营销解决方案'
                }
            ]
        },
        {
            title:'我们的服务',
            data:[
                {
                    name:'24小时咨询服务'
                },
                {
                    name:'智能资产数据分析和预警'
                },
                {
                    name:'专业后台开发团队'
                },{
                    name:'商务智能和云服务数据服务'
                }
            ]
        },
        {
            title:'联系我们',
            data:[
                {
                    icon:'tel',
                    name:'咨询热线：400-1517177 / 400-1067717'
                },
                {
                    icon:'mail',
                    name:'服务邮箱：800104717@qq.com'
                },
                {
                    icon:'web',
                    name:'公司网址：<a href="http://www.bdvending.com">www.bdvending.com</a>'
                },{
                    icon:'addr',
                    name:'公司地址：广东省广州市番禺区金山大道华创动漫产业园C11栋'
                }
            ]
        },
        {
            title:'微信公众号'

        }
    ],
        footH = [];
    $.each(foot,function(i,item){
        var detail=[];
        if(item.data){
            $.each(item.data,function(j,itemD){
                var tpl = '<dd>'+itemD.name+'</dd>';
                if(itemD.url){
                    tpl = '<dd><a href="'+itemD.url+'">'+itemD.name+'</a></dd>'
                }
                if(itemD.icon){
                    tpl = '<dd><i class="icon '+itemD.icon+'"></i>'+itemD.name+'</dd>';
                }
                detail.push(tpl);

            })
        }else{
            detail.push('<div class="wxEWM"></div>');
        }

        footH.push('<li class="col-sm-3"><p>'+item.title+'</p><dl>'+detail.join('')+'</dl> </li>')
    })
    $('.footer').append('<div class="w1200"><ul class="row">'+footH.join('')+'</ul><p class="copyright">Copyright @ 2015. All rights reserved.  广州市宝达智能科技有限公司   版权所有.  备案号：粤ICP备15034040号-2 </p></div>');
}
//
function rightTool() {
    $('.tool').append('<dl><dd><span class="toolItem ewmIcon"><i></i><div class="showIt"><div class="wxEWM"></div><div class="arrow"></div></div></span></dd><dd><span class="toolItem telIcon">咨询<br/>热线<div  class="showIt">020-39184727<div class="arrow"></div></div></span></dd> <dd><span class="toTop"><i ></i></span></dd>  </dl>');

    $('.toolItem').mouseover(function(){
        $(this).find('.showIt').show();
    })
    $('.toolItem').mouseout(function(){
        $(this).find('.showIt').hide();
    })

    $(window).scroll(function(){
        var offset = 180;
        $(this).scrollTop() > offset ? $('.toTop').addClass('is-visible') : $('.toTop').removeClass('is-visible');

    })
    $('.toTop').on('click', function () {
        $("html,body").stop().animate({scrollTop:0},500);
        });
}

//rightTool()
getHeader();
getFooter()

$(window).scroll(function(){
    $('.header').addClass('fixed');
    if($(window).scrollTop() == 0){
        $('.header').removeClass('fixed');
    }
})