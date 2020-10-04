import React from 'react';
import {Breadcrumb} from 'react-bootstrap';

function PageBreadcrumbs (){
	return(
		<Breadcrumb>
		<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
		<Breadcrumb.Item href="https://www.republika.co.id/">Berita</Breadcrumb.Item>
		<Breadcrumb.Item active>Bola</Breadcrumb.Item>
		</Breadcrumb>
		)
	}

export default PageBreadcrumbs;