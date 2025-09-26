import Link from 'next/link';
import React from 'react'

interface PostProps {
    params: {id: string}
}

const SinglePost = async ({params}: PostProps) => {
    const {id} = await params;
    console.log(id)

    // single fetch post
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      {/* Back Button */}
      <Link href="/">
        <button className="mb-6 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition duration-200">
          ← Back to Posts
        </button>
      </Link>

      {/* Post ID Badge */}
      <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
        Post #{post.id}
      </span>

      {/* Post Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {post.title}
      </h1>

      {/* Post Body */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        {post.body}
      </p>

      {/* Fancy Divider */}
      <hr className="border-t border-gray-200 my-6" />

      {/* Extra Placeholder for Future Content */}
      <div className="bg-indigo-50 rounded-lg p-4 text-indigo-700">
        💡 This is a placeholder for related posts or comments section.
      </div>
    </div>
  </main>
  )
}

export default SinglePost