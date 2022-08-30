import { useState, useEffect} from 'react'
import BlogOverview from '../Overview/BlogOverview';

function BlogDisplay(blog: any) {

    const displayBlogs = () => {
        if (blog.blogData.items) {
            return blog.blogData.items.map((index: any, item: any) => (
                <BlogOverview blogData={index} />
            ))
        }
    }
    return (
        <div className="blogs">
            {blog.blogData.isLoading? 'Loading...' : displayBlogs()}
        </div>
    )
}

export default BlogDisplay