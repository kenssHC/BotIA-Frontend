import React, { Fragment } from 'react';
import { Row } from 'react-bootstrap';
import Gallerydata from './gallerydata';

const Gallery = () => {
    return (
        <Fragment>
            <Row>
                <Gallerydata />
            </Row>
        </Fragment>
    );
};
export default Gallery;
