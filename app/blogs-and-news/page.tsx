import BlogsSection from '@/components/blogs-and-news/blogs';
import HeroSection from '@/components/blogs-and-news/hero';
import NewsSection from '@/components/blogs-and-news/news';
import React from 'react'

const BlogAndNewsPage = () => {
    return (
        <div className='mb-56'>
            <HeroSection />
            <BlogsSection />
            <NewsSection />
        </div>
    );
};

export default BlogAndNewsPage;