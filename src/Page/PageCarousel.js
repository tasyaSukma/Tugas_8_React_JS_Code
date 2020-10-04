import React from 'react';
import {Carousel} from 'react-bootstrap';

function PageCarousel(){
	return(
		<div>
		<Carousel>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600/800x400?text=First slide&bg=282c34"
		      alt="First Slide"
		    />
		    <Carousel.Caption>
		      <h3>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h3>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600/800x400?text=Second slide&bg=282c34"
		      alt="Second slide"
		    />

		    <Carousel.Caption>
		      <h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600/800x400?text=Third slide&bg=20232a"
		      alt="Third slide"
		    />

		    <Carousel.Caption>
		      <h3>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</h3>
		    </Carousel.Caption>
		  </Carousel.Item>
		</Carousel>
		</div>
	)
}

export default PageCarousel;