canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_mars_image_array = ["image1.jpg", "image2.jfif", "image3.jpg", "image4.jfif"]

rover_width = 100;
rover_height = 90;

random_number = Math.floor(Math.random()*4);
background_image = nasa_mars_image_array[random_number];

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = upload_background;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = upload_rover;
    rover_imgTag.src = rover_image;
}

function upload_background()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function upload_rover()
{
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
 

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed =='38')
    {
    up();
    console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }

}


function up()
{
    if(rover_y >= 0)
    {
        rover_y = rover_y - 10;
        upload_background();
        upload_rover();
    }
}

function down()
{
    if(rover_y<=500)
    {
        rover_y = rover_y + 10;
        upload_background();
        upload_rover();
    }
}

function left()
{
    if(rover_x>=0)
    {
        rover_x = rover_x - 10;
        upload_background();
        upload_rover();
    }
}

function right()
{
    if(rover_x<=700)
    {
        rover_x = rover_x + 10;
        upload_background();
        upload_rover();
    }
}
