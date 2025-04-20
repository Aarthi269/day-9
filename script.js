const posts = [
    {
      id: 1,
      title: "How to Master JavaScript",
      body: "This post will help you learn JavaScript effectively with real projects."
    },
    {
      id: 2,
      title: "Web Design Tips",
      body: "Here are some modern UI/UX practices to follow when designing websites."
    },
    {
      id: 3,
      title: "Beginner's Guide to APIs",
      body: "APIs connect different parts of the web. Learn how to fetch and use them here."
    }
  ];
  
  const commentsData = {
    1: [
      { name: "Alex", body: "Great tips, really helped me!" },
      { name: "Nina", body: "Can you add more advanced examples?" }
    ],
    2: [
      { name: "Chris", body: "Loved the layout suggestions!" }
    ],
    3: [
      { name: "Jordan", body: "This is a good intro for newbies." }
    ]
  };
  
  function displayPosts(posts) {
    const container = document.getElementById('posts');
    container.innerHTML = '';
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.className = 'post';
      postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button onclick="showComments(${post.id}, this)">Show Comments</button>
        <div class="comments" id="comments-${post.id}"></div>
      `;
      container.appendChild(postDiv);
    });
  }
  
  function showComments(postId, btn) {
    const commentDiv = document.getElementById('comments-' + postId);
    const comments = commentsData[postId] || [];
  
    // Toggle visibility
    if (commentDiv.innerHTML !== '') {
      commentDiv.innerHTML = '';
      btn.textContent = 'Show Comments';
      return;
    }
  
    commentDiv.innerHTML = comments.map(c => `
      <div class="comment">
        <strong>${c.name}</strong>
        <p>${c.body}</p>
      </div>
    `).join('');
    btn.textContent = 'Hide Comments';
  }
  
  displayPosts(posts);
  