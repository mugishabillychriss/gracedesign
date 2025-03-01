// Example array of photos
const photos = [
    {
        src: 'https://via.placeholder.com/600x400?text=Photo+1',
        alt: 'Photo 1',
    },
    {
        src: 'https://via.placeholder.com/600x400?text=Photo+2',
        alt: 'Photo 2',
    },
    {
        src: 'https://via.placeholder.com/600x400?text=Photo+3',
        alt: 'Photo 3',
    },
];

// Example array of blog posts
const blogPosts = [
    {
        title: 'A Day in the Life of a Photographer',
        content: 'Photography is a way to capture the world and moments that inspire us. I spend a lot of time exploring new places...',
    },
    {
        title: 'The Magic of Sunset Photography',
        content: 'Sunsets are magical moments. The colors in the sky are breathtaking, and capturing them in a photograph...',
    },
    {
        title: 'How I Edit My Photos',
        content: 'Editing is just as important as capturing the perfect shot. I use a few techniques to bring out the best in my photos...',
    },
];

// Function to display photos in the gallery
function displayGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    photos.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = photo.src;
        imgElement.alt = photo.alt;
        galleryGrid.appendChild(imgElement);
    });
}

// Function to display blog posts
function displayBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    blogPosts.forEach(post => {
        const blogPostElement = document.createElement('div');
        blogPostElement.classList.add('blog-post');

        blogPostElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;

        blogContainer.appendChild(blogPostElement);
    });
}

// Initialize the gallery and blog posts when the page loads
window.onload = () => {
    displayGallery();
    displayBlogPosts();
};
