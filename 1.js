$(document).ready(function () {
    setInterval(changeStyleCSS , 2000)
   
    function changeStyleCSS(){
        const arrColor = ["#0984e3", "#d63031", "#27ae60", "#2980b9", "#f39c12", "#1abc9c", "#1abc9c", "#341f97", "#01a3a4", "#ff9ff3", "#222f3e", "#fff200"]       
        const typeTransform = ["typeTransform1", "typeTransform2", "typeTransform3", "typeTransform4" ]
        const countLineTop = $('.line__top').children().length
        const countLineBottom = $('.line__bottom').children().length

        //set color line top
        for(let i = 1; i <= countLineTop; i++){
            const indexColor = Math.trunc(Math.random() * arrColor.length);
            const indexAnimation = Math.trunc(Math.random() * typeTransform.length);

            $(`.line__top span:nth-child(${i})`).css({
                "background": arrColor[indexColor],
                "animation": `${typeTransform[indexAnimation]} 2s linear infinite`
            })
            $(`.line__top span:nth-child(${i}) i`).css({
                "color": arrColor[indexColor],
               
            })
            
        }
        for(let i = 1; i <= countLineBottom; i++){
            const indexColor = Math.trunc(Math.random() * arrColor.length);
            const indexAnimation = Math.trunc(Math.random() * typeTransform.length);

            $(".line__bottom span:nth-child("+ i +")").css({
                "background": arrColor[indexColor],
                "animation": `${typeTransform[indexAnimation]} 2s linear infinite`
            })
            $(`.line__bottom span:nth-child(${i}) i`).css({
                "color": arrColor[indexColor],
               
            })
        }
        
    }

    $(".img__mylove").click(function (e) { 
        e.preventDefault();
        $(".message").addClass("active");
        $(".overlay").addClass("active")
    });

    $('.overlay').click(()=>{
        $(".message").removeClass("active");
        $(".overlay").removeClass("active")
    })
    $('.btn__love').click(()=>{
        $(".message").removeClass("active");
        $(".overlay").removeClass("active")
    })

   
});