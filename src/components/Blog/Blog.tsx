import { useState, useEffect} from 'react'
import BlogDipslay from '../../containers/Blogs/Display/BlogDisplay'
import Ps from '../../containers/ps/Ps'
import './Blog.css'

function Blog() {
    const mediumURL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mohammadrad'
    const [blogs, setBlogs] = useState(
        {
            items: [],
            isLoading: true,
            error: null
        });

    useEffect(()=> {
        fetch(mediumURL)
        .then(res => res.json())
        .then(data => {
            const blog = data.items;
            const posts = blog.filter((post: any) => post.categories.length > 0)

            setBlogs({items: posts, isLoading: false, error: null}); 
        })
    }, [])
    
    return (
        <div className="blogs">
            <div className="hero">
                <h1>Work in Progress</h1>
                <p>A behind the scenes look of my work in progress, 
                    current and future projects,</p>
                <p> blogs, &#38; random life updates.</p>
            </div>
            <BlogDipslay blogData={blogs} />
            <Ps />
        </div>
    )
}

export default Blog