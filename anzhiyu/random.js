var posts=["2025/03/06/Cpp 重修之旅（一）/","2025/02/12/Markdown 语法学习/","2025/02/13/hello-world/","2025/02/15/Obsidian 软件学习/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };