// code should return true if there is any overlap, and false otherwise

const audienceOverlap = (blog1, blog2) => {
  const setBlog1 = new Set(blog1);
  for (const blog of blog2) {
    if (setBlog1.has(blog)) {
      return true;
    }
  }
};

let blog1 = [1, 2, 3, 4, 5];
let blog2 = [6, 7, 8, 9, 5];

if (audienceOverlap(blog1, blog2))
  console.log("Yes, there is an audience overlap between both blogs.");
else console.log("No, there is no audience overlap between both blogs.");
