import "@/app/ui/global.css";
import Link from "next/link";

export default async function Home() {
  // Fetch posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Page Title */}
      <h2 className="text-center text-4xl font-extrabold text-indigo-600 mb-10">
        🚀 Next.js Dashboard
      </h2>

      {/* Posts Section */}
      <section className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-indigo-500 pb-2">
          All Posts
        </h3>

        {/* Posts Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              {/* Post ID Badge */}
              <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-medium px-3 py-1 rounded-full mb-3">
                #{post.id}
              </span>

              {/* Post Title */}
              <h4 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
                {post.title}
              </h4>

              {/* Post Body */}
              <p className="text-gray-600 text-sm line-clamp-3">{post.body}</p>

              {/* Read More Button */}
              <Link href={`/posts/${post.id}`}>
                <button className="mt-4 inline-block w-full bg-indigo-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
