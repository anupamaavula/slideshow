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
			console.log("End of Slideshow");
			
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
	}

}
// console.log (slideshow.photoList[2]);
console.log(slideshow.getCurrentPhoto());
console.log(slideshow.nextPhoto());
console.log(slideshow.nextPhoto());
console.log(slideshow.nextPhoto());
console.log(slideshow.nextPhoto());
console.log(slideshow.prevPhoto());
console.log(slideshow.prevPhoto());
console.log(slideshow.prevPhoto());