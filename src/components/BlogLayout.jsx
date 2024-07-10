import React from 'react';
import '../css/style.css'; // Ensure your CSS file is correctly imported
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import { blogPosts } from "./Data/Data";

const BlogLayout = () => {
    // Dummy data for demonstration
   

    // Pagination logic
    const pageSize = 6; // Number of posts per page
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = Math.ceil(blogPosts.length / pageSize);
    const indexOfLastPost = currentPage * pageSize;
    const indexOfFirstPost = indexOfLastPost - pageSize;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
        <div className='flex md:ml-48'>
        <div className='w-full h-full'>
            <section className="title container text-center">
                <div className="row">
                    <div className="col">
                        <h1 className="text-4xl">Blog</h1>
                        <div className="seperator"></div>
                    </div>
                </div>
            </section>

            <div className="row">
                {currentPosts.map((post, index) => (
                    <div key={index} className="col-md-4 mb-3 ml-3">
                        <div className="card h-100"> {/* Ensure each card is of equal height */}
                            <BlogCard
                                image={post.image}
                                category={post.category}
                                title={post.title}
                                content={post.content}
                                link={post.link}
                            />
                        </div>
                    </div>
                ))}           
            </div>
        </div>
        </div>
        <div className='mt-10 mb-10 flex justify-center'>                   
            <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    paginate={paginate}
            />
        </div>
        </>
        
    );
};

export default BlogLayout;
