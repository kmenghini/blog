import React from 'react'
import BlogListItem from "./BlogListItem";
export default function BlogLists(props){
    const blogs = props.blogs_list;
    return (
        <div>
        <h1>Blogs List</h1>
		{
		blogs.length > 0 ? blogs.map((blog) => {
			return <BlogListItem key={blog.id} blog_data = {blog}/>
        })
        : "No Blogs Available"
    }
        </div>
    )
}