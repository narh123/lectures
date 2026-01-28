


var backgroundImage = '';
function addPost() {
    var title = document.getElementById('title');
    var description = document.getElementById('description');

    if (title.value.trim() && description.value.trim()){

        var posts = document.getElementById('posts');



        posts.innerHTML += `
                       
                   <div  class="card">
                        <div class="card-header">
                            @post
                        </div>
                        <div style='background-image: url(${backgroundImage})'class="card-body">
                            <figure>
                                <blockquote class="blockquote">
                                    <p>${title.value}</p>
                                </blockquote>
                                <figcaption class="blockquote-footer">
                                     <cite title="Source Title">${description.value}</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
 
    `
    title.value ='';
    description.value ='';

    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "please enter title & description!",
           
        })
    }
}
 
  function selectImage(src) {
    backgroundImage = src;
    var bgImage = document.getElementsByClassName('bg-image')
    console.log(bgImage)
    for(var i= 0; i< bgImage.length; i++){
        bgImage[i].className = 'bg-image'
    }
    event.target.className += ' image-list-seclected '
    
  }



































