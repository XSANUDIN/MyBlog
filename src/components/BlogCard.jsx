import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ image, category, title, content, link }) {
    return (
        <div className="container">
            <div className="row">
                <div className="item md:w-1/3 border border-gray-300 ">
                    <div className="item-in">
                        <div className="flex items-center justify-center h-64">
                            <img
                                src={image}
                                alt="card-image"
                                className="object-cover max-w-full max-h-64"
                            />
                        </div>
                        <div className="icon">
                            {/* Use Link component instead of <a> */}
                            <Link to="#" className="icon-topic">{category}</Link>
                        </div>
                        <h4>{title}</h4>
                        <div className="seperator"></div>
                        <p>{content}</p>
                        {/* Use Link component instead of <a> */}
                        <Link to={link} className='font-bold text-xl hover:text-gray-400'>
                            Read More
                            <i className="fa fa-long-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
