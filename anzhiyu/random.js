var posts=["2025/02/07/Cursor/","2025/02/02/test/","2025/02/02/hello-world/","2025/02/02/数据类型/","2025/02/04/整数反转/","2025/02/08/物理光学/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };