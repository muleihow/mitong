var imgs = document.querySelectorAll('.banner img');
        var nums = document.querySelectorAll('.num li');
        var prev = document.querySelector('.prev');
        var next = document.querySelector('.next');
        var timer;
        var showIndex = 0;//当前显示图片的下标
        var prevIndex = 0;//上次显示图片的下标

        animate(imgs[showIndex],{'opacity':1},function(){
            timer = setInterval(function(){
                moveNext();
            },3000);
        });

        function moveNext(){
            imgs[prevIndex].className = '';
            nums[prevIndex].className = '';
            imgs[prevIndex].style.opacity = 0.02;

            showIndex++;
            if(showIndex >= imgs.length){
                showIndex = 0;

            }

            imgs[showIndex].className = 'show';
            nums[showIndex].className = 'active';

            prevIndex = showIndex;

            animate(imgs[showIndex],{'opacity':1});
        }

        function movePrev(){
            imgs[prevIndex].className = '';
            nums[prevIndex].className = '';
            imgs[prevIndex].style.opacity = 0.02;

            showIndex--;
            if(showIndex < 0){
                showIndex = imgs.length-1;
            }
            imgs[showIndex].className = 'show';
            nums[showIndex].className = 'active';
            prevIndex = showIndex;
            animate(imgs[showIndex],{'opacity':1});
        }
        next.onclick = function(){
                clearInterval(timer);
                clearInterval(imgs[showIndex].timer);
                movePrev();

                timer = setInterval(function(){
                    moveNext();
                },3000);
        }
        for(var i = 0,len = nums.length;i < len;i++){
            nums[i].index = i;
            nums[i].onclick = function(){
                clearInterval(timer);
                clearInterval(imgs[showIndex].timer);

                imgs[prevIndex].className = '';
                nums[prevIndex].className = '';
                imgs[prevIndex].style.opacity = 0.02;

                showIndex = this.index;

                imgs[showIndex].className = 'show';
                nums[showIndex].className = 'active';

                prevIndex = showIndex;

                animate(imgs[showIndex],{'opacity':1});

                timer = setInterval(function(){
                    moveNext();
                },3000);
            }
        }