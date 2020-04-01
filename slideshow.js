var slideshow =
{
    photoList: ['photo1','photo2','photo3','photo4','photo5'],
	
	currentPhotoIndex : 0,
    
  	nextPhoto: function()
	{
		// console.log("   ");
		// console.log("currentPhotoIndex :"+this.currentPhotoIndex);
		// console.log("photoList.length :"+this.photoList.length);

		if( this.currentPhotoIndex < this.photoList.length-1 ) 
		{
			this.currentPhotoIndex++;
			// console.log("currentPhotoIndex after increment :"+this.currentPhotoIndex);
			return (this.photoList[this.currentPhotoIndex]);
		    
		}
		else
		{
			this.pause();
			return "End of Slideshow";
			// this.pause();
			
		}
	},

	prevPhoto : function()
	{
		if(this.currentPhotoIndex >= 0)
		{
			this.currentPhotoIndex--;
			return (this.photoList[this.currentPhotoIndex]);
		    
		}
		else
		{
			return ("Beginning of  Slideshow");
		}
	},

	getCurrentPhoto : function()
	{
	   return this.photoList[this.currentPhotoIndex];
	},


// Create an empty property named playInterval
    playInterval :null,


// A play() function that moves to the next photo ever 2000ms until the end.
    play:function()
    {
       var self=this;	
	   this.playInterval = setInterval(function(){
	   	return console.log(self.nextPhoto());
	   },2000);
 		
    },

// A pause() function that stops the slideshow

    pause: function()
    {
        clearInterval(this.playInterval);
    } 

};

slideshow.play();



































