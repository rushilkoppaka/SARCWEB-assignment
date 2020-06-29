# SARCWEB-assignment

```html
  <!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">

      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

      <title>SARC Web Assignment</title>
      <style type="text/css">
        .jumbotron{
          text
        }
        body{
          background-image:url('https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
          background-attachment: fixed;
          background-size:cover;
          transition: background-image 0.4s ease;
        }
        .card{
          background-color:LightGray;
          justify-content:right;
          transition: all 0.4s ease;
          padding:10px;
          opacity: 0.8;
          width: 100%;
          font-family: sans-serif;
        }
        .card:hover{
          transform: scale(1.1);
          
        }
        .transparent{
          background-color:rgba(0,24,20,0.7);
          }
        
        .btn-lg{
          width:100%;
          background-color: rgba(100,200,20,0.3);
          margin:0px;
          
          }
        
        
      </style>
      <link rel="stylesheet" type="text/css" href="./sidebar.css">
      <link rel="stylesheet" type="text/css" href="./imgcarousel.css">
      <link rel="stylesheet" type="text/css" href="./likebtncss.css">


    </head>
    <body>
      
          
      
      <div class="" style="display: grid">
          <div class="container">
            <div class="jumbotron" style="background-color:grey">

              <div class= "container lead secondary-text text-justify" >
                <h1>MY Website</h1>
                <hr>
                <h3>Rushil Koppaka(19D180025)</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ulla.
                </p>
              </div>

            </div>
            <div class="row">
                <div class="col-lg-6 col-md-4">
                </div>
                <div class="col-lg-5 col-md-7 col-sm-12 ">
                  <div class="card mb-4">
                    <div class="card-body-text-center ">
                      <h4 class="card-title text-center">card 1</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <nav class="navbar navbar-dark bg-dark">
                Bootstrap hamburger
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </nav>

                    </div>
                  </div>
                </div>
              
            </div>
            <div class="row">
                <div class="col-lg-1 col-md-1">
                </div>
                <div class="col-lg-5 col-md-7 col-sm-12">
                  <div class="card mb-4">
                    <div class="card-body-text-center ">
                      <h4 class="card-title text-center">card 2</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>
              
            </div>
            <div class="row">
                <div class="col-lg-2 col-md-1">
                </div>
                <div class="col-lg-8 col-md-10 col-sm-12 ">
                  <div class="card mb-4">
                    <div class="card-body-text-center ">
                      <h4 class="card-title text-center ">Image Slider</h4>
                      <div class="my-carousel">
                        <button  id="nextBtn">
                          <h5><span class="badge badge-light">-></span></h5>
                        </button>
                        <button id="prevBtn">
                          <h5><span class="badge badge-light"><-</span></h5>
                          
                        </button>



                        <div class="carousel-img">
                          <img src="https://cdn.pixabay.com/photo/2013/07/25/16/21/dandelion-167112__340.jpg" id="lastClone">
                          <img src="https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                          <img src="https://images.unsplash.com/photo-1548679847-1d4ff48016c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
                          <img src="https://cdn.wallpapersafari.com/31/27/EmSFej.jpg">
                          <img src="https://cdn.pixabay.com/photo/2013/07/25/16/21/dandelion-167112__340.jpg">
                          <img src="https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="firstClone">
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-2">
                </div>
                <div class="col-lg-7 col-md-9 col-sm-12 ">
                  <div class="card mb-4">
                    <div class="card-body-text-center ">
                      <h4 class="card-title text-center">Facebook Lite</h4>
                      <div class="likebtn-container container">
                          
                            <hr>
                            <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS47jCCwaR3-d0BZoFUs9a69ofM8R5qw2rv20GG5rI4ibEx78Y2&usqp=CAU">

                            <button class="like-btn btn btn-primary" >Like</button>
                          
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="menu-wrapper">
          <input type="checkbox" class="toggler">
          <div class="hamburger">
            <div>
            </div>
           </div>
          <div class="menu">
            <div>
              <div>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact</a></li>
               </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      

      <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <script type="text/javascript" src="./sliderimage.js">
      </script>
      <script type="text/javascript" src="./likebtn.js">
      </script>
      <script type="text/javascript">
        const b = document.querySelector('body');
        const t =document.querySelector('.menu-wrapper .toggler')
        let i =0;
        
        addEventListener('click',(e)=>{
          if(t.checked==false){
              if(i%3==1){
              document.querySelector('body').style.backgroundImage="url('https://images.pexels.com/photos/370472/pexels-photo-370472.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')";
            }else if(i%3==2){
              document.querySelector('body').style.backgroundImage="url('https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')";

            }else{
              document.querySelector('body').style.backgroundImage="url('https://images.pexels.com/photos/1111316/pexels-photo-1111316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')";
            }
            i=i+1;
          }
        });

      </script>
    </body>
  </html>



```
