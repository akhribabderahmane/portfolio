import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/PageHeader';
import { HiLightningBolt, HiCode, HiChip, HiTag, HiClock, HiCalendar, HiPlus, HiX, HiPhotograph } from 'react-icons/hi';
import { FaJsSquare, FaReact, FaPython, FaBrain, FaRobot } from 'react-icons/fa';

// Default image for blog posts when image fails to load
const DEFAULT_BLOG_IMAGE = '/images/default-blog.jpg';

const Blog = () => {
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPostFormData, setNewPostFormData] = useState({
    title: '',
    content: '',
    category: 'javascript',
    tags: []
  });
  const [tagInput, setTagInput] = useState('');

  // Sample blog posts
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'Understanding JavaScript Promises',
      excerpt: 'Dive deep into JavaScript Promises and learn how asynchronous programming works in modern web applications.',
      content: `
        <p>JavaScript Promises are objects representing the eventual completion or failure of an asynchronous operation. They help us write cleaner code by avoiding callback hell.</p>
        
        <h3>Basic Promise Syntax</h3>
        <pre><code>
const myPromise = new Promise((resolve, reject) => {
  // Async operation here
  if (/* operation successful */) {
    resolve(result);
  } else {
    reject(error);
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));
        </code></pre>
        
        <h3>Async/Await</h3>
        <p>Modern JavaScript provides syntactic sugar with async/await:</p>
        
        <pre><code>
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
        </code></pre>
        
        <p>Using Promises effectively can dramatically improve your application's performance and user experience!</p>
      `,
      author: 'Abderahmane Akhrib',
      date: '2023-10-15',
      readTime: '7 min',
      category: 'javascript',
      tags: ['JavaScript', 'Promises', 'Async', 'Web Development'],
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'Introduction to Generative AI Models',
      excerpt: 'Explore the fascinating world of generative AI models and how they create new content from images to text.',
      content: `
        <p>Generative AI represents a breakthrough in artificial intelligence that can create new content, from images to text, music, and more.</p>
        
        <h3>Types of Generative AI</h3>
        <ul>
          <li><strong>GANs (Generative Adversarial Networks)</strong>: Uses two neural networks competing against each other</li>
          <li><strong>Transformers</strong>: Revolutionized natural language processing with attention mechanisms</li>
          <li><strong>Diffusion Models</strong>: Generate high-quality images by gradually denoising random patterns</li>
        </ul>
        
        <h3>Real-world Applications</h3>
        <p>Generative AI is now used in:</p>
        <ul>
          <li>Content creation and creative assistance</li>
          <li>Data augmentation for training other AI models</li>
          <li>Drug discovery and scientific research</li>
          <li>Virtual reality and gaming</li>
        </ul>
        
        <p>The potential of generative AI is just beginning to be realized, with new applications emerging constantly!</p>
      `,
      author: 'Abderahmane Akhrib',
      date: '2023-11-08',
      readTime: '9 min',
      category: 'ai',
      tags: ['AI', 'Machine Learning', 'Generative Models', 'Deep Learning'],
      image: 'https://images.unsplash.com/photo-1677442135136-760c813230d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: 'Building React Applications with TypeScript',
      excerpt: 'Learn how to leverage TypeScript to build more robust and maintainable React applications.',
      content: `
        <p>TypeScript adds static typing to JavaScript, making your React applications more robust and maintainable.</p>
        
        <h3>Setting up a React TypeScript Project</h3>
        <pre><code>
npx create-react-app my-app --template typescript
        </code></pre>
        
        <h3>Creating Typed Components</h3>
        <pre><code>
interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  color = 'primary',
  disabled = false 
}) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${color}\`}
    >
      {text}
    </button>
  );
};
        </code></pre>
        
        <p>Using TypeScript with React not only helps catch errors during development but also serves as living documentation for your components!</p>
      `,
      author: 'Abderahmane Akhrib',
      date: '2023-12-03',
      readTime: '6 min',
      category: 'javascript',
      tags: ['React', 'TypeScript', 'Web Development', 'Frontend'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ]);

  const toggleNewPostForm = () => {
    setShowNewPostForm(!showNewPostForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPostFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const addTag = (e) => {
    e.preventDefault();
    if (tagInput && !newPostFormData.tags.includes(tagInput)) {
      setNewPostFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput]
      }));
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setNewPostFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: blogPosts.length + 1,
      ...newPostFormData,
      author: 'Abderahmane Akhrib',
      date: new Date().toISOString().split('T')[0],
      readTime: `${Math.max(1, Math.ceil(newPostFormData.content.length / 1000))} min`,
      excerpt: newPostFormData.content.slice(0, 150) + '...',
      image: newPostFormData.category === 'javascript' 
        ? 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        : 'https://images.unsplash.com/photo-1677442135136-760c813230d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
    };
    
    setBlogPosts([newPost, ...blogPosts]);
    setNewPostFormData({
      title: '',
      content: '',
      category: 'javascript',
      tags: []
    });
    setShowNewPostForm(false);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'javascript':
        return <FaJsSquare className="text-yellow-400" />;
      case 'ai':
        return <FaBrain className="text-purple-500" />;
      default:
        return <HiCode className="text-blue-500" />;
    }
  };

  // Handle image error function
  const handleImageError = (e) => {
    e.target.src = DEFAULT_BLOG_IMAGE;
    e.target.onerror = null; // Prevent infinite loop if default image also fails
  };

  return (
    <motion.div  
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 0.59 }}
      className="text-text-light dark:text-text-dark py-6 sm:py-10 pt-16 sm:pt-24 flex flex-col px-5 sm:px-8 max-w-7xl mx-auto"
    >
      <PageHeader title="Blog" description="Thoughts, tutorials, and insights on programming and AI." />

      <div className="flex justify-between items-center my-6">
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition duration-300">
            All
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-full hover:from-yellow-500 hover:to-yellow-600 transition duration-300 flex items-center gap-2">
            <FaJsSquare /> JavaScript
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full hover:from-purple-600 hover:to-purple-700 transition duration-300 flex items-center gap-2">
            <FaBrain /> AI
          </button>
        </div>
        <button 
          onClick={toggleNewPostForm}
          className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition duration-300 flex items-center gap-2"
        >
          <HiPlus /> New Post
        </button>
      </div>

      {/* New Post Form */}
      {showNewPostForm && (
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-6 mb-8 transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Create New Blog Post</h2>
            <button 
              onClick={toggleNewPostForm}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <HiX size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                name="title"
                value={newPostFormData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={newPostFormData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="javascript">JavaScript</option>
                <option value="ai">AI</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Tags
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {newPostFormData.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm flex items-center">
                    {tag}
                    <button 
                      type="button" 
                      onClick={() => removeTag(tag)}
                      className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                    >
                      <HiX size={16} />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex">
                <input
                  type="text"
                  value={tagInput}
                  onChange={handleTagInputChange}
                  placeholder="Add a tag"
                  className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="button"
                  onClick={addTag}
                  className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
                >
                  Add
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="content">
                Content (HTML supported)
              </label>
              <textarea
                id="content"
                name="content"
                value={newPostFormData.content}
                onChange={handleInputChange}
                rows="10"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                required
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={toggleNewPostForm}
                className="px-6 py-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition duration-300"
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Blog post grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
        {blogPosts.map(post => (
          <div 
            key={post.id} 
            className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="h-48 overflow-hidden relative bg-gray-200 dark:bg-gray-700">
              {/* Image placeholder while loading */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                <HiPhotograph className="text-gray-400 dark:text-gray-500" size={40} />
              </div>
              <img 
                src={post.image} 
                alt={post.title} 
                onError={handleImageError}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 z-10 relative"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
                  post.category === 'javascript' 
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' 
                    : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                }`}>
                  {getCategoryIcon(post.category)} {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                </span>
                <span className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <HiClock className="mr-1" /> {post.readTime}
                </span>
              </div>
              
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md text-xs flex items-center">
                    <HiTag className="mr-1" /> {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center border-t pt-4 border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    A
                  </div>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <HiCalendar className="mr-1" /> {post.date}
                </div>
              </div>

              <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 flex items-center justify-center">
                <HiLightningBolt className="mr-2" /> Read Full Post
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add a placeholder when there are no posts */}
      {blogPosts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <HiPhotograph className="text-gray-400 dark:text-gray-500 mb-4" size={60} />
          <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300">No blog posts yet</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Create your first post to get started!</p>
        </div>
      )}
    </motion.div>
  );
};

export default Blog;
