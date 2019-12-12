const arrowBlog1 = document.getElementById("arrow1B");
const allBlogs = document.getElementById("allBlogs");
const blog1 = document.getElementById("blog1");
const funcOfMeat1 = () => {
    allBlogs.classList.remove("dBlock");
    blog1.classList.remove("dNone");
    allBlogs.classList.add("dNone");

}