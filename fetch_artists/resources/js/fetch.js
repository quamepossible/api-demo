$('.myForm').submit((e)=>{
    e.preventDefault();
})

var parDiv = document.querySelector('.holdata');

$('.input').keyup(() => {

    var user = $('.input').val();

    $('.holdata').html('');
    $('.status').html('');
    $('.input').css({
        border: "3px solid black",
        boxShadow : "none"        
    })
    $.ajax({
        method : 'POST',
        url : 'data.php',
        dataType : 'json',
        data : {name : user},
        success : (data) => {
            $('.gif').css('display', 'none');
            var artDat = data;
            if(artDat == 'empty'){
                $('.status').html('Artist not found');
                $('.input').css({
                    border: "3px solid red",
                    boxShadow : "0 0 20px red",                    
                })
            }

            else if(artDat == 'enter'){
                $('.status').html('Results will appear here');
            }

            else{
                var imgArr = []; 
                var count = 0;
                for(i = 0; i < artDat.length; i++){
                    var dezName = artDat[i].stage;

                    //create a div element to hold individual record
                    var newDiv = document.createElement('div');

                    //create five spans
                    var imgSpan = document.createElement('span');
                    var nameSpan = document.createElement('span');
                    var stageSpan = document.createElement('span');
                    var recordSpan = document.createElement('span');
                    var viewSpan = document.createElement('span');

                    //add class to imgSpan
                    imgSpan.classList.add('picspan');


                    //add class to viewSpan
                    viewSpan.classList.add('view');


                    //four texts and one img
                    var imgSpanSrc = document.createElement('img');
                    var nameSpanText = document.createTextNode(artDat[i].name + ' ');
                    var stageSpanText = document.createTextNode(artDat[i].stage + ' ');
                    var recordSpanText = document.createTextNode(artDat[i].label + ' ');
                    var viewSpanText = document.createTextNode('View Artist');

                    //add alt to img
                    var altName = dezName.toLowerCase();
                    imgSpanSrc.setAttribute('alt', altName + "'s pic")
                    

                    //append to spans
                    imgSpan.appendChild(imgSpanSrc);
                    nameSpan.appendChild(nameSpanText);
                    stageSpan.appendChild(stageSpanText);
                    recordSpan.appendChild(recordSpanText);
                    viewSpan.appendChild(viewSpanText);

                    //apend to p tag
                    var pTag = document.createElement('p');
                    pTag.classList.add('row');
                    pTag.appendChild(imgSpan);
                    pTag.appendChild(nameSpan)
                    pTag.appendChild(stageSpan)
                    pTag.appendChild(recordSpan)
                    pTag.appendChild(viewSpan)

                    //apend to parent div
                    newDiv.appendChild(pTag);
                    holDiv = document.querySelector('.holdata');                   
                    holDiv.appendChild(newDiv);

                    $('.input').css({
                        border: "3px solid green",
                        boxShadow : "none"
                        
                    })

                    $.ajax({
                        method : 'POST',
                        url : 'deezer.php',
                        data : {name : dezName},
                        dataType : 'json',
                        success : (data) => {
                            var dezData = data;   
                            newSrc = dezData.picture_xl;
                            imgArr[count] = newSrc;
                            allImages = $('.picspan > img');
                            for(j = 0; j < artDat.length; j++){
                                if(allImages[j] != undefined){
                                    allImages[j].setAttribute('src', imgArr[j]);
                                    allImages[j].classList.add('yoimg');
                                }
                            }
                            count++;
                        },
                        complete : () => {

                            //num of artists
                            var totArts = artDat.length;

                            //rendered artists
                            var rendArts = document.querySelectorAll('.holdata')[0].children.length;

                            //number of unneeded rendered
                            var unRend = rendArts - totArts;

                            //check if api returned number of artists is equal to rendered artists
                            if(unRend == 0){
                                $('.status').html('');
                                $('.gif').css('display', 'none');
                                $('.holdata').css('display', 'block');
                            }

                            else if(unRend < 0){
                                $('.status').html('');
                                $('.holdata').css('display', 'none');
                                $('.gif').css('display', 'block');
                            }

                            else if(unRend > 0){
                                for(m = totArts; m < rendArts; m++){
                                    parDiv.removeChild(parDiv.childNodes[m]);
                                    $('.holdata').css('display', 'none');
                                }
                                $('.gif').css('display', 'none')
                                $('.holdata').css('display', 'block');

                            }

                        }
                    })
                }

            }
        }
    })

})


