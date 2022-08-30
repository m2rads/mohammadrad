import './BlogOverview.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function BlogOverview(post: any) {
    const text = post.blogData.description
    var description = text.replace(/<[^>]+>/g, '');
    const pubDate = new Date(post.blogData.pubDate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})

    return (
        <div className='blog-wrapper'>
            <div className='blog-post'>
                <div className="img-wrap">
                    <img src={post.blogData.thumbnail} />  
                </div>
                <div className="content-wrap">
                    <div className="title layout">
                        <h1>{post.blogData.title}</h1>
                    </div>
                    <div className="date layout">
                        <p>{pubDate}</p>
                    </div>
                    <div className="desc layout">
                        <p>{description.substring(0, 1000)}</p><span>...</span>
                    </div>
                    <div className="button layout">
                        <Button onClick={()=> window.open(`${post.blogData.guid}`, '_blank')} variant="contained">Read More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}