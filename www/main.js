$( document ).ready(function() 
        {
        //alert('dsa');
        var cnt=0;
                      
            ch=parseInt(window.innerHeight)-parseInt(document.body.clientHeight)-10;         
            //alert(ch);
            $('#laymain').css('height',ch);
            //z=$('#laymain').css('backgroundImage');
            //alert(z);
                /*
                id_user=19; //z2[1];
                $('#hiduser').val(id_user);
                
                var url2=PATH+'/ajax_func.php?func=user_by_id&id='+id_user;
                //alert(url2);
                $.getJSON( url2, function( data ) 
                {
                        $('#duser').html('Тесты выполняет '+data[0].fio);
                        //alert(data[0].id_exp);
                        $('#id_exp').val(data[0].id_exp)
                });
 
            
            $('#exp').hide();
            //$('.pres').hide();
            $('#bstart').show();
            $('#bstop').hide();
                
                */
                
         
            $('#experiment').combobox({
                onClick: function(param)
                {
                    //alert('hhh');
                    //param.id = 2;
                    //param.language = 'js';
                    //alert(param.pic);
                    
                    current_test=param.id;
                    url=PATH+'/web/img/'+param.pic;
                    //alert(url);
                    $('#laymain').css('background-image', 'url('+url+')');   
                    $('#descr').html(param.descr);
                    //$('<audio class="player" src="sound.mp3"></audio><br>').prependTo('#descr');
                    
                    $('.player').attr('src', PATH+'/web/mp3/'+param.mp3);
                    $('#progress').progressbar('setValue',0);
                    cnt=0;
                                      
                    //alert(param.pic);
                    /*
                    $('#timetest').val(param.tim);
                    $('#exp').show();
                    $('#splash').hide();
                    
                                  
                    
                    
                    var wid=parseInt($('#descr').css('width'));
                    //alert(wid);
                    wid=0; //wid-42;
                    
                    var settings = {
                    progressbarWidth: wid+'px',
                    progressbarHeight: '5px',
                    progressbarColor: '#22ccff',
                    progressbarBGColor: '#eeeeee',
                    defaultVolume: 0.8
                    };
                
                    $(".player").player(settings);
                    
                    setCookie('cmd',param.id);
                    
                    cmd=param.id;
                    
                    
                     */
                    
                    //$('.pres').show();                    
                    //$('.pres').load(url);
                }
            });
            
            $('#progress').progressbar({
    value: 0
});
            
        $( "#laymain" ).bind( "click", function() 
        {
          //alert('333');
          cnt=cnt+1;
          proc=Math.round((cnt/108)*100);
          $('#progress').progressbar('setValue',proc);          
                  //$('#progress').progressbar('text',cnt); 
          //op=0.3+cnt/108;
          //if (op>1) {op=1;}
          
         //  $( "#laymain" ).css( "opacity",op);
          $('#who').html(cnt);  
          if (cnt>=108) {cnt=0;}
        });
        
            
        $( "#bstop" ).bind( "click", function() 
        {
            //alert(timerId);
            //clearInterval(timerId); 
            //$.get(PATH+'/mobile.php?id='+id_user+'&act=stop&test='+current_test);  
             /*
            sec=0; min=0;
            $('#sec').html(sec);
            $('#min').html(min);
           
           var audio = new Audio();
              audio.preload = 'auto';
              audio.src = 'mp3/1.mp3';
              audio.play();
                 */
                 
            //$('#bstart').show();
            //$('#bstop').hide();   
               
        }); 
        
         
        $( "#bstart" ).bind( "click", function() 
        {
           //cmd=getCookie('cmd');
           
           
           //var id_exp=$('#id_exp').val(); 
           //var timeTest=$('#timetest').val(); 
         
                      
           //$.get(PATH+'/mobile.php?id='+id_user+'&act=start&test='+current_test+'&id_exp='+id_exp);  
        
        //$('#bstart').hide();
        //$('#bstop').show();
          
          /*          
         min=0;
         sec=0;
         // начать повторы с интервалом 2 сек
         timerId = setInterval(function() 
         {
             sec=sec+1;
             if (sec==60) {min=min+1; sec=0;}
             $('#sec').html(sec);
             $('#min').html(min);
             //alert(sec);
            
         }, 1000);

            // через 5 сек остановить повторы
         setTimeout(function() 
         {
              clearInterval(timerId);
              
              min=0; 
              sec=0;
              $('#sec').html(sec);
              $('#min').html(min);
                           
              
              $.get(PATH+'/mobile.php?id='+id_user+'&act=stop&test='+current_test);  
              //$('#sec').val(sec);
              //alert(sec);
              var audio = new Audio();
              audio.preload = 'auto';
              audio.src = 'mp3/1.mp3';
              audio.play();
              
              
               
                    
              $('#bstart').show();
              $('#bstop').hide();  
              
         }, timeTest*1000);                   
        
         */
         
        });  
         
        });    
        
        