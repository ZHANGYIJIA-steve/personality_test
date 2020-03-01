/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    home: async function (req, res) {
        

        req.file('image').upload({
            dirname: '../../assets/images/'
       }, function(error, uploadedFiles) {
        return res.view('pages/test');
       });

       

    },
    result:async function (req,res){
        var shudiao = req.query.shudiao;
        var meigui = req.query.meigui;
        var songshu = req.query.songshu;
        var zonglv =req.query.zonglv;
        shudiao = Number(shudiao);
        meigui = Number(meigui);
        songshu = Number(songshu);
        zonglv = Number(zonglv);
        console.log(shudiao,meigui,songshu,zonglv);
        if (req.wantsJSON) {
            if(songshu>zonglv&&songshu>meigui&&songshu>shudiao){
                return res.json({  url: '/test/result/songshu' }); 

            }else if(shudiao>songshu&&shudiao>meigui&&shudiao>zonglv){
                return res.json({  url: '/test/result/shudiao' }); 
            }else if(meigui>songshu&&meigui>shudiao&&meigui>zonglv){
                return res.json({  url: '/test/result/meigui' }); 
            }else if(zonglv>songshu&&zonglv>shudiao&&zonglv>meigui){
                return res.json({  url: '/test/result/zonglv' }); 
            }else if(shudiao==meigui&&shudiao==2){
                return res.json({  url: '/test/result/shumei' }); 
            }else if(shudiao==songshu&&shudiao==2){
                return res.json({  url: '/test/result/shusong' }); 
            }else if(shudiao==zonglv&&shudiao==2){
                return res.json({  url: '/test/result/shuzong' }); 
            }else if(meigui==songshu&&meigui==2){
                return res.json({  url: '/test/result/meisong' }); 
            }else if(meigui==zonglv&&meigui==2){
                return res.json({  url: '/test/result/meizong' }); 
            }else if(songshu==zonglv&&songshu==2){
                return res.json({  url: '/test/result/songzong' }); 
            }
             return res.json({  url: '/test/result/' }); 

              // for ajax request
        } else {
            return res.redirect('/test/result');           // for normal request
        }
    },
    songshu:async function(req,res){
        return res.view('pages/songshu');

    },
    shudiao:async function(req,res){
        return res.view('pages/shudiao');

    },
    meigui:async function(req,res){
        return res.view('pages/meigui');

    },
    zonglv:async function(req,res){
        return res.view('pages/zonglv');

    },
    shumei:async function(req,res){
        return res.view('pages/shumei');

    },
    shusong:async function(req,res){
        return res.view('pages/shusong');

    },
    shuzong:async function(req,res){
        return res.view('pages/shuzong');

    },
    meisong:async function(req,res){
        return res.view('pages/meisong');

    },
    meizong:async function(req,res){
        return res.view('pages/meizong');

    },
    songzong:async function(req,res){
        return res.view('pages/songzong');

    },

    
    

};

